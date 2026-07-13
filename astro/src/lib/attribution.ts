export const ATTRIBUTION_STORAGE_KEY = "ffc_attribution";

export type AttributionData = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  gclid?: string;
  gbraid?: string;
  wbraid?: string;
  fbclid?: string;
  landing_page?: string;
  landing_path?: string;
  first_seen_at?: string;
};

const ATTRIBUTION_KEYS: Array<keyof AttributionData> = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "gbraid",
  "wbraid",
  "fbclid",
];

export function readStoredAttribution(): AttributionData {
  if (typeof window === "undefined") return {};

  try {
    const raw = window.localStorage.getItem(ATTRIBUTION_STORAGE_KEY);
    if (!raw) return {};

    const parsed = JSON.parse(raw);
    return typeof parsed === "object" && parsed ? parsed : {};
  } catch {
    return {};
  }
}

export function buildAttributionFromLocation(location: Location): AttributionData {
  const params = new URLSearchParams(location.search);
  const existing = readStoredAttribution();
  const next: AttributionData = { ...existing };
  let hasNewAttribution = false;

  for (const key of ATTRIBUTION_KEYS) {
    const value = params.get(key);
    if (!value) continue;

    if (!next[key]) {
      next[key] = value;
    }

    hasNewAttribution = true;
  }

  if (hasNewAttribution && !next.first_seen_at) {
    next.first_seen_at = new Date().toISOString();
  }

  if ((hasNewAttribution || !next.landing_page) && location.href) {
    next.landing_page = location.href;
    next.landing_path = `${location.pathname}${location.search}`;
  }

  return next;
}

export function persistAttribution(data: AttributionData) {
  if (typeof window === "undefined") return;

  try {
    window.localStorage.setItem(ATTRIBUTION_STORAGE_KEY, JSON.stringify(data));
  } catch {
    // Ignore storage failures so lead tracking never blocks the UX.
  }
}
