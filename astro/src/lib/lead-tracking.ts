import { readStoredAttribution } from "./attribution";
import { siteConfig } from "./config";

type LeadEventName =
  | "generate_lead"
  | "submit_lead_form"
  | "whatsapp_click"
  | "phone_call_click"
  | "contact"
  | "phone_call_lead";

type LeadPayload = {
  lead_type: "form_submit" | "whatsapp" | "phone_call";
  contact_method?: "whatsapp" | "phone";
  form_name?: string;
  form_variant?: string;
  destination?: string;
  link_text?: string;
  package_name?: string;
  page_title?: string;
  page_location?: string;
  page_path?: string;
  site_name?: string;
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

declare global {
  interface Window {
    dataLayer: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

function getBasePayload(payload: LeadPayload) {
  const attribution = readStoredAttribution();

  return {
    ...attribution,
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

function sendEventToGoogleTag(event: LeadEventName, payload: LeadPayload) {
  if (typeof window.gtag !== "function") return;

  window.gtag("event", event, getBasePayload(payload));
}

function sendGoogleAdsConversion(sendTo: string) {
  if (!sendTo || typeof window.gtag !== "function") return;

  window.gtag("event", "conversion", {
    send_to: sendTo,
    value: 1.0,
    currency: "INR",
  });
}

function sendMetaStandardEvent(
  eventName: "Lead" | "Contact",
  payload: LeadPayload,
) {
  if (typeof window.fbq !== "function") return;

  window.fbq("track", eventName, getBasePayload(payload));
}

function sendMetaCustomEvent(eventName: string, payload: LeadPayload) {
  if (typeof window.fbq !== "function") return;

  window.fbq("trackCustom", eventName, getBasePayload(payload));
}

function dispatchLeadEvents(events: LeadEventName[], payload: LeadPayload) {
  if (typeof window === "undefined") return;

  for (const event of events) {
    pushDataLayerEvent(event, payload);
    sendEventToGoogleTag(event, payload);
  }
}

export function trackFormLead(payload: Omit<LeadPayload, "lead_type">) {
  const leadPayload = {
    ...payload,
    lead_type: "form_submit",
  } satisfies LeadPayload;

  dispatchLeadEvents(["generate_lead", "submit_lead_form"], leadPayload);

  sendGoogleAdsConversion(siteConfig.tracking.googleAds.submitLeadForm);
  sendMetaStandardEvent("Lead", leadPayload);
  sendMetaCustomEvent("SubmitLeadForm", leadPayload);
}

export function trackWhatsAppLead(payload: Omit<LeadPayload, "lead_type">) {
  const leadPayload = {
    ...payload,
    lead_type: "whatsapp",
    contact_method: "whatsapp",
  } satisfies LeadPayload;

  dispatchLeadEvents(["whatsapp_click", "contact"], leadPayload);

  sendGoogleAdsConversion(siteConfig.tracking.googleAds.whatsappLead);
  sendMetaStandardEvent("Contact", leadPayload);
  sendMetaCustomEvent("WhatsAppClick", leadPayload);
}

export function trackPhoneLead(payload: Omit<LeadPayload, "lead_type">) {
  const leadPayload = {
    ...payload,
    lead_type: "phone_call",
    contact_method: "phone",
  } satisfies LeadPayload;

  dispatchLeadEvents(["phone_call_click", "phone_call_lead", "contact"], leadPayload);

  sendGoogleAdsConversion(siteConfig.tracking.googleAds.phoneLead);
  sendMetaStandardEvent("Contact", leadPayload);
  sendMetaCustomEvent("PhoneClick", leadPayload);
}
