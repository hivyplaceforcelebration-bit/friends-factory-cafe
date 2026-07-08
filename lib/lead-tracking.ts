type LeadEventName = "generate_lead" | "whatsapp_click" | "phone_call_click";

type LeadPayload = {
  lead_type: "form_submit" | "whatsapp" | "phone_call";
  form_name?: string;
  form_variant?: string;
  destination?: string;
  link_text?: string;
  package_name?: string;
  page_title?: string;
  page_location?: string;
  page_path?: string;
  site_name?: string;
};

declare global {
  interface Window {
    dataLayer: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

function getBasePayload(payload: LeadPayload) {
  return {
    ...payload,
    site_name: payload.site_name ?? "friends-factory-cafe",
    page_title: payload.page_title ?? document.title,
    page_location: payload.page_location ?? window.location.href,
    page_path: payload.page_path ?? window.location.pathname,
  };
}

function pushDataLayerEvent(event: LeadEventName, payload: LeadPayload) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event,
    ...getBasePayload(payload),
  });
}

export function trackLeadEvent(event: LeadEventName, payload: LeadPayload) {
  if (typeof window === "undefined") return;

  const eventPayload = getBasePayload(payload);

  pushDataLayerEvent(event, payload);

  if (typeof window.gtag === "function") {
    window.gtag("event", event, eventPayload);
  }
}

export function trackFormLead(payload: Omit<LeadPayload, "lead_type">) {
  trackLeadEvent("generate_lead", {
    ...payload,
    lead_type: "form_submit",
  });
}

export function trackWhatsAppLead(payload: Omit<LeadPayload, "lead_type">) {
  trackLeadEvent("whatsapp_click", {
    ...payload,
    lead_type: "whatsapp",
  });
}

export function trackPhoneLead(payload: Omit<LeadPayload, "lead_type">) {
  trackLeadEvent("phone_call_click", {
    ...payload,
    lead_type: "phone_call",
  });
}
