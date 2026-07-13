"use client";

import { useEffect } from "react";

import { buildAttributionFromLocation, persistAttribution } from "../lib/attribution";

export function AttributionCapture() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const attribution = buildAttributionFromLocation(window.location);
    persistAttribution(attribution);
  }, []);

  return null;
}
