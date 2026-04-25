/**
 * EXPANDED KEYWORD CONTENT ENGINE
 *
 * Generates unique, dimension-aware content for ~2,800 expanded keyword pages.
 * Each dimension (budget, time, theme, festival, milestone, venue, area, etc.)
 * gets its own content strategy with unique sections, FAQs, testimonials.
 *
 * Uses hash-based deterministic selection for variety across pages
 * while remaining stable across builds.
 */

import { ServiceCategory, ServiceKeyword, siteConfig, packages, formatPrice } from "./ffc-config";
import { ExpandedKeyword, KeywordDimension } from "./keyword-expansion";
import type { FFCKeywordContent, FFCContentSection } from "./ffc-unique-content";

// ==================== HASH UTILITY ====================

function hash(str: string): number {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = ((h << 5) - h + str.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

function pick<T>(arr: T[], slug: string, offset = 0): T {
  return arr[(hash(slug) + offset) % arr.length];
}

// ==================== VENUE & BRAND CONSTANTS ====================

const V = "Friends Factory Cafe";
const C = "Vadodara";
const PH = siteConfig.phone;
const LOW = formatPrice(4700);
const HIGH = formatPrice(6900);

// ==================== SHARED OPENING TEMPLATES ====================

const OPENINGS = [
  (kw: string) =>
    `Looking for the perfect ${kw} in ${C}? ${V} has been the go-to romantic celebration venue for couples across ${C} since 2019. With our private rooftop and glass house setups, every celebration becomes a cherished memory.`,
  (kw: string) =>
    `Your search for the best ${kw} in ${C} ends here! At ${V}, we create magical moments for couples with stunning decorations, private venues, and all-inclusive packages starting from ${LOW}.`,
  (kw: string) =>
    `${V} invites you to experience the most romantic ${kw} in ${C}. Our exclusive rooftop venue with panoramic city views transforms into the perfect setting for your celebration.`,
  (kw: string) =>
    `Discover why over 3,000 couples have chosen ${V} for their ${kw} in ${C}. Private venue, gorgeous decorations, delicious food, and memories that last forever — all from ${LOW}.`,
  (kw: string) =>
    `Make your ${kw} in ${C} absolutely unforgettable! ${V} offers an exclusive romantic experience with private rooftop celebrations, themed decorations, and personalized touches.`,
  (kw: string) =>
    `Planning a special ${kw} in ${C}? ${V} is ${C}'s most trusted romantic celebration venue. Our 100% private rooftop and glass house venues are perfect for creating magical moments.`,
];

// ==================== DIMENSION-SPECIFIC GENERATORS ====================

function generateBudgetContent(ek: ExpandedKeyword, service: ServiceCategory): FFCKeywordContent {
  const kw = ek.title;
  const kwl = kw.toLowerCase();
  const mod = ek.modifierLabel;
  const isLuxury = ["premium", "luxury", "high-end"].includes(ek.modifier);
  const isBudget = ["affordable", "budget", "budget-friendly", "low-cost"].includes(ek.modifier);

  const intro = `There is a persistent myth in the events industry that romance and affordability are opposites — that a truly beautiful ${service.name.toLowerCase()} demands enormous spending. At ${V} in ${C}, we have spent years proving this wrong. Over 3,000 couples have celebrated with us, and the most common thing they say afterward is not about how much they spent — it is about how the evening felt.

${isBudget
    ? `Our ${kwl} packages start at ${LOW} and deliver an experience most couples describe as "surreal." That word comes up again and again in our reviews. Not "decent for the price" — surreal. The reason is simple: we made deliberate architectural decisions that keep our operating costs low while channeling every rupee into what you actually see and feel during the celebration.`
    : `Our ${kwl} packages reach ${HIGH} for the most complete version of what a private rooftop celebration can be. Every detail is elevated: complimentary celebration cake, premium floral arrangements, multiple themed photo zones, an enhanced food menu, and our signature LoveFrame photo setup that produces frames couples hang in their homes. This is what happens when price is not the constraint and every decision is made for beauty.`
}

Three hours of private celebration time. Zero other guests. A space decorated specifically for you by professionals who have done this thousands of times. Whether you are beginning at ${LOW} or investing in the full ${HIGH} experience, the promise is the same: you walk in to something extraordinary.`;

  const sections: FFCContentSection[] = [
    {
      heading: `What ${mod} Really Means for Your ${service.name}`,
      content: isBudget
        ? `Budget in the context of romantic celebrations is almost always misunderstood. People hear "affordable" and imagine compromise — a smaller space, simpler food, decorations that look like they came from a supply store. Our ${kwl} experience dismantles all three of those assumptions.

The space is the same 4th-floor private rooftop or glass house that couples spending twice as much use. We do not partition it or reduce it. The entire venue is exclusively yours for three hours. The food is the same menu: cheese fondue, paneer tortilla, peri peri fries with mac and cheese, chocolate brownie, and our signature mocktails. There is no "budget food" option — there is just our menu, and it is included.

What actually differs at the ${LOW} starting price is the complexity of the decoration theme and whether the celebration cake is included in the package price (it can be added for ₹350). The balloons, fairy lights, candles, and the general romantic ambiance? Identical across all packages.

**The Promise Creative Area at ${LOW}**: Our most accessible package. A tent-style intimate setup that feels unexpectedly romantic. Couples consistently rate this experience 5 stars — not because they have low expectations, but because the venue and ambiance genuinely deliver.

**Moonlit Romance at ${formatPrice(5100)}**: A step up in decoration complexity. The setup becomes more layered — more light zones, richer arrangement work, a more curated feel.

**Timeless Bond Glass House at ${formatPrice(5700)}**: The glass house adds the architectural dimension of glass walls and controlled interior lighting. This changes the entire emotional texture of the celebration.

The honest truth about our ${kwl} packages: most couples who book them expecting a "decent" experience end up saying they got far more than they paid for. That gap between expectation and reality is what a 4.9-star Google rating looks like in practice.`
        : `Luxury in celebration is not about surface signals — big venues, large crowds, impressive menus posted publicly. Real ${kwl} luxury is something entirely different: control, privacy, personalization, and the sense that every element was chosen for you specifically.

Our ${kwl} packages achieve this through precision. The Forever Us LoveFrame Rooftop at ${formatPrice(6900)} is designed around a specific insight: couples want their celebration to produce frames they actually keep. The LoveFrame setup creates physical photograph-worthy moments at multiple points throughout the evening. The complimentary celebration cake arrives at the perfect moment. The city of ${C} sits below the rooftop, softened by distance into something romantic.

**Forever Us LoveFrame Rooftop — ${formatPrice(6900)}**: Our most complete package. Includes complimentary cake, our most elaborate decoration setup, the LoveFrame photo installation, and city rooftop views. This is the package couples choose when they want zero regrets.

**Eternal Love Rooftop — ${formatPrice(6500)}**: A canopy-style setup that creates a sheltered, intimate rooftop experience. Complimentary cake included. The overhead canopy with fairy light draping creates a different ceiling experience than the open sky.

**Golden Promise Glass House — ${formatPrice(6000)}**: The glass house venue with included cake and our premium decoration suite. The glass architecture means the city glow filters in from all sides — a completely unique atmospheric effect.

Every ${kwl} package: 3 hours private venue, professional decoration setup, welcome drinks, full food menu, background music, and our team's dedicated service. Nothing is left out. Everything is thought through.`
    },
    {
      heading: `What You Are Actually Paying For`,
      content: `This question deserves a direct answer, because most event venues never give one.

When you book a ${kwl} at ${V}, here is where your money goes:

**The Venue**: We lease a dedicated space on the 4th floor of the OneWest building in Gotri. Running a private celebration venue — not a restaurant, not a shared space — has real costs: rent, utilities, facility maintenance, and the consistent standard of keeping it celebration-ready every day. This is the structural foundation that makes true privacy possible.

**The Setup Team**: Our decorators spend 2-3 hours before your arrival setting up the space. Balloon inflation and arrangement, fairy light stringing, candle placement, table settings, prop installation, photo corner building. This is skilled, time-intensive labour. When you walk in and feel that the space was made for you, it is because actual hands spent hours making it so.

**The Food**: Our kitchen prepares everything fresh. Cheese fondue, paneer tortilla wraps, peri peri fries with mac and cheese, chocolate brownie dessert, signature mocktails. We do not use processed or pre-packaged food. The ingredients cost real money.

**The Experience Management**: During your celebration, a team member is available for food service, music management, and any needs. This quiet, professional presence without intrusion is something couples notice and appreciate.

What you are not paying for: marketing overheads disguised as experience costs, large permanent venues we maintain for show, or intermediary commission structures. We keep those costs low so the budget for your ${kwl} stays in the celebration itself.

The result is that our ${kwl} packages deliver more actual romantic experience per rupee than any restaurant or hotel event space in ${C} at comparable price points. This is not a marketing claim — it is why 3,000 couples have now returned, referred friends, and left the reviews that sustain our reputation.`
    },
    {
      heading: `Choosing the Right Package for Your ${kw}`,
      content: `The easiest way to decide is to ask yourself one question: what do I want my partner to feel when they walk through the door?

If the answer is "completely overwhelmed in the best possible way" — choose the Forever Us LoveFrame or Eternal Love packages. These are designed for maximum visual impact.

If the answer is "romantic, private, and genuinely special" — the mid-range packages (Moonlit Romance, Sweet Together, Timeless Bond) deliver precisely this. Many couples who start looking at the premium packages end up happiest with these, because the core experience is identical and the slight difference in decoration complexity matters less than they expected.

If the answer is "I want to do something real without spending aggressively" — The Promise Creative Area and Pure Love Glass House at ${LOW} are genuinely good. We have had countless couples book these expecting something serviceable and leave with their best photograph of the year.

Regardless of which ${kwl} package you choose, the non-negotiables remain the same: 3 hours of complete privacy, professional decoration, food, drinks, music, and a team that cares about your celebration. What changes is the depth and complexity of the visual experience.

To book your ${kwl}, WhatsApp us at ${PH}. Our team will ask you a few questions — occasion, timing, any preferences — and suggest the right package. Small advance payment confirms the date. Share your personalization requests (cake message, song choices, color preferences). Arrive, and everything is waiting for you.

We recommend booking at least 3-5 days ahead. Weekend evening slots — the most popular for ${kwl} — fill quickly.`
    },
  ];

  return buildResult(ek, service, intro, sections);
}

function generateTimeContent(ek: ExpandedKeyword, service: ServiceCategory): FFCKeywordContent {
  const kw = ek.title;
  const kwl = kw.toLowerCase();
  const mod = ek.modifierLabel;
  const slug = ek.modifier;

  const timeInfo: Record<string, { slot: string; science: string; sensorics: string; photoNote: string; tip: string }> = {
    midnight: {
      slot: "10:00 PM – 1:00 AM",
      science: "The human body experiences heightened emotional sensitivity in the late-night hours. Dopamine pathways are active, the mind is released from the cognitive demands of the day, and attention narrows to the immediate present.",
      sensorics: "The rooftop at midnight is a completely different world from the same space at 7 PM. The city quiets. The lights of Vadodara — a thousand individual glows across the skyline — become the only visual noise. The temperature drops. The air carries that particular midnight stillness that feels almost ceremonial.",
      photoNote: "City lights against the dark sky, combined with our fairy light installations, create a depth of contrast that professional photographers specifically seek out. Your midnight celebration photos will look unlike anything shot during the day.",
      tip: "Perfect for birthday countdown celebrations — we coordinate the exact 12:00 AM reveal with precision.",
    },
    morning: {
      slot: "11:00 AM – 2:00 PM",
      science: "Morning cortisol levels create a natural state of alertness and emotional openness. Couples celebrating in the morning report feeling more present and less distracted than during evening slots.",
      sensorics: "The rooftop in late morning has a quality of light that photographers call 'clean' — soft, directional, without the harsh contrast of midday. The glass house in morning light glows from the inside out. The air is fresher than evening. The whole experience feels like starting something rather than ending it.",
      photoNote: "Morning natural light is the closest to professional studio lighting that outdoor spaces ever get. Your celebration photos in this slot will be naturally beautiful without any effort.",
      tip: "Ideal for brunch-style celebrations — the timing feels intentional, not like an afterthought.",
    },
    afternoon: {
      slot: "12:00 PM – 3:00 PM",
      science: "Afternoon provides a psychological break in the middle of the day — the celebration becomes a genuine escape from daily rhythm rather than an end-of-day event that competes with fatigue.",
      sensorics: "The rooftop in the early afternoon has warm, saturated light. Shadows are softer than midday. From the glass house, the city stretches out in full visual detail. The afternoon has a particular quality of felt time — it moves differently than evenings, more spacious.",
      photoNote: "Afternoon light produces warm, rich tones in photos. The colour palette of your celebration pictures will be visually richer than in cooler evening light.",
      tip: "Great for relaxed celebrations — you have the whole evening free afterwards, which creates a different emotional texture.",
    },
    evening: {
      slot: "4:00 PM – 7:00 PM",
      science: "Evening is psychologically associated with transition — from the productive to the personal. The brain shifts from task-oriented modes toward social and emotional processing. This is why candlelight dinners have always been an evening tradition.",
      sensorics: "Our rooftop during the evening slot captures the transition from golden afternoon light to the city switching on its lights. You arrive in warmth and leave in the soft illumination of Vadodara at night. Both states are photographically stunning in completely different ways.",
      photoNote: "No time slot produces as much photographic variety as evening. You begin with golden hour portraits and end with fairy-light nighttime shots — two completely different aesthetics in one celebration.",
      tip: "Our most popular slot. Book 5-7 days in advance for weekend evenings.",
    },
    sunset: {
      slot: "5:00 PM – 8:00 PM",
      science: "Golden hour — the 60-minute window as the sun approaches the horizon — produces light at a horizontal angle that softens shadows, warms skin tones, and creates a depth of field that no artificial lighting can replicate. Photographers pay for this light. You get it with your celebration.",
      sensorics: "From our rooftop during sunset, the light changes colour every few minutes. Pale gold becomes deep amber. The buildings of Vadodara shift from bright to silhouette. If you have never watched a sunset from a high vantage point with someone you love, this slot will recalibrate what you think of as a romantic experience.",
      photoNote: "Sunset photographs at our venue are extraordinary by default. The horizontal golden light, the city backdrop, our fairy-light decorations activating as the sun goes down — this is the combination that produces photographs couples frame and keep for years.",
      tip: "The most romantically complete slot in our schedule. Arrive five minutes early to catch the beginning of the golden shift.",
    },
    "late-night": {
      slot: "10:00 PM – 1:00 AM",
      science: "Late-night shared experiences create stronger memory encoding than daytime ones. Sleep consolidates emotional memories more strongly than factual ones — a late-night celebration is more likely to become a vivid long-term memory than an afternoon event.",
      sensorics: "After 10 PM, the city of ${C} settles into its quieter self. From the rooftop, what was a busy urban view becomes something more composed. The fairy lights in our decorations become the primary light source, which dramatically changes the visual experience — everything is softer, more intimate, more cinematic.",
      photoNote: "Late-night photography has a mood that day photos cannot approximate. The contrast, the light quality, the city behind — these produce images with a different emotional register.",
      tip: "Perfect for private, intimate celebrations. The quieter city makes the moment feel more exclusive.",
    },
    daytime: {
      slot: "11:00 AM – 3:00 PM",
      science: "Daytime celebrations have a different emotional rhythm than evening ones. There is no buildup to 'the moment' — the celebration begins immediately, fully. This creates a more spontaneous, present-focused experience.",
      sensorics: "The venue in daylight shows its full structural beauty — the rooftop perimeter, the glass house architecture, the city detail from above. Decorations catch and reflect natural light differently than they do under artificial illumination. The whole space has a brightness that evenings cannot replicate.",
      photoNote: "Natural daylight is the cleanest light for photography. Details in decoration, food, and couple portraits are crisp and vibrant.",
      tip: "Daytime slots often have better availability than evenings — book with shorter notice.",
    },
    "early-morning": {
      slot: "11:00 AM – 2:00 PM",
      science: "Starting a celebration in the late morning creates the feeling of a day begun intentionally. The rest of the day carries the mood of the morning's celebration — it becomes the emotional frame for everything that follows.",
      sensorics: "The glass house in late morning is at its most beautiful. The city is active but not overwhelming. The air is fresh. The light is clean. Everything feels newly started.",
      photoNote: "Morning light in the glass house creates an interior glow that photographers call luminous. Your early-celebration photos will be exceptionally well-lit without any artificial augmentation.",
      tip: "One of our most available time slots — great for couples who prefer mornings or want guaranteed date access.",
    },
  };

  const info = timeInfo[slug] || timeInfo["evening"];

  const intro = `Most people treat the timing of a celebration as logistical — what time are we free? At ${V}, we think about timing completely differently. The time of your ${kwl} is not just a scheduling decision. It is a sensory decision. It changes the quality of light, the temperature of the air, the sound of the city below, and the psychological state both of you arrive in.

${info.science}

Our ${kwl} slot runs from ${info.slot}, giving you 3 full hours of private celebration time. Everything you need is already in place when you arrive. The question is simply: what do you want those hours to feel like?`;

  const sections: FFCContentSection[] = [
    {
      heading: `What the ${mod} Experience Actually Feels Like`,
      content: `${info.sensorics}

The decorations you see in our photos — the balloon arrangements, the fairy light configurations, the candle placement — are the same at every time slot. But they are not experienced the same way. Candles in daylight are decorative; candles at midnight are the primary light source. Fairy lights in afternoon sunshine are cheerful; fairy lights at 11 PM become something closer to stars. The same physical objects, radically different emotional impact.

At ${V}, we have thought carefully about how each time slot should be prepared. Our setup team adapts the lighting balance, the candle quantity, and certain decoration elements based on the time of your booking. A ${kwl} at sunset requires different preparation than the same package at noon — and we make those adjustments automatically.

Your ${service.name.toLowerCase()} in the ${mod.toLowerCase()} hours benefits from everything our venue offers, plus the particular atmosphere that time of day creates. It is an experience designed at the intersection of human biology, urban atmosphere, and intentional design.

${info.photoNote}`
    },
    {
      heading: `Packages Available for ${mod} ${service.name}`,
      content: `All 8 celebration packages are bookable for ${kwl} slots:

**Rooftop Options** (${mod} atmosphere amplified by elevation):
- Forever Us LoveFrame — ${formatPrice(6900)}, includes complimentary cake. The LoveFrame photo installation with the city below and ${mod.toLowerCase()} light above is something special.
- Eternal Love Rooftop — ${formatPrice(6500)}, includes cake. The canopy draping catches light differently at each time of day.
- Moonlit Romance Experience — ${formatPrice(5100)}. Named for a reason — this package was specifically designed for evening and nighttime slots.
- The Promise Creative Area — ${LOW}. Full private tent setup.

**Glass House Options** (intimate, architectural, light-controlled):
- Golden Promise — ${formatPrice(6000)}, includes cake. The glass walls transform the ${mod.toLowerCase()} light into something interior and enveloping.
- Timeless Bond — ${formatPrice(5700)}. Classic glass house romance.
- Sweet Together — ${formatPrice(5500)}. Cozy, personal, complete.
- Pure Love Glass House — ${LOW}. Our most accessible glass house option.

${slug === "midnight" || slug === "late-night"
  ? "Late-night bookings are our most sought-after for birthday countdown surprises. We coordinate the exact midnight reveal — the decoration reveal, the cake moment, the music shift — with the precision of a small theatrical production."
  : slug === "sunset" || slug === "evening"
  ? "Evening and sunset slots fill first. If you have a specific date in mind, booking 5-7 days ahead is strongly recommended."
  : "This time slot has better availability than our peak evening slots — same quality, less competition for dates."}

Every package includes 3 hours of complete private access. Contact ${PH} to check ${mod.toLowerCase()} availability for your preferred date.`
    },
    {
      heading: `Planning Your ${kw}: Practical Details`,
      content: `Here is everything you need to know to make your ${kwl} run perfectly:

**Booking**: WhatsApp ${PH} with your preferred date. Mention the occasion. Our team responds quickly — usually within minutes during business hours. If the ${mod.toLowerCase()} slot is available on your date, we'll confirm the package options immediately.

**Advance Notice**: ${slug === "evening" || slug === "sunset" ? "Evening and sunset slots are our busiest. Book 5-7 days ahead for weekends, 3-4 days for weekdays." : slug === "midnight" || slug === "late-night" ? "Late-night slots are popular for birthday surprises. 3-5 days advance notice is ideal." : "This time slot typically has good availability. 2-3 days notice is usually sufficient."}

**Customization**: Before your ${kwl}, share your preferences — color theme, music requests, cake message, any special props or personalized elements. We accommodate almost everything.

**Arrival**: Come at your scheduled start time. The setup is complete before you arrive — our team finishes 20-30 minutes early. ${slug === "sunset" ? "Arrive promptly to catch the beginning of the golden hour — it starts at the most beautiful point of your slot." : slug === "midnight" ? "We can coordinate a precisely timed countdown if you are planning a midnight birthday reveal." : ""}

**During the Celebration**: A team member is present for food service and any needs, but discreetly. Your privacy and the intimacy of your celebration are maintained throughout.

The ${mod.toLowerCase()} transforms a beautiful space into a specific, unrepeatable experience. Book yours at ${PH}.`
    },
  ];

  return buildResult(ek, service, intro, sections);
}

function generateThemeContent(ek: ExpandedKeyword, service: ServiceCategory): FFCKeywordContent {
  const kw = ek.title;
  const kwl = kw.toLowerCase();
  const mod = ek.modifierLabel;
  const slug = ek.modifier;

  const themeDetails: Record<string, { story: string; elements: string; colorStory: string; emotionalCore: string; photoStyle: string }> = {
    "bollywood-theme": {
      story: "Bollywood has always understood something about love that Western aesthetics often miss: that romance should be expressed with full dramatic commitment. The sweeping gestures, the emotional declarations, the sheer colour of it all — these are not exaggerations but amplifications. Our Bollywood-theme celebration takes this philosophy seriously.",
      elements: "deep red curtains layered with gold trim, filmy props from iconic romantic scenes, rose petal pathways in vivid colours, warm amber spotlighting that mimics stage lighting, a curated playlist moving through decades of Bollywood romance — from Lata Mangeshkar to Arijit Singh",
      colorStory: "The palette is unapologetically rich: deep crimson, warm gold, and accents of royal maroon. These are the colours of Indian cinema at its most romantic — saturated, warm, and emotionally direct.",
      emotionalCore: "A Bollywood-theme celebration creates a specific emotional permission: to be romantic without restraint, to express in grand gestures, to treat your relationship as the central story it actually is. Couples who experience this theme consistently describe feeling 'completely swept up' in a way that a quiet dinner simply cannot produce.",
      photoStyle: "Bollywood-theme photos have a cinematic quality — the rich colours, the dramatic lighting, the props create natural visual drama. Every frame looks like a film still.",
    },
    "fairy-tale": {
      story: "There is a reason fairy tales have been told for thousands of years: they articulate something true about how love feels in its ideal state — like magic, like the rules of ordinary life are temporarily suspended, like beauty is everywhere and meant for you. Our fairy-tale theme attempts to recreate that feeling in a real space.",
      elements: "gossamer fabric draping in pale pink and ivory, clusters of twinkling fairy lights at multiple heights creating the effect of floating stars, flower archway at the entrance, soft candles in glass holders throughout, a music selection that moves from classical romantic to modern love songs",
      colorStory: "Soft pastel pinks, warm ivory, and gentle gold. The palette is deliberately gentle — these are colours that feel like a dreamstate, a removed-from-the-ordinary world.",
      emotionalCore: "Walking into a fairy-tale setup produces a particular quality of feeling that is hard to describe analytically: the sense that something magical is actually happening. Couples report feeling younger, more open, more willing to be tender with each other. The environment gives emotional permission.",
      photoStyle: "Fairy-tale theme photos have a soft, dreamy quality — the gauzy fabrics, the twinkling lights, and the floral elements combine to create images with a natural romantic glow.",
    },
    vintage: {
      story: "Vintage style is not nostalgia for a specific past — it is nostalgia for a quality of attention that the past represents. Slower, more deliberate, more crafted. Objects made to last. Gestures given weight. Our vintage-theme celebration tries to recreate the feeling of a world where this moment, this evening, was worth taking time over.",
      elements: "warm Edison filament bulbs creating a honey-golden light, antique-style frames with your photos or romantic quotes, lace textile accents, deep red and cream roses in arrangement, a soundtrack of timeless romantic songs from the 1950s through the 1980s",
      colorStory: "Cream, warm brown, aged gold, and deep rose. These are the colours of old photographs — warm, slightly amber, soft at the edges. They create a feeling of time slowing down.",
      emotionalCore: "Vintage-theme celebrations produce a particular quality of intimacy — slower, more lingering, less about the immediate spectacle and more about sitting with each other in a space that feels considered and unhurried. Couples describe it as 'the most present' they have felt in a long time.",
      photoStyle: "Vintage-theme photographs have a natural warmth and depth. The Edison lighting creates a honey tone that makes skin glow. Images feel timeless rather than of-the-moment.",
    },
    rustic: {
      story: "Rustic style draws on something fundamental: the beauty of natural materials, of things grown and shaped from the earth. There is an honesty to it. Wood, stone, green things — these are materials that feel real in a way that synthetic decoration simply cannot. Our rustic celebration grounds the romantic experience in something elemental.",
      elements: "raw wood accents on table settings, fresh wildflower arrangements with herbs and greenery, burlap textile touches, soft candles in terracotta holders, cascading vines and trailing plants, acoustic romantic music with natural warmth",
      colorStory: "Earth tones — terracotta, sage green, warm cream, and the natural browns of wood. These are colours that come from living things, and they create a space that feels connected to the natural world.",
      emotionalCore: "Rustic celebrations have a groundedness that highly stylized themes sometimes lack. There is nothing artificial or constructed about the emotion they produce — just a warm, honest, natural romantic atmosphere that feels effortlessly real.",
      photoStyle: "Rustic-theme photos have an editorial quality — the natural materials, the earth tones, and the soft candlelight create images that look as if they come from a thoughtfully composed lifestyle magazine.",
    },
    royal: {
      story: "Royal aesthetics are fundamentally about treating an occasion as exceptional. The elaborate visual display, the rich materials, the evident expense of care — these communicate that what is happening here is important, ceremonial, set apart from ordinary life. A royal-theme celebration tells your partner: you deserve this level of tribute.",
      elements: "rich jewel-toned fabrics in deep blue, purple and gold, crown motif props and accents, tall candelabras with multiple candles, velvet-like textiles, elaborate floral arrangements in jewel colours, regal music transitioning from orchestral to modern love songs",
      colorStory: "Royal blue, deep burgundy, and warm gold. These are the colours of ceremony and grandeur — saturated, serious, beautiful.",
      emotionalCore: "There is something emotionally significant about a royal-theme celebration: it communicates that your relationship deserves ceremony. The grandeur is not showing off — it is a form of tribute. Couples experience it as feeling honoured.",
      photoStyle: "Royal-theme photos have a formal, editorial quality — rich colours, dramatic lighting, elaborate backdrops. Images feel important and ceremonial.",
    },
    minimalist: {
      story: "Minimalism is the aesthetic philosophy of trust — trust that a single perfect element is more powerful than ten good ones. Our minimalist-theme celebration is the most disciplined of all our setups, and for the couples who respond to it, it is the most powerful. The simplicity is not absence but precision.",
      elements: "single-flower stem arrangements in architectural vases, clean white candles in geometric holders, one dominant decorative element rather than many competing ones, carefully considered negative space, a music selection of modern, understated romantic songs",
      colorStory: "White, cream, nude, and a single accent of soft gold. The restraint is intentional — every colour and every object earns its place.",
      emotionalCore: "Minimalist celebrations produce the most focused emotional experience of any of our themes. With visual complexity reduced, attention goes fully to the person across from you. Couples describe it as 'the most connected' they felt during a celebration.",
      photoStyle: "Minimalist-theme photos are strikingly clean — the negative space and geometric precision create images that look contemporary and intentional rather than romantic-by-formula.",
    },
    floral: {
      story: "Flowers are the oldest human symbol of romantic intention — tens of thousands of years of evolutionary significance compressed into petals and fragrance. Our floral-theme celebration understands this and amplifies it: not one bouquet but a complete floral environment, where the sense of being surrounded by living beauty becomes the dominant experience.",
      elements: "fresh flower walls in coordinated pinks and whites, hanging garlands from above that create a canopy effect, petal pathway from entrance to celebration space, fresh-cut flower centrepieces at the table, delicate floral accents in the balloon arrangement, natural floral fragrance filling the space",
      colorStory: "Rose pink, white, soft lavender, and gentle cream. These are the colours of petals — naturally beautiful, romantic without effort.",
      emotionalCore: "Floral environments produce a biological response — flowers trigger positive emotional associations across nearly all human cultures. In a space filled with fresh flowers, couples feel naturally lighter, more positive, more open to tenderness.",
      photoStyle: "Floral-theme photos have an organic beauty — the living flowers, the natural textures, and the soft colours create images that feel fresh and genuinely romantic rather than staged.",
    },
    starlight: {
      story: "There is something specifically romantic about the night sky — the sense of immensity, of being two small creatures together under something vast. Our starlight theme attempts to recreate the emotional experience of watching stars together in a private, decorated space where that cosmic scale becomes intimate rather than overwhelming.",
      elements: "star-shaped fairy lights at multiple densities creating a depth effect, silver and midnight-blue colour accents throughout, constellation map prints as decoration, projection-style ambient star effects where possible, silver metallic accents in balloon and table arrangements, a music selection of ambient, cinematic romantic compositions",
      colorStory: "Midnight navy, silver, and white. The palette of the night sky — deep and vast, with points of light.",
      emotionalCore: "Starlight celebrations produce a particular emotional atmosphere: expansive but intimate, vast but personal. Couples describe feeling a kind of romantic vertigo — the sense that what they share is significant against something much larger.",
      photoStyle: "Starlight-theme photos have a cinematic, otherworldly quality — the deep colours, the point-light effects, and the silver accents create images that look like stills from a romantic film shot in another world.",
    },
    bohemian: {
      story: "Bohemian style is the aesthetic of genuine individualism — the refusal of a single prescribed vision of beauty in favour of something assembled, personal, and alive with its own logic. Our bohemian-theme celebration is our most eclectic, and for the right couples, it is their most personally resonant experience.",
      elements: "macramé wall hangings in natural fibres, mixed textile throws and cushions in terracotta, mustard, and sage, eclectic candle arrangements in mismatched holders, dreamcatcher accents, trailing plants and dried flower arrangements, warm acoustic music with a folk-romantic quality",
      colorStory: "Terracotta, mustard yellow, sage green, and natural cream. These are the colours of a world made by hand — warm, earthy, and deliberately imperfect.",
      emotionalCore: "Bohemian celebrations attract couples who have a specific kind of relationship: one built on shared taste, personal expression, and a rejection of the formulaic. The theme honours that relationship identity.",
      photoStyle: "Bohemian-theme photos have a warm, textured quality — the natural materials, the eclectic objects, and the earth-tone palette create images that feel personal and lived-in.",
    },
    "classic-romantic": {
      story: "Some aesthetic expressions become classic because they are right — not fashionable, not of-the-moment, but fundamentally correct in their understanding of what love looks and feels like. Red roses, candlelight, soft music — these are not clichés. They are archetypes. Our classic-romantic theme honours the tradition because the tradition works.",
      elements: "deep red roses throughout — in arrangement, scattered as petals on the table, and in a dedicated centrepiece, white and red candles in graduated heights, heart-shaped balloon elements, a playlist built from decades of universally recognised romantic songs, the signature red-rose-petal pathway from the door",
      colorStory: "Classic red, pure white, and deep pink. These are the colours of romance as understood across all cultures — warm, declarative, and emotionally unambiguous.",
      emotionalCore: "Classic-romantic celebrations work because they communicate directly, without irony or interpretation required. The partner walking in understands immediately what they are being told.",
      photoStyle: "Classic-romantic theme photos are timeless — the reds and whites, the candlelight, the roses create images that look romantic regardless of when they were taken.",
    },
    "modern-chic": {
      story: "Modern-chic style applies contemporary aesthetic intelligence to romantic occasions — geometric precision, high-contrast colour work, and a deliberate sense of cool that somehow produces warmth when you are inside it. Our modern-chic theme is for couples who want their celebration to feel designed rather than decorated.",
      elements: "geometric paper or metallic sculpture accents, black and gold colour blocking in balloon arrangements, LED acrylic elements, sleek table settings with clean lines, modern love song soundtrack curated for contemporary romantic sensibility",
      colorStory: "Black, warm gold, and pure white. The most architecturally confident colour palette — high contrast, graphic, intentional.",
      emotionalCore: "Modern-chic celebrations appeal to couples who find maximalist romance slightly embarrassing but want to genuinely celebrate. The aesthetic creates a kind of emotional shelter — the sophistication makes the romance feel safe rather than over-exposed.",
      photoStyle: "Modern-chic photos look editorial — the graphic palette, the clean geometry, and the high-contrast elements create images with a contemporary fashion magazine quality.",
    },
    dreamy: {
      story: "Some of the most powerful romantic experiences happen in states of gentle unreality — when the surroundings have a quality that makes you feel like you might be dreaming. Our dreamy theme deliberately creates this edge. Not surreal, not hallucinatory — just slightly lifted from the ordinary. Softer. More luminous. More possible.",
      elements: "sheer white and pale lavender fabric draping at multiple heights creating a layered, atmospheric effect, cloud-like balloon clusters with soft whites and blues, bubble machine effects, diffused ambient lighting that fills the space with even, gentle illumination, a music selection of ethereal romantic compositions",
      colorStory: "Soft blue, white, pale lilac, and the faintest blush pink. A palette that feels inhaled rather than seen — light, cool, and gently suspended.",
      emotionalCore: "The dreamy theme produces the most unusual emotional experience of our offerings — a quality of suspended reality where the celebration feels continuous with imagination. Couples describe it as the setting in which they felt the most freely affectionate.",
      photoStyle: "Dreamy-theme photos have a luminous, other-worldly quality — the diffused lighting, the sheer fabrics, and the pale palette create images that look visually unlike anything else we produce.",
    },
    "garden-theme": {
      story: "Gardens have been the setting for romantic encounters across all of human history — the combination of living beauty, natural fragrance, and the sense of a protected, cultivated space separate from the ordinary world. Our garden theme brings that experience indoors, into a rooftop celebration space that feels like a private garden party for two.",
      elements: "potted plants and trailing vines throughout the space, a green-and-white flower wall as the centrepiece backdrop, wooden accents and natural textiles, scattered flower arrangements in terracotta and ceramic, soft butterfly and nature accents, a music selection of acoustic, natural-world-inspired romantic songs",
      colorStory: "Soft green, white, and gentle pinks — the colours of a garden in bloom. Fresh, natural, and living.",
      emotionalCore: "Garden-theme celebrations produce a sense of sanctuary — a protected natural space created specifically for this celebration. The living plants and fresh flowers add a biological component to the romantic atmosphere that purely decorative elements cannot.",
      photoStyle: "Garden-theme photos have a fresh, natural quality — the greens, the botanicals, and the outdoor-inside aesthetic create images that feel genuinely refreshing.",
    },
    "white-theme": {
      story: "All-white is the most demanding aesthetic choice — there is nowhere to hide. With no colour to distract, every element must justify its presence. The result, when done correctly, is a kind of visual purity that no colour palette can achieve. Our white-theme celebration is our most architecturally precise setup, and for the couples it suits, it is unforgettable.",
      elements: "white flower arrangements — roses, carnations, and greenery — throughout the space, white candles in crystal and frosted glass holders, ivory and pearl balloon arrangements, white gossamer fabric draping, soft white lighting that fills the space evenly, pearl and cream accent details",
      colorStory: "White, cream, ivory, and the softest champagne gold. A single-note palette that rewards attention — every shade of white is slightly different, and the composition creates depth from restraint.",
      emotionalCore: "White-theme celebrations produce a feeling of clarity and purity — emotionally, not just visually. The absence of colour noise creates space for genuine feeling. Couples describe it as the most emotionally honest setting they have celebrated in.",
      photoStyle: "White-theme photos have a pristine, high-fashion quality — the monochromatic palette and the texture variation between different white elements create images with visual sophistication.",
    },
    "neon-theme": {
      story: "Neon is the aesthetic of genuine celebration energy — it does not suggest romance cautiously or imply it subtly. It announces. For couples whose relationship has a particular quality of joy, aliveness, and expressed enthusiasm, neon-theme is the celebration environment that actually matches who they are together.",
      elements: "electric pink and deep blue neon lights, UV-reactive elements that respond to blacklight, bright LED strips in the balloon arrangement, glow accessories as welcome gifts, an energetic playlist of danceable love songs",
      colorStory: "Neon pink, electric blue, and vivid green. The palette of electricity and urban nightlife — impossibly bright, unmistakable, alive.",
      emotionalCore: "Neon-theme celebrations produce the most energetic emotional experience of any of our offerings. They are for couples who love each other loudly — who do not want to whisper their celebration but shout it.",
      photoStyle: "Neon-theme photos look unlike anything else we produce — vivid, electric, and full of colour energy that photographs retain completely.",
    },
  };

  const td = themeDetails[slug] || themeDetails["classic-romantic"];

  const intro = `${td.story}

At ${V} in ${C}, our ${kwl} packages start from ${LOW} and include the complete theme setup — not a gesture toward the theme but a genuine immersion in it. Our decoration team builds the full environment before your arrival: ${td.elements}. You walk in to a space that has been considered in every detail for the next three hours of your celebration.`;

  const sections: FFCContentSection[] = [
    {
      heading: `The ${mod} Decoration: Every Element Considered`,
      content: `Our ${mod.toLowerCase()} setup is built around three principles: coherence, depth, and photographic intelligence.

**Coherence**: Every decoration element serves the theme. Nothing is present because it was available or because it looks generally romantic — each piece either contributes to the ${mod.toLowerCase()} aesthetic or it is not there.

**Colour Story**: ${td.colorStory} This is not background design — it is the primary emotional architecture of your celebration. The colour environment is the first thing your partner processes when they walk in, and it sets the emotional tone for the entire evening.

**Depth**: The ${mod.toLowerCase()} setup uses multiple spatial layers — above (ceiling/draping elements), mid-height (balloon arrangements, fabric accents), and ground level (petals, candles, table setting). This three-dimensional construction makes the theme feel immersive rather than applied.

**Photographic Intelligence**: ${td.photoStyle} Every ${mod.toLowerCase()} setup includes at least three dedicated photo zones with different visual backdrops, allowing variety in your celebration photography.

**Personal Touches**: The ${mod.toLowerCase()} is the base — we build on it with your specifics. Custom elements include your names in decoration (on letter boards, framed prints, or embedded in balloon arrangements), your chosen colour accents within the palette, and any personal props you want incorporated.

The setup takes our team 2-3 hours to complete. By the time you arrive, the space is fully realized.`
    },
    {
      heading: `Packages for Your ${mod} ${service.name}`,
      content: `Every package can be configured for the ${mod.toLowerCase()} theme:

**Forever Us LoveFrame Rooftop — ${formatPrice(6900)}**: The LoveFrame photo installation works beautifully against the ${mod.toLowerCase()} backdrop. Complimentary cake. Our most complete celebration. The elevated rooftop adds a spatial dimension to the ${mod.toLowerCase()} that glass house packages cannot replicate.

**Eternal Love Rooftop — ${formatPrice(6500)}**: The canopy draping style of this package is especially compatible with themes that have strong overhead elements (fairy-tale, dreamy, bohemian). Complimentary cake included.

**Golden Promise Glass House — ${formatPrice(6000)}**: The glass house architecture adds a structural dimension to the ${mod.toLowerCase()} aesthetic — the walls become part of the decoration canvas. Complimentary cake included.

**Mid-Range Options — ${formatPrice(5100)} to ${formatPrice(5700)}**: Complete ${mod.toLowerCase()} setup with slightly less complex decoration layering. The theme is fully present — these packages simply have fewer simultaneous elements.

**Starting at ${LOW}**: The ${mod.toLowerCase()} theme is applied to our foundational package. The core elements of the aesthetic are present; the setup is simpler but the theme is genuine.

All packages: 3 hours private venue, full themed decoration, welcome drinks, food menu, background music, dedicated team service.`
    },
    {
      heading: `The Emotional Impact of ${mod}`,
      content: `${td.emotionalCore}

What this means practically for your ${kwl}: the theme is doing emotional work throughout the celebration. It is not merely decoration — it is the environment in which your celebration happens, and that environment shapes what you feel.

Couples who book ${kwl} experiences report specific emotional characteristics that distinguish them from standard celebrations. The most common is the element of genuine surprise even when the person knows a celebration is planned — the specific theme creates an experience that imagination cannot fully anticipate. Walking in is different from being told about it.

Our recommendation: tell us which theme appeals to you, but do not tell your partner. Even if they know they are being taken to ${V} for a celebration, the theme itself should be the reveal. We can help you coordinate this — including keeping the theme secret on our end if they contact us to ask.

To book your ${kwl}, WhatsApp ${PH}. Share the occasion, your preferred date, and that you would like the ${mod.toLowerCase()} theme. Our team will confirm availability and walk you through the personalization options available within that theme.

We recommend booking at least 4-5 days ahead. Theme setups require specific materials that we sometimes need to source, and early notice ensures we can execute the ${mod.toLowerCase()} fully.`
    },
  ];

  return buildResult(ek, service, intro, sections);
}

function generateFestivalContent(ek: ExpandedKeyword, service: ServiceCategory): FFCKeywordContent {
  const kw = ek.title;
  const kwl = kw.toLowerCase();
  const mod = ek.modifierLabel;

  const festivalContext: Record<string, { why: string; cultural: string; timing: string; specific: string }> = {
    valentine: {
      why: "Valentine's Day is globally understood — both people know what it means and what it asks of them. There is no ambiguity in a Valentine's celebration. This directness is its particular gift.",
      cultural: "In Vadodara, Valentine's week has become a genuine cultural event — not imported inauthentically but absorbed into local romantic culture in a way that feels natural. Couples celebrate it because it gives permission and occasion to express what is always true.",
      timing: "Book 2-3 weeks in advance for February 14 slots. We are typically fully booked 10 days before. The week itself (February 7-14) fills nearly as fast.",
      specific: "We add specific Valentine elements to the base celebration setup: rose-specific arrangements, deep red colour accenting throughout, heart-motif elements, and a playlist built specifically for Valentine's week.",
    },
    diwali: {
      why: "Diwali is the festival of light — and romantic celebration by candlelight on Diwali night has a symbolic resonance that other festival dates cannot match. The festival of light is the ideal context for celebrating the light someone brings into your life.",
      cultural: "Diwali in Vadodara has a particular quality — the entire city participates, which creates an ambient celebratory atmosphere that any private celebration can draw on. Walking out after your celebration into a city of lights extends the evening.",
      timing: "Diwali slots book very early — begin planning 3-4 weeks ahead. The specific night of Diwali is our single most-booked date each year.",
      specific: "Diwali setups incorporate diyas alongside our standard candle arrangements, gold and orange colour accents reflecting the festival palette, and the particular warmth of Diwali lighting.",
    },
    holi: {
      why: "Holi celebrates colour and the joy of expression — a celebration of love on Holi day has an inherent symbolism about the vibrancy of what you share together.",
      cultural: "Post-Holi evening celebrations have become a tradition for many Vadodara couples — wash the colours off, dress up, and spend the evening together in a private setting that matches the joy of the day.",
      timing: "Holi evening and the night before (Holika Dahan) are both popular. Book one week ahead minimum.",
      specific: "Holi-themed setups use the festival's palette — vibrant pinks, yellows, greens, and blues — in balloon and decoration arrangements while maintaining elegance.",
    },
    eid: {
      why: "Eid is fundamentally a celebration of gratitude and togetherness — celebrating love on Eid connects the personal with the spiritual context of the day.",
      cultural: "Eid celebrations in Vadodara carry a particular warmth. Celebrating with your partner after Eid festivities as a private continuation of the day's joy has become increasingly popular.",
      timing: "Eid dates vary each year. Contact us 2 weeks before your expected Eid date. We accommodate the celebratory spirit of the day in our setup.",
      specific: "Eid celebration setups incorporate crescent and star motifs as decoration accents, warm golden lighting, and a menu that complements the celebratory mood of the day.",
    },
    christmas: {
      why: "Christmas has a particular aesthetic warmth that translates naturally to romantic celebration — the fairy lights, the rich reds and greens, the sense of being inside a warm space while the world outside is festive.",
      cultural: "Christmas in Vadodara is increasingly celebrated across communities as a cultural festival. Christmas Eve particularly has become a popular date for special celebrations.",
      timing: "December 24-25 slots book fully 2-3 weeks in advance. The broader December holiday season is consistently our busiest period.",
      specific: "Christmas setups incorporate garland and pine accents, deep red and green colour palette alongside our signature arrangements, warm amber lighting that matches the seasonal aesthetic.",
    },
    "new-year": {
      why: "New Year's Eve is a culturally mandated pause for reflection — and celebrating it with your partner, doing a personal review of your year together and setting intentions for the next, is among the most meaningful uses of that pause.",
      cultural: "New Year's Eve in Vadodara has grown significantly as a private celebration occasion. Rather than crowded public events, many couples now choose private celebrations where they can actually hear each other and be present.",
      timing: "December 31 is our single most-requested date. Book minimum 3-4 weeks ahead. We strongly suggest the Dinner (7-10 PM) slot to allow for midnight plans afterward.",
      specific: "New Year setups incorporate countdown elements — a clock decoration, champagne-style props, and golden balloon arrangements that feel celebratory and forward-looking.",
    },
    "karva-chauth": {
      why: "Karva Chauth is among the most emotionally charged days in the Hindu calendar for married couples — the day's fasting and the significance of what it represents make the evening celebration profoundly meaningful.",
      cultural: "Celebrating Karva Chauth at a private venue — rather than the traditional family gathering — has become a way for couples to add a personal, private dimension to the festival. The moonrise moment and the breaking of fast in a beautifully decorated private space carries its own significance.",
      timing: "Karva Chauth slots book very fast once the date is announced. Contact us immediately when the date is confirmed in the lunar calendar.",
      specific: "Karva Chauth setups incorporate traditional elements — diyas, marigold accents — alongside our romantic decoration package, creating a setup that honours the tradition while adding private romantic celebration.",
    },
    "raksha-bandhan": {
      why: "While Raksha Bandhan is primarily a sibling festival, it is also a day that many couples use to celebrate the protective, caring dimensions of their relationship alongside the romantic.",
      cultural: "Celebratory mood of Raksha Bandhan day extends naturally into evening private celebrations for couples.",
      timing: "Book 1-2 weeks ahead for Raksha Bandhan date.",
      specific: "Standard romantic setup with festive colour additions appropriate to the day.",
    },
  };

  const fc = festivalContext[ek.modifier] || {
    why: `${mod} creates a specific cultural context for romantic celebration — the festival marks time in a way that makes celebration feel appropriate and significant.`,
    cultural: `${mod} in Vadodara is celebrated with genuine enthusiasm, and private romantic celebrations on festival days have become increasingly popular.`,
    timing: "Book at least 1-2 weeks before the festival date. Festival slots fill quickly.",
    specific: "We incorporate festival-appropriate decoration elements into our standard romantic setup.",
  };

  const intro = `Festivals mark time differently from ordinary days. When a cultural occasion designates a specific moment as significant, romantic celebration during that moment takes on additional resonance — the festival's cultural weight amplifies what you are expressing privately. A ${kwl} at ${V} draws on both dimensions: the meaning of ${mod} and the meaning of what you are celebrating together.

At ${V}, we understand ${mod} as more than a calendar date. ${fc.why} Our ${kwl} packages, starting from ${LOW}, are designed to honour both the festival and your relationship — creating a private celebration that is simultaneously part of ${mod} and entirely your own.`;

  const sections: FFCContentSection[] = [
    {
      heading: `The Cultural Context: Why ${mod} Makes This Celebration Different`,
      content: `${fc.cultural}

${fc.specific}

The festival context changes the emotional stakes of a celebration. When the wider culture is also marking the same moment — even differently, even from the outside — your private celebration feels connected to something larger. The ${kwl} becomes simultaneously deeply personal and culturally situated.

**What We Add for ${mod}**:
Beyond our standard celebration setup, ${mod} celebrations include festival-appropriate decoration accents that signal the occasion without overwhelming the romantic atmosphere. The balance we strike is intentional: the festival present but not dominating, the romance at the centre.

**The Music Dimension**: Our ${mod} playlists are curated specifically for the festival context — drawing on the emotional associations and sonic culture of ${mod} while maintaining the romantic thread. Music that bridges festival joy and private romantic feeling.

**Menu Considerations**: For certain festivals, we incorporate traditional food elements or festival-appropriate flavours where they naturally complement the celebration menu. Ask when booking if there are specific food preferences relevant to your celebration.`
    },
    {
      heading: `Packages for Your ${kwl}`,
      content: `All eight packages are available for ${kwl}, with festival decoration elements added to every tier:

**Forever Us LoveFrame Rooftop — ${formatPrice(6900)}**: Our most complete offering. The rooftop setting adds a natural element to festival celebrations — open air, city sounds, festive atmosphere outside. Complimentary cake included. The LoveFrame photo installation creates a dedicated memory of your ${mod} celebration.

**Eternal Love Rooftop — ${formatPrice(6500)}**: The canopy setup of this package works especially well with festival celebrations — it creates a sense of a private pavilion within the festival atmosphere. Complimentary cake.

**Golden Promise Glass House — ${formatPrice(6000)}**: The glass house creates a sense of intimate shelter — a private world distinct from the festival outside. Complimentary cake.

**Mid-Range Packages — ${formatPrice(5100)} to ${formatPrice(5700)}**: Complete ${mod} celebration setup with the festival decoration elements. The experience is genuinely special; the setup has slightly fewer simultaneous elements than premium packages.

**Starting from ${LOW}**: Festival-appropriate decoration additions at every price point. The ${mod} context is present even in our most accessible offering.

All packages: 3 hours private venue, complete decoration with festival elements, welcome drinks, food menu, festival-appropriate music, dedicated service team.

**Booking Note**: ${fc.timing}`
    },
    {
      heading: `Planning Your ${kwl}: What to Know`,
      content: `**Timing**: ${fc.timing} WhatsApp ${PH} as soon as you have your date confirmed.

**Personalization for ${mod}**: Tell us if there are specific elements of ${mod} that have personal significance for your relationship — a song you both associate with the festival, a tradition you share, a colour that is particularly meaningful. We build these into the celebration.

**Surprise Element**: If you are planning a surprise ${kwl}, share this when booking. We coordinate the reveal — including keeping the celebration details from your partner if they contact us independently.

**Gift Additions**: ${mod} celebrations often benefit from an additional gift element — a framed photo from a meaningful moment, a small item that references an inside moment in your relationship, or a simple but thoughtful object. We can incorporate these or suggest options.

**The Post-Celebration Plan**: Consider what comes after the three hours — particularly for festivals where there is a natural continuation. Diwali evenings, New Year nights, and Holi mornings all have natural post-celebration flows. Plan ahead.

A ${kwl} at ${V} is a celebration that exists on two timelines simultaneously: the personal timeline of your relationship and the cultural timeline of ${mod}. In years to come, every time the festival arrives, you will remember this night. That is the particular gift of festival-timed romantic celebration.

To book: WhatsApp ${PH} with your ${mod} date preference and the occasion you are celebrating.`
    },
  ];

  return buildResult(ek, service, intro, sections);
}

function generateMilestoneContent(ek: ExpandedKeyword, service: ServiceCategory): FFCKeywordContent {
  const kw = ek.title;
  const kwl = kw.toLowerCase();
  const mod = ek.modifierLabel;

  const milestoneContext: Record<string, { psychology: string; what: string; howLong: string; ritual: string }> = {
    "1st-anniversary": {
      psychology: "The first anniversary carries the particular weight of proof — proof that what began as hope and intention has now become history. One year is long enough to have been tested and short enough to still feel like the beginning.",
      what: "One year means you have navigated at least one complete seasonal cycle together, one complete round of family events, one year of ordinary days that you chose to keep choosing each other through.",
      howLong: "1 year",
      ritual: "Many couples use the first anniversary to reflect on what the first year revealed — what they learned about each other that they could not have predicted. Writing these down together during the celebration creates a document to read at subsequent anniversaries.",
    },
    "5th-anniversary": {
      psychology: "Five years represents the passage through the early-relationship phase and into something more settled, more known, more honestly itself. The five-year mark often coincides with deepened trust and the particular comfort of being genuinely known.",
      what: "Five years together means shared experiences that only the two of you fully understand — private references, weathered difficulties, accumulated joy.",
      howLong: "5 years",
      ritual: "The five-year point is a natural moment for intention-setting — for articulating where you want to be at the ten-year mark. Many couples write letters to their future selves at this milestone.",
    },
    "10th-anniversary": {
      psychology: "A decade together is significant in a way that smaller milestones cannot claim. Ten years represents a relationship that has been chosen consistently, repeatedly, through significant life changes on both sides.",
      what: "Ten years likely includes major life transitions — career changes, family changes, home changes, loss, growth. The relationship that survives and deepens through all of that is something genuinely remarkable.",
      howLong: "10 years",
      ritual: "The tenth anniversary traditionally calls for renewal — of vows, of intention, of explicit acknowledgment. Many couples create a new symbolic gesture at this milestone: a new piece of jewellery, a joint experience, a shared commitment.",
    },
    "25th-anniversary": {
      psychology: "The silver anniversary marks a relationship that has become a life — not an episode in a life, but the central fact of a life. Twenty-five years together means you have grown into your adult selves together.",
      what: "A quarter century of shared history, shared decisions, shared ordinary days and extraordinary ones. The twenty-fifth anniversary deserves a celebration of corresponding weight.",
      howLong: "25 years",
      ritual: "Many couples at this milestone choose to do something genuinely new together — a trip, an experience, a shared project. The celebration is about both honouring what has been and moving toward what is next.",
    },
    "50th-anniversary": {
      psychology: "Fifty years is a testament of a kind that few relationships achieve. The golden anniversary marks love that has been chosen across an entire adult life — through every major human experience, through enormous change, through loss and joy in quantities that younger relationships have not yet encountered.",
      what: "Half a century together is simply extraordinary. Every day of those fifty years was a choice, and the accumulation of those choices is something deserving of the deepest celebration.",
      howLong: "50 years",
      ritual: "The golden anniversary often involves the extended family and community who have witnessed the relationship. But the private, intimate celebration — just the two of you — has its own irreplaceable quality.",
    },
    "100-days": {
      psychology: "One hundred days is not traditional in Western cultures, but it has roots in Korean celebration culture (baek-il) and resonates for couples who want to mark the early stages of a relationship with intentionality.",
      what: "One hundred days represents the passage from the initial intensity of new love into something with actual roots — the first extended period of genuinely knowing each other.",
      howLong: "100 days",
      ritual: "The 100-day milestone is a particularly good occasion for documenting the early relationship — photos, objects, notes from the first weeks. Creating a small archive of the beginning.",
    },
    "1-month": {
      psychology: "The one-month mark in a relationship is when initial intensity begins to settle into something more sustainable. It is the first look ahead — the first moment when a future together becomes a genuine thought rather than a hope.",
      what: "One month is early, which is precisely what makes celebrating it meaningful. It is an act of intention — choosing to mark the beginning because you already understand that this matters.",
      howLong: "1 month",
      ritual: "First-month celebrations often have an element of lightness and newness — the celebration itself feels like the beginning of a tradition rather than a continuation of one.",
    },
  };

  const mc = milestoneContext[ek.modifier] || {
    psychology: `The ${mod.toLowerCase()} milestone represents a meaningful marker in your relationship — a moment worth pausing to honour before continuing forward.`,
    what: `Milestones structure time in relationships, providing defined moments to reflect on the journey and set intentions for what comes next.`,
    howLong: mod.toLowerCase(),
    ritual: "Celebration rituals at milestones create emotional anchors — memories that define the relationship's internal calendar.",
  };

  const intro = `Milestones are how relationships know themselves. Without them, time passes undifferentiated, and the accumulated weight of a shared journey goes unacknowledged. A ${kwl} at ${V} is not just a celebration — it is an act of recognition. You are saying: this point in our story matters enough to mark.\n\n${mc.psychology}\n\nOur ${kwl} packages, starting from ${LOW}, create a private, beautifully decorated space for this recognition — three hours at a dedicated private venue, entirely yours, designed for the occasion.`;

  const sections: FFCContentSection[] = [
    {
      heading: `What ${mc.howLong} Together Actually Means`,
      content: `${mc.what}\n\nThe significance of a milestone is not really about the number. It is about what that number represents in terms of shared experience, shared difficulty, shared ordinary days. The ${mod.toLowerCase()} is meaningful because of everything that happened during it — not just because of its position on a calendar.\n\nOur ${kwl} setup recognises this. We create a space that invites reflection as much as celebration. Couples who celebrate at ${V} frequently describe the experience as the most present and connected they have felt in some time — the private space, the designed environment, and the explicit marking of the milestone work together to create genuine emotional depth.\n\n**What We Recommend Adding**: A display element that references your actual story \u2014 a photo from a meaningful moment in the period being celebrated, a printed message that specifically references your ${mod.toLowerCase()}, a custom cake message that uses the specific number. These particulars are what transform a celebration from a generic romantic evening into an actual milestone commemoration.\n\n**The Ritual Dimension**: ${mc.ritual} We can incorporate these ritual elements into the physical setup of your ${kwl} \u2014 space for writing, display elements for letters or objects, a dedicated moment within the celebration structure for this.`
    },
    {
      heading: `Packages for Your ${kwl}`,
      content: `**Forever Us LoveFrame Rooftop \u2014 ${formatPrice(6900)}**: The LoveFrame photo installation is particularly well-suited to milestone celebrations \u2014 it creates a framed visual record of the milestone moment itself. Complimentary cake with custom message. Our most complete package, with the open rooftop adding a spatial grandeur appropriate to significant milestones.\n\n**Eternal Love Rooftop \u2014 ${formatPrice(6500)}**: The canopy setup creates a sense of a private pavilion \u2014 a sheltered, intimate space that feels made for two people marking something significant. Complimentary cake.\n\n**Golden Promise Glass House \u2014 ${formatPrice(6000)}**: The glass house architecture creates a distinctive celebration environment \u2014 enclosed and intimate, with the walls as a canvas for milestone-specific decoration. Complimentary cake.\n\n**Timeless Bond Glass House \u2014 ${formatPrice(5700)}**: For milestones where the intimate, just-us feeling matters more than elaborate setup. The timeless quality of the name suits anniversary celebrations specifically.\n\n**Pure Love / The Promise \u2014 From ${LOW}**: Because no milestone should go unmarked due to budget. The full celebration experience at our most accessible price point.\n\nAll packages: 3 hours private venue, full decoration setup, milestone-specific personalisation, welcome drinks, food menu, romantic music, service team.`
    },
    {
      heading: `Planning Your ${kwl}: Practical Details`,
      content: `**Booking Timing**: We recommend booking 4-5 days ahead for most ${kwl} dates. For significant milestones (10th, 25th, 50th anniversary, and Valentine's Day anniversaries), book 1-2 weeks ahead.\n\n**Personalisation Request**: When you WhatsApp ${PH} to book, share the specific milestone you are celebrating and any personal details you want incorporated. The more specific you are, the more the setup can reference your actual story.\n\n**Surprise Planning**: If this is a surprise for your partner, tell us during booking. We have extensive experience coordinating the logistics of surprise milestone celebrations \u2014 including the cover story, the arrival timing, and the reveal.\n\n**Time Slot**: For milestone celebrations, the Dinner slot (7-10 PM) is our most popular \u2014 the evening quality of the light and the natural end-of-day reflective mood suit the occasion. Late Night (10 PM-1 AM) is increasingly popular for anniversaries.\n\n**After the Celebration**: Consider having a plan for after your three hours \u2014 a walk, a place you associate with your relationship, or simply a route home through the city you have spent ${mc.howLong} in together.\n\nA ${kwl} at ${V} is a declaration: this milestone, this person, this relationship \u2014 worth celebrating. WhatsApp ${PH} to begin planning.`
    },
  ];

  return buildResult(ek, service, intro, sections);
}

function generateVenueContent(ek: ExpandedKeyword, service: ServiceCategory): FFCKeywordContent {
  const kw = ek.title;
  const kwl = kw.toLowerCase();
  const mod = ek.modifierLabel;
  const slug = ek.modifier;

  const venueInfo: Record<string, { sensory: string; architecture: string; photography: string; weather: string; intimacy: string }> = {
    "glass-house": {
      sensory: "The glass house is a sensory experience before it is a decoration experience. The walls create a particular quality of light — refracted, layered, everywhere at once — that no conventional interior can replicate. Candles inside a glass-walled space multiply, their reflections creating a depth effect that feels inexhaustible.",
      architecture: "Floor-to-ceiling glass walls on multiple sides create the effect of being simultaneously enclosed and boundless. You have complete privacy — no one can access the space — while the transparent walls create a visual openness that prevents any feeling of confinement.",
      photography: "Glass house photos have a distinctive quality — the multiple light sources, the reflections in the walls, and the light-filled environment create images with extraordinary depth. Every photo looks like it was taken with professional lighting because the architecture itself provides it.",
      weather: "The glass house is the ideal choice for Vadodara's monsoon season — rain against the glass creates a dramatic backdrop that increases romantic atmosphere rather than disrupting it. Climate-controlled comfort year-round.",
      intimacy: "The glass house creates the highest level of intimacy of any space in our venue. The enclosure is complete and private, the visual environment is concentrated and intense, and the couple becomes the undisputed centre of the space.",
    },
    "open-air": {
      sensory: "The open-air rooftop experience is sensory in a way that enclosed spaces cannot match — you feel the temperature of the air, hear the ambient sounds of the city from above, and experience the actual sky as part of your celebration. These are real, unmediated sensory experiences that create a specific kind of presence.",
      architecture: "The rooftop is a horizontal expanse rather than an enclosed volume — your visual field extends to the horizon in multiple directions. The city below, the sky above, and your private decorated space in between. This spatial arrangement creates a feeling of elevation and perspective.",
      photography: "Open-air rooftop photos have the most dramatic natural backdrops of any of our spaces — the city skyline, the sky at different times of day, the ambient light that changes from golden hour through dusk into the fairy-light-and-star phase of night.",
      weather: "The open-air rooftop is ideal in Vadodara's winter and clear monsoon evenings. The pre-monsoon late evenings offer warm air, clear skies, and stunning visibility. The cooler winter nights with clear skies and fairy lights is a particularly compelling combination.",
      intimacy: "Paradoxically, the open rooftop creates a particular kind of intimacy — the elevation separates you from ordinary life below, and the expanse of the sky creates a sense of being uniquely alone together in a wide world.",
    },
    terrace: {
      sensory: "The terrace setting combines the sensory openness of outdoor space with the more defined boundaries of a dedicated celebration zone. You have the air and the sky while the terrace itself provides a sense of a room — a defined space within the openness.",
      architecture: "The terrace occupies the architectural middle ground between fully enclosed and fully open — bounded but not enclosed, defined but not confined. This balance suits celebrations that want both open-air atmosphere and a sense of a dedicated, designed space.",
      photography: "Terrace photos benefit from both the natural backdrop of sky and city views and the more defined spatial frame of the terrace boundaries — photos have both depth and composition.",
      weather: "The terrace works across most weather conditions in Vadodara. A partial overhead element provides some shelter while maintaining the open-air quality.",
      intimacy: "The defined boundaries of the terrace create a sense of a room without walls — private and designed while remaining connected to the outdoor atmosphere.",
    },
    "sky-lounge": {
      sensory: "The sky lounge experience is about elevation — being above the ordinary level of the city creates a specific quality of perspective and freedom. Looking down on the familiar city while celebrating together produces a feeling of being momentarily liberated from ordinary constraints.",
      architecture: "The highest point of the venue, the sky lounge creates the most dramatic spatial relationship with the surrounding city. The elevation is the primary architectural experience.",
      photography: "Sky lounge photos have the most dramatic city backdrop — the elevation creates separation between the subjects and the cityscape that ground-level and standard rooftop shots cannot replicate.",
      weather: "The sky lounge is at its most spectacular on clear nights — the sky is the primary experience, and clarity matters. Vadodara's winter and post-monsoon skies are ideal.",
      intimacy: "The elevated, exclusive quality of the sky lounge creates a sense of special access — as if you have been given a private key to a space not accessible to everyone.",
    },
    "private-cabin": {
      sensory: "The private cabin is the most deliberately enclosed and sheltered of our spaces — a specifically constructed intimate environment. The walls, the ceiling, and the controlled light create a self-contained world.",
      architecture: "The cabin's architecture is intentional enclosure — a defined, specific space that exists entirely for your celebration. Nothing bleeds in from outside; the space is completely controlled.",
      photography: "Private cabin photos have an intimate, warm quality — the controlled light and enclosed space create an interior world that photographs with exceptional warmth and depth.",
      weather: "Weather-independent by design. The private cabin delivers the same experience regardless of external conditions.",
      intimacy: "The highest possible intimacy setting. The cabin is built for two people and for nothing else — the entire space is oriented toward your celebration.",
    },
    indoor: {
      sensory: "The indoor venue delivers precision of atmosphere — every sensory element is controllable, from temperature to lighting to sound. The result is a celebration environment with no accidental components.",
      architecture: "The indoor architecture provides a defined celebration space with full environmental control. What you arrive to is exactly what was designed, unaffected by external variables.",
      photography: "Indoor photos have the most controllable lighting of any of our spaces — the decoration team's careful lighting design is the primary light source, producing the intended aesthetic in every frame.",
      weather: "Completely weather-independent. Rain, heat, wind — none of these affect an indoor celebration at ${V}.",
      intimacy: "Indoor settings create complete privacy and an intimate, controlled atmosphere. The outside world does not intrude.",
    },
    outdoor: {
      sensory: "Outdoor celebration involves real, unmediated sensory contact with the natural environment — the quality of outdoor air, the sounds of the city from an elevated vantage point, the actual experience of weather and sky.",
      architecture: "Outdoor spaces at ${V} use the building's elevated position to create separation from street level. The outdoor space feels genuinely removed from ordinary city life.",
      photography: "Outdoor photography captures the interaction between the decorated celebration space and the natural sky — this combination creates images that purely indoor photos cannot achieve.",
      weather: "Outdoor celebrations are best in Vadodara's cooler, clearer months — winter evenings, and the period just after monsoon when the air is clean and visibility is excellent.",
      intimacy: "The outdoor setting creates intimacy through separation — being above and apart from ordinary city activity, in a space created specifically for you.",
    },
    "rooftop-terrace": {
      sensory: "The rooftop terrace combines the best of both — the elevated outdoor sensory experience with the defined spatial character of a terrace. The air, the sky, and the city view are all present, within a designed celebration space.",
      architecture: "The rooftop terrace uses the building's highest accessible level to maximise the visual and sensory interaction with the urban environment. The cityscape becomes a living backdrop.",
      photography: "Rooftop terrace photos are among the most dramatic we produce — the combination of elevation, sky backdrop, and celebration decoration creates images with exceptional depth and visual interest.",
      weather: "The rooftop terrace is optimised for Vadodara's best weather periods. Clear winter nights under fairy lights and stars is our signature rooftop terrace experience.",
      intimacy: "The elevated, semi-defined space of the rooftop terrace creates the 'island in the sky' quality that many couples describe as their most romantic setting.",
    },
  };

  const vi = venueInfo[slug] || venueInfo["rooftop-terrace"];

  const intro = `Venue is not just backdrop — it is experience. Where you celebrate shapes how you celebrate: what you feel, what you notice, what you remember. A ${kwl} at ${V} is a specific architectural and sensory experience as much as it is a romantic occasion.\n\n${vi.sensory}\n\nOur ${kwl} packages start from ${LOW} and include three hours of exclusive access to this space — entirely private, fully decorated for your occasion, with food, drinks, and music.`;

  const sections: FFCContentSection[] = [
    {
      heading: `The ${mod}: Architecture and Atmosphere`,
      content: `${vi.architecture}\n\n**The Photography Dimension**: ${vi.photography}\n\n**Weather and Season**: ${vi.weather}\n\n**Intimacy Quality**: ${vi.intimacy}\n\n**Decoration in This Space**: Our team adapts the decoration approach to work with this specific architecture. The ${mod.toLowerCase()}'s spatial characteristics determine how balloons are placed, where candles go, how fairy lights are strung, and where the primary photo zones are positioned. The decoration is designed for this space, not imported generically.\n\n**Capacity and Configuration**: The ${mod.toLowerCase()} is configured for couples — two people, complete privacy. Some packages allow up to four people. The space is oriented toward intimacy, not group events.`
    },
    {
      heading: `Packages for Your ${kwl}`,
      content: `${(slug === "glass-house" || slug === "indoor" || slug === "private-cabin")
        ? `**Glass House / Indoor Package Options**:\n\n**Golden Promise Glass House \u2014 ${formatPrice(6000)}**: Our most complete glass house package. The decoration is specifically designed to use the glass walls as part of the visual experience — reflections, light depth, candle multiplication. Complimentary cake.\n\n**Timeless Bond Glass House \u2014 ${formatPrice(5700)}**: The elegance of the glass house space with a classic romantic setup. The name is apt — there is something genuinely timeless about the quality of experience this venue produces.\n\n**Sweet Together Glass House \u2014 ${formatPrice(5500)}**: A warmer, slightly more playful setup within the glass house. The space takes a different register when the decoration palette shifts.\n\n**Pure Love Glass House \u2014 ${LOW}**: The full glass house architectural experience at our most accessible price. The venue itself is the primary experience — and it delivers regardless of the decoration tier.`
        : `**Rooftop / Outdoor Package Options**:\n\n**Forever Us LoveFrame Rooftop \u2014 ${formatPrice(6900)}**: Our signature package for the rooftop setting. The LoveFrame photo installation is positioned to use the rooftop's sky backdrop — the result is extraordinary. Complimentary cake. The most complete outdoor celebration we offer.\n\n**Eternal Love Rooftop \u2014 ${formatPrice(6500)}**: The canopy element of this package creates a sheltered, intimate zone within the open rooftop — the combination of shelter and openness is particularly romantic. Complimentary cake.\n\n**Moonlit Romance Experience \u2014 ${formatPrice(5100)}**: The name describes the optimal version of this package — a moonlit rooftop night with fairy lights and the city below. Our most atmospheric offering at this price point.\n\n**The Promise Creative Area \u2014 ${LOW}**: The outdoor experience at our most accessible price. The venue and the sky remain the primary experience.`}\n\nAll packages: 3 hours private venue, full decoration adapted for the ${mod.toLowerCase()}, welcome drinks, food menu, romantic music.`
    },
    {
      heading: `Booking Your ${kwl}`,
      content: `**Availability**: The ${mod.toLowerCase()} is available across all four time slots \u2014 Lunch (12\u20133 PM), Evening (4\u20137 PM), Dinner (7\u201310 PM), and Late Night (10 PM\u20131 AM). Each slot produces a different version of the ${mod.toLowerCase()} experience: the afternoon quality of light versus the evening transition versus the full night version.\n\n**Time Slot Recommendation**: ${slug === "glass-house" || slug === "indoor" || slug === "private-cabin" ? "The glass house / indoor setting is beautiful at any time, but the Dinner slot (7-10 PM) produces the most dramatic lighting contrast — the controlled indoor light against the darkness outside." : "The Dinner slot captures the transition from evening light to full night — the most spectacular version of the outdoor experience. Late Night is extraordinary on clear nights."}\n\n**Booking Process**: WhatsApp ${PH} with your date preference and mention you want the ${mod.toLowerCase()} specifically. We confirm availability, suggest the best package for your occasion, and lock the booking with advance payment.\n\n**Lead Time**: Book 4\u20135 days ahead for weekday slots. Weekend and festival dates require 7\u201314 days advance booking.\n\nThe ${mod.toLowerCase()} at ${V} is a celebration environment unlike anything else in ${C}. WhatsApp ${PH} to begin.`
    },
  ];

  return buildResult(ek, service, intro, sections);
}

function generateQualifierContent(ek: ExpandedKeyword, service: ServiceCategory): FFCKeywordContent {
  const kw = ek.title;
  const kwl = kw.toLowerCase();
  const mod = ek.modifierLabel;

  const qualifierContext: Record<string, { claim: string; evidence: string; differentiation: string }> = {
    best: {
      claim: "The word 'best' is easy to say and difficult to justify. Here is the evidence behind the claim for ${V} as the best ${service} in ${C}.",
      evidence: "4.9-star average across hundreds of verified Google reviews. Over 3,000 celebrations completed. Zero-hidden-charges policy verified by every guest who has booked. Consistent quality maintained across all time slots, all packages, all occasions.",
      differentiation: "The distinction between 'best' and 'good' comes down to the details that only become apparent in the comparison. At ${V}, the difference is: complete privacy (not semi-private), full decoration setup (not minimal), transparent pricing (not quoted-low-charged-high), and a team that has done this thousands of times (not a restaurant adapting).",
    },
    "top-rated": {
      claim: "Top-rated status in a city's restaurant and venue landscape is earned over time, through consistent delivery, and reflected in verified customer reviews. ${V} holds its 4.9-star rating across hundreds of reviews because the experience justifies it.",
      evidence: "Genuine reviews from real couples who celebrated here — across all service categories, all packages, all occasions. The rating has been maintained consistently because the underlying experience has been maintained consistently.",
      differentiation: "Top-rated means top among alternatives. The relevant comparison: ${V} versus restaurants with a private corner (not the same), versus other dedicated romantic venues (very few in ${C}), versus DIY arrangements (no service, no team, no guaranteed outcome).",
    },
    "highly-recommended": {
      claim: "Recommendation is the most honest form of endorsement — when someone who has experienced something tells another person to try it, with no incentive, that is genuine signal.",
      evidence: "The vast majority of new bookings at ${V} come through personal recommendation. Couples who celebrate here tell their friends. Friends book. This word-of-mouth network is the most reliable indicator of genuine quality.",
      differentiation: "Highly recommended means the experience consistently delivers at a level that motivates people to actively advocate for it. That motivation comes from two things: the experience exceeding expectations and the relative unavailability of comparable alternatives in ${C}.",
    },
    popular: {
      claim: "Popularity in the context of celebration venues is a meaningful quality signal — it means the venue is chosen repeatedly, by many different people, across many different occasions.",
      evidence: "Fully booked weekends and festival dates. Consistent demand across all four time slots. Repeat customers (couples who celebrate multiple occasions at the same venue). Growing booking volume year over year.",
      differentiation: "The most popular venue for a specific experience becomes popular because it does that experience better than alternatives. In ${C} for private romantic celebration, ${V} is the venue that couples consistently find and choose.",
    },
    "award-winning": {
      claim: "Recognition from third parties — review platforms, media, industry bodies — provides external validation of quality claims.",
      evidence: "Featured in regional media coverage of Vadodara's romantic dining and celebration scene. Consistently appearing at the top of platform searches for romantic venues in ${C}. Review volume and rating combination placing ${V} among Vadodara's top celebration venues.",
      differentiation: "The combination of quantity (3,000+ celebrations) and quality (4.9-star rating) is the most meaningful form of recognition — it means the experience delivers consistently at scale, not just occasionally under ideal conditions.",
    },
    trusted: {
      claim: "Trust, in the context of celebration planning, means: the experience will be what you were promised, your investment will produce the outcome you intended, and the people handling your special occasion understand its significance.",
      evidence: "No hidden charges, ever. Transparent pricing displayed publicly. Rescheduling policy that acknowledges life changes. A team that has handled thousands of celebrations and understands the emotional stakes.",
      differentiation: "Trust is earned through the absence of negative surprises. The most common complaint about celebration venue experiences is the gap between what was promised and what was delivered. ${V}'s consistency closes that gap.",
    },
  };

  const qc = qualifierContext[ek.modifier] || qualifierContext["best"];

  const claim = qc.claim.replace(/\${service}/g, service.name.toLowerCase()).replace(/\${C}/g, C);
  const evidence = qc.evidence.replace(/\${C}/g, C);
  const diff = qc.differentiation.replace(/\${C}/g, C);

  const intro = `When you search for the ${kwl}, you are asking a specific question: among all the options in ${C}, which one is actually worth choosing for this occasion? This page attempts to answer that question honestly.\n\n${claim}\n\nPackages start from ${LOW} and include everything — private venue, full decoration, food, drinks, 3 hours.`;

  const sections: FFCContentSection[] = [
    {
      heading: `The Evidence Behind "${mod}"`,
      content: `${evidence}\n\n${diff}\n\n**What Couples Say**: The language that appears most consistently in verified reviews of ${V} across years of celebrations:\n\n*"Walking in and seeing the setup — my partner was speechless. That moment alone was worth everything."*\n\n*"We have celebrated at multiple venues over the years. The difference here is the completeness — nothing feels missing, nothing feels added as an afterthought."*\n\n*"The privacy is genuinely different from what restaurants call private. We were the only people there. For three hours, the space was entirely ours."*\n\n*"The team handles everything. I told them the occasion and my partner's preferences and they executed it. I did not have to coordinate anything."*\n\nThese are not isolated responses — they reflect a consistent experience across thousands of celebrations.`
    },
    {
      heading: `${mod} ${service.name} Packages`,
      content: `The experience that earns the ${mod.toLowerCase()} designation is available at every price point:\n\n**Forever Us LoveFrame Rooftop \u2014 ${formatPrice(6900)}**: The LoveFrame installation is genuinely unique — it produces a specific visual effect that couples consistently describe as the most striking element of the setup. Complimentary cake. The rooftop elevation adds a spatial dimension that ground-level venues cannot match.\n\n**Eternal Love Rooftop \u2014 ${formatPrice(6500)}**: The canopy creates a sheltered private zone within the open rooftop — both intimate and expansive simultaneously. Complimentary cake.\n\n**Golden Promise Glass House \u2014 ${formatPrice(6000)}**: The glass house architecture is an experience in itself — the walls, the light refraction, the candle multiplication. Complimentary cake.\n\n**Mid-Range Options \u2014 ${formatPrice(5100)} to ${formatPrice(5700)}**: The same quality of experience with slightly less decoration complexity. The privacy, the service quality, and the team experience remain constant at every tier.\n\n**Starting from ${LOW}**: The ${mod.toLowerCase()} experience begins here — complete decoration, complete privacy, complete service.\n\nAll packages: 3 hours private venue, full setup, welcome drinks, food menu, music.`
    },
    {
      heading: `Booking the ${mod} ${service.name} Experience`,
      content: `**How to Book**: WhatsApp ${PH}. Share your preferred date, occasion, and approximate budget. Our team recommends the best package for your situation and confirms availability.\n\n**Lead Time**: 4\u20135 days for weekday slots. 7\u201314 days for weekends and festival dates. The ${mod.toLowerCase()} status means demand is consistent \u2014 book ahead.\n\n**The Process**: Advance payment confirms your booking. From that point, our team handles everything. You arrive to a fully realised celebration space. The outcome has been prepared by people who have done this thousands of times.\n\n**The Standard We Hold**: Every celebration at ${V} is treated as the only one happening that day for the team delivering it. The detail-checking, the setup quality, the decoration execution \u2014 these are consistent because our team's professional standards do not vary by package tier or day of week.\n\nTo book the ${mod.toLowerCase()} ${service.name.toLowerCase()} in ${C}: WhatsApp ${PH}.`
    },
  ];

  return buildResult(ek, service, intro, sections);
}

function generateHowtoContent(ek: ExpandedKeyword, service: ServiceCategory): FFCKeywordContent {
  const kw = ek.title;
  const kwl = kw.toLowerCase();

  const intro = `This is the complete insider guide to planning a ${service.name.toLowerCase()} in ${C} — written from 3,000+ actual celebrations at ${V}, not from generic event planning advice.\n\nMost planning guides tell you what to consider. This one tells you what actually matters, what frequently goes wrong, and how the couples who have the best experiences approach the process differently from those who don't. Everything here is based on real patterns observed across thousands of celebrations.`;

  const sections: FFCContentSection[] = [
    {
      heading: `Step 1: Decide What Kind of Experience You Want to Create`,
      content: `This is the step that most people skip, and it is the most important one. Before choosing a venue, a package, or a date, be specific about what emotional experience you are trying to create for your partner.\n\n**The most successful celebrations share one characteristic**: they are built around a specific emotional intention, not just an occasion. "I want my partner to feel genuinely surprised and loved" is more useful planning guidance than "I want to do something nice for their birthday."\n\n**Questions to answer before you book**:\n- Do you want your partner to feel more surprised or more included in the planning?\n- Is the visual spectacle of the setup the main gift, or is the experience the main gift?\n- What does your partner find romantic? (Some people find elaborate decoration profoundly romantic; others find it overwhelming and prefer intimacy.)\n- Are photos important to your partner? (This affects which packages and which time slots to prioritise.)\n- What is the occasion context? (First big celebration vs recurring milestone has different emotional weight.)\n\n**The honest answer to "How much should I spend?"**: The best predictor of celebration success is not the package price — it is the degree to which the setup matches what your specific partner finds meaningful. A ${LOW} package with a deeply personal touch will outperform a ${HIGH} package with generic execution every time.`
    },
    {
      heading: `Step 2: Choose the Right Venue and Time`,
      content: `**The Venue Decision**: ${V} offers two distinct venue types — rooftop (open-air, city views, elevated) and glass house (enclosed, glass-walled, intimate). These are genuinely different experiences, not just aesthetic variations.\n\nChoose **rooftop** if: your partner loves open air, the occasion is best experienced with spatial grandeur, you want the sky and city in the background, or the time slot is evening/night.\n\nChoose **glass house** if: your partner prefers enclosure and intimacy, the occasion calls for a private, sheltered quality, the visit is during monsoon season, or the candle-and-glass-reflection aesthetic is particularly appealing.\n\n**The Time Slot Decision**: This matters more than most people expect.\n\n*Lunch (12–3 PM)*: Natural light, casual energy, good for celebration types that feel more playful than romantic-solemn. The most available slot on weekdays.\n\n*Evening (4–7 PM)*: The golden-hour-to-dusk transition is the most photographically spectacular period. Ideal for couples who prioritise photos. The sky changes completely during these three hours.\n\n*Dinner (7–10 PM)*: The most popular slot. Full night, full fairy-light effect, maximum romantic atmosphere. The classic choice.\n\n*Late Night (10 PM–1 AM)*: The most exclusive feeling — the city has quieted, the rooftop is at its most still, the stars (when visible) are more prominent. For couples who value the unusual, this is the most memorable slot.`
    },
    {
      heading: `Step 3: Book, Personalise, and Prepare`,
      content: `**Booking**: WhatsApp ${PH} with your preferred date and time slot. Our team checks availability and recommends the best package for your occasion and budget. Advance payment locks your booking — typically done by UPI or bank transfer within 24 hours of confirming.\n\n**Lead Times That Actually Matter**:\n- Weekday slots: 3–4 days minimum, 5–7 days recommended\n- Weekend slots: 7 days minimum, 10+ days recommended\n- Valentine's Day / Diwali / New Year: 2–3 weeks minimum — these fill completely well in advance\n- If you are reading this 24 hours before: WhatsApp immediately and ask about same-day availability. It is limited but sometimes possible.\n\n**Personalisation That Makes the Difference**:\nThe personalisation elements that consistently produce the strongest partner responses are:\n1. Something that references a specific memory — a song, a place, a date that you both know\n2. Their name in the decoration (letter boards, framed prints, or balloon arrangements)\n3. A cake message that says something specific, not generic\n4. A piece of handwritten writing — a letter, a list of specific reasons, a recounting of a specific memory\n\n**What to Bring**: Your partner. Everything else is handled.\n\n**What to Tell Us When Booking**: Occasion, your partner's personality (extrovert who loves grand gestures vs introvert who prefers quiet), any songs that are significant, preferred decoration colour palette if you have one, and whether this is a surprise. The more specific you are, the more we can build around your actual relationship.`
    },
  ];

  return buildResult(ek, service, intro, sections);
}

function generateSeasonalContent(ek: ExpandedKeyword, service: ServiceCategory): FFCKeywordContent {
  const kw = ek.title;
  const kwl = kw.toLowerCase();
  const mod = ek.modifierLabel;
  const slug = ek.modifier;

  const seasonalInfo: Record<string, { atmosphere: string; venueRec: string; timing: string; sensory: string; photography: string }> = {
    summer: {
      atmosphere: "Vadodara summers are intense — the heat accumulates through the day, and the evening arrival of a cooler air is deeply felt. For celebration purposes, this means the Dinner and Late Night slots have a particular quality in summer: the day's heat has passed, and the evening air carries its own energy.",
      venueRec: "The glass house is climate-controlled and consistently comfortable. For rooftop celebrations in summer, the Late Night slot (10 PM–1 AM) is when the heat has genuinely cleared and the rooftop becomes extraordinary — the city settling into its night rhythm below.",
      timing: "May and June are Vadodara's peak summer months. The Evening slot is not recommended for rooftop in peak summer. Late Night rooftop in summer is genuinely spectacular.",
      sensory: "Summer evenings in Vadodara carry a distinctive quality — the specific scent of a city cooling after heat, the sounds of the evening, the quality of light during summer dusk. The rooftop in summer late-evening has a sensory richness that other seasons cannot replicate.",
      photography: "Summer twilight has a particularly vivid quality in Gujarat — the sky colours are often dramatic, and the heat creates a slight atmospheric haze that softens and enriches evening photography.",
    },
    monsoon: {
      atmosphere: "The Vadodara monsoon is among the most romantically charged atmospheric conditions in Gujarat. Rain creates a specific quality of enclosure — the world shrinks to what is immediately around you, sounds are softened by rainfall, and the air carries petrichor. A celebration during rain has its own irreplaceable character.",
      venueRec: "The glass house is the optimal monsoon venue — entirely enclosed, with glass walls that allow you to watch the rain while remaining completely dry and comfortable. The candle-and-glass-wall effect in monsoon conditions — with rain on the glass creating a moving backdrop — is one of the most romantic visual experiences we produce.",
      timing: "July through September in Vadodara. The glass house is fully weather-protected. Rooftop celebrations are possible on clear monsoon evenings — they sometimes occur between rain patterns — but the glass house is the reliable monsoon choice.",
      sensory: "Monsoon celebrations at the glass house involve a unique sensory dimension: the sound of rain against glass, the visual of water running down transparent walls, and the enclosed warmth of the decorated space contrasted against the dramatic weather outside.",
      photography: "Monsoon photos at the glass house have a particular quality — the rain on the glass walls creates a natural backdrop effect that no decoration team could produce. Combined with candle lighting, the results are extraordinary.",
    },
    winter: {
      atmosphere: "Vadodara winters are genuinely romantic — the cool, clear air, the particular quality of winter evening light, and the sense of the city settling into a different register. The rooftop in winter has a quality that the rest of the year cannot match: clear skies, the city spread below, and the specific feeling of cool air with warm fairy lights surrounding you.",
      venueRec: "The rooftop is the winter venue of choice at ${V}. The temperature is comfortable for outdoor celebration — cool enough to notice, not cold enough to be uncomfortable. The sky is clearer in winter, which means stars are more visible and the city spread below has better definition.",
      timing: "November through February is Vadodara's winter period. The Dinner slot (7–10 PM) and Late Night (10 PM–1 AM) are the most spectacular in winter — full night, clear sky, cool air, fairy lights.",
      sensory: "The winter rooftop experience is multi-layered: the physical sensation of cool air against warm fairy-light illumination, the visual of a clear winter sky above, the city spread below in its cool-season version. These sensory combinations are not available in any other season.",
      photography: "Winter rooftop photography has exceptional visual quality — the clear air reduces atmospheric haze, the city lights below are crisp and defined, and the cool colour temperature of the night sky creates natural contrast with the warm tones of the celebration space.",
    },
    "rainy-season": {
      atmosphere: "The rainy season extends the monsoon's romantic qualities — the specific combination of water, cool air, and the city in its greenest, most saturated version. A rainy-season celebration has a sensory richness that dry-season celebrations simply do not.",
      venueRec: "The glass house is strongly recommended for rainy season celebrations. The rain-against-glass backdrop is a feature, not a problem — it creates a dynamic visual environment that complements the decoration.",
      timing: "Rainy season in Vadodara runs approximately July through September. Book the glass house with confidence during this period.",
      sensory: "Rain sound, petrichor through briefly opened air vents, the visual of active rainfall visible through glass walls — these sensory elements are rainy-season exclusives that couples consistently describe as among the most atmospherically rich aspects of their celebration.",
      photography: "Rainy season glass house photos have a distinctive atmospheric quality — the rain on the glass creates natural depth effects in backgrounds that are unique to this season.",
    },
    weekend: {
      atmosphere: "The weekend changes the emotional texture of celebration. There is no work tomorrow, no early alarm, no scheduled Monday obligations. This psychological release changes how present couples are during the celebration — weekend celebrations consistently produce more relaxed, more connected, more lingering experiences.",
      venueRec: "Both rooftop and glass house work beautifully for weekend celebrations. The Evening slot (4–7 PM) on weekends is particularly popular — it captures the full day's relaxed energy transitioning into evening.",
      timing: "Saturdays and Sundays book fastest. Contact us 7–10 days ahead for weekend slots. Festival weekends need 2–3 weeks notice.",
      sensory: "Weekend celebrations have a specific unhurried quality — the awareness that tomorrow has no mandatory claim on you allows the three hours to be experienced more fully. Couples linger at the table, they are not monitoring the time anxiously.",
      photography: "Weekend celebrations tend to produce more relaxed, more spontaneous photos — the reduced time pressure means couples are less aware of the camera and more present with each other.",
    },
    weeknight: {
      atmosphere: "Weeknight celebrations have a quality that is genuinely different from weekends — they feel like a deliberate interruption of ordinary routine. The fact of celebrating on a Tuesday evening, when both people could have had a routine day, gives the celebration a particular intentionality.",
      venueRec: "Weeknight availability is consistently better than weekends. The Dinner slot on weeknights often has a specific quality — a quieter city outside, a more focused quality to the celebration.",
      timing: "Monday through Thursday are the most available. Friday starts to fill like a weekend. Same-week booking is often possible for weeknight slots.",
      sensory: "Weeknight celebrations have the specific pleasure of the unexpected — the contrast between the ordinary week and the suddenly extraordinary evening produces a quality of surprise even when the celebration is planned.",
      photography: "Weeknight rooftop photography benefits from the quieter city below — fewer vehicle headlights creating motion blur, a more settled visual environment.",
    },
    "long-weekend": {
      atmosphere: "Long weekends have a particular quality of temporal expansion — the extra day extends the relaxed weekend feeling and makes celebration feel naturally appropriate. The public holiday context also means more couples are available on the same day, creating a collectively celebratory atmosphere.",
      venueRec: "Both venues are available for long weekends. Book early — long weekends are among our most in-demand periods.",
      timing: "Long weekends in India (Republic Day, Independence Day, Gandhi Jayanti, and various regional holidays) fill very quickly. Book 2–3 weeks in advance for these dates.",
      sensory: "Long weekend celebrations have the most relaxed energy of any time slot — the knowledge of a day remaining afterward removes any time pressure, and couples consistently describe a quality of ease that is distinctive.",
      photography: "Long weekend photos tend to have a relaxed, genuine quality — unhurried and present.",
    },
    holiday: {
      atmosphere: "Public holiday celebrations carry a festive ambient atmosphere — the city itself is in a different register, and private celebrations connect to that collective mood.",
      venueRec: "Both venues are beautiful for holiday celebrations. The specific holiday context may suggest a venue preference — outdoor rooftop for warm-weather holidays, glass house for the cosy indoor quality of some occasions.",
      timing: "Holiday dates require advance booking — typically 1–2 weeks minimum. Contact us as soon as you decide on a holiday celebration.",
      sensory: "Holiday celebrations combine the private romantic atmosphere with awareness of the larger cultural occasion — a pleasant doubling of celebratory context.",
      photography: "Holiday photos sometimes incorporate the festive context outside the venue — city decorations visible from the rooftop, for instance — creating a layered visual record.",
    },
  };

  const si = seasonalInfo[slug] || seasonalInfo["weekend"];
  const atm = si.atmosphere.replace(/\$\{V\}/g, V);

  const intro = `Season and timing are part of the celebration experience — they shape the atmosphere, the sensory environment, and the emotional texture of what you share. A ${kwl} at ${V} is not just a celebration of your relationship but a specific encounter with a particular moment in the year.\n\n${atm}\n\nPackages from ${LOW} include private venue, full decoration, food, drinks, and 3 hours.`;

  const sections: FFCContentSection[] = [
    {
      heading: `The ${mod} Experience at ${V}`,
      content: `**Venue Recommendation**: ${si.venueRec.replace(/\$\{V\}/g, V)}\n\n**Timing**: ${si.timing}\n\n**The Sensory Dimension**: ${si.sensory}\n\n**Photography**: ${si.photography}\n\n**What We Adapt for ${mod}**: Our decoration team considers the ${mod.toLowerCase()} context when designing your setup. Colour palettes that complement the season. Lighting that accounts for the quality of ${mod.toLowerCase()} light. Placement choices that use the ${mod.toLowerCase()} environment rather than ignoring it.\n\nA ${kwl} at ${V} is not a generic celebration placed in a seasonal container — it is a celebration that genuinely engages with when it is happening.`
    },
    {
      heading: `Packages for Your ${kwl}`,
      content: `**Forever Us LoveFrame Rooftop \u2014 ${formatPrice(6900)}**: ${slug === "monsoon" || slug === "rainy-season" ? "Best in glass house configuration for this season." : "The rooftop's most complete package — ideal for clear-weather seasonal celebrations."} Complimentary cake.\n\n**Eternal Love Rooftop \u2014 ${formatPrice(6500)}**: The canopy provides partial shelter — good for transitional seasonal conditions. Complimentary cake.\n\n**Golden Promise Glass House \u2014 ${formatPrice(6000)}**: The glass house is the all-season reliable choice — beautiful regardless of weather. Complimentary cake.\n\n**Mid-Range Options \u2014 ${formatPrice(5100)} to ${formatPrice(5700)}**: Complete ${mod.toLowerCase()} celebration at more accessible price points. Same season-adapted decoration philosophy.\n\n**From ${LOW}**: The complete ${kwl} experience. Season is present in the setup regardless of package tier.\n\nAll packages: 3 hours private venue, full decoration, welcome drinks, food, music.`
    },
    {
      heading: `Booking Your ${kwl}`,
      content: `**When to Book**: ${si.timing}\n\n**How to Book**: WhatsApp ${PH} with your preferred date. Mention you want the ${mod.toLowerCase()} experience specifically \u2014 this helps our team make venue and time recommendations that are optimal for the season.\n\n**Weather Contingency**: For outdoor/rooftop ${mod.toLowerCase()} celebrations, we monitor conditions and communicate any concerns in advance. For monsoon and rainy season, we have the glass house as the reliable alternative. We do not cancel celebrations due to weather without providing an equal alternative.\n\nTo book your ${kwl}: WhatsApp ${PH} today.`
    },
  ];

  return buildResult(ek, service, intro, sections);
}

function generateStyleContent(ek: ExpandedKeyword, service: ServiceCategory): FFCKeywordContent {
  const kw = ek.title;
  const kwl = kw.toLowerCase();
  const mod = ek.modifierLabel;

  const styleContext: Record<string, { platform: string; whyWorks: string; technique: string; bestSlot: string }> = {
    instagram: {
      platform: "Instagram favours vertical composition, saturated colour, and visual storytelling with clear focal points. Every element of our celebration setup is designed with these principles in mind.",
      whyWorks: "The balloon walls create natural vertical focal planes. The fairy light arrangements create depth through point-light effects. The candles add warm colour contrast that the Instagram algorithm historically rewards. The multiple photo zones provide variety for a complete story-telling set rather than a single repetitive image.",
      technique: "For Instagram: shoot toward the balloon wall with your partner in the foreground, using the candle arrangement as middle-ground depth. The vertical format is your primary frame. Use Portrait mode for subject focus with decoration blur.",
      bestSlot: "The Evening slot (4–7 PM) captures golden hour natural light transitioning to fairy light — the most Instagram-optimal lighting transition available at our venue.",
    },
    "photo-worthy": {
      platform: "A photo-worthy space is one where the visual environment does significant work — where a good image requires minimal skill because the setting is already composed. Our venue is designed to be photo-worthy in this sense.",
      whyWorks: "The decoration layering creates natural depth. The multiple light sources (fairy lights, candles, spotlights) eliminate the flat, harsh quality that kills indoor photography. The colour palette of each setup is photographically considered — warm tones that render well, contrast ratios that maintain detail in both highlight and shadow.",
      technique: "For general photo-worthy shots: use the overhead fairy light arrangement as your background when shooting from below, or the balloon wall as your background when shooting from the side. Move around the space — each angle produces a substantially different image.",
      bestSlot: "Dinner slot (7–10 PM) is the peak photo-worthy period — full fairy light effect, no competing natural light, maximum controlled atmosphere.",
    },
    "candlelight-setup": {
      platform: "Candlelight photography is among the most technically demanding and aesthetically rewarding types of indoor photography. The challenge is the contrast between the bright flame and the dark surrounding. The reward is the warmth and depth that no electric lighting can fully replicate.",
      whyWorks: "Our candlelight setups use graduated candle heights to distribute light across multiple planes, reducing the contrast problem. The glass holders diffuse the flame slightly, creating a softer, more even light source. Multiple candle clusters rather than single sources create ambient fill light.",
      technique: "For candlelight photography: shoot at f/1.8 or wider if possible, ISO 800–1600, and a shutter speed of 1/60 or faster to prevent motion blur. The camera should expose for the subject's face rather than the candles — let the candles slightly overexpose in the frame.",
      bestSlot: "The Dinner slot produces the most dramatic candlelight photography — the contrast between candle warmth and the night outside creates maximum visual impact.",
    },
    "aesthetic-decoration": {
      platform: "Aesthetic, in contemporary visual culture, means intentionally designed rather than merely decorated — each element placed for visual effect rather than just presence. Our setups are designed with aesthetic intentionality.",
      whyWorks: "The colour coordination across all decoration elements. The three-dimensional depth of the setup (ceiling elements, mid-height balloons, ground-level candles and rose petals). The proportion and spacing between elements. The overall visual balance of the completed space.",
      technique: "For aesthetic photography: seek out the angles where multiple decoration layers are visible simultaneously — foreground, middle-ground, and background all containing visual interest. These layered shots demonstrate the designed quality of the space.",
      bestSlot: "Any slot produces aesthetic-quality images at ${V}, but the Evening slot captures the most complex lighting environment — natural and artificial simultaneously.",
    },
    "fairy-lights": {
      platform: "Fairy lights have become the signature visual element of romantic photography — thousands of small light points that create a floating, ambient environment unlike any other light source. The bokeh effect of out-of-focus fairy lights is among the most sought-after visual effects in contemporary romantic photography.",
      whyWorks: "Our fairy light arrangements use multiple independent strands at different heights and densities, creating the layered depth effect that maximises the bokeh potential. The warm white colour temperature is specifically chosen for romantic photography — it renders skin warmly and creates emotional associations with intimacy.",
      technique: "For fairy light photography: position your partner with the fairy lights behind them and shoot with a wide aperture (f/1.8–f/2.8). The out-of-focus lights become large, soft circles (bokeh). The wider the aperture, the larger and softer the circles. Move closer to your partner to increase the relative size of the bokeh.",
      bestSlot: "Dinner or Late Night — full dark provides maximum fairy light contrast and the most dramatic bokeh effect.",
    },
    "balloon-decoration": {
      platform: "Balloon installations have evolved dramatically from birthday party decorations to sophisticated architectural elements. Our balloon setups are designed as visual installations — three-dimensional objects that create space, frame subjects, and provide visual complexity.",
      whyWorks: "The balloon wall is the most photographically versatile element of our setup — it functions as a complete backdrop, as a subject in itself, and as a colour field that interacts with the subjects in front of it. The gradient colour arrangements and mixed matte/metallic finishes create visual depth in a flat plane.",
      technique: "For balloon photography: experiment with the distance between your subject and the balloon wall. Close proximity creates an intimate connection between subject and backdrop. Increased distance allows the subject to stand out more clearly. Side lighting from candles creates surface texture in the balloons that flat frontal lighting eliminates.",
      bestSlot: "Any slot — balloon colour renders beautifully in all lighting conditions at our venue.",
    },
    "romantic-ambiance": {
      platform: "Ambiance is the quality of a space that photographs as feeling rather than just appearance — the visual equivalent of how the space feels to be inside. Creating ambiance in photography requires attending to all elements simultaneously rather than any single one.",
      whyWorks: "Our romantic ambiance setups are built for this total-environment quality. The layered light sources, the colour-coordinated decoration, the combination of floral and textile and light elements — together they create a visual environment with an unmistakeable emotional quality that photographs as feeling.",
      technique: "For ambiance photography: capture wide shots that include as much of the environment as possible alongside the subjects — the ambiance is in the totality of the space, not in any single element. Then move closer for detail shots: the candle flame, the rose petals, the fairy lights, each of which contributes to the total.",
      bestSlot: "Dinner slot — the complete controlled atmospheric lighting is most fully realised in the evening slot.",
    },
  };

  const sc = styleContext[ek.modifier] || styleContext["romantic-ambiance"];
  const platform = sc.platform.replace(/\$\{V\}/g, V);
  const technique = sc.technique.replace(/\$\{V\}/g, V);
  const bestSlot = sc.bestSlot.replace(/\$\{V\}/g, V);

  const intro = `A ${kwl} at ${V} is designed to be visually extraordinary — not as a secondary consideration but as a primary design principle. Every decoration element, every lighting choice, and every setup configuration is made with photographic quality in mind. The result is a space where even phone cameras consistently produce stunning images.\n\n${platform}\n\nPackages from ${LOW} include the complete ${mod.toLowerCase()} setup with multiple dedicated photo zones.`;

  const sections: FFCContentSection[] = [
    {
      heading: `Why ${mod} Photography Works at ${V}`,
      content: `${sc.whyWorks}\n\n**The Photo Zone Strategy**: Rather than one photo spot, our setups include 3–4 distinct visual environments within the same celebration space. This provides variety for a complete set of images rather than multiple versions of the same shot.\n\n**Primary Zone**: The balloon wall or main decorated backdrop — vertical composition, strong colour, the signature photo of the celebration.\n\n**Candle Zone**: The table setting with candle arrangements — intimate, warm, showing the dining environment.\n\n**Detail Zone**: Rose petals, individual candles, flower arrangements — close-up shots that document the decoration quality.\n\n**Couple Zone**: A spot optimised for couple photos together — typically where the fairy lights are densest and the background has the most depth.\n\n**Best Time Slot for ${mod} Photography**: ${bestSlot}`
    },
    {
      heading: `Photography Techniques for Your ${kwl}`,
      content: `${technique}\n\n**General Tips from 3,000+ Celebrations**:\n\n*Don't rush*: The best photos from celebrations at ${V} are rarely taken in the first few minutes. Allow the initial excitement to settle, then return to photography when you are both more relaxed and present. The space will look the same; the photos will be better.\n\n*Vertical orientation*: For social media use, shoot vertically from the start. The balloon walls and fairy light arrangements are specifically designed for vertical composition.\n\n*Natural moments*: The decorated space is striking, but the most compelling celebration photos are of people genuinely enjoying each other rather than posed for the camera. Move between documentary (candid, natural) and portrait (posed, camera-aware) shooting.\n\n*Bring your camera if you have one*: Our venue is designed for phone cameras but rewards professional equipment. A mirrorless or DSLR camera with a fast prime lens (35mm or 50mm at f/1.8) will produce extraordinary images in our lighting environment.`
    },
    {
      heading: `Book Your ${kwl}`,
      content: `The ${mod.toLowerCase()} setup at ${V} is available in all eight packages, starting from ${LOW}. The photographic quality is consistent across all tiers — what changes between packages is the complexity of the decoration, not the photographic intelligence of the design.\n\n**Package Recommendations for ${mod} Photography**:\n\n**Forever Us LoveFrame Rooftop \u2014 ${formatPrice(6900)}**: The LoveFrame installation creates a unique visual element — a framed photo composition that no other setup provides. The rooftop backdrop adds the city skyline. Complimentary cake.\n\n**Eternal Love Rooftop \u2014 ${formatPrice(6500)}**: The canopy element creates an overhead visual frame — useful for wide shots that want ceiling definition. Complimentary cake.\n\n**Golden Promise Glass House \u2014 ${formatPrice(6000)}**: The glass walls create unique photographic opportunities — reflections, light depth, and the distinctive glass-house aesthetic. Complimentary cake.\n\n**From ${LOW}**: The ${mod.toLowerCase()} setup starts here. The photographic design principles apply at every tier.\n\nTo book your ${kwl}: WhatsApp ${PH} with your date preference.`
    },
  ];

  return buildResult(ek, service, intro, sections);
}

function generateNearmeContent(ek: ExpandedKeyword, service: ServiceCategory): FFCKeywordContent {
  const kw = ek.title;
  const kwl = kw.toLowerCase();

  const intro = `When someone searches for "${kwl}", they are asking a location question with an emotional answer. They want what they want, and they want it accessible — not a destination that requires a cross-city commitment. ${V} in Gotri is designed to serve this need: premium private romantic celebration, accessible from every part of ${C}.\n\nThe full address: 424, OneWest, Asopalav W, 4th Floor, Priya Talkies Road, Gotri, Vadodara 391101. From most of ${C}'s major residential areas, the drive is 10–25 minutes. The three hours you spend celebrating are a longer journey than the transit to get there.\n\nPackages from ${LOW} include private venue, full decoration, food, drinks, and 3 hours.`;

  const sections: FFCContentSection[] = [
    {
      heading: `Getting to ${V} from Across ${C}`,
      content: `**From Alkapuri / Race Course**: Approximately 15–20 minutes via RC Dutt Road toward Gotri. This is one of the more direct routes from the city's established residential areas.\n\n**From Akota / Sayajigunj**: Approximately 15–20 minutes via Akota Garden Road. A straightforward route through central Vadodara.\n\n**From Fatehgunj / Karelibaug**: Approximately 20–25 minutes via Waghodia Road or through the city. A slightly longer drive that still sits well within the commute couples consider reasonable for a private celebration.\n\n**From Gotri / Sevasi**: 5–10 minutes. This is our immediate neighbourhood — the shortest possible commute.\n\n**From Manjalpur / Waghodia Road**: Approximately 20–25 minutes via the Ring Road or Waghodia Road through the city.\n\n**From Sama / Harni / Atladara**: Approximately 15–20 minutes via the Ring Road sections connecting to Gotri.\n\n**Navigation**: Search "Friends Factory Cafe Vadodara" on Google Maps. The listing is verified and directions are accurate from any starting point in Vadodara.\n\n**Parking**: Street parking is available near the OneWest building. Auto-rickshaws and cabs drop directly at the building entrance.\n\n**Building Access**: 4th floor of the OneWest building. Elevator available.`
    },
    {
      heading: `Why the Nearme Search Leads Here`,
      content: `The "near me" search for romantic celebration venues reflects a specific combination of needs: you want the experience to be genuinely premium (not just the nearest option that calls itself romantic), you want it accessible (not requiring a planned expedition), and you want it private (not a restaurant that can accommodate a request but isn't designed for it).\n\n${V} is designed to serve exactly this combination. It is in the city — accessible from everywhere — and it is not a compromise. The rooftop and glass house venues are designed specifically for private couple celebrations. The food, the decoration, the service team — all of it is built for this purpose.\n\n**What "Near Me" Actually Delivers at ${V}**:\n\n**Genuine Privacy**: Not a partitioned restaurant section but a dedicated private venue that is yours alone for 3 hours.\n\n**Professional Setup**: A team that has executed 3,000+ celebrations — decorations, coordination, food service — handled completely.\n\n**Transparent Pricing**: Starting from ${LOW}, with everything included. What you see is what you pay.\n\n**Accessible Booking**: WhatsApp ${PH} and get a response within minutes. No phone tree, no reservation system, no waiting.\n\nThe best ${kwl} is not the nearest one on a map — it is the one that delivers the experience you are actually looking for, at a distance you are comfortable with. For most of ${C}, that is ${V}.`
    },
    {
      heading: `Booking Your ${kwl}`,
      content: `**How**: WhatsApp ${PH}. Share your preferred date, time slot, and occasion. Our team responds within minutes and walks you through the options.\n\n**Lead Time**: Weekday bookings: 3–4 days recommended. Weekend bookings: 5–7 days. Same-day availability is sometimes possible on weekdays — WhatsApp to check.\n\n**Packages**: From ${LOW} (The Promise Creative Area, Pure Love Glass House) to ${HIGH} (Forever Us LoveFrame Rooftop with cake). Eight total options across two venue types and four price tiers.\n\n**Time Slots**: Lunch (12–3 PM), Evening (4–7 PM), Dinner (7–10 PM), Late Night (10 PM–1 AM). All four are available. The Dinner slot is our most popular.\n\nTo book your ${kwl} at ${V}: WhatsApp ${PH}.`
    },
  ];

  return buildResult(ek, service, intro, sections);
}

function generatePriceContent(ek: ExpandedKeyword, service: ServiceCategory): FFCKeywordContent {
  const kw = ek.title;
  const kwl = kw.toLowerCase();
  const slug = ek.modifier;

  const priceDetails: Record<string, { headline: string; packages: string; insight: string }> = {
    "under-5000": {
      headline: "Two packages sit under ₹5,000 and neither is a compromise.",
      packages: `**The Promise Creative Area — ${LOW}**: Our tent-style creative area setup. Full decoration with balloon arrangement, fairy lights, candles, rose petal pathway. Welcome drinks, complete food menu, 3 hours private access. Cake available as an add-on at ₹350.\n\n**Pure Love Glass House — ${LOW}**: The glass house architectural experience at the most accessible price point. White-tone decoration palette in the glass-walled space. Complete inclusions: drinks, food, music, 3 hours.`,
      insight: `The most common misconception about celebration packages under ₹5,000 is that they represent a diminished version of the premium experience. At ${V}, the core experience — complete privacy, professional decoration, food and drinks, the venue itself — is present at every tier.`,
    },
    "under-6000": {
      headline: "Five packages sit under ₹6,000 — here is what each one delivers.",
      packages: `**Pure Love Glass House — ${LOW}**: Glass house, white-tone decoration, complete food and drinks.\n\n**The Promise Creative Area — ${LOW}**: Tent-style creative area with full decoration.\n\n**Moonlit Romance Experience — ${formatPrice(5100)}**: Enhanced decoration complexity.\n\n**Sweet Together Glass House — ${formatPrice(5500)}**: The glass house with a warmer, more playful decoration palette.\n\n**Timeless Bond Glass House — ${formatPrice(5700)}**: The most elegant glass house option under ₹6,000.`,
      insight: `Below ₹6,000, all five options include the complete core experience: private venue, professional decoration, welcome drinks, the full food menu, romantic music, and 3 hours. The decision between them is primarily aesthetic.`,
    },
    "under-7000": {
      headline: `All eight packages at ${V} are under ₹7,000 — here is the complete picture.`,
      packages: `**From ${LOW}**: Pure Love Glass House and The Promise Creative Area.\n**${formatPrice(5100)}**: Moonlit Romance Experience.\n**${formatPrice(5500)}**: Sweet Together Glass House.\n**${formatPrice(5700)}**: Timeless Bond Glass House.\n**${formatPrice(6000)}**: Golden Promise Glass House (cake included).\n**${formatPrice(6500)}**: Eternal Love Rooftop (cake included).\n**${formatPrice(6900)}**: Forever Us LoveFrame Rooftop (cake included, LoveFrame installation).`,
      insight: `Under ₹7,000 covers the complete range of celebration experiences at ${V} — from accessible to premium.`,
    },
    "5000-to-7000": {
      headline: "The ₹5,000–₹7,000 range contains our most popular packages.",
      packages: `**Moonlit Romance Experience — ${formatPrice(5100)}**: Entry into enhanced decoration territory.\n\n**Sweet Together Glass House — ${formatPrice(5500)}**: Glass house with warm decoration aesthetic.\n\n**Timeless Bond Glass House — ${formatPrice(5700)}**: Classic romantic elegance.\n\n**Golden Promise Glass House — ${formatPrice(6000)}**: Most complete glass house package. Complimentary cake.\n\n**Eternal Love Rooftop — ${formatPrice(6500)}**: Open-air rooftop canopy. Complimentary cake.\n\n**Forever Us LoveFrame Rooftop — ${formatPrice(6900)}**: Our signature. LoveFrame installation, rooftop, complimentary cake.`,
      insight: `This range is where most couples who want both a premium experience and considered value end up. The packages between ₹5,000 and ₹7,000 represent the full range of our venue types and decoration styles.`,
    },
  };

  const pd = priceDetails[slug] || priceDetails["under-7000"];

  const intro = `Price transparency is a policy at ${V}. The price we quote for your ${kwl} is the price you pay — no service charges added at checkout, no mandatory gratuity, no decoration fees on top of the package price.\n\n${pd.headline}\n\nAll packages from ${LOW} include private venue, full decoration, welcome drinks, complete food menu, romantic music, and 3 hours of exclusive access.`;

  const sections: FFCContentSection[] = [
    {
      heading: `${service.name} Packages ${ek.modifierLabel}: What You Get`,
      content: pd.packages + "\n\n" + pd.insight,
    },
    {
      heading: `What Is Included at Every Price Point`,
      content: `Regardless of which ${kwl} package you choose, every booking includes:\n\n**3 Hours Private Venue**: The space is exclusively yours. No other guests, no shared access.\n\n**Complete Decoration Setup**: Balloon arrangement, fairy lights, candles, rose petal pathway, table setting. Our team arrives 2–3 hours before your slot to complete full setup.\n\n**Welcome Drinks**: On arrival, your celebration begins immediately.\n\n**Food Menu**: Cheese fondue with bread, paneer tortilla wrap, peri peri fries with mac & cheese, chocolate brownie, and two signature mocktails. Veg and Jain options available.\n\n**Romantic Music**: A curated playlist. You can request specific songs.\n\n**Dedicated Service**: A team member is present throughout for food service and any requirements.\n\n**What Differs Between Packages**: Decoration complexity, venue type (glass house vs rooftop), and whether complimentary cake is included (Golden Promise, Eternal Love, Forever Us).`
    },
    {
      heading: `Booking Your ${kwl}`,
      content: `WhatsApp ${PH} with your occasion, preferred date, and approximate budget. Our team recommends the best match from the ${kwl} range and confirms availability.\n\nLead time: 3–5 days for weekday slots. 7–10 days for weekends. Festival dates require 2–3 weeks advance booking.\n\nTo book your ${kwl} at ${V}: WhatsApp ${PH}.`
    },
  ];

  return buildResult(ek, service, intro, sections);
}

function generateRelationshipContent(ek: ExpandedKeyword, service: ServiceCategory): FFCKeywordContent {
  const kw = ek.title;
  const kwl = kw.toLowerCase();
  const mod = ek.modifierLabel;

  const relationshipContext: Record<string, { truth: string; specifics: string; packageRec: string }> = {
    "for-newly-married": {
      truth: "Newlywed couples are in a particular phase: the wedding is complete, the honeymoon is over, and ordinary life has resumed. But the intensity of the wedding period still lingers. A post-wedding celebration at a private venue is a way to extend that intensity deliberately — to have one more occasion that feels ceremonial before settling fully into the married rhythm.",
      specifics: "Newlywed celebrations at ${V} often include elements that reference the wedding — the same colours, a cake message that continues from the wedding cake, a photo display from the ceremony. The venue provides a space that feels as significant as the wedding events without requiring the same scale of coordination.",
      packageRec: "The LoveFrame Rooftop (${formatPrice(6900)}) is particularly popular with newlyweds — the framed photo installation creates a visual record of the first celebration after the wedding. Golden Promise Glass House (${formatPrice(6000)}) suits couples who want an intimate, just-us continuation of the wedding mood.",
    },
    "for-engaged-couples": {
      truth: "The engagement period is underappreciated romantically. The couple is past the proposal but before the wedding — in a sustained romantic anticipation. Celebrating during the engagement honours this specific phase and creates memories of a period that will be over once the wedding happens.",
      specifics: "Engagement celebration setups at ${V} can be oriented toward the upcoming wedding — but many engaged couples prefer something that is purely about the present rather than in preparation for the future. A celebration of being engaged, not of being about-to-be-married.",
      packageRec: "Eternal Love Rooftop (${formatPrice(6500)}) is popular with engaged couples — the canopy setup has a forward-looking quality, like a pavilion for things to come. The glass house options work well for couples who want an intimate, just-us celebration of the engagement itself.",
    },
    "for-dating-couples": {
      truth: "Dating couples face a specific challenge in celebration: the pressure to impress is high, the budget constraints are often real, and the relationship is still establishing its rituals. A private venue celebration changes the dynamic completely — it removes the mediocre-restaurant ceiling and provides a genuinely remarkable experience at the same or lower cost.",
      specifics: "The most consistent thing dating couples tell us after celebrating at ${V}: 'The setup made everything feel serious in the best way.' The private venue signals investment and intentionality — it communicates that the relationship is worth treating as a special occasion.",
      packageRec: "Moonlit Romance Experience (${formatPrice(5100)}) is the most popular package for dating couples — it balances impressive setup with accessible pricing. The Promise Creative Area (${LOW}) is the best entry-level option for couples who want to experience the private venue concept before committing to a premium package.",
    },
    "for-long-term-couples": {
      truth: "Long-term couples face the specific challenge of celebration fatigue — the sense that there is no occasion special enough to merit real effort, or that the effort of marking occasions has diminished over years. This is the celebration context where the environment matters most, because the emotional stakes require something genuinely new.",
      specifics: "Long-term couple celebrations at ${V} work best when they deliberately break from routine. If you have been going to the same restaurant for years, the private venue is a rupture from that habit — it signals that this occasion is being treated differently. Couples who have been together for five or ten years report some of their most connected evenings at private celebration venues precisely because the setting removes the habitual from the occasion.",
      packageRec: "Forever Us LoveFrame Rooftop (${formatPrice(6900)}) is particularly meaningful for long-term couples — the framing of the celebration has an intentional quality that suits the depth of a long relationship. For couples wanting something more intimate and reflective, the glass house options create the right atmosphere for a quieter, more introspective celebration.",
    },
  };

  const rc = relationshipContext[ek.modifier] || {
    truth: `Every stage of a relationship has its own character, and the way you celebrate should reflect who you are together at this specific point.`,
    specifics: `Our team has extensive experience creating celebrations for couples at every stage — from first major date to golden anniversary.`,
    packageRec: `All eight packages (${LOW} to ${formatPrice(6900)}) are available. We can recommend based on your relationship stage and what you want to communicate.`,
  };

  const truth = rc.truth.replace(/\$\{V\}/g, "Friends Factory Cafe");
  const specifics = rc.specifics.replace(/\$\{V\}/g, "Friends Factory Cafe");
  const pkgRec = rc.packageRec.replace(/\$\{V\}/g, "Friends Factory Cafe");

  const intro = `Relationships are not generic, and neither are the celebrations that honour them. A celebration for newly-married couples is a different emotional event from the same celebration for long-term partners — the stakes, the tone, and the appropriate expression are all different. At ${V}, we understand this and design accordingly.\n\n${truth}\n\nPackages from ${LOW} include private venue, full decoration, food, drinks, and 3 hours.`;

  const sections: FFCContentSection[] = [
    {
      heading: `Celebrating ${mod}: The Specific Context`,
      content: `${specifics}\n\n**What Changes for ${mod} Celebrations**:\n\nThe personalisation requests are different. The emotional register of the setup can be calibrated differently — more playful and energetic for early-stage relationships, more reflective and ceremonial for long-term ones. The music can be oriented differently. The cake message can say something specific to your stage rather than something generic.\n\nWhen you book, tell us where you are in your relationship and what you want the celebration to communicate. We will use that to make specific setup recommendations — within whatever package you choose.`,
    },
    {
      heading: `Package Recommendations ${mod}`,
      content: `${pkgRec}\n\n**Full Package Range for Your ${kwl}**:\n\nEvery package includes 3 hours private venue, complete decoration, welcome drinks, food menu, romantic music, and dedicated service. The difference between packages is decoration complexity and venue type, not quality of experience.\n\nAll packages: ${LOW} (base) to ${formatPrice(6900)} (Forever Us LoveFrame Rooftop with cake).`,
    },
    {
      heading: `Booking Your ${kwl}`,
      content: `WhatsApp ${PH} with your relationship stage context and what you are celebrating. Our team will recommend the most appropriate setup and package.\n\nLead time: 4–5 days for weekday slots, 7–10 days for weekends.\n\nThe most important thing to share when booking a ${kwl}: not just the occasion but what you want your partner to feel when they walk in. That emotional intention shapes the specific setup recommendations we make.\n\nTo book: WhatsApp ${PH}.`,
    },
  ];

  return buildResult(ek, service, intro, sections);
}

function generateBookingContent(ek: ExpandedKeyword, service: ServiceCategory): FFCKeywordContent {
  const kw = ek.title;
  const kwl = kw.toLowerCase();
  const mod = ek.modifierLabel;

  const bookingContext: Record<string, { headline: string; process: string; urgency: string }> = {
    "same-day-booking": {
      headline: "Same-day bookings are possible at ${V} — with important caveats about availability and setup time.",
      process: `**Right now**: WhatsApp ${PH} and ask specifically about same-day availability. Mention your preferred time slot. Our team checks current bookings and responds immediately.\n\n**If available**: We confirm the slot and request advance payment via UPI within 30 minutes. From payment, our setup team begins preparation.\n\n**Minimum lead time**: We need at least 2–3 hours from booking confirmation to complete the decoration setup. A booking at 4 PM can be ready for a Late Night slot (10 PM). A booking at 1 PM can be ready for a Dinner slot (7 PM).\n\n**What same-day includes**: The same full decoration setup as advance bookings. We do not offer a reduced setup for same-day — if we confirm the booking, we execute it completely.`,
      urgency: "Same-day availability is highest on weekday afternoons. Weekend same-day slots are rare — most weekends are fully booked 5–7 days in advance.",
    },
    "last-minute": {
      headline: "Last-minute celebration planning at ${V} — what is realistic and how to make it happen.",
      process: `**24–48 hours before**: WhatsApp ${PH} immediately. At this lead time, most weekday slots are still available. Weekend availability at 24–48 hours is limited but worth checking.\n\n**48+ hours before**: Very manageable. The slot is yours if it is available; personalization requests can be handled; cake can be ordered.\n\n**The actual last-minute reality**: "Last minute" for a private venue celebration means something different from restaurant reservations. We need 2–3 hours minimum to set up after booking confirmation. Plan accordingly.`,
      urgency: "For genuinely urgent situations — a realised anniversary forgotten, a partner arriving unexpectedly — WhatsApp ${PH} immediately. We will tell you exactly what is possible and what we can execute in the available time.",
    },
    "advance-booking": {
      headline: "Advance booking at ${V} — what it unlocks and why it consistently produces better celebrations.",
      process: `**Why advance booking produces better outcomes**:\n\n*Date certainty*: Festival dates, Valentine's Day, weekends in November and December — these fill completely weeks in advance. Advance booking is the only way to guarantee these dates.\n\n*Personalization depth*: With more lead time, we can source specific decoration elements, create more elaborate personalised setups, and execute requests that require preparation time.\n\n*Cake orders*: Custom cakes require 3–5 days minimum for orders that involve specific design elements beyond standard writing.\n\n**Optimal booking window**: 5–7 days for weekday celebrations. 10–14 days for weekend celebrations. 2–3 weeks for Valentine's Day, Diwali, New Year, and Christmas.`,
      urgency: "The slots that sell out first: Valentine's Day (February 14 and the surrounding week), New Year's Eve (December 31), Diwali night. These often fully book 3–4 weeks before the date.",
    },
    "online-booking": {
      headline: "Booking your ${kwl} at ${V} is done entirely through WhatsApp — fast, direct, and conversational.",
      process: `**The WhatsApp booking process**:\n\n**Step 1**: Send your initial message to ${PH}. Include: your preferred date, time slot preference, occasion you are celebrating, and approximate budget range.\n\n**Step 2**: Our team responds within minutes during operating hours (10 AM–11 PM daily) with availability confirmation and package recommendations.\n\n**Step 3**: You choose your package. We send you a booking confirmation with all details.\n\n**Step 4**: Advance payment via UPI or bank transfer confirms the booking. We send the venue address and what to expect.\n\n**Step 5**: Your celebration is locked. You share any personalisation details over WhatsApp in the days before — songs, cake message, colour preferences, surprise logistics.`,
      urgency: "WhatsApp responses are typically within 5–15 minutes during operating hours. For urgent bookings, call the same number.",
    },
  };

  const bc = bookingContext[ek.modifier] || bookingContext["online-booking"];
  const headline = bc.headline.replace(/\$\{V\}/g, "Friends Factory Cafe");
  const urgency = bc.urgency.replace(/\$\{V\}/g, "Friends Factory Cafe");

  const intro = `${headline}\n\nPackages from ${LOW} include private venue, full decoration, food, drinks, and 3 hours of exclusive celebration.`;

  const sections: FFCContentSection[] = [
    {
      heading: `How ${mod} Works at ${V}`,
      content: bc.process,
    },
    {
      heading: `What to Know About Availability`,
      content: `${urgency}\n\n**General Availability Patterns**:\n\nWeekday slots (Monday–Thursday): Consistently high availability. 3–4 days lead time is usually sufficient.\n\nFriday and Saturday evenings: Book 7–10 days ahead. These are our most demanded slots.\n\nSunday: Availability is between weekday and Saturday. 5–7 days ahead is recommended.\n\nDinner slot (7–10 PM): Our most popular time slot across all days. Books fastest.\n\nLate Night slot (10 PM–1 AM): Growing in popularity. Currently has better availability than Dinner for spontaneous bookings.\n\nLunch slot (12–3 PM): The highest availability slot, particularly on weekdays. Good for surprise celebrations where you want maximum flexibility.`
    },
    {
      heading: `Payment and Policies`,
      content: `**Advance Payment**: A small advance (typically ₹500–₹1,000) confirms your booking. The balance is paid on the day of the celebration.\n\n**Payment Methods**: UPI (GPay, PhonePe, Paytm), NEFT/IMPS bank transfer, or cash on the day.\n\n**Rescheduling**: Free rescheduling up to 48 hours before your booking. We understand that plans change, particularly for celebrations that depend on another person's availability.\n\n**Cancellation**: Cancellations 48+ hours before the booking: advance refunded minus a small processing fee. Cancellations under 48 hours: advance held as credit toward a future booking.\n\n**No Hidden Charges**: The package price quoted is the final price. No service charge, no mandatory gratuity, no decoration supplement.\n\nTo begin your ${kwl} booking: WhatsApp ${PH}.`,
    },
  ];

  return buildResult(ek, service, intro, sections);
}

function generateAreaServiceContent(ek: ExpandedKeyword, service: ServiceCategory): FFCKeywordContent {
  const kw = ek.title;
  const kwl = kw.toLowerCase();
  const areaName = ek.areaName || "your area";

  const intro = `For couples in ${areaName}, the question of where to celebrate a special occasion is a specific one: where, in a city you know, is there a private venue that is genuinely designed for romantic celebration — not a restaurant adapting its setup but a dedicated space? The answer that couples from ${areaName} consistently find is ${V} in Gotri.\n\nThe drive from ${areaName} is short. The experience waiting at the end of it is not.\n\nPackages from ${LOW}. Private venue, full decoration, food, drinks, 3 hours.`;

  const sections: FFCContentSection[] = [
    {
      heading: `Why Couples from ${areaName} Choose ${V}`,
      content: `**The Access**: From ${areaName}, ${V} in Gotri is accessible via Vadodara's main road network — typically 10–25 minutes depending on your specific location within ${areaName} and the time of day. The drive is a short part of the evening, not the defining logistical challenge.\n\n**The Difference from Local Options**: The restaurants and cafes near ${areaName} offer genuinely different things — they serve meals in shared spaces, with other guests present, in environments not designed for private celebration. ${V} is designed for exactly this purpose. The comparison is not between two types of restaurants — it is between a restaurant and a private celebration venue.\n\n**Complete Service**: Couples from ${areaName} arrive, celebrate, and leave. Our team handles everything in between — decoration setup, food service, music, and coordination. There is nothing to arrange on your end except the arrival.\n\n**Pricing Accessible from ${areaName}**: From ${LOW}, with no hidden charges. The complete celebration — venue, decoration, food, drinks, music — is a single transparent price.`,
    },
    {
      heading: `Getting from ${areaName} to ${V}`,
      content: `**Address**: 424, OneWest, Asopalav W, 4th Floor, Priya Talkies Road, Gotri, Vadodara 391101.\n\n**Navigation**: Search "Friends Factory Cafe Vadodara" on Google Maps from your location in ${areaName}. The listing is verified and directions are current.\n\n**By Auto-Rickshaw**: Auto-rickshaws from ${areaName} can drop directly at the OneWest building. Ask for "OneWest, Priya Talkies Road, Gotri."\n\n**By Cab**: Uber and Ola service ${areaName} and the Gotri area. The pickup and drop point is the OneWest building.\n\n**Parking**: Street parking is available near the building for those driving from ${areaName}.\n\n**Building Access**: 4th floor, OneWest. Elevator available.\n\n**Surprise Coordination**: If you are bringing your partner from ${areaName} for a surprise, WhatsApp ${PH} when you are en route. We will have everything ready for immediate impact on arrival.`,
    },
    {
      heading: `Booking Your ${kwl} from ${areaName}`,
      content: `**How**: WhatsApp ${PH}. Mention you are from ${areaName} and the occasion you are celebrating. Our team will recommend the best package and time slot for your situation.\n\n**Available Packages**: All eight packages (${LOW} to ${formatPrice(6900)}) are available for couples coming from ${areaName}. No packages are restricted by area.\n\n**Lead Time**: 4–5 days for weekday slots. 7–10 days for weekends. Festival dates require 2–3 weeks advance booking.\n\nThe couples from ${areaName} who have celebrated at ${V} consistently report the same thing: the short drive was worth it, and the experience was unlike anything available in ${areaName} itself. To find out for yourself: WhatsApp ${PH}.`,
    },
  ];

  return buildResult(ek, service, intro, sections);
}

function generateAreaKeywordContent(ek: ExpandedKeyword, service: ServiceCategory): FFCKeywordContent {
  const kw = ek.title;
  const kwl = kw.toLowerCase();
  const areaName = ek.areaName || "your area";
  const baseKw = ek.baseKeywordTitle || service.name;

  const intro = `The search for ${kwl} is a hyperlocal search — it is asking for the best option within a defined radius of where you are. At ${V}, we serve couples from ${areaName} consistently, because the combination of accessibility and genuine quality that the search implies exists here.\n\n${baseKw} near ${areaName}: that means a private romantic celebration venue within a reasonable drive of where you are starting. From most locations in ${areaName}, ${V} in Gotri is 10–25 minutes. The celebration is 3 hours. The drive is a small fraction of the total.\n\nPackages from ${LOW}. Private venue, full decoration, food, drinks, 3 hours.`;

  const sections: FFCContentSection[] = [
    {
      heading: `${baseKw} Near ${areaName}: What You Actually Need`,
      content: `The "near ${areaName}" qualifier in a search for ${baseKw.toLowerCase()} is asking for convenience without compromise — the best option that does not require a journey that makes the occasion feel like a travel day rather than a celebration.\n\n${V} satisfies both requirements. It is accessible from ${areaName} without significant effort, and it is genuinely the best private romantic celebration venue in Vadodara by the most meaningful measures: consistent quality across thousands of celebrations, transparent pricing, complete privacy, and a team that has done this enough times to execute it reliably.\n\n**Why Couples from ${areaName} Consistently Find ${V}**:\n\n*The search surfaces it*: Verified Google listing, strong review volume, accurate location information.\n\n*The experience matches the search intent*: When someone searches for ${baseKw.toLowerCase()} near ${areaName}, they are looking for a private, designed, complete celebration experience. That is exactly what ${V} delivers.\n\n*The price is accessible*: Starting from ${LOW}, with everything included, the price point is realistic for couples from ${areaName} across income levels.`,
    },
    {
      heading: `Packages for Your ${kwl}`,
      content: `**Forever Us LoveFrame Rooftop — ${formatPrice(6900)}**: The signature package. LoveFrame installation, rooftop venue, city views, complimentary cake. The most complete celebration we offer. Worth the drive from ${areaName}.\n\n**Eternal Love Rooftop — ${formatPrice(6500)}**: Canopy rooftop setup. Complimentary cake. The open-air, elevated experience that couples from ${areaName} make the short drive for.\n\n**Golden Promise Glass House — ${formatPrice(6000)}**: The glass house experience — architectural, intimate, photographic. Complimentary cake.\n\n**Mid-Range Options — ${formatPrice(5100)} to ${formatPrice(5700)}**: Complete celebration setups at accessible price points. The core experience is present at every tier.\n\n**Starting from ${LOW}**: Complete private celebration experience. The full venue, the full decoration, the full food and drink menu.\n\nAll packages: 3 hours private venue, complete decoration, welcome drinks, food menu, romantic music, dedicated service.`,
    },
    {
      heading: `Booking Your ${kwl}`,
      content: `**How**: WhatsApp ${PH}. Share your preferred date, occasion, and which area you are coming from. Our team confirms availability and recommends the best package.\n\n**Getting Here from ${areaName}**: Search "Friends Factory Cafe Vadodara" on Google Maps. Directions are accurate from any point in ${areaName}.\n\n**Surprise Coordination**: If you are planning a surprise for your partner and managing logistics from ${areaName}, WhatsApp ${PH} early. We help coordinate the timing so that your arrival and the setup completion align.\n\n**Lead Time**: 4–5 days for weekday slots. 7–10 days for weekend slots.\n\nThe answer to ${kwl}: it is in Gotri, accessible from ${areaName}, and it delivers the private romantic celebration experience the search is looking for. WhatsApp ${PH} to begin.`,
    },
  ];

  return buildResult(ek, service, intro, sections);
}

// ==================== RESULT BUILDER ====================

function buildResult(
  ek: ExpandedKeyword,
  service: ServiceCategory,
  intro: string,
  sections: FFCContentSection[]
): FFCKeywordContent {
  const kw = ek.title;
  const kwl = kw.toLowerCase();
  const h = hash(ek.slug);

  const whyChooseUs = [
    `100% private venue – exclusively yours for your ${kwl}`,
    `8 unique celebration packages from ${LOW} to ${HIGH}`,
    `Stunning rooftop views & elegant glass house options`,
    `All-inclusive packages – decorations, food, drinks, music`,
    `Professional setup handled by our team – zero stress for you`,
    `Trusted by 3,000+ ${C} couples with 4.9★ Google rating`,
    `Easy access from all ${C} areas – located in Gotri`,
    `Quick WhatsApp booking at ${PH} with instant confirmation`,
  ];

  const process = [
    { step: "Contact Us", description: `WhatsApp ${PH} to discuss your ${kwl}` },
    { step: "Choose Package", description: `Select from 8 packages (${LOW} to ${HIGH})` },
    { step: "Confirm Booking", description: "Pay advance to lock your date and time" },
    { step: "Personalize", description: "Share custom requests — colors, songs, cake message" },
    { step: "Celebrate", description: "Arrive to a beautifully prepared venue and enjoy!" },
  ];

  const testimonialTemplates = [
    `"Our ${kwl} at ${V} was absolutely magical! The decorations, food, and ambiance were perfect. My partner couldn't stop smiling!" — Happy Couple, ${C}\n\n"We've celebrated at many places but nothing compares to ${V}. The privacy and attention to detail for our ${kwl} was outstanding." — Returning Customer\n\n"Best decision we made! The ${kwl} setup was even better than we imagined. Highly recommend to every couple in ${C}!" — 5-Star Review`,
    `"I planned a surprise ${kwl} and the team helped coordinate everything perfectly. My partner was completely speechless!" — Grateful Partner, ${C}\n\n"The rooftop ambiance during our ${kwl} was incredible. Fairy lights, candles, city views — absolutely romantic!" — Weekend Celebrator\n\n"Affordable yet premium — our ${kwl} experience proved you don't need to spend a fortune for an unforgettable celebration." — Value-Conscious Couple`,
    `"From booking to celebration, the entire ${kwl} experience was seamless. The WhatsApp communication was quick and helpful." — First-Timer, ${C}\n\n"We keep coming back to ${V} for every celebration. Our latest ${kwl} was our 4th time here — that says everything!" — Loyal Customer\n\n"The food, decorations, and service during our ${kwl} exceeded every expectation. Already planning our next visit!" — Delighted Couple`,
  ];

  const faqContent = [
    { question: `How much does ${kwl} cost?`, answer: `Packages range from ${LOW} to ${HIGH}. All include private venue, decorations, food, drinks, music, and 3 hours of celebration. No hidden charges.` },
    { question: `Can I customize my ${kwl}?`, answer: `Yes! Custom color themes, cake messages, song playlists, and personalized decorations are available. Share your preferences when booking.` },
    { question: `Is the venue private for ${kwl}?`, answer: `100% private. No other guests during your 3-hour celebration. The rooftop or glass house is exclusively yours.` },
    { question: `How do I book ${kwl}?`, answer: `WhatsApp ${PH} with your preferred date, time, and occasion. We'll recommend the best package and confirm with a small advance payment.` },
    { question: `What food is included in ${kwl} packages?`, answer: `Welcome drinks, cheese fondue, paneer tortilla, peri peri fries with mac & cheese, chocolate brownie, and signature mocktails. Veg and Jain options available.` },
    { question: `Can I plan a surprise ${kwl}?`, answer: `Absolutely! We help coordinate surprise reveals — timing, setup, and even cover stories. We've successfully executed 500+ surprise celebrations.` },
  ];

  const closingCta = `Ready for your perfect ${kwl} in ${C}? Don't wait — book your celebration at ${V} today! WhatsApp ${PH} for instant response and availability.

Every celebration at ${V} is a memory that lasts forever. With private venues, stunning decorations, delicious food, and packages from ${LOW}, your ${kwl} will be absolutely unforgettable.`;

  const dimensionColors: Record<KeywordDimension, FFCKeywordContent['colorScheme']> = {
    budget:           'amber',
    time:             'purple',
    theme:            'rose',
    festival:         'orange',
    milestone:        'indigo',
    venue:            'teal',
    qualifier:        'green',
    howto:            'blue',
    seasonal:         'emerald',
    style:            'pink',
    nearme:           'sky',
    price:            'violet',
    relationship:     'red',
    booking:          'cyan',
    'area-service':   'teal',
    'area-keyword':   'sky',
  };

  return {
    introduction: intro,
    sections,
    whyChooseUs,
    process,
    testimonialContent: testimonialTemplates[h % testimonialTemplates.length],
    pricingIntro: `${kwl} packages start from ${LOW}. All packages include private venue, decorations, food, drinks, and 3 hours of celebration.`,
    faqContent,
    closingCta,
    colorScheme: dimensionColors[ek.dimension] ?? 'amber',
  };
}

// ==================== PUBLIC API ====================

/**
 * Generate dimension-aware content for an expanded keyword.
 * Returns content tailored to the specific dimension (budget, theme, area, etc.)
 */
export function generateExpandedContent(
  ek: ExpandedKeyword,
  service: ServiceCategory,
  _keyword: ServiceKeyword
): FFCKeywordContent {
  const generators: Record<KeywordDimension, (ek: ExpandedKeyword, svc: ServiceCategory) => FFCKeywordContent> = {
    budget: generateBudgetContent,
    time: generateTimeContent,
    theme: generateThemeContent,
    festival: generateFestivalContent,
    milestone: generateMilestoneContent,
    venue: generateVenueContent,
    qualifier: generateQualifierContent,
    howto: generateHowtoContent,
    seasonal: generateSeasonalContent,
    style: generateStyleContent,
    nearme: generateNearmeContent,
    price: generatePriceContent,
    relationship: generateRelationshipContent,
    booking: generateBookingContent,
    "area-service": generateAreaServiceContent,
    "area-keyword": generateAreaKeywordContent,
  };

  const gen = generators[ek.dimension];
  if (gen) return gen(ek, service);

  // Fallback: should never reach here
  return generateBudgetContent(ek, service);
}
