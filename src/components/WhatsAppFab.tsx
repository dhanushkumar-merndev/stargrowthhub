"use client";

import { useEffect, useState } from "react";
import { site, whatsappLink } from "@/lib/site";
import { IconWhatsApp } from "./Icons";

/** Sticky WhatsApp button — appears once the visitor has scrolled past the hero. */
export function WhatsAppFab() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 620);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Deliberately WhatsApp green rather than brand red: the colour is the
  // affordance here — people recognise it and tap it.
  return (
    <a
      href={whatsappLink(`Hi ${site.name}! I'd like to know more about your services.`)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Star Growth Hub on WhatsApp"
      className={`group fixed bottom-5 right-5 z-40 flex items-center gap-2.5 rounded-full bg-[#25D366] py-3.5 pl-4 pr-4 text-white shadow-[0_10px_36px_-8px_rgba(37,211,102,0.75)] transition-all duration-500 sm:pr-5 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <span className="relative flex h-6 w-6 items-center justify-center">
        <IconWhatsApp className="h-6 w-6" />
      </span>
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-500 group-hover:max-w-[9rem] sm:max-w-[9rem]">
        Chat with us
      </span>
    </a>
  );
}
