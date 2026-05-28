# FriendsFactoryCafe.com — Definitive SEO Audit Report
**Date:** May 28, 2026  
**Status:** FINAL v2 — supersedes all prior versions  
**Audited:** Deep codebase scan — all 186 page files, 15 lib files, config, middleware, robots, sitemap, feed routes

---

## THE ACTUAL SITUATION (Read This First)

**What Google Search Console shows:** ~3,010 pages in sitemap, only ~366 indexed, ~2,730 stuck as "Discovered - currently not indexed."

**The architecture is more complete than initially understood.** `app/[slug]/page.tsx` ALREADY EXISTS and handles all ~2,840 expanded keyword slugs via `generateStaticParams()`. There are no "ghost URLs" — every URL in the sitemap has a real Next.js page behind it. The infrastructure is fine.

**The problem is content quality, not missing pages.**

Google marked these 2,730 pages as "Discovered - currently not indexed" because it discovered the URLs (via sitemap) and chose NOT to crawl them — this happens when the crawler's quality signals indicate pages likely have thin, templated, or duplicate content not worth crawl budget. This is different from "Crawled - currently not indexed" (which means Google crawled but rejected). The expanded keyword pages all use the same 6 opening templates rotated across 2,840 pages, which Google detects as auto-generated.

---

## PART 1: CONFIRMED ISSUES (Priority Ordered)

---

### CRITICAL #1 — SECURITY VULNERABILITY

**File:** `app/leads/page.tsx`  
**URL:** `/leads` (publicly accessible, not in sitemap, not protected by middleware)

**What it is:** A "Study Abroad Leads" admin dashboard with hardcoded credentials in client-side source code:
```
const EMAIL = 'dailyleads@gmail.com'
const PASSWORD = 'DLead@7890'
```

**Why it's critical:** These credentials are fully visible in the browser's source code to anyone who visits `/leads`. The middleware only protects `/admin/:path*` and `/affiliate/:path*` — not `/leads`. This page is NOT related to the cafe (it's for a different business). It was accidentally included in this project.

**Fix:** Delete `app/leads/page.tsx` entirely.

---

### CRITICAL #2 — CONTENT QUALITY (Root cause of 2,730 unindexed pages)

**Affected files:** `lib/expanded-content.ts`, `lib/ffc-unique-content.ts`  
**Affected pages:** ~2,840 expanded keyword pages served by `app/[slug]/page.tsx`

**The problem in detail:**
- `getAllExpandedSlugs()` returns ~2,840 slugs from `lib/keyword-expansion.ts` cache
- Each expanded keyword page renders via `FFCKeywordPage` which calls `generateExpandedContent()`
- `generateExpandedContent()` uses only 6 `OPENINGS[]` templates shared across ALL 2,840 pages
- Each template appears ~473 times across the site
- Meta titles and descriptions also rotate through a small pool of templates
- Google's content quality systems detect this as auto-generated/thin content

**What's working well (don't break this):**
- The 120 base keyword pages (e.g., `/birthday-surprise-for-boyfriend-vadodara/`) have handcrafted 2,000+ word content in `lib/ffc-keyword-content.ts` — these ARE being indexed
- The 40 area pages have unique content in `lib/ffc-area-content.ts`

**What needs to happen:**
The 2,840 expanded keyword pages need genuinely differentiated content. At minimum, the intro paragraph, hero subtitle, FAQ answers, and closing text must be unique per dimension group (budget, time, theme, festival, area-service combos). OR reduce total page count to ~800-1,000 with higher-quality content per page.

---

### CRITICAL #3 — ROUTE CONFLICT (Build bloat + Vercel timeout risk)

**Files:** `app/[slug]/page.tsx` (generateStaticParams) vs. ~166 individual static page files

**The conflict:** `app/[slug]/page.tsx`'s `generateStaticParams()` includes:
- ~6 service category slugs → but these also have their own `/app/{slug}/page.tsx` static files
- ~40 area slugs → but these also have `/app/{area}-vadodara/page.tsx` static files
- ~120 base keyword slugs → but these also have individual static page files
- ~2,840 expanded keyword slugs → these DON'T have individual files (correct)

**Total pages being built redundantly:**
- ~186 individual static page files + ~3,006 dynamic route params = ~3,192 build artifacts

**At runtime:** Static files always win, so duplicate builds are wasted computation. At build scale, this risks Vercel's 45-minute build limit.

**Fix:** In `app/[slug]/page.tsx`'s `generateStaticParams()`, remove the loops for serviceCategories, vadodaraAreas, and getAllKeywords(). Keep ONLY the `getAllExpandedSlugs()` loop. The static page files cover all other cases.

```typescript
// BEFORE (current — has redundant params):
export async function generateStaticParams() {
  const params: { slug: string }[] = [];
  serviceCategories.forEach((service) => { params.push({ slug: service.slug }); });
  vadodaraAreas.forEach((area) => { params.push({ slug: area.slug }); });
  getAllKeywords().forEach(({ slug }) => { params.push({ slug }); });
  getAllExpandedSlugs().forEach((slug) => { params.push({ slug }); });
  return params;
}

// AFTER (fixed — only expanded slugs):
export async function generateStaticParams() {
  const params: { slug: string }[] = [];
  getAllExpandedSlugs().forEach((slug) => { params.push({ slug }); });
  return params;
}
```

---

### HIGH #4 — 5 PAGES MISSING CANONICAL URLs

**Identified by cross-referencing 186 pages-with-metadata against 181 pages-with-alternates:**

| Page File | URL | Impact |
|-----------|-----|--------|
| `app/book-now/page.tsx` | `/book-now` | HIGH — primary conversion page |
| `app/rooftop-experience/page.tsx` | `/rooftop-experience` | HIGH — service category page |
| `app/terms-conditions/page.tsx` | `/terms-conditions` | Low (legal page) |
| `app/privacy-policy/page.tsx` | `/privacy-policy` | Low (legal page) |
| `app/services/valentines-week/page.tsx` | `/services/valentines-week` | Also wrong URL — see #5 |

**Fix:** Add `alternates: { canonical: "https://friendsfactorycafe.com/{path}" }` to each metadata export.

---

### HIGH #5 — ORPHAN PAGE AT WRONG URL

**File:** `app/services/valentines-week/page.tsx`  
**Renders at:** `/services/valentines-week`

**Problems:**
- The sitemap and URL registry reference `/valentines-week` (served by `app/[slug]/page.tsx`)
- The static file renders at `/services/valentines-week` which is NOT in the sitemap
- Both cover near-identical content → duplicate content signal
- `/services/valentines-week` has no canonical and is unreachable from the sitemap

**Fix:** Delete `app/services/valentines-week/page.tsx`. The `[slug]/page.tsx` dynamic route already handles `/valentines-week` with a correct canonical URL and sitemap entry.

---

### HIGH #6 — OPENING HOURS INCONSISTENCY

**3 different opening time sets found across the codebase:**

| File | Opening Hours |
|------|---------------|
| `app/layout.tsx` (JSON-LD LocalBusiness — line 193) | `"opens": "11:00", "closes": "23:00"` |
| `app/[slug]/page.tsx` (FAQ schema — line 285) | "11 AM to 1 AM" (Late Night slot until 1 AM) |
| `app/terms-conditions/page.tsx` (line 93) | "12 PM to 10:30 PM (varies by slot)" |

**Why it matters:** Google's Knowledge Panel and local search results pull from `openingHoursSpecification` in the LocalBusiness JSON-LD. Contradictory data can cause wrong hours to appear in search results, losing bookings.

**Fix:** Confirm ACTUAL operating hours with the business owner. Based on terms-conditions, the time appears to be 12:00–23:00 (noon to 11 PM). Update:
1. `app/layout.tsx` line 193: `"opens": "11:00"` → `"opens": "12:00"`
2. `app/[slug]/page.tsx` line 285: Update the FAQ answer text to match
3. Optionally update `app/terms-conditions/page.tsx` slot description

---

### MEDIUM #7 — BROKEN SECOND SITEMAP IN GOOGLE SEARCH CONSOLE

**Issue:** `sitemap.website.xml` was submitted to GSC and shows "1 error / Unknown type"  
**Fix:** Go to GSC → Sitemaps → click `sitemap.website.xml` → Remove sitemap. No code change needed.

---

## PART 2: CONFIRMED WORKING CORRECTLY

These were audited and require NO changes:

| Component | Status | Notes |
|-----------|--------|-------|
| `app/layout.tsx` metadataBase | OK | `https://friendsfactorycafe.com` set correctly |
| `app/layout.tsx` global JSON-LD | OK | LocalBusiness + WebSite + Organization schemas present |
| `app/layout.tsx` robots metadata | OK | `index: true, follow: true, googleBot max-snippet: -1` |
| `app/layout.tsx` Google verification | OK | `c1b155cb6acd07f9` set |
| `app/layout.tsx` title template | OK | `template: "%s"` — pages override fully |
| `app/robots.ts` | OK | Disallows /api/, /admin/, /affiliate/, /_next/ correctly |
| `middleware.ts` | OK | JWT protection for admin/affiliate; doesn't block Googlebot |
| `next.config.mjs` | OK | AVIF/WebP, compress:true, security headers present |
| `app/[slug]/page.tsx` canonical | OK | All 4 page types have correct canonical URLs |
| `app/[slug]/page.tsx` JSON-LD | OK | FAQPage + Service + BreadcrumbList + WebPage schemas |
| `app/packages/[slug]/page.tsx` | OK | Product + BreadcrumbList + ImageGallery + FAQPage schemas |
| `app/blog/[slug]/page.tsx` | OK | Correct canonical + metadata pattern |
| `components/ui/accordion.tsx` | OK | Radix UI content IS in SSR HTML (CSS-animated, not JS-deferred) |
| `app/feed.xml/route.ts` | OK | WebSub hub link, top 500 URLs, correct caching |
| `app/sitemap.xml/route.ts` | OK | Returns all ~3,010 URLs via getAllSiteUrls() |
| `lib/ffc-keyword-content.ts` | OK | ~120 handcrafted 2,000+ word unique content entries |
| `lib/ffc-area-content.ts` | OK | Area-specific unique content per area |
| `components/social-proof-notifications.tsx` | OK | Client-only widget, zero SEO impact |
| `components/referral-tracker.tsx` | OK | Returns null, zero SEO impact |
| All 40 area pages (`/xxx-vadodara/`) | OK | Have canonical, unique content via ffc-area-content.ts |
| All 120 base keyword pages | OK | Have canonical, handcrafted content from ffc-keyword-content.ts |
| `lib/seo-config.ts` IndexNow key | OK | `friendsfactorycafe-indexnow-key-2026` configured |
| Footer internal links | OK | All links in SSR HTML (CSS/JS visibility toggle, not JS-only render) |

---

## PART 3: COMPLETE FIX ROADMAP (Execution Order)

### Phase 0 — Manual (Do Right Now, No Code)
- [ ] Remove `sitemap.website.xml` from Google Search Console → Sitemaps tab

### Phase 1 — Code Fixes (30 minutes, deploy immediately)

**1.1 — Delete leads page (security fix):**
```
DELETE: app/leads/page.tsx
```

**1.2 — Delete orphan valentines-week page:**
```
DELETE: app/services/valentines-week/page.tsx
```

**1.3 — Fix opening hours in layout.tsx:**
Change `"opens": "11:00"` to `"opens": "12:00"` at line 193 of `app/layout.tsx`

**1.4 — Fix generateStaticParams in [slug]/page.tsx:**
Remove the three redundant forEach loops (serviceCategories, vadodaraAreas, getAllKeywords). Keep only `getAllExpandedSlugs()`.

**1.5 — Add canonical to 4 pages:**

`app/book-now/page.tsx` — add to metadata:
```typescript
alternates: { canonical: "https://friendsfactorycafe.com/book-now" },
```

`app/rooftop-experience/page.tsx` — add to metadata:
```typescript
alternates: { canonical: "https://friendsfactorycafe.com/rooftop-experience" },
```

`app/terms-conditions/page.tsx` — add to metadata:
```typescript
alternates: { canonical: "https://friendsfactorycafe.com/terms-conditions" },
```

`app/privacy-policy/page.tsx` — add to metadata:
```typescript
alternates: { canonical: "https://friendsfactorycafe.com/privacy-policy" },
```

### Phase 2 — Content Quality (The Main Battle)

This is what will actually move indexing from 366 → 1,000+.

**Strategy:** Each expanded keyword has a "dimension" (budget, time, theme, festival, area-service). Write dimension-specific content — not 1 template per dimension, but 3-5 genuinely different angles per modifier value. This multiplies content uniqueness without handcrafting every page.

**Create `lib/expanded-content-v2.ts`** with dimension-specific generators:
- Budget modifiers (luxury, affordable, cheap, budget): 4 completely different content angles
- Time modifiers (morning, afternoon, evening, midnight): 4 different angles
- Theme modifiers (royal, fairy tale, garden, modern, boho): 5+ different angles
- Festival modifiers (Valentine's, Diwali, New Year, Christmas): seasonal-specific content
- Area-service combos: location-specific intros mentioning area landmarks, distances to venue

**Update `app/[slug]/page.tsx`** — for expanded keywords, render using the new `NewSEOPage` SSR component (already created at `components/new-seo-page.tsx`) instead of `FFCKeywordPage`.

**Priority order:**
1. Area-service combos (~600 pages) — highest local SEO value
2. Birthday dimension combos (~450 pages) — highest search volume
3. Anniversary + proposal combos (~700 pages)
4. Candlelight dinner + rooftop combos (~400 pages)
5. Pre-wedding + festival + maternity combos (~690 pages)

### Phase 3 — Post-Deploy

1. Trigger IndexNow for all updated/new pages
2. Request manual indexing in GSC for the 5 pages that got canonical added
3. Monitor GSC Coverage report weekly — "Discovered - currently not indexed" count should drop as content quality improves

---

## PART 4: EXPECTED OUTCOMES

| Phase | Estimated Pages Indexed | Timeframe |
|-------|------------------------|-----------|
| Current state | ~366 | Now |
| After Phase 0 + 1 | ~400–450 | 1–2 weeks after deploy |
| After Phase 2 (content quality) | ~1,200–1,800 | 4–8 weeks |
| After Phase 2 + sustained recrawl | ~2,000–2,500 | 3–6 months |

Google never indexes 100% of a large site. 1,500 well-indexed pages with genuinely unique content outperform 3,000 thin pages in rankings.

---

## PART 5: WHAT NOT TO DO

- Do NOT delete and recreate pages — the page structure is correct
- Do NOT add more pages until existing ones start indexing
- Do NOT change URL structure — all canonical URLs are already correct
- Do NOT submit IndexNow until Phase 1 fixes are deployed (don't point Google to pages missing canonicals)
- Do NOT remove pages from sitemap unless also deleting the actual page file

---

## APPENDIX: EXACT FILES TO CHANGE

### Delete (2 files)
```
app/leads/page.tsx                    ← Security issue + wrong business
app/services/valentines-week/page.tsx ← Orphan at wrong URL
```

### Add canonical (4 files)
```
app/book-now/page.tsx                 ← Add alternates.canonical
app/rooftop-experience/page.tsx       ← Add alternates.canonical
app/terms-conditions/page.tsx         ← Add alternates.canonical
app/privacy-policy/page.tsx           ← Add alternates.canonical
```

### Modify (2 files)
```
app/layout.tsx                        ← Fix "opens": "11:00" → "12:00"
app/[slug]/page.tsx                   ← Remove redundant generateStaticParams loops
```

### Create (Phase 2)
```
lib/expanded-content-v2.ts            ← New dimension-specific content generators
```

### Update (Phase 2)
```
app/[slug]/page.tsx                   ← Switch expanded keywords to NewSEOPage component
```
