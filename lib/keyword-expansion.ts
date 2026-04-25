/**
 * KEYWORD EXPANSION ENGINE
 *
 * Generates ~2,800 new long-tail keyword pages across 14 dimensions:
 *
 * Prefix dimensions (modifier-service-vadodara):
 *   budget, time, theme, festival, milestone, venue, qualifier, seasonal, style
 *
 * Suffix dimensions (service-modifier-vadodara):
 *   nearme, price, relationship, booking
 *
 * Custom dimensions:
 *   howto (mixed prefix/suffix patterns)
 *
 * Cross dimensions:
 *   area-service (8 services × 40 areas = 320)
 *   area-keyword (40 top keywords × 40 areas = 1,600)
 *
 * All couples-only romantic content for Friends Factory Cafe Vadodara
 */

import { serviceCategories, vadodaraAreas } from "@/lib/ffc-config";

// ==================== TYPES ====================

export type KeywordDimension =
  | "budget"
  | "time"
  | "theme"
  | "festival"
  | "milestone"
  | "venue"
  | "qualifier"
  | "howto"
  | "seasonal"
  | "nearme"
  | "price"
  | "relationship"
  | "booking"
  | "style"
  | "area-service"
  | "area-keyword";

export interface ExpandedKeyword {
  slug: string;
  dimension: KeywordDimension;
  parentServiceSlug: string;
  parentServiceName: string;
  modifier: string;
  modifierLabel: string;
  areaSlug?: string;
  areaName?: string;
  baseKeywordSlug?: string;
  baseKeywordTitle?: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
}

// ==================== SERVICE DISPLAY CONFIG ====================

interface ServiceDisplay {
  name: string;
  shortName: string;
  action: string;
}

const SERVICE_DISPLAY: Record<string, ServiceDisplay> = {
  "birthday-surprise": {
    name: "Birthday Surprise",
    shortName: "Birthday Surprise",
    action: "birthday celebrations",
  },
  "anniversary-celebration": {
    name: "Anniversary Celebration",
    shortName: "Anniversary",
    action: "anniversary celebrations",
  },
  proposal: {
    name: "Proposal Setup",
    shortName: "Proposal",
    action: "romantic proposals",
  },
  "candlelight-dinner": {
    name: "Candlelight Dinner",
    shortName: "Candlelight Dinner",
    action: "romantic dining",
  },
  "surprise-date": {
    name: "Surprise Date",
    shortName: "Surprise Date",
    action: "surprise date nights",
  },
  "pre-wedding-shoot": {
    name: "Pre-Wedding Shoot",
    shortName: "Pre-Wedding Shoot",
    action: "pre-wedding photography",
  },
  "baby-moments": {
    name: "Baby Moments Celebration",
    shortName: "Baby Moments",
    action: "baby celebrations",
  },
  "valentines-week": {
    name: "Valentine's Week Celebration",
    shortName: "Valentine's",
    action: "Valentine's celebrations",
  },
};

// ==================== UTILITIES ====================

function simpleHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function slugToLabel(slug: string): string {
  return slug
    .split("-")
    .map((w) => {
      if (["to", "for", "in", "of", "the", "a", "an", "and", "or", "vs"].includes(w)) return w;
      return w.charAt(0).toUpperCase() + w.slice(1);
    })
    .join(" ");
}

function stripVadodaraSuffix(slug: string): string {
  return slug.replace(/-vadodara$/, "");
}

function stripVadodaraName(name: string): string {
  return name.replace(/,?\s*Vadodara$/i, "").trim();
}

// ==================== MODIFIER DEFINITIONS ====================

interface Mod {
  slug: string;
  label: string;
  hook: string;
}

// --- BUDGET ---
const BUDGET_MODS: Mod[] = [
  { slug: "affordable", label: "Affordable", hook: "Budget-Friendly ₹4,700" },
  { slug: "budget", label: "Budget", hook: "Great Value Packages" },
  { slug: "budget-friendly", label: "Budget-Friendly", hook: "Wallet-Friendly" },
  { slug: "low-cost", label: "Low-Cost", hook: "Low Cost Yet Premium" },
  { slug: "premium", label: "Premium", hook: "Premium Experience" },
  { slug: "luxury", label: "Luxury", hook: "Luxury Treatment" },
  { slug: "high-end", label: "High-End", hook: "High-End Private Venue" },
];

// --- TIME ---
const TIME_MODS: Mod[] = [
  { slug: "midnight", label: "Midnight", hook: "12 AM Celebration" },
  { slug: "morning", label: "Morning", hook: "Beautiful Morning Setup" },
  { slug: "afternoon", label: "Afternoon", hook: "Daytime Celebration" },
  { slug: "evening", label: "Evening", hook: "Perfect Evening" },
  { slug: "sunset", label: "Sunset", hook: "Golden Hour Romance" },
  { slug: "late-night", label: "Late Night", hook: "Late Night Romance" },
  { slug: "daytime", label: "Daytime", hook: "Bright & Beautiful" },
  { slug: "early-morning", label: "Early Morning", hook: "Sunrise Romance" },
];
const TIME_SERVICES = [
  "birthday-surprise",
  "anniversary-celebration",
  "proposal",
  "candlelight-dinner",
  "surprise-date",
  "valentines-week",
];

// --- THEME ---
const THEME_MODS: Mod[] = [
  { slug: "bollywood-theme", label: "Bollywood Theme", hook: "Filmy Romance" },
  { slug: "fairy-tale", label: "Fairy Tale", hook: "Magical Setup" },
  { slug: "vintage", label: "Vintage", hook: "Classic Charm" },
  { slug: "rustic", label: "Rustic", hook: "Earthy Elegance" },
  { slug: "royal", label: "Royal", hook: "Royal Treatment" },
  { slug: "minimalist", label: "Minimalist", hook: "Elegant Simplicity" },
  { slug: "floral", label: "Floral", hook: "Garden of Love" },
  { slug: "starlight", label: "Starlight", hook: "Under the Stars" },
  { slug: "bohemian", label: "Bohemian", hook: "Free Spirit Romance" },
  { slug: "classic-romantic", label: "Classic Romantic", hook: "Timeless Love" },
  { slug: "modern-chic", label: "Modern Chic", hook: "Trendy & Stylish" },
  { slug: "dreamy", label: "Dreamy", hook: "Dream Come True" },
  { slug: "garden-theme", label: "Garden Theme", hook: "Lush Greenery" },
  { slug: "white-theme", label: "White Theme", hook: "Pure Elegance" },
  { slug: "neon-theme", label: "Neon Theme", hook: "Neon Glow Party" },
];

// --- FESTIVAL ---
const FESTIVAL_MODS: Mod[] = [
  { slug: "valentines-day", label: "Valentine's Day", hook: "Feb 14 Special" },
  { slug: "rose-day", label: "Rose Day", hook: "Feb 7 Romance" },
  { slug: "chocolate-day", label: "Chocolate Day", hook: "Sweet Celebration" },
  { slug: "teddy-day", label: "Teddy Day", hook: "Cute & Cuddly" },
  { slug: "promise-day", label: "Promise Day", hook: "Forever Promise" },
  { slug: "hug-day", label: "Hug Day", hook: "Warm Embrace" },
  { slug: "kiss-day", label: "Kiss Day", hook: "Magical Moment" },
  { slug: "karva-chauth", label: "Karva Chauth", hook: "Fasting to Feasting" },
  { slug: "diwali", label: "Diwali", hook: "Festival of Lights" },
  { slug: "new-year-eve", label: "New Year Eve", hook: "New Year Special" },
  { slug: "christmas", label: "Christmas", hook: "Christmas Magic" },
  { slug: "navratri", label: "Navratri", hook: "Festive Romance" },
  { slug: "womens-day", label: "Women's Day", hook: "March 8 Special" },
  { slug: "anniversary-week", label: "Anniversary Week", hook: "Week of Love" },
  { slug: "new-year", label: "New Year", hook: "New Year Celebration" },
];
// Skip Valentine-sub-festivals for valentines-week service
const VALENTINE_FESTIVALS = new Set([
  "valentines-day",
  "rose-day",
  "chocolate-day",
  "teddy-day",
  "promise-day",
  "hug-day",
  "kiss-day",
]);

// --- MILESTONE ---
const MILESTONE_MODS: Mod[] = [
  { slug: "first-date", label: "First Date", hook: "Where It All Started" },
  { slug: "1-month", label: "1 Month", hook: "Monthly Milestone" },
  { slug: "3-month", label: "3 Month", hook: "Quarter Year Love" },
  { slug: "6-month", label: "6 Month", hook: "Half Year Milestone" },
  { slug: "100-days", label: "100 Days", hook: "100 Days of Love" },
  { slug: "1-year", label: "1 Year", hook: "First Anniversary" },
  { slug: "2nd-anniversary", label: "2nd Anniversary", hook: "Cotton Anniversary" },
  { slug: "3rd-anniversary", label: "3rd Anniversary", hook: "Leather Anniversary" },
  { slug: "5th-anniversary", label: "5th Anniversary", hook: "Wood Anniversary" },
  { slug: "10th-anniversary", label: "10th Anniversary", hook: "Tin Anniversary" },
  { slug: "15th-anniversary", label: "15th Anniversary", hook: "Crystal Anniversary" },
  { slug: "20th-anniversary", label: "20th Anniversary", hook: "China Anniversary" },
  { slug: "25th-anniversary", label: "25th Anniversary", hook: "Silver Jubilee" },
  { slug: "40th-anniversary", label: "40th Anniversary", hook: "Ruby Anniversary" },
  { slug: "50th-anniversary", label: "50th Anniversary", hook: "Golden Jubilee" },
];
const MILESTONE_SERVICES = [
  "birthday-surprise",
  "anniversary-celebration",
  "candlelight-dinner",
  "surprise-date",
  "proposal",
];

// --- VENUE ---
const VENUE_MODS: Mod[] = [
  { slug: "glass-house", label: "Glass House", hook: "Glass House Venue" },
  { slug: "open-air", label: "Open Air", hook: "Open Air Romance" },
  { slug: "terrace", label: "Terrace", hook: "Terrace Celebration" },
  { slug: "sky-lounge", label: "Sky Lounge", hook: "Sky-High Romance" },
  { slug: "private-cabin", label: "Private Cabin", hook: "Private Cabin Setup" },
  { slug: "indoor", label: "Indoor", hook: "Cozy Indoor Setup" },
  { slug: "outdoor", label: "Outdoor", hook: "Starlit Outdoor" },
  { slug: "rooftop-terrace", label: "Rooftop Terrace", hook: "Rooftop Views" },
];

// --- QUALIFIER ---
const QUALIFIER_MODS: Mod[] = [
  { slug: "top-rated", label: "Top Rated", hook: "5-Star Rated" },
  { slug: "most-popular", label: "Most Popular", hook: "#1 Choice" },
  { slug: "number-one", label: "Number One", hook: "#1 in Vadodara" },
  { slug: "ultimate", label: "Ultimate", hook: "Ultimate Experience" },
  { slug: "perfect", label: "Perfect", hook: "Perfection Awaits" },
  { slug: "ideal", label: "Ideal", hook: "Ideal for Couples" },
  { slug: "amazing", label: "Amazing", hook: "Amazing Experience" },
  { slug: "unforgettable", label: "Unforgettable", hook: "Memories Forever" },
  { slug: "memorable", label: "Memorable", hook: "Cherished Moments" },
  { slug: "exclusive", label: "Exclusive", hook: "Exclusive Private Venue" },
  { slug: "top-10", label: "Top 10", hook: "Top 10 in Vadodara" },
  { slug: "highly-rated", label: "Highly Rated", hook: "Highly Rated Venue" },
];

// --- SEASONAL ---
const SEASONAL_MODS: Mod[] = [
  { slug: "summer", label: "Summer", hook: "Summer Special" },
  { slug: "monsoon", label: "Monsoon", hook: "Rainy Season Romance" },
  { slug: "winter", label: "Winter", hook: "Cozy Winter" },
  { slug: "rainy-season", label: "Rainy Season", hook: "Rain Romance" },
  { slug: "weekend", label: "Weekend", hook: "Weekend Special" },
  { slug: "weeknight", label: "Weeknight", hook: "Weeknight Escape" },
  { slug: "long-weekend", label: "Long Weekend", hook: "Holiday Romance" },
  { slug: "holiday", label: "Holiday", hook: "Holiday Celebration" },
];

// --- STYLE ---
const STYLE_MODS: Mod[] = [
  { slug: "instagram-worthy", label: "Instagram-Worthy", hook: "Insta-Perfect Setup" },
  { slug: "pinterest-perfect", label: "Pinterest-Perfect", hook: "Pinterest Magic" },
  { slug: "photogenic", label: "Photogenic", hook: "Photo-Worthy Venue" },
  { slug: "aesthetic", label: "Aesthetic", hook: "Aesthetic Vibes" },
  { slug: "trendy", label: "Trendy", hook: "Trending in Vadodara" },
  { slug: "insta-famous", label: "Insta-Famous", hook: "Most Instagrammed" },
];

// --- NEARME (suffix) ---
const NEARME_MODS: Mod[] = [
  { slug: "near-me", label: "Near Me", hook: "Closest to You" },
  { slug: "close-to-me", label: "Close to Me", hook: "Minutes Away" },
  { slug: "nearby", label: "Nearby", hook: "Near You" },
  { slug: "around-vadodara", label: "Around Vadodara", hook: "Across Vadodara" },
  { slug: "closest", label: "Closest", hook: "Nearest Venue" },
];

// --- PRICE (suffix) ---
const PRICE_MODS: Mod[] = [
  { slug: "under-5000", label: "Under ₹5,000", hook: "Budget Packages" },
  { slug: "under-6000", label: "Under ₹6,000", hook: "Mid-Range Value" },
  { slug: "under-7000", label: "Under ₹7,000", hook: "All-Inclusive" },
  { slug: "5000-to-7000", label: "₹5,000 to ₹7,000", hook: "Premium Range" },
];

// --- RELATIONSHIP (suffix) ---
const RELATIONSHIP_MODS: Mod[] = [
  { slug: "for-newly-married", label: "for Newly Married", hook: "Newlywed Special" },
  { slug: "for-engaged-couples", label: "for Engaged Couples", hook: "Engagement Celebration" },
  { slug: "for-dating-couples", label: "for Dating Couples", hook: "Date Night Special" },
  { slug: "for-long-term-couples", label: "for Long-Term Couples", hook: "Rekindle Romance" },
];
const RELATIONSHIP_SERVICES = [
  "birthday-surprise",
  "anniversary-celebration",
  "candlelight-dinner",
  "surprise-date",
  "proposal",
];

// --- BOOKING (suffix) ---
const BOOKING_MODS: Mod[] = [
  { slug: "same-day-booking", label: "Same Day Booking", hook: "Book Today" },
  { slug: "last-minute", label: "Last Minute", hook: "Instant Availability" },
  { slug: "advance-booking", label: "Advance Booking", hook: "Plan Ahead" },
  { slug: "online-booking", label: "Online Booking", hook: "Book Online" },
];

// --- HOWTO (custom patterns) ---
interface HowtoDef {
  slugFn: (serviceSlug: string) => string;
  label: string;
  titleFn: (serviceName: string) => string;
  h1Fn: (serviceName: string) => string;
  metaTitleFn: (serviceName: string) => string;
  metaDescFn: (serviceName: string) => string;
}

const HOWTO_DEFS: HowtoDef[] = [
  {
    slugFn: (s) => `how-to-plan-${s}-vadodara`,
    label: "How to Plan",
    titleFn: (n) => `How to Plan ${n} in Vadodara`,
    h1Fn: (n) => `How to Plan the Perfect ${n} in Vadodara`,
    metaTitleFn: (n) => `How to Plan ${n} Vadodara | Step-by-Step Guide`,
    metaDescFn: (n) =>
      `Complete guide on how to plan ${n.toLowerCase()} in Vadodara. Expert tips, package options & booking details at Friends Factory Cafe. From ₹4,700.`,
  },
  {
    slugFn: (s) => `${s}-ideas-for-couples-vadodara`,
    label: "Ideas for Couples",
    titleFn: (n) => `${n} Ideas for Couples in Vadodara`,
    h1Fn: (n) => `Best ${n} Ideas for Couples in Vadodara`,
    metaTitleFn: (n) => `${n} Ideas for Couples Vadodara | Creative Inspiration`,
    metaDescFn: (n) =>
      `Discover creative ${n.toLowerCase()} ideas for couples in Vadodara. From romantic rooftop setups to themed celebrations at Friends Factory Cafe.`,
  },
  {
    slugFn: (s) => `${s}-tips-vadodara`,
    label: "Tips",
    titleFn: (n) => `${n} Tips in Vadodara`,
    h1Fn: (n) => `Expert ${n} Tips & Advice in Vadodara`,
    metaTitleFn: (n) => `${n} Tips Vadodara | Expert Planning Advice`,
    metaDescFn: (n) =>
      `Expert ${n.toLowerCase()} tips for couples in Vadodara. Planning advice, timing tips & package recommendations at Friends Factory Cafe.`,
  },
  {
    slugFn: (s) => `complete-guide-to-${s}-vadodara`,
    label: "Complete Guide",
    titleFn: (n) => `Complete Guide to ${n} in Vadodara`,
    h1Fn: (n) => `The Complete Guide to ${n} in Vadodara`,
    metaTitleFn: (n) => `Complete Guide to ${n} Vadodara | Everything You Need`,
    metaDescFn: (n) =>
      `Everything you need to know about ${n.toLowerCase()} in Vadodara. Packages, pricing, timing & booking guide at Friends Factory Cafe.`,
  },
  {
    slugFn: (s) => `${s}-checklist-vadodara`,
    label: "Checklist",
    titleFn: (n) => `${n} Checklist in Vadodara`,
    h1Fn: (n) => `${n} Planning Checklist for Vadodara`,
    metaTitleFn: (n) => `${n} Checklist Vadodara | Don't Miss Anything`,
    metaDescFn: (n) =>
      `Complete ${n.toLowerCase()} planning checklist for Vadodara couples. Never miss a detail with our step-by-step guide at Friends Factory Cafe.`,
  },
  {
    slugFn: (s) => `things-to-know-about-${s}-vadodara`,
    label: "Things to Know",
    titleFn: (n) => `Things to Know About ${n} in Vadodara`,
    h1Fn: (n) => `Essential Things to Know About ${n} in Vadodara`,
    metaTitleFn: (n) => `Things to Know About ${n} Vadodara | Insider Tips`,
    metaDescFn: (n) =>
      `Important things to know before planning ${n.toLowerCase()} in Vadodara. Insider tips, pricing info & booking advice at Friends Factory Cafe.`,
  },
  {
    slugFn: (s) => `creative-${s}-ideas-vadodara`,
    label: "Creative Ideas",
    titleFn: (n) => `Creative ${n} Ideas in Vadodara`,
    h1Fn: (n) => `Creative & Unique ${n} Ideas in Vadodara`,
    metaTitleFn: (n) => `Creative ${n} Ideas Vadodara | Unique Celebrations`,
    metaDescFn: (n) =>
      `Unique & creative ${n.toLowerCase()} ideas for couples in Vadodara. Stand-out celebrations with themed setups at Friends Factory Cafe.`,
  },
  {
    slugFn: (s) => `${s}-planning-guide-vadodara`,
    label: "Planning Guide",
    titleFn: (n) => `${n} Planning Guide for Vadodara`,
    h1Fn: (n) => `Ultimate ${n} Planning Guide for Vadodara`,
    metaTitleFn: (n) => `${n} Planning Guide Vadodara | Plan Like a Pro`,
    metaDescFn: (n) =>
      `Ultimate ${n.toLowerCase()} planning guide for Vadodara. Budget tips, timing advice & package selection at Friends Factory Cafe. From ₹4,700.`,
  },
];

// ==================== TOP KEYWORDS FOR AREA CROSS ====================

const TOP_KEYWORDS_FOR_AREA_CROSS: Record<string, string[]> = {
  "birthday-surprise": [
    "birthday-surprise-for-boyfriend-vadodara",
    "birthday-surprise-for-girlfriend-vadodara",
    "birthday-surprise-for-husband-vadodara",
    "birthday-surprise-for-wife-vadodara",
    "romantic-birthday-surprise-vadodara",
  ],
  "anniversary-celebration": [
    "anniversary-dinner-vadodara",
    "anniversary-surprise-for-husband-vadodara",
    "anniversary-surprise-for-wife-vadodara",
    "romantic-anniversary-date-vadodara",
    "wedding-anniversary-party-vadodara",
  ],
  proposal: [
    "proposal-setup-vadodara",
    "surprise-proposal-vadodara",
    "romantic-proposal-vadodara",
    "candlelight-proposal-vadodara",
    "private-proposal-vadodara",
  ],
  "candlelight-dinner": [
    "candlelight-dinner-for-couples-vadodara",
    "rooftop-candlelight-dinner-vadodara",
    "romantic-dinner-vadodara",
    "private-dinner-vadodara",
    "outdoor-candlelight-dinner-vadodara",
  ],
  "surprise-date": [
    "surprise-date-for-boyfriend-vadodara",
    "surprise-date-for-girlfriend-vadodara",
    "surprise-date-for-husband-vadodara",
    "surprise-date-for-wife-vadodara",
    "surprise-date-ideas-vadodara",
  ],
  "pre-wedding-shoot": [
    "pre-wedding-photoshoot-vadodara",
    "rooftop-pre-wedding-shoot-vadodara",
    "indoor-pre-wedding-shoot-vadodara",
    "candlelight-pre-wedding-shoot-vadodara",
    "unique-pre-wedding-shoot-vadodara",
  ],
  "baby-moments": [
    "baby-shower-venue-vadodara",
    "maternity-photoshoot-vadodara",
    "pregnancy-announcement-vadodara",
    "gender-reveal-party-vadodara",
    "baby-bump-photoshoot-vadodara",
  ],
  "valentines-week": [
    "valentines-candlelight-dinner-vadodara",
    "valentines-date-vadodara",
    "valentines-dinner-vadodara",
    "valentines-surprise-vadodara",
    "valentines-decoration-vadodara",
  ],
};

// Keyword title lookup (slug → title) built from serviceCategories
function getKeywordTitle(kwSlug: string): string {
  for (const svc of serviceCategories) {
    const kw = svc.keywords.find((k) => k.slug === kwSlug);
    if (kw) return kw.title;
  }
  return slugToLabel(kwSlug.replace(/-vadodara$/, ""));
}

// ==================== EXISTING SLUGS (for dedup) ====================

function getExistingSlugs(): Set<string> {
  const slugs = new Set<string>();
  // Service category slugs
  serviceCategories.forEach((s) => {
    slugs.add(s.slug);
    s.keywords.forEach((k) => slugs.add(k.slug));
  });
  // Area slugs
  vadodaraAreas.forEach((a) => slugs.add(a.slug));
  // Static page paths (no leading slash)
  [
    "about",
    "contact",
    "menu",
    "packages",
    "services",
    "virtual-tour",
    "areas",
    "book-now",
    "blog",
    "admin",
    "affiliate",
    "leads",
    "privacy-policy",
    "terms-conditions",
    "rooftop-experience",
  ].forEach((p) => slugs.add(p));
  return slugs;
}

// ==================== META GENERATION ====================

const META_DESC_TEMPLATES = [
  (m: string, s: string) =>
    `Book ${m.toLowerCase()} ${s.toLowerCase()} in Vadodara. Private rooftop venue with stunning decorations, cake & romantic ambiance. Packages from ₹4,700. Book now!`,
  (m: string, s: string) =>
    `Looking for ${m.toLowerCase()} ${s.toLowerCase()} in Vadodara? Enjoy premium private celebrations with gorgeous decorations & unforgettable romantic setup.`,
  (m: string, s: string) =>
    `Plan a ${m.toLowerCase()} ${s.toLowerCase()} in Vadodara. Private rooftop venue, gorgeous decorations, welcome drinks & cake included. From ₹4,700.`,
  (m: string, s: string) =>
    `Experience ${m.toLowerCase()} ${s.toLowerCase()} in Vadodara. Romantic private venue with decorations, music & 3 hours exclusive access. Reserve your date!`,
  (m: string, s: string) =>
    `Celebrate with ${m.toLowerCase()} ${s.toLowerCase()} in Vadodara. Private rooftop with fairy lights, candles & romantic decorations. Packages from ₹4,700.`,
  (m: string, s: string) =>
    `Discover ${m.toLowerCase()} ${s.toLowerCase()} in Vadodara. Intimate celebrations with premium decorations, private rooftop venue & unforgettable moments await.`,
  (m: string, s: string) =>
    `Your ${m.toLowerCase()} ${s.toLowerCase()} awaits in Vadodara! Private rooftop with stunning views, romantic decorations & all-inclusive celebration packages.`,
  (m: string, s: string) =>
    `The best ${m.toLowerCase()} ${s.toLowerCase()} experience in Vadodara. Private venue, beautiful decorations, cake & romantic ambiance. From ₹4,700. Book today!`,
];

const META_TITLE_TEMPLATES = [
  (m: string, s: string, hook: string) => `${m} ${s} in Vadodara | ${hook}`,
  (m: string, s: string, _h: string) =>
    `${m} ${s} in Vadodara | Private Rooftop Venue`,
  (m: string, s: string, hook: string) => `Book ${m} ${s} in Vadodara | ${hook}`,
  (m: string, s: string, _h: string) =>
    `${m} ${s} in Vadodara | Unforgettable Celebration`,
];

const AREA_SERVICE_DESC_TEMPLATES = [
  (s: string, _a: string) =>
    `Book ${s.toLowerCase()} in Vadodara. Private rooftop venue with stunning decorations, cake & romantic ambiance. Packages from ₹4,700. Reserve today!`,
  (s: string, _a: string) =>
    `Looking for ${s.toLowerCase()} in Vadodara? Enjoy private celebrations with romantic setup & unforgettable moments. Call +91 7487888730.`,
  (s: string, _a: string) =>
    `Plan ${s.toLowerCase()} in Vadodara. Private rooftop venue with gorgeous decorations, cake & romantic ambiance. All-inclusive from ₹4,700.`,
  (s: string, _a: string) =>
    `Best ${s.toLowerCase()} venue in Vadodara. Private rooftop, stunning decorations & celebration packages from ₹4,700. Book your special moment!`,
];

const AREA_KEYWORD_DESC_TEMPLATES = [
  (kw: string, _a: string) =>
    `Book ${kw.toLowerCase()} in Vadodara. Private rooftop venue with stunning decorations, cake & romantic ambiance. Packages from ₹4,700. Book now!`,
  (kw: string, _a: string) =>
    `Looking for ${kw.toLowerCase()} in Vadodara? Enjoy private celebrations with romantic setup & unforgettable experiences. Reserve your date!`,
  (kw: string, _a: string) =>
    `Plan ${kw.toLowerCase()} in Vadodara. Private rooftop venue, stunning decorations & all-inclusive packages. From ₹4,700. Call now!`,
  (kw: string, _a: string) =>
    `Best ${kw.toLowerCase()} in Vadodara. Private venue, romantic decorations & 3 hours exclusive access. Create magical memories today!`,
];

// ==================== MAIN BUILD FUNCTION ====================

function buildAllExpandedKeywords(): ExpandedKeyword[] {
  const existing = getExistingSlugs();
  const results: ExpandedKeyword[] = [];
  const generatedSlugs = new Set<string>();

  function addKeyword(ek: ExpandedKeyword): void {
    if (existing.has(ek.slug) || generatedSlugs.has(ek.slug)) return;
    generatedSlugs.add(ek.slug);
    results.push(ek);
  }

  const allServiceSlugs = serviceCategories.map((s) => s.slug);

  // Helper: generate prefix dimension keywords (mod-service-vadodara)
  function generatePrefix(
    dimension: KeywordDimension,
    mods: Mod[],
    applicableServices: string[] = allServiceSlugs
  ): void {
    for (const svc of serviceCategories) {
      if (!applicableServices.includes(svc.slug)) continue;
      const display = SERVICE_DISPLAY[svc.slug];
      if (!display) continue;

      for (const mod of mods) {
        const slug = `${mod.slug}-${svc.slug}-vadodara`;
        const h = simpleHash(slug);
        const title = `${mod.label} ${display.name} in Vadodara`;
        const h1 = `${mod.label} ${display.name} in Vadodara`;
        const metaTitle = META_TITLE_TEMPLATES[h % META_TITLE_TEMPLATES.length](
          mod.label,
          display.shortName,
          mod.hook
        );
        const metaDescription = META_DESC_TEMPLATES[h % META_DESC_TEMPLATES.length](
          mod.label,
          display.name
        );
        addKeyword({
          slug,
          dimension,
          parentServiceSlug: svc.slug,
          parentServiceName: display.name,
          modifier: mod.slug,
          modifierLabel: mod.label,
          title,
          h1,
          metaTitle,
          metaDescription,
        });
      }
    }
  }

  // Helper: generate suffix dimension keywords (service-mod-vadodara)
  function generateSuffix(
    dimension: KeywordDimension,
    mods: Mod[],
    applicableServices: string[] = allServiceSlugs
  ): void {
    for (const svc of serviceCategories) {
      if (!applicableServices.includes(svc.slug)) continue;
      const display = SERVICE_DISPLAY[svc.slug];
      if (!display) continue;

      for (const mod of mods) {
        const slug = `${svc.slug}-${mod.slug}-vadodara`;
        const h = simpleHash(slug);
        const title = `${display.name} ${mod.label} in Vadodara`;
        const h1 = `${display.name} ${mod.label} in Vadodara`;
        const metaTitle = META_TITLE_TEMPLATES[h % META_TITLE_TEMPLATES.length](
          display.shortName,
          mod.label,
          mod.hook
        );
        const metaDescription = META_DESC_TEMPLATES[h % META_DESC_TEMPLATES.length](
          display.name,
          mod.label
        );
        addKeyword({
          slug,
          dimension,
          parentServiceSlug: svc.slug,
          parentServiceName: display.name,
          modifier: mod.slug,
          modifierLabel: mod.label,
          title,
          h1,
          metaTitle,
          metaDescription,
        });
      }
    }
  }

  // ========== 1. PREFIX DIMENSIONS ==========
  generatePrefix("budget", BUDGET_MODS);
  generatePrefix("time", TIME_MODS, TIME_SERVICES);
  generatePrefix("theme", THEME_MODS);

  // Festival: skip Valentine sub-festivals for valentines-week service
  for (const svc of serviceCategories) {
    const display = SERVICE_DISPLAY[svc.slug];
    if (!display) continue;
    for (const mod of FESTIVAL_MODS) {
      if (svc.slug === "valentines-week" && VALENTINE_FESTIVALS.has(mod.slug)) continue;
      const slug = `${mod.slug}-${svc.slug}-vadodara`;
      const h = simpleHash(slug);
      addKeyword({
        slug,
        dimension: "festival",
        parentServiceSlug: svc.slug,
        parentServiceName: display.name,
        modifier: mod.slug,
        modifierLabel: mod.label,
        title: `${mod.label} ${display.name} in Vadodara`,
        h1: `${mod.label} ${display.name} Celebration in Vadodara`,
        metaTitle: META_TITLE_TEMPLATES[h % META_TITLE_TEMPLATES.length](
          mod.label,
          display.shortName,
          mod.hook
        ),
        metaDescription: META_DESC_TEMPLATES[h % META_DESC_TEMPLATES.length](
          mod.label,
          display.name
        ),
      });
    }
  }

  generatePrefix("milestone", MILESTONE_MODS, MILESTONE_SERVICES);
  generatePrefix("venue", VENUE_MODS);
  generatePrefix("qualifier", QUALIFIER_MODS);
  generatePrefix("seasonal", SEASONAL_MODS);
  generatePrefix("style", STYLE_MODS);

  // ========== 2. SUFFIX DIMENSIONS ==========
  generateSuffix("nearme", NEARME_MODS);
  generateSuffix("price", PRICE_MODS);
  generateSuffix("relationship", RELATIONSHIP_MODS, RELATIONSHIP_SERVICES);
  generateSuffix("booking", BOOKING_MODS);

  // ========== 3. HOWTO (custom patterns) ==========
  for (const svc of serviceCategories) {
    const display = SERVICE_DISPLAY[svc.slug];
    if (!display) continue;

    for (const def of HOWTO_DEFS) {
      const slug = def.slugFn(svc.slug);
      addKeyword({
        slug,
        dimension: "howto",
        parentServiceSlug: svc.slug,
        parentServiceName: display.name,
        modifier: def.label.toLowerCase().replace(/\s+/g, "-"),
        modifierLabel: def.label,
        title: def.titleFn(display.name),
        h1: def.h1Fn(display.name),
        metaTitle: def.metaTitleFn(display.shortName),
        metaDescription: def.metaDescFn(display.name),
      });
    }
  }

  // ========== 4. AREA-SERVICE CROSS ==========
  for (const svc of serviceCategories) {
    const display = SERVICE_DISPLAY[svc.slug];
    if (!display) continue;

    for (const area of vadodaraAreas) {
      const areaSlug = stripVadodaraSuffix(area.slug);
      const areaName = stripVadodaraName(area.name);
      const slug = `${svc.slug}-near-${areaSlug}-vadodara`;
      const h = simpleHash(slug);
      addKeyword({
        slug,
        dimension: "area-service",
        parentServiceSlug: svc.slug,
        parentServiceName: display.name,
        modifier: areaSlug,
        modifierLabel: areaName,
        areaSlug,
        areaName,
        title: `${display.name} Near ${areaName}, Vadodara`,
        h1: `${display.name} Near ${areaName} in Vadodara`,
        metaTitle: `${display.shortName} Near ${areaName}, Vadodara | Private Venue`,
        metaDescription: AREA_SERVICE_DESC_TEMPLATES[h % AREA_SERVICE_DESC_TEMPLATES.length](
          display.name,
          areaName
        ),
      });
    }
  }

  // ========== 5. AREA-KEYWORD CROSS ==========
  for (const svc of serviceCategories) {
    const display = SERVICE_DISPLAY[svc.slug];
    const topKeywords = TOP_KEYWORDS_FOR_AREA_CROSS[svc.slug];
    if (!display || !topKeywords) continue;

    for (const kwSlug of topKeywords) {
      const baseKeywordTitle = getKeywordTitle(kwSlug);
      const baseKeywordSlug = stripVadodaraSuffix(kwSlug);

      for (const area of vadodaraAreas) {
        const areaSlug = stripVadodaraSuffix(area.slug);
        const areaName = stripVadodaraName(area.name);
        const slug = `${baseKeywordSlug}-near-${areaSlug}-vadodara`;
        const h = simpleHash(slug);
        addKeyword({
          slug,
          dimension: "area-keyword",
          parentServiceSlug: svc.slug,
          parentServiceName: display.name,
          modifier: areaSlug,
          modifierLabel: areaName,
          areaSlug,
          areaName,
          baseKeywordSlug: kwSlug,
          baseKeywordTitle,
          title: `${baseKeywordTitle} Near ${areaName}, Vadodara`,
          h1: `${baseKeywordTitle} Near ${areaName} in Vadodara`,
          metaTitle: `${baseKeywordTitle} Near ${areaName}, Vadodara`,
          metaDescription: AREA_KEYWORD_DESC_TEMPLATES[h % AREA_KEYWORD_DESC_TEMPLATES.length](
            baseKeywordTitle,
            areaName
          ),
        });
      }
    }
  }

  return results;
}

// ==================== CACHED LOOKUP ====================

let _cache: ExpandedKeyword[] | null = null;
let _map: Map<string, ExpandedKeyword> | null = null;

function ensureCache(): void {
  if (!_cache) {
    _cache = buildAllExpandedKeywords();
    _map = new Map(_cache.map((ek) => [ek.slug, ek]));
  }
}

// ==================== PUBLIC API ====================

/** Find an expanded keyword by its slug. O(1) lookup. */
export function findExpandedKeyword(
  slug: string
): ExpandedKeyword | undefined {
  ensureCache();
  return _map!.get(slug);
}

/** Get all expanded keyword slugs (for generateStaticParams). */
export function getAllExpandedSlugs(): string[] {
  ensureCache();
  return _cache!.map((ek) => ek.slug);
}

/** Get all expanded keywords (for URL registry / sitemaps). */
export function getAllExpandedKeywords(): ExpandedKeyword[] {
  ensureCache();
  return _cache!;
}

/** Get expanded keywords by dimension. */
export function getExpandedKeywordsByDimension(
  dimension: KeywordDimension
): ExpandedKeyword[] {
  ensureCache();
  return _cache!.filter((ek) => ek.dimension === dimension);
}

/** Get expanded keywords by parent service. */
export function getExpandedKeywordsByService(
  serviceSlug: string
): ExpandedKeyword[] {
  ensureCache();
  return _cache!.filter((ek) => ek.parentServiceSlug === serviceSlug);
}

/** Get total count of expanded keywords. */
export function getExpandedKeywordCount(): number {
  ensureCache();
  return _cache!.length;
}

/** Get count breakdown by dimension. */
export function getExpansionStats(): Record<string, number> {
  ensureCache();
  const stats: Record<string, number> = {};
  for (const ek of _cache!) {
    stats[ek.dimension] = (stats[ek.dimension] || 0) + 1;
  }
  return stats;
}

/**
 * Get related expanded keywords for internal linking.
 * Strategy: same service + different dimension first, then same dimension + different modifier.
 * Returns deterministic results based on slug hash.
 */
export function getRelatedExpandedKeywords(slug: string, max = 6): ExpandedKeyword[] {
  ensureCache();
  const current = _map!.get(slug);
  if (!current) return [];

  const h = slug.split('').reduce((a, b) => ((a << 5) - a + b.charCodeAt(0)) | 0, 0);
  const abs = Math.abs(h);

  // Pool 1: Same service, different dimension
  const sameSvcDiffDim = _cache!.filter(
    ek => ek.parentServiceSlug === current.parentServiceSlug
      && ek.dimension !== current.dimension
      && ek.slug !== slug
  );

  // Pool 2: Same dimension, different modifier (same service)
  const sameDimDiffMod = _cache!.filter(
    ek => ek.parentServiceSlug === current.parentServiceSlug
      && ek.dimension === current.dimension
      && ek.modifier !== current.modifier
      && ek.slug !== slug
  );

  // Pool 3: Same dimension, different service
  const diffSvc = _cache!.filter(
    ek => ek.parentServiceSlug !== current.parentServiceSlug
      && ek.dimension === current.dimension
      && ek.slug !== slug
  );

  const results: ExpandedKeyword[] = [];
  const seen = new Set<string>();

  function addFrom(pool: ExpandedKeyword[], count: number) {
    if (pool.length === 0) return;
    const start = abs % pool.length;
    for (let i = 0; i < pool.length && results.length < count; i++) {
      const ek = pool[(start + i) % pool.length];
      if (!seen.has(ek.slug)) {
        seen.add(ek.slug);
        results.push(ek);
      }
    }
  }

  addFrom(sameSvcDiffDim, Math.min(3, max));
  addFrom(sameDimDiffMod, max);
  addFrom(diffSvc, max);

  return results.slice(0, max);
}
