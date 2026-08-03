"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Lenis smooth scrolling.
 *
 * Progressive enhancement: the page scrolls perfectly well without it, and
 * anyone who has asked for reduced motion never gets it. Lenis adds a
 * `lenis-smooth` class that turns off native `scroll-behavior`, so the CSS
 * fallback and this can coexist without fighting.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.05,
      // Gentle exponential ease-out — settles quickly, never feels floaty.
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      // Native momentum on touch is better than anything we'd simulate.
      syncTouch: false,
    });

    let frame = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);

    /* Lenis doesn't intercept in-page anchors, so hash links would jump
       instantly while everything else eased. Route them through Lenis. */
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;

      const link = (e.target as Element | null)?.closest?.("a");
      if (!link) return;

      const href = link.getAttribute("href");
      if (!href) return;

      // Matches "#id" and "/#id" — the nav uses the latter so the links
      // still work from the blog routes.
      const hash = href.startsWith("#")
        ? href
        : href.startsWith("/#") && window.location.pathname === "/"
          ? href.slice(1)
          : null;

      if (!hash || hash === "#") return;

      const target = document.querySelector(hash);
      if (!target) return;

      e.preventDefault();

      // Clear the fixed header, which scroll-padding-top handles for native
      // scrolling but Lenis knows nothing about.
      const header = document.querySelector("header");
      const offset = -((header?.offsetHeight ?? 72) + 16);

      lenis.scrollTo(target as HTMLElement, { offset });
      history.pushState(null, "", hash);
    };

    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, []);

  return null;
}
