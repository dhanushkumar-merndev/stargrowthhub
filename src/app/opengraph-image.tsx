import fs from "node:fs";
import path from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

/**
 * The real brand mark, inlined as a data URI. Read once at build time —
 * the renderer can't fetch from the origin, since the site isn't deployed
 * yet at the moment this image is generated.
 */
const MARK = `data:image/png;base64,${fs
  .readFileSync(path.join(process.cwd(), "public", "apple-touch-icon.png"))
  .toString("base64")}`;

/**
 * Social share card, generated at build time into a static PNG.
 * This is what appears when the link is pasted into WhatsApp, LinkedIn or X.
 */
export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Required by `output: "export"` — bakes the card into a file at build time.
export const dynamic = "force-static";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FFFFFF",
          padding: 72,
          position: "relative",
        }}
      >
        {/* soft red washes */}
        <div
          style={{
            position: "absolute",
            top: -200,
            left: -160,
            width: 640,
            height: 640,
            borderRadius: 999,
            background: "radial-gradient(circle, rgba(224,27,45,0.16) 0%, rgba(255,255,255,0) 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -240,
            right: -140,
            width: 620,
            height: 620,
            borderRadius: 999,
            background: "radial-gradient(circle, rgba(255,95,109,0.18) 0%, rgba(255,255,255,0) 70%)",
            display: "flex",
          }}
        />
        {/* red rule down the left edge */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 14,
            background: "#E01B2D",
            display: "flex",
          }}
        />

        {/* brand row */}
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          {/* eslint-disable-next-line @next/next/no-img-element -- satori
              renders to a static PNG; next/image has no meaning here. */}
          <img src={MARK} width={62} height={62} alt="" />
          <div
            style={{
              display: "flex",
              gap: 9,
              fontSize: 30,
              fontWeight: 600,
              color: "#14141C",
              letterSpacing: -0.6,
            }}
          >
            {/* Each word is its own flex item — satori spaces flex children
                itself, so the gap is set explicitly rather than with spaces. */}
            <span>Star</span>
            <span style={{ color: "#E01B2D" }}>Growth</span>
            <span>Hub</span>
          </div>
        </div>

        {/* headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 74,
              fontWeight: 600,
              color: "#14141C",
              lineHeight: 1.06,
              letterSpacing: -2.6,
              maxWidth: 940,
            }}
          >
            We turn local searches into paying customers.
          </div>
          <div style={{ display: "flex", marginTop: 26, fontSize: 30, color: "#55555F" }}>
            SEO · Google Ads · Meta Ads · Web Design · Branding
          </div>
        </div>

        {/* footer row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", fontSize: 26, color: "#8B8B96" }}>
            {site.address.locality}, {site.address.city}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              background: "#E01B2D",
              borderRadius: 999,
              padding: "12px 26px",
              fontSize: 26,
              color: "#FFFFFF",
              fontWeight: 600,
            }}
          >
            {/* Drawn rather than typed: the ★ character is outside the
                bundled font and would trigger a network font fetch. */}
            <svg width="26" height="26" viewBox="0 0 20 20" fill="#FFFFFF">
              <path d="M10 1.5l2.47 5.36 5.86.7-4.33 4.01 1.15 5.79L10 14.5l-5.15 2.86 1.15-5.79L1.67 7.56l5.86-.7L10 1.5z" />
            </svg>
            {site.rating.value} on Google
          </div>
        </div>
      </div>
    ),
    size,
  );
}
