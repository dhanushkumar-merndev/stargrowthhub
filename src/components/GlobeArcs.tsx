"use client";

import { useEffect, useRef } from "react";
import { site } from "@/lib/site";

/**
 * Orthographic globe with great-circle arcs radiating from the office.
 *
 * Real projection and slerp maths — no map library, no tiles, no API key.
 * The first frame is rendered on the server, so the globe is in the shipped
 * HTML and crawlers see it. On mount, a rAF loop takes over and turns the
 * sphere by writing SVG attributes directly, never through React, so a
 * spinning globe costs zero re-renders.
 *
 * All geometry that doesn't change with rotation (dot lattice, graticule,
 * great-circle samples) is precomputed once at module scope. Each frame is
 * then just projection: roughly 2,000 points, two trig calls each.
 *
 * The sphere is a dot lattice rather than a coastline map — deliberately
 * abstract, so it never implies geography it can't back up. Only the hub is
 * labelled; the outer markers are decorative.
 */

const DEG = Math.PI / 180;
const R = 150;
const CX = 200;
const CY = 200;

/** Centre of the visible hemisphere. India sits front and centre. */
const VIEW_LON = 64;
const VIEW_LAT = 17;

/**
 * The globe sweeps rather than spinning all the way round: a full rotation
 * would carry Bengaluru — and therefore every arc — behind the sphere for
 * half the cycle, leaving a bare ball. This keeps the network on screen
 * while still reading as rotation.
 */
const SWEEP_LON = 34; // degrees either side
const SWEEP_LAT = 5;
const PERIOD_MS = 30000;

type LonLat = [number, number];

/** Precomputed trig for a fixed point — only longitude changes per frame. */
type P = { lon: number; sin: number; cos: number };

const pt = ([lon, lat]: LonLat): P => ({
  lon,
  sin: Math.sin(lat * DEG),
  cos: Math.cos(lat * DEG),
});

const HUB: LonLat = [site.geo.longitude, site.geo.latitude];

/** Reach points. Unlabelled on purpose — see the note above. */
const REACH: LonLat[] = [
  [-0.1276, 51.5074], // London
  [8.6821, 50.1109], // Frankfurt
  [55.2708, 25.2048], // Dubai
  [51.531, 25.2854], // Doha
  [103.8198, 1.3521], // Singapore
  [114.1694, 22.3193], // Hong Kong
  [139.6917, 35.6895], // Tokyo
  [18.4241, -33.9249], // Cape Town
  [36.8219, -1.2921], // Nairobi
  [77.1025, 28.7041], // Delhi
  [72.8777, 19.076], // Mumbai
  [79.8612, 6.9271], // Colombo
  [100.5018, 13.7563], // Bangkok
  [31.2357, 30.0444], // Cairo
];

/* ---------------------------------------------------------------- math -- */

const round = (n: number) => Math.round(n * 10) / 10;

/** Orthographic projection. `d` > 0 means the point faces the viewer. */
function project(p: P, lon0: number, sinLat0: number, cosLat0: number) {
  const l = (p.lon - lon0) * DEG;
  const cosL = Math.cos(l);

  return {
    x: CX + R * p.cos * Math.sin(l),
    y: CY - R * (cosLat0 * p.sin - sinLat0 * p.cos * cosL),
    d: sinLat0 * p.sin + cosLat0 * p.cos * cosL,
  };
}

function toVec3([lon, lat]: LonLat): [number, number, number] {
  const l = lon * DEG;
  const b = lat * DEG;
  return [Math.cos(b) * Math.cos(l), Math.cos(b) * Math.sin(l), Math.sin(b)];
}

function toLonLat([x, y, z]: [number, number, number]): LonLat {
  return [Math.atan2(y, x) / DEG, Math.asin(Math.max(-1, Math.min(1, z))) / DEG];
}

/** Point at fraction `t` along the great circle from `a` to `b`. */
function slerp(a: LonLat, b: LonLat, t: number): LonLat {
  const va = toVec3(a);
  const vb = toVec3(b);
  const dot = Math.max(-1, Math.min(1, va[0] * vb[0] + va[1] * vb[1] + va[2] * vb[2]));
  const omega = Math.acos(dot);
  if (omega < 1e-6) return a;

  const s = Math.sin(omega);
  const wa = Math.sin((1 - t) * omega) / s;
  const wb = Math.sin(t * omega) / s;

  return toLonLat([
    va[0] * wa + vb[0] * wb,
    va[1] * wa + vb[1] * wb,
    va[2] * wa + vb[2] * wb,
  ]);
}

/* ------------------------------------------------- precomputed geometry -- */

const ARC_SAMPLES = 30;
const ARC_LIFT = 0.26;

/** Dot lattice: a Fibonacci sphere, evaluated once. */
const DOTS: P[] = (() => {
  const count = 900;
  const golden = Math.PI * (3 - Math.sqrt(5));
  const out: P[] = [];

  for (let i = 0; i < count; i++) {
    const z = 1 - (2 * i + 1) / count;
    const r = Math.sqrt(Math.max(0, 1 - z * z));
    const theta = i * golden;
    out.push(pt(toLonLat([r * Math.cos(theta), r * Math.sin(theta), z])));
  }

  return out;
})();

/** Meridians and parallels as point runs. */
const GRATICULE: P[][] = (() => {
  const lines: P[][] = [];

  for (let lon = -180; lon < 180; lon += 30) {
    const run: P[] = [];
    for (let lat = -90; lat <= 90; lat += 5) run.push(pt([lon, lat]));
    lines.push(run);
  }

  for (let lat = -60; lat <= 60; lat += 30) {
    const run: P[] = [];
    for (let lon = -180; lon <= 180; lon += 5) run.push(pt([lon, lat]));
    lines.push(run);
  }

  return lines;
})();

/** Great-circle samples are fixed on the sphere; only the view changes. */
const ARCS: P[][] = REACH.map((dest) => {
  const run: P[] = [];
  for (let i = 0; i <= ARC_SAMPLES; i++) run.push(pt(slerp(HUB, dest, i / ARC_SAMPLES)));
  return run;
});

const HUB_P = pt(HUB);
const REACH_P = REACH.map(pt);

const DOT_OPACITIES = [0.09, 0.14, 0.19, 0.24];

/* -------------------------------------------------------------- frames -- */

type Frame = {
  dots: string[];
  graticule: string;
  arcs: string[];
  reach: { x: number; y: number; on: boolean }[];
  hub: { x: number; y: number; on: boolean };
};

/**
 * Everything needed to paint one frame. Used for the server render and
 * called again on every animation frame.
 */
function computeFrame(lon0: number, lat0: number): Frame {
  const sinLat0 = Math.sin(lat0 * DEG);
  const cosLat0 = Math.cos(lat0 * DEG);

  // --- dot lattice, bucketed by depth so the sphere reads as curved
  const buckets: string[][] = DOT_OPACITIES.map(() => []);
  for (const p of DOTS) {
    const q = project(p, lon0, sinLat0, cosLat0);
    if (q.d <= 0.02) continue;
    const shade = Math.pow(q.d, 0.6);
    const b = Math.min(DOT_OPACITIES.length - 1, Math.floor(shade * DOT_OPACITIES.length));
    // A zero-length subpath with a round linecap paints as a dot — far less
    // markup than one <circle> per point.
    buckets[b].push(`M${round(q.x)} ${round(q.y)}h.01`);
  }

  // --- graticule, clipped to the visible hemisphere
  const grat: string[] = [];
  for (const line of GRATICULE) {
    let run: string[] = [];
    for (const p of line) {
      const q = project(p, lon0, sinLat0, cosLat0);
      if (q.d > 0) {
        run.push(`${round(q.x)} ${round(q.y)}`);
      } else {
        if (run.length > 1) grat.push(`M${run.join("L")}`);
        run = [];
      }
    }
    if (run.length > 1) grat.push(`M${run.join("L")}`);
  }

  // --- arcs, lifted off the surface at the midpoint
  const arcs = ARCS.map((run) => {
    const pts: string[] = [];
    for (let i = 0; i < run.length; i++) {
      const q = project(run[i], lon0, sinLat0, cosLat0);
      if (q.d < -0.04) return ""; // clips through the back — drop it
      const k = 1 + ARC_LIFT * Math.sin((Math.PI * i) / (run.length - 1));
      pts.push(`${round(CX + (q.x - CX) * k)} ${round(CY + (q.y - CY) * k)}`);
    }
    return `M${pts.join("L")}`;
  });

  const reach = REACH_P.map((p) => {
    const q = project(p, lon0, sinLat0, cosLat0);
    return { x: round(q.x), y: round(q.y), on: q.d > 0.02 };
  });

  const h = project(HUB_P, lon0, sinLat0, cosLat0);

  return {
    dots: buckets.map((b) => b.join("")),
    graticule: grat.join(""),
    arcs,
    reach,
    hub: { x: round(h.x), y: round(h.y), on: h.d > 0.02 },
  };
}

const INITIAL = computeFrame(VIEW_LON, VIEW_LAT);

/* -------------------------------------------------------------- render -- */

export function GlobeArcs({ className = "" }: { className?: string }) {
  const dotRefs = useRef<(SVGPathElement | null)[]>([]);
  const gratRef = useRef<SVGPathElement>(null);
  const arcRefs = useRef<(SVGPathElement | null)[]>([]);
  const reachRefs = useRef<(SVGCircleElement | null)[]>([]);
  const hubRef = useRef<SVGGElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const svg = gratRef.current?.ownerSVGElement;

    let frame = 0;
    let running = false;
    const start = performance.now();

    const tick = (now: number) => {
      const phase = ((now - start) % PERIOD_MS) / PERIOD_MS;
      const lon = VIEW_LON + SWEEP_LON * Math.sin(phase * Math.PI * 2);
      // Quarter-speed latitude wobble turns the sweep into a gentle tumble.
      const lat = VIEW_LAT + SWEEP_LAT * Math.sin(phase * Math.PI * 4);

      const f = computeFrame(lon, lat);

      for (let i = 0; i < f.dots.length; i++) {
        dotRefs.current[i]?.setAttribute("d", f.dots[i]);
      }
      gratRef.current?.setAttribute("d", f.graticule);

      for (let i = 0; i < f.arcs.length; i++) {
        arcRefs.current[i]?.setAttribute("d", f.arcs[i]);
      }

      for (let i = 0; i < f.reach.length; i++) {
        const el = reachRefs.current[i];
        if (!el) continue;
        el.setAttribute("cx", String(f.reach[i].x));
        el.setAttribute("cy", String(f.reach[i].y));
        el.setAttribute("opacity", f.reach[i].on ? "1" : "0");
      }

      hubRef.current?.setAttribute(
        "transform",
        `translate(${f.hub.x} ${f.hub.y})`,
      );

      frame = requestAnimationFrame(tick);
    };

    const play = () => {
      if (running) return;
      running = true;
      frame = requestAnimationFrame(tick);
    };

    const pause = () => {
      running = false;
      cancelAnimationFrame(frame);
    };

    /* Recomputing ~2,000 projections a frame is cheap, but there's no reason
       to spend it — or the battery — once the hero is scrolled past. */
    let io: IntersectionObserver | undefined;
    if (svg && "IntersectionObserver" in window) {
      io = new IntersectionObserver(
        ([entry]) => (entry.isIntersecting ? play() : pause()),
        { rootMargin: "120px" },
      );
      io.observe(svg);
    } else {
      play();
    }

    return () => {
      io?.disconnect();
      pause();
    };
  }, []);

  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      role="img"
      aria-label={`Stylised rotating globe centred on ${site.address.city}, with connection lines radiating outward`}
    >
      <defs>
        <radialGradient id="globe-face" cx="34%" cy="26%" r="80%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="58%" stopColor="#f5f3f1" />
          <stop offset="100%" stopColor="#e4e1de" />
        </radialGradient>
        <radialGradient id="globe-rim" cx="50%" cy="50%" r="50%">
          <stop offset="86%" stopColor="#14141c" stopOpacity="0" />
          <stop offset="100%" stopColor="#14141c" stopOpacity="0.18" />
        </radialGradient>

        {/* Each arc is declared once and drawn twice — a faint base line and
            the travelling highlight — so the geometry isn't duplicated. */}
        {INITIAL.arcs.map((d, i) => (
          <path
            key={i}
            id={`sgh-arc-${i}`}
            d={d}
            pathLength={100}
            ref={(el) => {
              arcRefs.current[i] = el;
            }}
          />
        ))}
      </defs>

      {/* soft ground shadow so the sphere sits on the page rather than
          floating on top of it */}
      <ellipse cx={CX} cy={CY + R + 16} rx={R * 0.66} ry="11" fill="#14141c" opacity="0.07" />

      <circle cx={CX} cy={CY} r={R} fill="url(#globe-face)" />

      {/* dot lattice */}
      <g stroke="#14141c" strokeWidth="2.6" strokeLinecap="round" fill="none">
        {INITIAL.dots.map((d, i) => (
          <path
            key={i}
            d={d}
            strokeOpacity={DOT_OPACITIES[i]}
            ref={(el) => {
              dotRefs.current[i] = el;
            }}
          />
        ))}
      </g>

      {/* graticule */}
      <path
        ref={gratRef}
        d={INITIAL.graticule}
        fill="none"
        stroke="#14141c"
        strokeOpacity="0.08"
        strokeWidth="0.7"
      />

      {/* limb shading + outline */}
      <circle cx={CX} cy={CY} r={R} fill="url(#globe-rim)" />
      <circle cx={CX} cy={CY} r={R} fill="none" stroke="#14141c" strokeOpacity="0.16" strokeWidth="1" />

      {/* arcs */}
      <g fill="none" strokeLinecap="round">
        {INITIAL.arcs.map((_, i) => (
          <g key={i} className="arc-in" style={{ animationDelay: `${240 + i * 100}ms` }}>
            <use href={`#sgh-arc-${i}`} stroke="#14141c" strokeOpacity="0.32" strokeWidth="1" />
            {/* Travelling highlight. pathLength on the defs path normalises
                the dash maths to 100 units, so one rule fits every arc. */}
            <use
              href={`#sgh-arc-${i}`}
              stroke="#14141c"
              strokeWidth="1.9"
              strokeDasharray="4 96"
              className="arc-comet"
              style={{ animationDelay: `${i * 420}ms` }}
            />
          </g>
        ))}
      </g>

      {/* destination markers */}
      <g className="arc-in" style={{ animationDelay: "700ms" }}>
        {INITIAL.reach.map((p, i) => (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r="2.8"
            opacity={p.on ? 1 : 0}
            fill="#ffffff"
            stroke="#14141c"
            strokeWidth="1.7"
            ref={(el) => {
              reachRefs.current[i] = el;
            }}
          />
        ))}
      </g>

      {/* hub — a single translated group so one attribute moves the marker,
          its pulse and the label together */}
      <g ref={hubRef} transform={`translate(${INITIAL.hub.x} ${INITIAL.hub.y})`}>
        <circle r="6" fill="#14141c" opacity="0.18" className="hub-pulse" />
        <circle r="4.8" fill="#14141c" stroke="#ffffff" strokeWidth="2" />
        <g transform="translate(0 -15)">
          <rect x="-35" y="-15" width="70" height="19" rx="4" fill="#14141c" />
          <text
            x="0"
            y="-1.5"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="10.5"
            fontWeight="600"
            fontFamily="inherit"
          >
            {site.address.city}
          </text>
        </g>
      </g>
    </svg>
  );
}
