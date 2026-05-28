/**
 * IndexNow URL Submission Script
 * Run: node scripts/submit-indexnow.mjs
 *
 * Submits 200 high-priority URLs to IndexNow (Google + Bing pick up instantly)
 */

const KEY = "friendsfactorycafe-indexnow-key-2026";
const HOST = "friendsfactorycafe.com";
const BASE = `https://${HOST}`;

const PRIORITY_URLS = [
  // Core pages (just fixed - canonical added)
  `${BASE}/book-now`,
  `${BASE}/rooftop-experience`,
  `${BASE}/terms-conditions`,
  `${BASE}/privacy-policy`,
  `${BASE}/valentines-week`,

  // Homepage & key static pages
  `${BASE}/`,
  `${BASE}/packages`,
  `${BASE}/services`,
  `${BASE}/areas`,
  `${BASE}/about`,
  `${BASE}/contact`,
  `${BASE}/menu`,
  `${BASE}/blog`,
  `${BASE}/virtual-tour`,

  // Package pages
  `${BASE}/packages/promise-creative-area`,
  `${BASE}/packages/pure-love-glass-house`,
  `${BASE}/packages/moonlit-romance-experience`,
  `${BASE}/packages/sweet-together-glass-house`,
  `${BASE}/packages/timeless-bond-glass-house`,
  `${BASE}/packages/golden-promise-glass-house`,
  `${BASE}/packages/eternal-love-rooftop`,
  `${BASE}/packages/forever-us-loveframe-rooftop`,

  // Top birthday keywords
  `${BASE}/birthday-surprise-for-boyfriend-vadodara`,
  `${BASE}/birthday-surprise-for-girlfriend-vadodara`,
  `${BASE}/birthday-surprise-for-husband-vadodara`,
  `${BASE}/birthday-surprise-for-wife-vadodara`,
  `${BASE}/romantic-birthday-surprise-vadodara`,
  `${BASE}/birthday-celebration-for-couples-vadodara`,
  `${BASE}/birthday-room-decoration-vadodara`,
  `${BASE}/birthday-balloon-decoration-vadodara`,
  `${BASE}/surprise-birthday-party-vadodara`,
  `${BASE}/midnight-birthday-surprise-vadodara`,
  `${BASE}/birthday-party-places-vadodara`,
  `${BASE}/birthday-party-venues-vadodara`,
  `${BASE}/best-birthday-surprise-vadodara`,
  `${BASE}/birthday-surprise-planners-vadodara`,
  `${BASE}/unique-birthday-celebration-vadodara`,

  // Top anniversary keywords
  `${BASE}/anniversary-dinner-vadodara`,
  `${BASE}/anniversary-surprise-for-husband-vadodara`,
  `${BASE}/anniversary-surprise-for-wife-vadodara`,
  `${BASE}/first-anniversary-celebration-vadodara`,
  `${BASE}/wedding-anniversary-party-vadodara`,
  `${BASE}/anniversary-decoration-vadodara`,
  `${BASE}/anniversary-celebration-ideas-vadodara`,
  `${BASE}/romantic-anniversary-date-vadodara`,
  `${BASE}/anniversary-venues-vadodara`,
  `${BASE}/anniversary-restaurants-vadodara`,
  `${BASE}/surprise-anniversary-party-vadodara`,
  `${BASE}/anniversary-planners-vadodara`,
  `${BASE}/25th-anniversary-celebration-vadodara`,
  `${BASE}/10th-anniversary-celebration-vadodara`,
  `${BASE}/anniversary-date-night-vadodara`,

  // Top proposal keywords
  `${BASE}/proposal-setup-vadodara`,
  `${BASE}/rooftop-proposal-vadodara`,
  `${BASE}/proposal-planners-vadodara`,
  `${BASE}/surprise-proposal-vadodara`,
  `${BASE}/proposal-decoration-vadodara`,
  `${BASE}/propose-day-celebration-vadodara`,
  `${BASE}/proposal-ideas-vadodara`,
  `${BASE}/marriage-proposal-vadodara`,
  `${BASE}/romantic-proposal-vadodara`,
  `${BASE}/proposal-venues-vadodara`,
  `${BASE}/engagement-proposal-vadodara`,
  `${BASE}/private-proposal-vadodara`,
  `${BASE}/unique-proposal-ideas-vadodara`,
  `${BASE}/proposal-places-vadodara`,
  `${BASE}/candlelight-proposal-vadodara`,

  // Candlelight dinner keywords
  `${BASE}/candlelight-dinner-for-couples-vadodara`,
  `${BASE}/rooftop-candlelight-dinner-vadodara`,
  `${BASE}/romantic-dinner-vadodara`,
  `${BASE}/candlelight-dinner-restaurants-vadodara`,
  `${BASE}/private-dinner-vadodara`,
  `${BASE}/romantic-restaurants-vadodara`,
  `${BASE}/dinner-date-vadodara`,
  `${BASE}/couple-dinner-vadodara`,
  `${BASE}/candlelight-dinner-date-vadodara`,
  `${BASE}/outdoor-candlelight-dinner-vadodara`,
  `${BASE}/candlelight-dinner-packages-vadodara`,
  `${BASE}/candlelight-dinner-places-vadodara`,
  `${BASE}/special-dinner-vadodara`,
  `${BASE}/candlelight-dinner-near-me-vadodara`,
  `${BASE}/intimate-dinner-vadodara`,

  // Surprise date keywords
  `${BASE}/surprise-date-for-boyfriend-vadodara`,
  `${BASE}/surprise-date-for-girlfriend-vadodara`,
  `${BASE}/surprise-date-for-husband-vadodara`,
  `${BASE}/surprise-date-for-wife-vadodara`,
  `${BASE}/romantic-surprise-vadodara`,
  `${BASE}/surprise-date-ideas-vadodara`,
  `${BASE}/surprise-date-planners-vadodara`,
  `${BASE}/surprise-date-setup-vadodara`,
  `${BASE}/surprise-date-places-vadodara`,
  `${BASE}/surprise-date-night-vadodara`,
  `${BASE}/unique-date-ideas-vadodara`,
  `${BASE}/special-date-vadodara`,
  `${BASE}/rooftop-date-vadodara`,
  `${BASE}/couple-date-vadodara`,
  `${BASE}/surprise-date-decoration-vadodara`,

  // Rooftop & service categories
  `${BASE}/rooftop-experience`,
  `${BASE}/birthday-surprise`,
  `${BASE}/anniversary-celebration`,
  `${BASE}/proposal`,
  `${BASE}/candlelight-dinner`,
  `${BASE}/surprise-date`,
  `${BASE}/pre-wedding-shoot`,
  `${BASE}/baby-moments`,
  `${BASE}/rooftop-sunset-dinner-vadodara`,
  `${BASE}/rooftop-anniversary-vadodara`,
  `${BASE}/rooftop-birthday-celebration-vadodara`,
  `${BASE}/rooftop-restaurant-vadodara`,
  `${BASE}/rooftop-dining-vadodara`,
  `${BASE}/rooftop-party-venue-vadodara`,
  `${BASE}/rooftop-celebration-vadodara`,

  // Top area pages
  `${BASE}/alkapuri-vadodara`,
  `${BASE}/akota-vadodara`,
  `${BASE}/fatehgunj-vadodara`,
  `${BASE}/sayajigunj-vadodara`,
  `${BASE}/gotri-vadodara`,
  `${BASE}/subhanpura-vadodara`,
  `${BASE}/karelibaug-vadodara`,
  `${BASE}/sama-vadodara`,
  `${BASE}/manjalpur-vadodara`,
  `${BASE}/waghodia-road-vadodara`,
  `${BASE}/vasna-vadodara`,
  `${BASE}/sevasi-vadodara`,
  `${BASE}/harni-vadodara`,
  `${BASE}/ellora-park-vadodara`,
  `${BASE}/tandalja-vadodara`,
  `${BASE}/bhayli-vadodara`,
  `${BASE}/nizampura-vadodara`,
  `${BASE}/old-padra-road-vadodara`,
  `${BASE}/race-course-vadodara`,
  `${BASE}/ajwa-road-vadodara`,

  // Pre-wedding keywords
  `${BASE}/pre-wedding-photoshoot-vadodara`,
  `${BASE}/pre-wedding-photography-vadodara`,
  `${BASE}/couple-photoshoot-vadodara`,
  `${BASE}/romantic-photoshoot-vadodara`,
  `${BASE}/engagement-photoshoot-vadodara`,
  `${BASE}/pre-wedding-shoot-packages-vadodara`,
  `${BASE}/rooftop-pre-wedding-shoot-vadodara`,
  `${BASE}/indoor-pre-wedding-shoot-vadodara`,
  `${BASE}/candlelight-pre-wedding-shoot-vadodara`,
  `${BASE}/unique-pre-wedding-shoot-vadodara`,
  `${BASE}/night-pre-wedding-shoot-vadodara`,
  `${BASE}/pre-wedding-venues-vadodara`,
  `${BASE}/pre-wedding-shoot-ideas-vadodara`,
  `${BASE}/pre-wedding-shoot-places-vadodara`,
  `${BASE}/pre-wedding-shoot-location-vadodara`,

  // Valentine's week keywords
  `${BASE}/valentines-day-celebration-vadodara`,
  `${BASE}/valentines-special-vadodara`,
  `${BASE}/valentines-candlelight-dinner-vadodara`,
  `${BASE}/valentines-dinner-vadodara`,
  `${BASE}/valentines-date-vadodara`,
  `${BASE}/valentines-surprise-vadodara`,
  `${BASE}/valentines-decoration-vadodara`,
  `${BASE}/valentines-week-packages-vadodara`,
  `${BASE}/rose-day-celebration-vadodara`,
  `${BASE}/chocolate-day-celebration-vadodara`,
  `${BASE}/teddy-day-celebration-vadodara`,
  `${BASE}/promise-day-celebration-vadodara`,
  `${BASE}/hug-day-celebration-vadodara`,
  `${BASE}/kiss-day-celebration-vadodara`,

  // Baby moments keywords
  `${BASE}/baby-bump-photoshoot-vadodara`,
  `${BASE}/pregnancy-photoshoot-vadodara`,
  `${BASE}/baby-shower-places-vadodara`,
  `${BASE}/godh-bharai-venue-vadodara`,
  `${BASE}/gender-reveal-party-vadodara`,
  `${BASE}/maternity-photoshoot-vadodara`,
  `${BASE}/baby-shower-venue-vadodara`,
  `${BASE}/pregnancy-announcement-vadodara`,
  `${BASE}/baby-shower-decoration-vadodara`,
  `${BASE}/pregnancy-celebration-vadodara`,
];

async function submitToIndexNow(urls) {
  const body = {
    host: HOST,
    key: KEY,
    keyLocation: `${BASE}/${KEY}.txt`,
    urlList: urls,
  };

  console.log(`Submitting ${urls.length} URLs to IndexNow...`);

  try {
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(body),
    });

    console.log(`Response: ${res.status} ${res.statusText}`);
    if (res.status === 200) {
      console.log("✅ Successfully submitted! Google & Bing will crawl these within hours.");
    } else if (res.status === 202) {
      console.log("✅ Accepted for processing.");
    } else {
      const text = await res.text();
      console.log("Response body:", text);
    }
  } catch (err) {
    console.error("❌ Error:", err.message);
  }
}

// Submit in batches of 100 (IndexNow limit is higher but 100 is safe)
const batch1 = PRIORITY_URLS.slice(0, 100);
const batch2 = PRIORITY_URLS.slice(100, 200);

await submitToIndexNow(batch1);
await new Promise(r => setTimeout(r, 2000));
await submitToIndexNow(batch2);

console.log("\nDone! Also submit your sitemap at:");
console.log("https://www.google.com/ping?sitemap=https://friendsfactorycafe.com/sitemap.xml");
