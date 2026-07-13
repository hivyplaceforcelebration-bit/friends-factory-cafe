/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly PUBLIC_FFC_GOOGLE_ADS_ID?: string;
  readonly PUBLIC_FFC_META_PIXEL?: string;
  readonly PUBLIC_FFC_GOOGLE_ADS_SUBMIT_LEAD_FORM?: string;
  readonly PUBLIC_FFC_GOOGLE_ADS_WHATSAPP_LEAD?: string;
  readonly PUBLIC_FFC_GOOGLE_ADS_PHONE_LEAD?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
