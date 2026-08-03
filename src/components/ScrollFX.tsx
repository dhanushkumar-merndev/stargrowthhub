"use client";

import { useEffect } from "react";

/**
 * All progressive-enhancement motion, mounted once in the root layout.
 *
 * Deliberate SEO choice: `[data-reveal]` elements are fully visible in the
 * shipped HTML. We only add the `js-reveal` class — which is what hides them
 * — after JS confirms it can animate them back in. Googlebot, screen readers
 * and no-JS visitors therefore always see complete, painted content.
 *
 * Because that class hides real content, a stranded element means a blank
 * page. Everything below is written so that outcome isn't reachable:
 *   - deep links skip the choreography entirely
 *   - the in-viewport sweep re-runs on rAF, on load, and on scroll
 *   - a timer reveals anything still hidden
 *   - a throw reveals everything and unhides the document
 */
export function ScrollFX() {
  useEffect(() => {
    const root = document.documentElement;
    const cleanups: (() => void)[] = [];
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* ---- cursor spotlight (delegated + rAF-throttled) ---- */
    if (!reduced && window.matchMedia("(pointer: fine)").matches) {
      let frame = 0;
      const onMove = (e: PointerEvent) => {
        if (frame) return;
        frame = requestAnimationFrame(() => {
          frame = 0;
          const card = (e.target as Element | null)?.closest?.(".spotlight") as HTMLElement | null;
          if (!card) return;
          const r = card.getBoundingClientRect();
          card.style.setProperty("--mx", `${e.clientX - r.left}px`);
          card.style.setProperty("--my", `${e.clientY - r.top}px`);
        });
      };

      window.addEventListener("pointermove", onMove, { passive: true });
      cleanups.push(() => {
        window.removeEventListener("pointermove", onMove);
        if (frame) cancelAnimationFrame(frame);
      });
    }

    /* ---- scroll reveal ---- */
    const deepLink = Boolean(window.location.hash) && window.location.hash !== "#";

    // A visitor arriving at /#faq wants the FAQ, not an entrance animation.
    // Skipping here also sidesteps every race between the browser's hash
    // scroll, Lenis, and this effect.
    if (!reduced && "IntersectionObserver" in window && !deepLink) {
      let io: IntersectionObserver | undefined;

      const items = () => Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

      const show = (el: Element) => {
        el.classList.add("is-visible");
        io?.unobserve(el);
      };

      const revealAll = () => {
        items().forEach((el) => el.classList.add("is-visible"));
        io?.disconnect();
      };

      try {
        root.classList.add("js-reveal");

        io = new IntersectionObserver(
          (entries) => {
            for (const entry of entries) if (entry.isIntersecting) show(entry.target);
          },
          // threshold 0: any intersecting pixel counts. An area-based
          // threshold strands elements taller than the viewport.
          { rootMargin: "0px 0px -10% 0px", threshold: 0 },
        );

        /** Reveal what's on screen now, observe the rest. Safe to re-run. */
        const sweep = () => {
          for (const el of items()) {
            if (el.classList.contains("is-visible")) continue;
            if (el.getBoundingClientRect().top < window.innerHeight * 0.95) show(el);
            else io!.observe(el);
          }
        };

        sweep();

        // Layout, fonts and late scroll restoration all move things after the
        // first pass, so re-check once the dust settles.
        const raf = requestAnimationFrame(() => requestAnimationFrame(sweep));

        // Backstop: any scroll re-sweeps. Covers smooth-scroll libraries and
        // anything else that moves the viewport without the observer firing.
        let scrollRaf = 0;
        const onScroll = () => {
          if (scrollRaf) return;
          scrollRaf = requestAnimationFrame(() => {
            scrollRaf = 0;
            sweep();
          });
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("load", sweep);
        window.addEventListener("hashchange", revealAll);

        const timer = window.setTimeout(revealAll, 1800);

        cleanups.push(() => {
          io?.disconnect();
          cancelAnimationFrame(raf);
          if (scrollRaf) cancelAnimationFrame(scrollRaf);
          clearTimeout(timer);
          window.removeEventListener("scroll", onScroll);
          window.removeEventListener("load", sweep);
          window.removeEventListener("hashchange", revealAll);
          root.classList.remove("js-reveal");
        });
      } catch {
        // Never let a scripting error leave the page invisible.
        revealAll();
        root.classList.remove("js-reveal");
      }
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
