"use client";

import { useEffect } from "react";

import { trackPhoneLead, trackWhatsAppLead } from "@/lib/lead-tracking";

function isWhatsAppHref(href: string) {
  return href.includes("wa.me/") || href.includes("whatsapp");
}

export function LeadTracking() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest("a[href]");
      if (!(link instanceof HTMLAnchorElement)) return;

      const href = link.href || "";
      const linkText = (link.textContent || "").trim().slice(0, 120);

      if (href.startsWith("tel:")) {
        trackPhoneLead({
          destination: href,
          link_text: linkText,
        });
        return;
      }

      if (isWhatsAppHref(href)) {
        trackWhatsAppLead({
          destination: href,
          link_text: linkText,
        });
      }
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}
