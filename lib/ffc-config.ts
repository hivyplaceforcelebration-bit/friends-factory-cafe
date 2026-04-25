// Friends Factory Cafe - Vadodara Configuration
// Main configuration file for the FFC website

export interface SetupPackage {
  id: string;
  slug: string;
  name: string;
  emoji: string;
  shortDescription: string;
  fullDescription: string;
  price: number;
  cakeIncluded: boolean; // true for Setup 1-3, false for Setup 4-8 (extra cost)
  features: string[];
  perfectFor: string[];
  thumbnail: string;
  images: string[];
}

export interface ServiceCategory {
  slug: string;
  name: string;
  emoji: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  keywords: ServiceKeyword[];
}

export interface ServiceKeyword {
  slug: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  // NEW: Unique content fields for each page
  uniqueContent?: {
    heroSubtitle: string;
    introduction: string;
    whyChooseUs: string[];
    features: string[];
    process: { step: string; description: string }[];
    faqs: { question: string; answer: string }[];
    testimonial: { name: string; text: string; rating: number };
    closingText: string;
  };
}

export interface AreaConfig {
  slug: string;
  name: string;
  // NEW: Unique content fields for each area page
  uniqueContent?: {
    heroSubtitle: string;
    introduction: string;
    aboutArea: string;
    whyChooseUs: string[];
    servicesDescription: string;
    locationAdvantage: string;
    faqs: { question: string; answer: string }[];
    testimonial: { name: string; location: string; text: string; rating: number };
    nearbyLandmarks: string[];
    closingText: string;
  };
}

// ==================== SITE CONFIG ====================
export const siteConfig = {
  name: "Friends Factory Cafe",
  tagline: "Where Every Occasion Turns Into a Forever Memory Under the Stars",
  description: "Premium romantic celebration venue in Vadodara for couples. Birthday surprises, candlelight dinners, anniversary celebrations, proposals, pre-wedding shoots & more.",
  phone: "+91 7487888730",
  whatsapp: "917487888730",
  email: "hello@friendsfactorycafe.com",
  address: "424, OneWest, Asopalav W, 4th Floor, Priya Talkies Road, Besides Adventuraa, Sevasi - Canal Rd, Gotri, Vadodara, Gujarat 391101",
  city: "Vadodara",
  website: "https://friendsfactorycafe.com",
  colors: {
    primary: "#D97706", // Amber/Orange
    secondary: "#F59E0B",
    accent: "#B45309",
    gradient: "from-amber-600 to-orange-600",
    gradientHover: "from-amber-700 to-orange-700",
    lightBg: "bg-amber-50",
    darkBg: "bg-amber-900",
    text: "text-amber-600"
  },
  socialLinks: {
    instagram: "https://www.instagram.com/friendsfactorycafe/",
    facebook: "https://www.facebook.com/friendsfactorycafe/",
    youtube: ""
  }
};

// ==================== SETUP PACKAGES (8 Setups) ====================
export const packages: SetupPackage[] = [
  {
    id: "setup-1",
    slug: "forever-us-loveframe-rooftop",
    name: "Forever Us LoveFrame Rooftop",
    emoji: "💑✨🌃",
    shortDescription: "Celebrate love in a space where every glance, laugh, and memory is framed against the stunning skyline",
    fullDescription: `Forever Us LoveFrame Rooftop - where every moment is a memory, every glance is a story, and love is beautifully framed under the stars.

Celebrate love in a space where every glance, laugh, and memory is framed against the stunning Vadodara skyline. Forever Us LoveFrame Rooftop is thoughtfully designed for couples and families seeking intimate, romantic, and unforgettable moments at the best rooftop cafe in Vadodara.

Experience Highlights:

- Private Rooftop Celebration (3 Hours)
An exclusive, cozy setting perfect for birthday surprises, anniversary celebrations, romantic proposals, candlelight dinners, and delightful surprises.

- Curated Treats & Welcome Drink + Complimentary Celebration Cake
Enjoy specially prepared refreshments and a FREE celebration cake, ideal for baby moments, pregnancy announcements, and heartfelt occasions.

- Elegant Rooftop Decor & Ambient Lighting
Romantic accents, twinkling lights, and a warm atmosphere create a perfect backdrop for pre-wedding shoots and timeless memories.

- Candle-Lit Seating & Skyline Views
Comfortable seating for meaningful conversations, shared smiles, and unforgettable moments under the stars.

- Delicious Snacks & Soft Music
Tasty treats and gentle melodies enhance the mood for love, laughter, and celebration.

Perfect For:
Birthday Surprise Vadodara | Anniversary Celebration | Romantic Proposal | Candlelight Dinner for Couples | Surprise Party | Pre-Wedding Shoot Venue | Baby Moments (Pregnancy Announcement)

📍 Best romantic rooftop cafe in Vadodara for couples | Private celebration venue Vadodara | Couple-friendly cafe Gotri`,
    price: 6900,
    cakeIncluded: true,
    features: [
      "3 Hours Private Rooftop Celebration",
      "Welcome Drink & Complimentary Celebration Cake",
      "Elegant Photo Frame Setup with romantic decorations",
      "Candle-Lit Seating with premium decor & props",
      "Panoramic Skyline Views of Vadodara",
      "Ambient Lighting & Twinkling Fairy Lights",
      "Delicious Snacks & Soft Romantic Music"
    ],
    perfectFor: ["Birthday Surprise", "Anniversary Celebration", "Romantic Proposal", "Candlelight Dinner", "Surprise Party", "Pre-Wedding Shoot", "Baby Moments"],
    thumbnail: "/packages/6900/Cover.webp",
    images: [
      "/packages/6900/Cover.webp",
      "/packages/6900/2.webp",
      "/packages/6900/3.webp",
      "/packages/6900/4.webp",
      "/packages/6900/5.webp",
      "/packages/6900/6.webp",
      "/packages/6900/7.webp",
      "/packages/6900/8.webp",
      "/packages/6900/9.webp",
      "/packages/6900/10.webp",
      "/packages/6900/11.webp",
      "/packages/6900/12.webp",
      "/packages/6900/13.webp",
      "/packages/6900/14.webp",
      "/packages/6900/15.webp",
      "/packages/6900/16.webp",
      "/packages/6900/17.webp"
    ]
  },
  {
    id: "setup-2",
    slug: "eternal-love-rooftop-celebration",
    name: "Eternal Love Rooftop Celebration",
    emoji: "💖✨🌙",
    shortDescription: "Celebrate moments that matter in a rooftop setting where emotions shine as brightly as the city lights below 🌆💫",
    fullDescription: `💖✨🌙 Eternal Love Rooftop Celebration — where every emotion feels deeper, every moment feels special, and love is celebrated under the open sky

Celebrate moments that matter in a rooftop setting where emotions shine as brightly as the city lights below 🌆💫. Eternal Love Rooftop Celebration is a beautifully curated experience for those who want to turn special occasions into lifelong memories, surrounded by romance, elegance, and a magical open-sky ambiance at the best couple-friendly cafe in Vadodara.

✨ Experience Highlights

• Exclusive Private Rooftop Time (3 Hours) ✨
A serene and intimate rooftop escape, ideal for heartfelt birthdays, anniversary surprises, romantic proposals, and candlelight dinners 💕🕯️

• Thoughtfully Curated Refreshments 🥂 + Complimentary Celebration Cake 🍰
Enjoy a warm welcome drink, delightful treats, and a FREE celebration cake—perfect for surprises, baby announcements, and joyful milestones 🎉

• Stylish Canopy & Romantic Décor 🎈💡
Graceful curtains, glowing lights, and elegant accents create a stunning setting for pre-wedding shoots, proposals, and picture-perfect moments 📸

• Soft Candle Glow Seating 🕯️🌅
Comfortable seating with premium décor and panoramic skyline views, designed for intimate conversations and meaningful celebrations 💑

• Tasty Bites & Gentle Music 🍽️🎶
A soothing soundtrack and delicious snacks to elevate the mood and complete the experience ✨

🎉 Ideal For
Birthday Celebration Vadodara | Anniversary Surprise | Romantic Proposal Venue | Candlelight Dinner | Surprise Party | Pre-Wedding Photoshoot | Baby Moments (Pregnancy Announcement)

📍 Best rooftop celebration venue Vadodara | Private romantic dinner Vadodara | Couple cafe near Gotri`,
    price: 6500,
    cakeIncluded: true,
    features: [
      "3 Hours Exclusive Private Rooftop Celebration ✨",
      "Welcome Drink & Complimentary Celebration Cake 🍰",
      "Stylish Canopy Setup with elegant curtains",
      "Heart-shaped Balloons & Rose Petals 🎈",
      "Soft Candle Glow Seating with premium décor",
      "Panoramic City Views & Starlit Ambiance 🌆",
      "Tasty Bites & Gentle Romantic Music 🎶"
    ],
    perfectFor: ["Birthday Celebration", "Anniversary Surprise", "Romantic Proposal", "Candlelight Dinner", "Surprise Party", "Pre-Wedding Photoshoot", "Baby Moments"],
    thumbnail: "/packages/6500/Cover.webp",
    images: [
      "/packages/6500/Cover.webp",
      "/packages/6500/2.webp",
      "/packages/6500/3.webp",
      "/packages/6500/4.webp",
      "/packages/6500/5.webp",
      "/packages/6500/6.webp",
      "/packages/6500/7.webp",
      "/packages/6500/8.webp",
      "/packages/6500/9.webp",
      "/packages/6500/10.webp",
      "/packages/6500/11.webp",
      "/packages/6500/12.webp",
      "/packages/6500/13.webp"
    ]
  },
  {
    id: "setup-3",
    slug: "golden-promise-glass-house",
    name: "Golden Promise Glass House",
    emoji: "✨💛🏡",
    shortDescription: "Step into a radiant space where every moment glows with love, warmth, and elegance ✨",
    fullDescription: `✨💛🏡 Golden Promise Glass House — where love shines brighter, moments feel magical, and every celebration turns golden

Step into a radiant space where every moment glows with love, warmth, and elegance ✨. Golden Promise Glass House is designed for couples and families to celebrate milestones in a luxurious, intimate, and unforgettable setting at the best glass house cafe in Vadodara.

✨ Experience Highlights

• Exclusive Glass House Celebration (3 Hours) ✨
An elegant and private space, perfect for birthday surprises, anniversary celebrations, romantic proposals, candlelight dinners, and special surprises 💖🕯️

• Curated Treats & Welcome Drink 🥂 + Complimentary Celebration Cake 🍰
Hand-selected refreshments and a FREE celebration cake, ideal for baby moments, pregnancy announcements, and meaningful celebrations 🎉

• Luxurious Décor with Soft Golden Glow 💡🌿
Warm lighting, stylish accents, and thoughtful décor create the perfect backdrop for pre-wedding shoots and timeless photographs 📸

• Candle-Lit Seating & Panoramic Views 🕯️💑
Comfortable seating designed for deep conversations, cherished moments, and intimate celebrations 🌅

• Delicious Snacks & Soothing Music 🍽️🎶
A delightful culinary experience paired with gentle music to set the perfect mood for love and joy ✨

🎉 Perfect For
Birthday Surprise Vadodara | Anniversary Celebration | Romantic Proposal | Candlelight Dinner for Couples | Surprise Party | Pre-Wedding Photoshoot Venue | Baby Moments (Pregnancy Announcement)

📍 Best glass house cafe Vadodara | Private celebration venue | Romantic dinner place Gotri`,
    price: 6000,
    cakeIncluded: true,
    features: [
      "3 Hours Private Glass House Celebration ✨",
      "Welcome Drink & Complimentary Celebration Cake 🍰",
      "Elegant Golden Fairy Lights & Décor 💡",
      "Flower Decorations & Premium Props 🌸",
      "Candle-Lit Seating with Panoramic Views",
      "Climate Controlled Environment",
      "Delicious Snacks & Soothing Music 🎶"
    ],
    perfectFor: ["Birthday Surprise", "Anniversary Celebration", "Romantic Proposal", "Candlelight Dinner", "Surprise Party", "Pre-Wedding Photoshoot", "Baby Moments"],
    thumbnail: "/packages/6000/Cover.webp",
    images: [
      "/packages/6000/Cover.webp",
      "/packages/6000/2.webp",
      "/packages/6000/3.webp",
      "/packages/6000/4.webp",
      "/packages/6000/5.webp",
      "/packages/6000/6.webp",
      "/packages/6000/7.webp",
      "/packages/6000/8.webp",
      "/packages/6000/9.webp",
      "/packages/6000/10.webp",
      "/packages/6000/11.webp",
      "/packages/6000/12.webp",
      "/packages/6000/13.webp",
      "/packages/6000/14.webp",
      "/packages/6000/15.webp",
      "/packages/6000/16.webp"
    ]
  },
  {
    id: "setup-4",
    slug: "moonlit-romance-experience",
    name: "Moonlit Romance Experience",
    emoji: "🌙💞",
    shortDescription: "Step into a serene night where love unfolds beneath a glowing moon and shimmering city lights ✨🌌",
    fullDescription: `🌙💞 Moonlit Romance Experience — where every glance feels warmer, every moment feels closer, and love glows softly under the night sky ✨

Step into a serene night where love unfolds beneath a glowing moon and shimmering city lights ✨🌌. Moonlit Romance Experience is thoughtfully designed for couples seeking a calm, intimate, and deeply romantic celebration away from the noise of the world at the best romantic cafe in Vadodara.

✨ Experience Highlights

• Private Rooftop Ambience (3 Hours) 🌙
A peaceful, candle-kissed setting perfect for romantic proposals, anniversary dinners, candlelight dinners, and romantic surprises 💕🕯️

• Elegant Welcome Treats 🥂🍰
Delight in hand-picked refreshments and curated treats, ideal for special moments and heartfelt announcements 🎉
💡 Celebration Cake available at extra cost (₹350)

• Dreamy Moonlight Décor ✨💡
Soft drapes, glowing lights, and subtle romantic details create a stunning backdrop for pre-wedding shoots and timeless photos 📸

• Cozy Candle-Lit Seating 🕯️🌆
Comfortable seating with skyline views, crafted for quiet conversations, deep connections, and shared smiles 💑

• Gentle Music & Tasty Bites 🎶🍽️
A soothing playlist paired with delicious snacks to set the perfect mood for the evening 💫

🎉 Perfect For
Romantic Proposal Vadodara | Anniversary Dinner | Candlelight Dinner for Couples | Surprise Date Night | Pre-Wedding Photoshoot | Baby Moments (Pregnancy Announcement)

📍 Best moonlit rooftop cafe Vadodara | Romantic night celebration venue | Couple-friendly cafe Gotri`,
    price: 5100,
    cakeIncluded: false,
    features: [
      "3 Hours Private Moonlit Rooftop Celebration 🌙",
      "Welcome Drink & Curated Treats 🥂",
      "Dreamy Moon-themed Décor with silver accents ✨",
      "Candle Pathway & Romantic Seating 🕯️",
      "Panoramic Skyline Views & Starlit Ambiance 🌆",
      "Gentle Music & Delicious Snacks 🎶",
      "Celebration Cake available (+₹350) 🍰"
    ],
    perfectFor: ["Romantic Proposal", "Anniversary Dinner", "Candlelight Dinner", "Surprise Date Night", "Pre-Wedding Photoshoot", "Baby Moments"],
    thumbnail: "/packages/5100/Cover.webp",
    images: [
      "/packages/5100/Cover.webp",
      "/packages/5100/2.webp",
      "/packages/5100/3.webp",
      "/packages/5100/4.webp",
      "/packages/5100/5.webp",
      "/packages/5100/6.webp",
      "/packages/5100/7.webp",
      "/packages/5100/8.webp",
      "/packages/5100/9.webp"
    ]
  },
  {
    id: "setup-5",
    slug: "the-promise-creative-area",
    name: "The Promise Creative Area",
    emoji: "💍",
    shortDescription: "Ignite joy under the stars at The Promise Creative Area — a magical rooftop space designed for unforgettable celebrations 🎉🌌",
    fullDescription: `💍 The Promise Creative Area — where every occasion turns into a forever memory under the stars ✨🌙

Ignite joy under the stars at The Promise Creative Area — a magical rooftop space designed for Birthdays, Anniversaries, Proposals, Candlelight Dinners, Surprises, Pre-Wedding Shoots, and Baby Moments (Pregnancy Announcements) at the best celebration cafe in Vadodara.

Celebrate love and life with breathtaking city views, warm candlelight, and unforgettable décor 🎉🌌

✨ What's Included

• 3 Mesmerizing Hours of Private Rooftop Celebration ✨
Perfect for Birthday Surprises, Anniversary Celebrations, Romantic Proposals & Candlelight Dinners 💖🕯️

• Curated Treats with Welcome Drink 🥂
Ideal for special occasions and heartfelt celebrations
💡 Celebration Cake available at extra cost (₹350) 🍰

• Festive Tent Setup with elegant curtains, balloons 🎈 & twinkling lights 💡
A dreamy backdrop for Pre-Wedding Shoots, Proposals & Romantic Moments 📸

• Candle-Lit Seating with props, premium décor & panoramic skyline views 🌅
Crafted for Anniversaries, Candlelight Dinners & Intimate Surprises 💑

• Delicious Snacks 🍽️ & Soft, Joyful Music 🎶
Creating the perfect mood for Every Celebration & Love Story ✨

🎉 Perfect For
Birthday Surprise Vadodara | Anniversary Celebration | Romantic Proposal | Candlelight Dinner for Couples | Surprise Party | Pre-Wedding Photoshoot | Baby Moments (Pregnancy Announcement)

📍 Best rooftop celebration venue Vadodara | Private party place Gotri | Couple-friendly cafe`,
    price: 4700,
    cakeIncluded: false,
    features: [
      "3 Hours Private Rooftop Celebration ✨",
      "Welcome Drink & Curated Treats 🥂",
      "Festive Tent Setup with curtains & balloons 🎈",
      "Twinkling Lights & Romantic Décor 💡",
      "Candle-Lit Seating with premium props 🕯️",
      "Panoramic Skyline Views of Vadodara 🌅",
      "Delicious Snacks & Joyful Music 🎶",
      "Celebration Cake available (+₹350) 🍰"
    ],
    perfectFor: ["Birthday Surprise", "Anniversary Celebration", "Romantic Proposal", "Candlelight Dinner", "Surprise Party", "Pre-Wedding Photoshoot", "Baby Moments"],
    thumbnail: "/packages/thumbnails/the-promise-creative-area.webp",
    images: [
      "/packages/thumbnails/the-promise-creative-area.webp",
      "/packages/the-promise-creative-area/images/2.webp",
      "/packages/the-promise-creative-area/images/3.webp",
      "/packages/the-promise-creative-area/images/4.webp",
      "/packages/the-promise-creative-area/images/5.webp",
      "/packages/the-promise-creative-area/images/8.webp",
      "/packages/the-promise-creative-area/images/9.webp",
      "/packages/the-promise-creative-area/images/13.webp",
      "/packages/the-promise-creative-area/images/14.webp",
      "/packages/the-promise-creative-area/images/17.webp",
      "/packages/the-promise-creative-area/images/18.webp",
      "/packages/the-promise-creative-area/images/20.webp",
      "/packages/the-promise-creative-area/images/22.webp"
    ]
  },
  {
    id: "setup-6",
    slug: "timeless-bond-glass-house",
    name: "Timeless Bond Glass House",
    emoji: "♾️💞🏡",
    shortDescription: "Step into an elegant glass house where love feels calm, pure, and everlasting ✨",
    fullDescription: `♾️💞🏡 Timeless Bond Glass House — where love stands still, moments feel eternal, and every celebration becomes a beautiful memory

Step into an elegant glass house where love feels calm, pure, and everlasting ✨. Timeless Bond Glass House is designed for couples and families who want to celebrate meaningful milestones in a serene, light-filled space that beautifully frames every emotion at the best glass house cafe in Vadodara.

✨ Experience Highlights

• Private Glass House Celebration (3 Hours) ✨
An intimate and peaceful setting, ideal for anniversary surprises, romantic proposals, birthday celebrations, candlelight dinners, and heartfelt surprises 💖🕯️

• Warm Welcome with Curated Treats 🥂🍰
Thoughtfully arranged refreshments, perfect for baby moments, pregnancy announcements, and special occasions 🎉
💡 Celebration Cake available at extra cost (₹350)

• Elegant Glass Décor & Soft Lighting 💡🌿
Minimal yet romantic décor with glowing lights creates a stunning atmosphere for pre-wedding shoots and timeless photographs 📸

• Comfortable Candle-Lit Seating 🕯️💑
Cozy seating designed for deep conversations, shared smiles, and unforgettable memories 🌸

• Delicious Bites & Soothing Music 🍽️🎶
Gentle melodies and tasty snacks complete the experience with warmth and charm ✨

🎉 Perfect For
Birthday Celebration Vadodara | Anniversary Surprise | Romantic Proposal | Candlelight Dinner for Couples | Surprise Party | Pre-Wedding Photoshoot | Baby Moments (Pregnancy Announcement)

📍 Best glass house celebration venue Vadodara | Private romantic cafe Gotri | Couple-friendly venue`,
    price: 5700,
    cakeIncluded: false,
    features: [
      "3 Hours Private Glass House Celebration ✨",
      "Welcome Drink & Curated Treats 🥂",
      "Minimalist Elegant White Theme Décor",
      "Flower Arrangements & Candle Setup 🌸",
      "Soft Lighting & Instagram-worthy Spots 📸",
      "Delicious Snacks & Soothing Music 🎶",
      "Celebration Cake available (+₹350) 🍰"
    ],
    perfectFor: ["Birthday Celebration", "Anniversary Surprise", "Romantic Proposal", "Candlelight Dinner", "Surprise Party", "Pre-Wedding Photoshoot", "Baby Moments"],
    thumbnail: "/packages/thumbnails/timeless-bond-glass-house.webp",
    images: [
      "/packages/thumbnails/timeless-bond-glass-house.webp",
      "/packages/timeless-bond-glass-house/images/112.webp",
      "/packages/timeless-bond-glass-house/images/113.webp",
      "/packages/timeless-bond-glass-house/images/114.webp",
      "/packages/timeless-bond-glass-house/images/115.webp",
      "/packages/timeless-bond-glass-house/images/116.webp",
      "/packages/timeless-bond-glass-house/images/120.webp",
      "/packages/timeless-bond-glass-house/images/121.webp",
      "/packages/timeless-bond-glass-house/images/122.webp",
      "/packages/timeless-bond-glass-house/images/123.webp",
      "/packages/timeless-bond-glass-house/images/124.webp",
      "/packages/timeless-bond-glass-house/images/125.webp",
      "/packages/timeless-bond-glass-house/images/126.webp",
      "/packages/timeless-bond-glass-house/images/128.webp",
      "/packages/timeless-bond-glass-house/images/129.webp"
    ]
  },
  {
    id: "setup-7",
    slug: "sweet-together-glass-house",
    name: "Sweet Together Glass House",
    emoji: "🍯💖",
    shortDescription: "Step into a charming space where love feels cozy, laughter is shared, and every moment is sweeter than the last ✨",
    fullDescription: `🍯💖 Sweet Together Glass House — where love is warm, moments are sweeter, and memories last forever 🏡

Step into a charming space where love feels cozy, laughter is shared, and every moment is sweeter than the last ✨. Sweet Together Glass House is designed for couples and families to celebrate life's precious memories in a warm, intimate, and beautifully decorated setting at the best couple cafe in Vadodara.

✨ Experience Highlights

• Private Glass House Celebration (3 Hours) ✨
A delightful, intimate space perfect for birthday surprises, anniversary dinners, romantic proposals, candlelight dinners, and sweet surprises 💕🕯️

• Curated Treats & Welcome Drink 🥂🍰
Enjoy handpicked refreshments, ideal for baby moments, pregnancy announcements, and special celebrations 🎉
💡 Celebration Cake available at extra cost (₹350)

• Romantic & Cozy Décor 💡🌸
Soft lighting, elegant décor, and thoughtful details create a perfect backdrop for pre-wedding shoots and picture-perfect moments 📸

• Candle-Lit Seating & Cozy Corners 🕯️💑
Comfortable seating designed for shared smiles, heart-to-heart conversations, and memorable experiences 🌿

• Delicious Snacks & Gentle Music 🍽️🎶
Tasty bites paired with a soft playlist to set the mood for love and laughter ✨

🎉 Perfect For
Birthday Surprise Vadodara | Anniversary Dinner | Romantic Proposal | Candlelight Dinner for Couples | Surprise Date | Pre-Wedding Photoshoot | Baby Moments (Pregnancy Announcement)

📍 Best cozy glass house cafe Vadodara | Private celebration venue Gotri | Romantic couple cafe`,
    price: 5500,
    cakeIncluded: false,
    features: [
      "3 Hours Private Glass House Celebration ✨",
      "Welcome Drink & Curated Treats 🥂",
      "Sweet & Cozy Theme with warm décor 🌸",
      "Balloon Arrangements & Romantic Props 🎈",
      "Candle-Lit Seating & Cozy Corners 🕯️",
      "Delicious Snacks & Gentle Music 🎶",
      "Celebration Cake available (+₹350) 🍰"
    ],
    perfectFor: ["Birthday Surprise", "Anniversary Dinner", "Romantic Proposal", "Candlelight Dinner", "Surprise Date", "Pre-Wedding Photoshoot", "Baby Moments"],
    thumbnail: "/packages/thumbnails/sweet-together-glass-house.webp",
    images: [
      "/packages/thumbnails/sweet-together-glass-house.webp",
      "/packages/sweet-together-glass-house/images/75.webp",
      "/packages/sweet-together-glass-house/images/76.webp",
      "/packages/sweet-together-glass-house/images/78.webp",
      "/packages/sweet-together-glass-house/images/79.webp",
      "/packages/sweet-together-glass-house/images/81.webp",
      "/packages/sweet-together-glass-house/images/83.webp",
      "/packages/sweet-together-glass-house/images/84.webp",
      "/packages/sweet-together-glass-house/images/87.webp",
      "/packages/sweet-together-glass-house/images/88.webp",
      "/packages/sweet-together-glass-house/images/89.webp",
      "/packages/sweet-together-glass-house/images/91.webp",
      "/packages/sweet-together-glass-house/images/92.webp",
      "/packages/sweet-together-glass-house/images/93.webp"
    ]
  },
  {
    id: "setup-8",
    slug: "pure-love-glass-house",
    name: "Pure Love Glass House",
    emoji: "🤍💍🏡",
    shortDescription: "Welcome to a serene glass house where emotions are honest, moments are gentle, and love is beautifully pure ✨",
    fullDescription: `🤍💍🏡 Pure Love Glass House — where simplicity meets romance, and every moment is wrapped in love ✨

Welcome to a serene glass house where emotions are honest, moments are gentle, and love is beautifully pure ✨. Pure Love Glass House is a thoughtfully designed space for celebrating heartfelt milestones in an elegant, calm, and romantic atmosphere at the best romantic cafe in Vadodara.

✨ Experience Highlights

• Private Glass House Celebration (3 Hours) ✨
A peaceful and intimate setting, perfect for anniversary celebrations, romantic proposals, birthday surprises, candlelight dinners, and meaningful surprises 🤍🕯️

• Warm Welcome with Curated Treats 🥂🍰
Delightful refreshments, ideal for baby moments, pregnancy announcements, and joyful occasions 🎉
💡 Celebration Cake available at extra cost (₹350)

• Minimal Romantic Décor with Soft Lights 💡🌿
A clean, elegant setup that enhances emotions and creates a stunning backdrop for pre-wedding shoots and timeless photos 📸

• Cozy Candle-Lit Seating 🕯️💑
Comfortable seating designed for quiet conversations, deep connections, and unforgettable moments 💞

• Tasty Bites & Gentle Music 🍽️🎶
Soft music and delicious snacks to complete a calm, love-filled experience ✨

🎉 Perfect For
Birthday Surprise Vadodara | Anniversary Celebration | Romantic Proposal | Candlelight Dinner for Couples | Surprise Party | Pre-Wedding Photoshoot | Baby Moments (Pregnancy Announcement)

📍 Best pure romantic glass house Vadodara | Private celebration venue Gotri | Couple-friendly cafe`,
    price: 4700,
    cakeIncluded: false,
    features: [
      "3 Hours Private Glass House Celebration ✨",
      "Welcome Drink & Curated Treats 🥂",
      "Pure White Theme with elegant simplicity 🤍",
      "Rose Petals & Candle Pathway 🌹",
      "Minimal Romantic Décor & Soft Lights 💡",
      "Delicious Snacks & Gentle Music 🎶",
      "Celebration Cake available (+₹350) 🍰"
    ],
    perfectFor: ["Birthday Surprise", "Anniversary Celebration", "Romantic Proposal", "Candlelight Dinner", "Surprise Party", "Pre-Wedding Photoshoot", "Baby Moments"],
    thumbnail: "/packages/thumbnails/pure-love-glass-house.webp",
    images: [
      "/packages/thumbnails/pure-love-glass-house.webp",
      "/packages/pure-love-glass-house/images/95.webp",
      "/packages/pure-love-glass-house/images/96.webp",
      "/packages/pure-love-glass-house/images/98.webp",
      "/packages/pure-love-glass-house/images/99.webp",
      "/packages/pure-love-glass-house/images/100.webp",
      "/packages/pure-love-glass-house/images/105.webp",
      "/packages/pure-love-glass-house/images/106.webp",
      "/packages/pure-love-glass-house/images/107.webp",
      "/packages/pure-love-glass-house/images/108.webp",
      "/packages/pure-love-glass-house/images/110.webp"
    ]
  }
];

// ==================== MENU ITEMS ====================
export const menuItems = {
  starters: [
    { name: "Mojito Welcome Drink", description: "A refreshing mojito sip that says 'tonight is special'", emoji: "🍹" },
    { name: "Cheese Fondue", description: "Rich, melting cheese with crispy cheese balls, golden wedges & crunchy nachos", emoji: "🧀" },
    { name: "Paneer Tortilla", description: "Soft, warm tortilla hugging spicy paneer with the chef's secret seasoning", emoji: "🌯" },
    { name: "Peri Peri Fries with Mac & Cheese", description: "Smoky peri-peri fries dipped in velvety, creamy mac & cheese", emoji: "🍟" },
    { name: "Tangy Loaf", description: "Warm, toasty loaf drizzled with gooey cheesy garlic sauce", emoji: "🍞" },
    { name: "Unlimited Cold Drink", description: "Unlimited refreshing cold drinks throughout your celebration", emoji: "🥤" },
  ],
  desserts: [
    { name: "Dessert with Chocolate Bite", description: "A silky, melt-in-your-mouth chocolate ending to a perfect evening", emoji: "🍫" },
    { name: "Mineral Water", description: "Pure, refreshing mineral water for your comfort", emoji: "💧" },
  ],
  addOns: [
    { name: "Celebration Cake", description: "A beautifully crafted cake to sweeten the moment", price: "₹350", emoji: "🍰" },
    { name: "Bubbly Champagne", description: "Non-alcoholic fruit fizz — pop, pour & toast to love", price: "₹500", emoji: "🥂" }
  ]
};

// ==================== SERVICE CATEGORIES ====================
export const serviceCategories: ServiceCategory[] = [
  {
    slug: "birthday-surprise",
    name: "Birthday Surprise",
    emoji: "🎂",
    description: "Create magical birthday celebrations with beautiful decorations, cakes, and intimate private setups.",
    metaTitle: "Birthday Surprise in Vadodara | Private Rooftop Venue",
    metaDescription: "Plan the perfect birthday surprise in Vadodara. Romantic decorations, celebration cake, and intimate rooftop celebration for couples.",
    keywords: [
      { slug: "birthday-surprise-for-boyfriend-vadodara", title: "Birthday Surprise for Boyfriend", h1: "Best Birthday Surprise for Boyfriend in Vadodara", metaTitle: "Birthday Surprise for Boyfriend Vadodara | Unforgettable Celebration", metaDescription: "Plan the perfect birthday surprise for your boyfriend in Vadodara. Romantic decorations, cake, and intimate celebration. Book your special moment today!" },
      { slug: "birthday-surprise-for-girlfriend-vadodara", title: "Birthday Surprise for Girlfriend", h1: "Romantic Birthday Surprise for Girlfriend in Vadodara", metaTitle: "Birthday Surprise for Girlfriend Vadodara | Make Her Day Special", metaDescription: "Create unforgettable birthday memories for your girlfriend in Vadodara with balloon decorations, cake, flowers and romantic setup. Packages from ₹4,700." },
      { slug: "birthday-surprise-for-husband-vadodara", title: "Birthday Surprise for Husband", h1: "Special Birthday Surprise for Husband in Vadodara", metaTitle: "Birthday Surprise for Husband Vadodara | Romantic Celebration", metaDescription: "Surprise your husband with a romantic birthday celebration in Vadodara. Stunning decorations, private venue & memorable moments. Reserve your unforgettable evening!" },
      { slug: "birthday-surprise-for-wife-vadodara", title: "Birthday Surprise for Wife", h1: "Romantic Birthday Surprise for Wife in Vadodara", metaTitle: "Birthday Surprise for Wife Vadodara | Make Her Feel Special", metaDescription: "Plan a dreamy birthday surprise for your wife in Vadodara with elegant decorations, flowers, and romantic ambiance. Create magical memories now!" },
      { slug: "romantic-birthday-surprise-vadodara", title: "Romantic Birthday Surprise", h1: "Romantic Birthday Surprise in Vadodara", metaTitle: "Romantic Birthday Surprise Vadodara | Couple Celebration", metaDescription: "Book a romantic birthday surprise in Vadodara with candlelight setup, decorations, and intimate celebration for couples. All-inclusive packages available." },
      { slug: "birthday-celebration-for-couples-vadodara", title: "Birthday Celebration for Couples", h1: "Birthday Celebration for Couples in Vadodara", metaTitle: "Couple Birthday Celebration Vadodara | Private Venue", metaDescription: "Celebrate your special day as a couple in Vadodara with exclusive birthday packages and romantic rooftop setups. Book now for an exclusive experience!" },
      { slug: "birthday-room-decoration-vadodara", title: "Birthday Room Decoration", h1: "Birthday Room Decoration in Vadodara", metaTitle: "Birthday Room Decoration Vadodara | Balloon & Flower Setup", metaDescription: "Beautiful birthday room decoration in Vadodara with balloons, flowers, and romantic themes for couples. Private rooftop venue awaits!" },
      { slug: "birthday-balloon-decoration-vadodara", title: "Birthday Balloon Decoration", h1: "Birthday Balloon Decoration in Vadodara", metaTitle: "Birthday Balloon Decoration Vadodara | Creative Setups", metaDescription: "Stunning birthday balloon decoration in Vadodara for romantic celebrations. Heart shapes, arches, and more. Make every moment count!" },
      { slug: "surprise-birthday-party-vadodara", title: "Surprise Birthday Party", h1: "Surprise Birthday Party in Vadodara", metaTitle: "Surprise Birthday Party Vadodara | Private Celebration", metaDescription: "Plan a surprise birthday party in Vadodara with romantic setup and private ambiance. Private rooftop venue. Book now for an exclusive experience!" },
      { slug: "midnight-birthday-surprise-vadodara", title: "Midnight Birthday Surprise", h1: "Midnight Birthday Surprise in Vadodara", metaTitle: "Midnight Birthday Surprise Vadodara | 12 AM Celebration", metaDescription: "Book midnight birthday surprise in Vadodara to celebrate at 12 AM with cake, decorations, and romantic moments. Book your special moment today!" },
      { slug: "birthday-party-places-vadodara", title: "Birthday Party Places", h1: "Best Birthday Party Places in Vadodara", metaTitle: "Birthday Party Places Vadodara | Romantic Venues", metaDescription: "Find the best birthday party places in Vadodara for couples. Enjoy private rooftop celebrations." },
      { slug: "birthday-party-venues-vadodara", title: "Birthday Party Venues", h1: "Birthday Party Venues for Couples in Vadodara", metaTitle: "Birthday Party Venues Vadodara | Couple-Friendly", metaDescription: "Discover couple-friendly birthday party venues in Vadodara. Book our private rooftop venue for intimate celebrations." },
      { slug: "best-birthday-surprise-vadodara", title: "Best Birthday Surprise", h1: "Best Birthday Surprise Ideas in Vadodara", metaTitle: "Best Birthday Surprise Vadodara | Top Rated", metaDescription: "Looking for the best birthday surprise in Vadodara? Enjoy premium decorations and romantic setups." },
      { slug: "birthday-surprise-planners-vadodara", title: "Birthday Surprise Planners", h1: "Birthday Surprise Planners in Vadodara", metaTitle: "Birthday Surprise Planners Vadodara | Professional Setup", metaDescription: "Expert birthday surprise planners in Vadodara. We handle decorations, cake, and everything. Packages from ₹4,700." },
      { slug: "unique-birthday-celebration-vadodara", title: "Unique Birthday Celebration", h1: "Unique Birthday Celebration Ideas in Vadodara", metaTitle: "Unique Birthday Celebration Vadodara | Creative Ideas", metaDescription: "Plan a unique birthday celebration in Vadodara with creative themes and personalized romantic setups. Reserve your unforgettable evening!" }
    ]
  },
  {
    slug: "anniversary-celebration",
    name: "Anniversary Celebration",
    emoji: "💑",
    description: "Celebrate your love journey with elegant anniversary dinners featuring special decorations and intimate celebrations.",
    metaTitle: "Anniversary Celebration in Vadodara | Most Romantic Experience",
    metaDescription: "Plan the perfect anniversary celebration in Vadodara. Romantic rooftop dinners, decorations, and intimate moments for couples.",
    keywords: [
      { slug: "anniversary-dinner-vadodara", title: "Anniversary Dinner", h1: "Romantic Anniversary Dinner in Vadodara", metaTitle: "Anniversary Dinner Vadodara | Romantic Restaurant", metaDescription: "Book a romantic anniversary dinner in Vadodara. Candlelight setup, special decorations, and intimate dining." },
      { slug: "anniversary-surprise-for-husband-vadodara", title: "Anniversary Surprise for Husband", h1: "Anniversary Surprise for Husband in Vadodara", metaTitle: "Anniversary Surprise for Husband Vadodara | Special Setup", metaDescription: "Plan a special anniversary surprise for your husband in Vadodara with romantic decorations and intimate celebration." },
      { slug: "anniversary-surprise-for-wife-vadodara", title: "Anniversary Surprise for Wife", h1: "Anniversary Surprise for Wife in Vadodara", metaTitle: "Anniversary Surprise for Wife Vadodara | Make Her Feel Special", metaDescription: "Create a beautiful anniversary surprise for your wife in Vadodara with elegant decorations and romantic ambiance." },
      { slug: "first-anniversary-celebration-vadodara", title: "First Anniversary Celebration", h1: "First Anniversary Celebration in Vadodara", metaTitle: "First Anniversary Celebration Vadodara | Special Milestone", metaDescription: "Celebrate your first anniversary in Vadodara with a special romantic setup. Private rooftop venue. Private rooftop venue awaits!" },
      { slug: "wedding-anniversary-party-vadodara", title: "Wedding Anniversary Party", h1: "Wedding Anniversary Party in Vadodara", metaTitle: "Wedding Anniversary Party Vadodara | Private Venue", metaDescription: "Host a memorable wedding anniversary party in Vadodara with private venue and romantic decorations." },
      { slug: "anniversary-decoration-vadodara", title: "Anniversary Decoration", h1: "Anniversary Decoration in Vadodara", metaTitle: "Anniversary Decoration Vadodara | Romantic Setup", metaDescription: "Beautiful anniversary decoration in Vadodara with flowers, balloons, and romantic themes. Create magical memories now!" },
      { slug: "anniversary-celebration-ideas-vadodara", title: "Anniversary Celebration Ideas", h1: "Best Anniversary Celebration Ideas in Vadodara", metaTitle: "Anniversary Celebration Ideas Vadodara | Creative Plans", metaDescription: "Find creative anniversary celebration ideas in Vadodara. From candlelight dinners to rooftop surprises. All-inclusive packages available." },
      { slug: "romantic-anniversary-date-vadodara", title: "Romantic Anniversary Date", h1: "Romantic Anniversary Date in Vadodara", metaTitle: "Romantic Anniversary Date Vadodara | Perfect Evening", metaDescription: "Plan a romantic anniversary date in Vadodara with candlelight dinner and beautiful decorations. Book now for an exclusive experience!" },
      { slug: "anniversary-venues-vadodara", title: "Anniversary Venues", h1: "Best Anniversary Venues in Vadodara", metaTitle: "Anniversary Venues Vadodara | Couple-Friendly", metaDescription: "Discover the best anniversary venues in Vadodara for couples. Enjoy private rooftop celebrations." },
      { slug: "anniversary-restaurants-vadodara", title: "Anniversary Restaurants", h1: "Best Anniversary Restaurants in Vadodara", metaTitle: "Anniversary Restaurants Vadodara | Romantic Dining", metaDescription: "Find the best anniversary restaurants in Vadodara for romantic dining. Enjoy candlelight dinners." },
      { slug: "surprise-anniversary-party-vadodara", title: "Surprise Anniversary Party", h1: "Surprise Anniversary Party in Vadodara", metaTitle: "Surprise Anniversary Party Vadodara | Secret Celebration", metaDescription: "Plan a surprise anniversary party in Vadodara with secret setup and romantic decorations. Private rooftop venue awaits!" },
      { slug: "anniversary-planners-vadodara", title: "Anniversary Planners", h1: "Anniversary Planners in Vadodara", metaTitle: "Anniversary Planners Vadodara | Professional Service", metaDescription: "Professional anniversary planners in Vadodara. We handle everything from decorations to dining. Make every moment count!" },
      { slug: "25th-anniversary-celebration-vadodara", title: "25th Anniversary Celebration", h1: "25th Wedding Anniversary Celebration in Vadodara", metaTitle: "25th Anniversary Celebration Vadodara | Silver Jubilee", metaDescription: "Celebrate your silver jubilee 25th anniversary in Vadodara with special decorations and romantic setup." },
      { slug: "10th-anniversary-celebration-vadodara", title: "10th Anniversary Celebration", h1: "10th Anniversary Celebration in Vadodara", metaTitle: "10th Anniversary Celebration Vadodara | Decade of Love", metaDescription: "Mark a decade of love with 10th anniversary celebration in Vadodara. Book your special moment today!" },
      { slug: "anniversary-date-night-vadodara", title: "Anniversary Date Night", h1: "Anniversary Date Night in Vadodara", metaTitle: "Anniversary Date Night Vadodara | Romantic Evening", metaDescription: "Plan a special anniversary date night in Vadodara with candlelight dinner and romantic music. Packages from ₹4,700." }
    ]
  },
  {
    slug: "proposal",
    name: "Proposal",
    emoji: "💍",
    description: "Pop the question in the most romantic way with our stunning proposal setups and private venues.",
    metaTitle: "Proposal Setup in Vadodara | Create Magical Memories",
    metaDescription: "Plan the perfect proposal in Vadodara. Romantic rooftop setups, decorations, and private moments for your special question.",
    keywords: [
      { slug: "proposal-setup-vadodara", title: "Proposal Setup", h1: "Romantic Proposal Setup in Vadodara", metaTitle: "Proposal Setup Vadodara | Romantic Arrangements", metaDescription: "Book a romantic proposal setup in Vadodara. Beautiful decorations and private rooftop venue." },
      { slug: "rooftop-proposal-vadodara", title: "Rooftop Proposal", h1: "Rooftop Proposal in Vadodara", metaTitle: "Rooftop Proposal Vadodara | Stunning City Views", metaDescription: "Plan a stunning rooftop proposal in Vadodara with city views and romantic decorations. Reserve your unforgettable evening!" },
      { slug: "proposal-planners-vadodara", title: "Proposal Planners", h1: "Proposal Planners in Vadodara", metaTitle: "Proposal Planners Vadodara | Professional Setup", metaDescription: "Expert proposal planners in Vadodara. We create perfect moments for your special question. Create magical memories now!" },
      { slug: "surprise-proposal-vadodara", title: "Surprise Proposal", h1: "Surprise Proposal Ideas in Vadodara", metaTitle: "Surprise Proposal Vadodara | Say Yes Moment", metaDescription: "Plan a surprise proposal in Vadodara with secret setup and romantic decorations. All-inclusive packages available." },
      { slug: "proposal-decoration-vadodara", title: "Proposal Decoration", h1: "Proposal Decoration in Vadodara", metaTitle: "Proposal Decoration Vadodara | Beautiful Setup", metaDescription: "Beautiful proposal decoration in Vadodara with flowers, candles, and romantic themes. Book now for an exclusive experience!" },
      { slug: "propose-day-celebration-vadodara", title: "Propose Day Celebration", h1: "Propose Day Celebration in Vadodara", metaTitle: "Propose Day Celebration Vadodara | February 8th", metaDescription: "Celebrate Propose Day in Vadodara with romantic setup and special decorations. Private rooftop venue awaits!" },
      { slug: "proposal-ideas-vadodara", title: "Proposal Ideas", h1: "Best Proposal Ideas in Vadodara", metaTitle: "Proposal Ideas Vadodara | Creative Ways to Propose", metaDescription: "Find creative proposal ideas in Vadodara. From rooftop proposals to candlelight setups. Make every moment count!" },
      { slug: "marriage-proposal-vadodara", title: "Marriage Proposal", h1: "Marriage Proposal Venue in Vadodara", metaTitle: "Marriage Proposal Vadodara | Perfect Venue", metaDescription: "Find the perfect marriage proposal venue in Vadodara. Enjoy private rooftop celebrations." },
      { slug: "romantic-proposal-vadodara", title: "Romantic Proposal", h1: "Romantic Proposal Setup in Vadodara", metaTitle: "Romantic Proposal Vadodara | Unforgettable Moment", metaDescription: "Create an unforgettable romantic proposal in Vadodara with candlelight and decorations. Book your special moment today!" },
      { slug: "proposal-venues-vadodara", title: "Proposal Venues", h1: "Best Proposal Venues in Vadodara", metaTitle: "Proposal Venues Vadodara | Private Spaces", metaDescription: "Discover the best proposal venues in Vadodara for couples. Enjoy intimate rooftop settings." },
      { slug: "engagement-proposal-vadodara", title: "Engagement Proposal", h1: "Engagement Proposal Setup in Vadodara", metaTitle: "Engagement Proposal Vadodara | Ring Ceremony Setup", metaDescription: "Plan an engagement proposal in Vadodara with ring ceremony setup and romantic decorations. Packages from ₹4,700." },
      { slug: "private-proposal-vadodara", title: "Private Proposal", h1: "Private Proposal Setting in Vadodara", metaTitle: "Private Proposal Vadodara | Intimate Venue", metaDescription: "Book a private proposal setting in Vadodara with intimate venue and beautiful decorations. Reserve your unforgettable evening!" },
      { slug: "unique-proposal-ideas-vadodara", title: "Unique Proposal Ideas", h1: "Unique Proposal Ideas in Vadodara", metaTitle: "Unique Proposal Ideas Vadodara | Stand Out", metaDescription: "Find unique proposal ideas in Vadodara to make your moment special. Private rooftop venue. Make every moment count!" },
      { slug: "proposal-places-vadodara", title: "Proposal Places", h1: "Best Proposal Places in Vadodara", metaTitle: "Proposal Places Vadodara | Romantic Spots", metaDescription: "Find the best proposal places in Vadodara. Enjoy romantic rooftop settings for your big question." },
      { slug: "candlelight-proposal-vadodara", title: "Candlelight Proposal", h1: "Candlelight Proposal Setup in Vadodara", metaTitle: "Candlelight Proposal Vadodara | Romantic Ambiance", metaDescription: "Plan a candlelight proposal in Vadodara with romantic ambiance and beautiful setup. Create magical memories now!" }
    ]
  },
  {
    slug: "candlelight-dinner",
    name: "Candlelight Dinner",
    emoji: "🕯️",
    description: "Experience romantic dining with candlelight ambiance, gourmet cuisine, and an exclusive setting designed for couples.",
    metaTitle: "Candlelight Dinner in Vadodara | Stunning Private Setup",
    metaDescription: "Book a romantic candlelight dinner in Vadodara. Private rooftop dining, delicious food, and intimate ambiance for couples.",
    keywords: [
      { slug: "candlelight-dinner-for-couples-vadodara", title: "Candlelight Dinner for Couples", h1: "Candlelight Dinner for Couples in Vadodara", metaTitle: "Candlelight Dinner for Couples Vadodara | Romantic Dining", metaDescription: "Book a romantic candlelight dinner for couples in Vadodara. Private rooftop venue. Book your special moment today!" },
      { slug: "rooftop-candlelight-dinner-vadodara", title: "Rooftop Candlelight Dinner", h1: "Rooftop Candlelight Dinner in Vadodara", metaTitle: "Rooftop Candlelight Dinner Vadodara | City Views", metaDescription: "Experience rooftop candlelight dinner in Vadodara with stunning city views. All-inclusive packages available." },
      { slug: "romantic-dinner-vadodara", title: "Romantic Dinner", h1: "Romantic Dinner in Vadodara", metaTitle: "Romantic Dinner Vadodara | Perfect Evening", metaDescription: "Plan a romantic dinner in Vadodara with candlelight and beautiful decorations. Book now for an exclusive experience!" },
      { slug: "candlelight-dinner-restaurants-vadodara", title: "Candlelight Dinner Restaurants", h1: "Best Candlelight Dinner Restaurants in Vadodara", metaTitle: "Candlelight Dinner Restaurants Vadodara | Top Picks", metaDescription: "Find the best candlelight dinner restaurants in Vadodara. Enjoy private rooftop dining." },
      { slug: "private-dinner-vadodara", title: "Private Dinner", h1: "Private Dinner for Couples in Vadodara", metaTitle: "Private Dinner Vadodara | Intimate Setting", metaDescription: "Book a private dinner for couples in Vadodara with intimate setting. Private rooftop venue awaits!" },
      { slug: "romantic-restaurants-vadodara", title: "Romantic Restaurants", h1: "Best Romantic Restaurants in Vadodara", metaTitle: "Romantic Restaurants Vadodara | Couple-Friendly", metaDescription: "Discover the best romantic restaurants in Vadodara for couples. Enjoy candlelight dinners." },
      { slug: "dinner-date-vadodara", title: "Dinner Date", h1: "Perfect Dinner Date in Vadodara", metaTitle: "Dinner Date Vadodara | Romantic Evening", metaDescription: "Plan a perfect dinner date in Vadodara with romantic setup and delicious food. Make every moment count!" },
      { slug: "couple-dinner-vadodara", title: "Couple Dinner", h1: "Couple Dinner Experience in Vadodara", metaTitle: "Couple Dinner Vadodara | Special Moments", metaDescription: "Enjoy a special couple dinner experience in Vadodara with candlelight and music. Book your special moment today!" },
      { slug: "candlelight-dinner-date-vadodara", title: "Candlelight Dinner Date", h1: "Candlelight Dinner Date in Vadodara", metaTitle: "Candlelight Dinner Date Vadodara | Romantic Night", metaDescription: "Book a candlelight dinner date in Vadodara for a romantic night. Private rooftop venue. Packages from ₹4,700." },
      { slug: "outdoor-candlelight-dinner-vadodara", title: "Outdoor Candlelight Dinner", h1: "Outdoor Candlelight Dinner in Vadodara", metaTitle: "Outdoor Candlelight Dinner Vadodara | Under the Stars", metaDescription: "Experience outdoor candlelight dinner in Vadodara under the stars. Private rooftop venue. Reserve your unforgettable evening!" },
      { slug: "candlelight-dinner-packages-vadodara", title: "Candlelight Dinner Packages", h1: "Candlelight Dinner Packages in Vadodara", metaTitle: "Candlelight Dinner Packages Vadodara | All Inclusive", metaDescription: "Explore candlelight dinner packages in Vadodara with food, decorations, and music. Packages from ₹4,700." },
      { slug: "candlelight-dinner-places-vadodara", title: "Candlelight Dinner Places", h1: "Best Candlelight Dinner Places in Vadodara", metaTitle: "Candlelight Dinner Places Vadodara | Romantic Spots", metaDescription: "Find the best candlelight dinner places in Vadodara. Enjoy private rooftop settings." },
      { slug: "special-dinner-vadodara", title: "Special Dinner", h1: "Special Dinner for Two in Vadodara", metaTitle: "Special Dinner Vadodara | Memorable Evening", metaDescription: "Book a special dinner for two in Vadodara with romantic ambiance. Reserve your unforgettable evening!" },
      { slug: "candlelight-dinner-near-me-vadodara", title: "Candlelight Dinner Near Me", h1: "Candlelight Dinner Near Me in Vadodara", metaTitle: "Candlelight Dinner Near Me Vadodara | Local Options", metaDescription: "Find candlelight dinner near you in Vadodara. Enjoy convenient rooftop dining." },
      { slug: "intimate-dinner-vadodara", title: "Intimate Dinner", h1: "Intimate Dinner Setting in Vadodara", metaTitle: "Intimate Dinner Vadodara | Private Moments", metaDescription: "Enjoy an intimate dinner setting in Vadodara with private ambiance. Private rooftop venue. Create magical memories now!" }
    ]
  },
  {
    slug: "surprise-date",
    name: "Surprise Date",
    emoji: "🎁",
    description: "Transform ordinary dates into extraordinary memories with surprise setups, romantic themes, and unforgettable moments.",
    metaTitle: "Surprise Date Setup in Vadodara | Book Your Special Moment",
    metaDescription: "Plan the perfect surprise date in Vadodara. Romantic rooftop setups, decorations, and memorable moments for couples.",
    keywords: [
      { slug: "surprise-date-for-boyfriend-vadodara", title: "Surprise Date for Boyfriend", h1: "Surprise Date Ideas for Boyfriend in Vadodara", metaTitle: "Surprise Date for Boyfriend Vadodara | Romantic Setup", metaDescription: "Plan a surprise date for your boyfriend in Vadodara with romantic setup. Create magical memories now!" },
      { slug: "surprise-date-for-girlfriend-vadodara", title: "Surprise Date for Girlfriend", h1: "Surprise Date Ideas for Girlfriend in Vadodara", metaTitle: "Surprise Date for Girlfriend Vadodara | Make Her Smile", metaDescription: "Create a surprise date for your girlfriend in Vadodara with beautiful decorations. All-inclusive packages available." },
      { slug: "surprise-date-for-husband-vadodara", title: "Surprise Date for Husband", h1: "Surprise Date for Husband in Vadodara", metaTitle: "Surprise Date for Husband Vadodara | Special Evening", metaDescription: "Plan a surprise date for your husband in Vadodara with romantic ambiance. Book now for an exclusive experience!" },
      { slug: "surprise-date-for-wife-vadodara", title: "Surprise Date for Wife", h1: "Surprise Date for Wife in Vadodara", metaTitle: "Surprise Date for Wife Vadodara | Make Her Day", metaDescription: "Create a surprise date for your wife in Vadodara with elegant setup. Private rooftop venue awaits!" },
      { slug: "romantic-surprise-vadodara", title: "Romantic Surprise", h1: "Romantic Surprise Ideas in Vadodara", metaTitle: "Romantic Surprise Vadodara | Unforgettable Moments", metaDescription: "Plan a romantic surprise in Vadodara with decorations and intimate setting. Make every moment count!" },
      { slug: "surprise-date-ideas-vadodara", title: "Surprise Date Ideas", h1: "Best Surprise Date Ideas in Vadodara", metaTitle: "Surprise Date Ideas Vadodara | Creative Plans", metaDescription: "Find creative surprise date ideas in Vadodara. From rooftop dinners to candlelight setups. Book your special moment today!" },
      { slug: "surprise-date-planners-vadodara", title: "Surprise Date Planners", h1: "Surprise Date Planners in Vadodara", metaTitle: "Surprise Date Planners Vadodara | Professional Setup", metaDescription: "Expert surprise date planners in Vadodara. We create perfect moments. Packages from ₹4,700." },
      { slug: "surprise-date-setup-vadodara", title: "Surprise Date Setup", h1: "Surprise Date Setup in Vadodara", metaTitle: "Surprise Date Setup Vadodara | Beautiful Arrangements", metaDescription: "Book a surprise date setup in Vadodara with beautiful arrangements. Private rooftop venue. All-inclusive packages available." },
      { slug: "surprise-date-places-vadodara", title: "Surprise Date Places", h1: "Best Surprise Date Places in Vadodara", metaTitle: "Surprise Date Places Vadodara | Romantic Venues", metaDescription: "Find the best surprise date places in Vadodara. Enjoy private rooftop celebrations." },
      { slug: "surprise-date-night-vadodara", title: "Surprise Date Night", h1: "Surprise Date Night in Vadodara", metaTitle: "Surprise Date Night Vadodara | Magical Evening", metaDescription: "Plan a magical surprise date night in Vadodara with candlelight and music. Reserve your unforgettable evening!" },
      { slug: "unique-date-ideas-vadodara", title: "Unique Date Ideas", h1: "Unique Date Ideas in Vadodara", metaTitle: "Unique Date Ideas Vadodara | Stand Out", metaDescription: "Find unique date ideas in Vadodara to make your evening special. Private rooftop venue. Book now for an exclusive experience!" },
      { slug: "special-date-vadodara", title: "Special Date", h1: "Special Date Setup in Vadodara", metaTitle: "Special Date Vadodara | Memorable Moments", metaDescription: "Plan a special date in Vadodara with romantic setup and decorations. Create magical memories now!" },
      { slug: "rooftop-date-vadodara", title: "Rooftop Date", h1: "Rooftop Date in Vadodara", metaTitle: "Rooftop Date Vadodara | City Views", metaDescription: "Experience a rooftop date in Vadodara with stunning city views. All-inclusive packages available." },
      { slug: "couple-date-vadodara", title: "Couple Date", h1: "Couple Date Experience in Vadodara", metaTitle: "Couple Date Vadodara | Romantic Evening", metaDescription: "Enjoy a couple date experience in Vadodara with romantic ambiance. Book now for an exclusive experience!" },
      { slug: "surprise-date-decoration-vadodara", title: "Surprise Date Decoration", h1: "Surprise Date Decoration in Vadodara", metaTitle: "Surprise Date Decoration Vadodara | Beautiful Setup", metaDescription: "Beautiful surprise date decoration in Vadodara with flowers and candles. Private rooftop venue awaits!" }
    ]
  },
  {
    slug: "pre-wedding-shoot",
    name: "Pre-Wedding Shoot",
    emoji: "📸",
    description: "Capture your love story with stunning pre-wedding photoshoots in our beautiful rooftop and glass house settings.",
    metaTitle: "Pre-Wedding Shoot Location in Vadodara | 100% Private & Romantic",
    metaDescription: "Book the perfect pre-wedding shoot location in Vadodara. Stunning backdrops, romantic settings, and beautiful memories.",
    keywords: [
      { slug: "pre-wedding-shoot-location-vadodara", title: "Pre-Wedding Shoot Location", h1: "Best Pre-Wedding Shoot Location in Vadodara", metaTitle: "Pre-Wedding Shoot Location Vadodara | Stunning Backdrops", metaDescription: "Find the best pre-wedding shoot location in Vadodara with private rooftop setup with stunning backdrops." },
      { slug: "pre-wedding-photoshoot-vadodara", title: "Pre-Wedding Photoshoot", h1: "Pre-Wedding Photoshoot in Vadodara", metaTitle: "Pre-Wedding Photoshoot Vadodara | Romantic Shots", metaDescription: "Book a pre-wedding photoshoot in Vadodara with romantic settings. Make every moment count!" },
      { slug: "pre-wedding-shoot-places-vadodara", title: "Pre-Wedding Shoot Places", h1: "Best Pre-Wedding Shoot Places in Vadodara", metaTitle: "Pre-Wedding Shoot Places Vadodara | Top Locations", metaDescription: "Discover the best pre-wedding shoot places in Vadodara. Enjoy beautiful rooftop settings." },
      { slug: "rooftop-pre-wedding-shoot-vadodara", title: "Rooftop Pre-Wedding Shoot", h1: "Rooftop Pre-Wedding Shoot in Vadodara", metaTitle: "Rooftop Pre-Wedding Shoot Vadodara | City Views", metaDescription: "Experience rooftop pre-wedding shoot in Vadodara with stunning city views. Book your special moment today!" },
      { slug: "pre-wedding-shoot-ideas-vadodara", title: "Pre-Wedding Shoot Ideas", h1: "Pre-Wedding Shoot Ideas in Vadodara", metaTitle: "Pre-Wedding Shoot Ideas Vadodara | Creative Concepts", metaDescription: "Find creative pre-wedding shoot ideas in Vadodara with private rooftop setup with unique setups." },
      { slug: "pre-wedding-venues-vadodara", title: "Pre-Wedding Venues", h1: "Best Pre-Wedding Venues in Vadodara", metaTitle: "Pre-Wedding Venues Vadodara | Romantic Locations", metaDescription: "Discover the best pre-wedding venues in Vadodara. Enjoy intimate rooftop settings." },
      { slug: "couple-photoshoot-vadodara", title: "Couple Photoshoot", h1: "Couple Photoshoot Location in Vadodara", metaTitle: "Couple Photoshoot Vadodara | Beautiful Backdrops", metaDescription: "Book a couple photoshoot in Vadodara with beautiful backdrops. Packages from ₹4,700." },
      { slug: "romantic-photoshoot-vadodara", title: "Romantic Photoshoot", h1: "Romantic Photoshoot in Vadodara", metaTitle: "Romantic Photoshoot Vadodara | Intimate Setting", metaDescription: "Plan a romantic photoshoot in Vadodara with intimate setting. Private rooftop venue. Private rooftop venue awaits!" },
      { slug: "pre-wedding-photography-vadodara", title: "Pre-Wedding Photography", h1: "Pre-Wedding Photography Location in Vadodara", metaTitle: "Pre-Wedding Photography Vadodara | Stunning Shots", metaDescription: "Find the perfect pre-wedding photography location in Vadodara. Reserve your unforgettable evening!" },
      { slug: "engagement-photoshoot-vadodara", title: "Engagement Photoshoot", h1: "Engagement Photoshoot Location in Vadodara", metaTitle: "Engagement Photoshoot Vadodara | Beautiful Venue", metaDescription: "Book an engagement photoshoot location in Vadodara with beautiful venue. Create magical memories now!" },
      { slug: "pre-wedding-shoot-packages-vadodara", title: "Pre-Wedding Shoot Packages", h1: "Pre-Wedding Shoot Packages in Vadodara", metaTitle: "Pre-Wedding Shoot Packages Vadodara | All Inclusive", metaDescription: "Explore pre-wedding shoot packages in Vadodara with decorations and setup. All-inclusive packages available." },
      { slug: "indoor-pre-wedding-shoot-vadodara", title: "Indoor Pre-Wedding Shoot", h1: "Indoor Pre-Wedding Shoot in Vadodara", metaTitle: "Indoor Pre-Wedding Shoot Vadodara | Glass House", metaDescription: "Experience indoor pre-wedding shoot in Vadodara with private rooftop setup glass house." },
      { slug: "night-pre-wedding-shoot-vadodara", title: "Night Pre-Wedding Shoot", h1: "Night Pre-Wedding Shoot in Vadodara", metaTitle: "Night Pre-Wedding Shoot Vadodara | Candlelight", metaDescription: "Plan a night pre-wedding shoot in Vadodara with candlelight. Private rooftop venue. Make every moment count!" },
      { slug: "candlelight-pre-wedding-shoot-vadodara", title: "Candlelight Pre-Wedding Shoot", h1: "Candlelight Pre-Wedding Shoot in Vadodara", metaTitle: "Candlelight Pre-Wedding Shoot Vadodara | Romantic", metaDescription: "Capture romantic candlelight pre-wedding shoot in Vadodara. Book now for an exclusive experience!" },
      { slug: "unique-pre-wedding-shoot-vadodara", title: "Unique Pre-Wedding Shoot", h1: "Unique Pre-Wedding Shoot Ideas in Vadodara", metaTitle: "Unique Pre-Wedding Shoot Vadodara | Creative Setup", metaDescription: "Find unique pre-wedding shoot ideas in Vadodara with creative setups. Private rooftop venue awaits!" }
    ]
  },
  {
    slug: "baby-moments",
    name: "Baby Moments",
    emoji: "👶",
    description: "Celebrate pregnancy announcements, baby showers, and special baby moments with beautiful decorations and intimate settings.",
    metaTitle: "Baby Moments Celebration in Vadodara | Exclusive Rooftop Experience",
    metaDescription: "Celebrate baby moments in Vadodara. Pregnancy announcements, baby showers, and special celebrations with beautiful decorations.",
    keywords: [
      { slug: "pregnancy-announcement-vadodara", title: "Pregnancy Announcement", h1: "Pregnancy Announcement Celebration in Vadodara", metaTitle: "Pregnancy Announcement Vadodara | Special Celebration", metaDescription: "Plan a special pregnancy announcement celebration in Vadodara. Make every moment count!" },
      { slug: "baby-shower-venue-vadodara", title: "Baby Shower Venue", h1: "Best Baby Shower Venue in Vadodara", metaTitle: "Baby Shower Venue Vadodara | Private Space", metaDescription: "Find the best baby shower venue in Vadodara with private rooftop setup with private space." },
      { slug: "pregnancy-reveal-vadodara", title: "Pregnancy Reveal", h1: "Pregnancy Reveal Party in Vadodara", metaTitle: "Pregnancy Reveal Vadodara | Surprise Setup", metaDescription: "Plan a pregnancy reveal party in Vadodara with surprise setup. Book your special moment today!" },
      { slug: "baby-announcement-party-vadodara", title: "Baby Announcement Party", h1: "Baby Announcement Party in Vadodara", metaTitle: "Baby Announcement Party Vadodara | Celebration", metaDescription: "Host a baby announcement party in Vadodara with beautiful decorations. Packages from ₹4,700." },
      { slug: "expecting-celebration-vadodara", title: "Expecting Celebration", h1: "Expecting Baby Celebration in Vadodara", metaTitle: "Expecting Celebration Vadodara | Joyful Moments", metaDescription: "Celebrate expecting a baby in Vadodara with joyful decorations. Reserve your unforgettable evening!" },
      { slug: "maternity-photoshoot-vadodara", title: "Maternity Photoshoot", h1: "Maternity Photoshoot Location in Vadodara", metaTitle: "Maternity Photoshoot Vadodara | Beautiful Backdrop", metaDescription: "Book a maternity photoshoot location in Vadodara with beautiful backdrop. Create magical memories now!" },
      { slug: "gender-reveal-party-vadodara", title: "Gender Reveal Party", h1: "Gender Reveal Party in Vadodara", metaTitle: "Gender Reveal Party Vadodara | Boy or Girl", metaDescription: "Plan a gender reveal party in Vadodara with exciting setup. All-inclusive packages available." },
      { slug: "baby-shower-decoration-vadodara", title: "Baby Shower Decoration", h1: "Baby Shower Decoration in Vadodara", metaTitle: "Baby Shower Decoration Vadodara | Beautiful Setup", metaDescription: "Beautiful baby shower decoration in Vadodara with balloons and flowers. Book now for an exclusive experience!" },
      { slug: "pregnancy-celebration-vadodara", title: "Pregnancy Celebration", h1: "Pregnancy Celebration in Vadodara", metaTitle: "Pregnancy Celebration Vadodara | Special Moments", metaDescription: "Plan a pregnancy celebration in Vadodara with special moments. Private rooftop venue awaits!" },
      { slug: "baby-moments-photoshoot-vadodara", title: "Baby Moments Photoshoot", h1: "Baby Moments Photoshoot in Vadodara", metaTitle: "Baby Moments Photoshoot Vadodara | Capture Joy", metaDescription: "Capture baby moments with photoshoot in Vadodara. Make every moment count!" },
      { slug: "couple-pregnancy-announcement-vadodara", title: "Couple Pregnancy Announcement", h1: "Couple Pregnancy Announcement in Vadodara", metaTitle: "Couple Pregnancy Announcement Vadodara | Together", metaDescription: "Plan a couple pregnancy announcement in Vadodara with romantic setup. Book your special moment today!" },
      { slug: "godh-bharai-venue-vadodara", title: "Godh Bharai Venue", h1: "Godh Bharai Venue in Vadodara", metaTitle: "Godh Bharai Venue Vadodara | Traditional Setup", metaDescription: "Find the perfect godh bharai venue in Vadodara. Packages from ₹4,700." },
      { slug: "baby-shower-places-vadodara", title: "Baby Shower Places", h1: "Best Baby Shower Places in Vadodara", metaTitle: "Baby Shower Places Vadodara | Top Venues", metaDescription: "Discover the best baby shower places in Vadodara. Enjoy intimate settings." },
      { slug: "pregnancy-photoshoot-vadodara", title: "Pregnancy Photoshoot", h1: "Pregnancy Photoshoot Location in Vadodara", metaTitle: "Pregnancy Photoshoot Vadodara | Beautiful Shots", metaDescription: "Book a pregnancy photoshoot location in Vadodara. Reserve your unforgettable evening!" },
      { slug: "baby-bump-photoshoot-vadodara", title: "Baby Bump Photoshoot", h1: "Baby Bump Photoshoot in Vadodara", metaTitle: "Baby Bump Photoshoot Vadodara | Capture Glow", metaDescription: "Capture the glow with baby bump photoshoot in Vadodara. Create magical memories now!" }
    ]
  },
  {
    slug: "valentines-week",
    name: "Valentine's Week",
    emoji: "💝",
    description: "Celebrate Valentine's Week with romantic experiences from Rose Day to Valentine's Day. All-inclusive packages available.",
    metaTitle: "Valentine's Week Celebration in Vadodara | Private Rooftop Venue",
    metaDescription: "Celebrate Valentine's Week 2026 in Vadodara. Rose Day, Propose Day, Hug Day, Kiss Day & Valentine's Day special romantic packages.",
    keywords: [
      { slug: "valentines-day-celebration-vadodara", title: "Valentine's Day Celebration", h1: "Valentine's Day Celebration in Vadodara 2026", metaTitle: "Valentine's Day Celebration Vadodara 2026 | Romantic Date", metaDescription: "Plan the perfect Valentine's Day celebration in Vadodara 2026. Romantic candlelight dinner, decorations & private venue. Book now for an exclusive experience!" },
      { slug: "rose-day-celebration-vadodara", title: "Rose Day Celebration", h1: "Rose Day Celebration in Vadodara (Feb 7)", metaTitle: "Rose Day Celebration Vadodara 2026 | February 7th", metaDescription: "Celebrate Rose Day in Vadodara on February 7th with your partner. Rose decorations, romantic ambiance. Private rooftop venue awaits!" },
      { slug: "propose-day-celebration-vadodara", title: "Propose Day Celebration", h1: "Propose Day Celebration in Vadodara (Feb 8)", metaTitle: "Propose Day Celebration Vadodara 2026 | February 8th", metaDescription: "Make Propose Day special in Vadodara on February 8th. Romantic proposal setup with decorations. Make every moment count!" },
      { slug: "chocolate-day-celebration-vadodara", title: "Chocolate Day Celebration", h1: "Chocolate Day Celebration in Vadodara (Feb 9)", metaTitle: "Chocolate Day Celebration Vadodara 2026 | February 9th", metaDescription: "Celebrate Chocolate Day in Vadodara on February 9th with sweet treats and romantic dinner. Book your special moment today!" },
      { slug: "teddy-day-celebration-vadodara", title: "Teddy Day Celebration", h1: "Teddy Day Celebration in Vadodara (Feb 10)", metaTitle: "Teddy Day Celebration Vadodara 2026 | February 10th", metaDescription: "Cute Teddy Day celebration in Vadodara on February 10th with teddy decorations. Packages from ₹4,700." },
      { slug: "promise-day-celebration-vadodara", title: "Promise Day Celebration", h1: "Promise Day Celebration in Vadodara (Feb 11)", metaTitle: "Promise Day Celebration Vadodara 2026 | February 11th", metaDescription: "Celebrate Promise Day in Vadodara on February 11th with meaningful moments. Reserve your unforgettable evening!" },
      { slug: "hug-day-celebration-vadodara", title: "Hug Day Celebration", h1: "Hug Day Celebration in Vadodara (Feb 12)", metaTitle: "Hug Day Celebration Vadodara 2026 | February 12th", metaDescription: "Cozy Hug Day celebration in Vadodara on February 12th with warm ambiance. Create magical memories now!" },
      { slug: "kiss-day-celebration-vadodara", title: "Kiss Day Celebration", h1: "Kiss Day Celebration in Vadodara (Feb 13)", metaTitle: "Kiss Day Celebration Vadodara 2026 | February 13th", metaDescription: "Romantic Kiss Day celebration in Vadodara on February 13th with intimate setup. All-inclusive packages available." },
      { slug: "valentines-dinner-vadodara", title: "Valentine's Dinner", h1: "Valentine's Day Dinner in Vadodara 2026", metaTitle: "Valentine's Day Dinner Vadodara 2026 | Romantic Restaurant", metaDescription: "Book romantic Valentine's Day dinner in Vadodara 2026. Candlelight dinner with special menu. Book now for an exclusive experience!" },
      { slug: "valentines-week-packages-vadodara", title: "Valentine's Week Packages", h1: "Valentine's Week Packages in Vadodara 2026", metaTitle: "Valentine's Week Packages Vadodara 2026 | All 7 Days", metaDescription: "Special Valentine's Week packages in Vadodara 2026 for all 7 days. Rose Day to Valentine's Day celebrations. Private rooftop venue awaits!" },
      { slug: "valentines-date-vadodara", title: "Valentine's Date", h1: "Valentine's Day Date in Vadodara 2026", metaTitle: "Valentine's Day Date Vadodara 2026 | Perfect Evening", metaDescription: "Plan the perfect Valentine's Day date in Vadodara 2026. Romantic rooftop dinner. Make every moment count!" },
      { slug: "valentines-surprise-vadodara", title: "Valentine's Surprise", h1: "Valentine's Day Surprise in Vadodara 2026", metaTitle: "Valentine's Day Surprise Vadodara 2026 | Surprise Your Love", metaDescription: "Plan a Valentine's Day surprise in Vadodara 2026 with decorations and special setup. Book your special moment today!" },
      { slug: "valentines-decoration-vadodara", title: "Valentine's Decoration", h1: "Valentine's Day Decoration in Vadodara 2026", metaTitle: "Valentine's Day Decoration Vadodara 2026 | Romantic Setup", metaDescription: "Beautiful Valentine's Day decoration in Vadodara 2026 with hearts, roses, and candles. Packages from ₹4,700." },
      { slug: "valentines-candlelight-dinner-vadodara", title: "Valentine's Candlelight Dinner", h1: "Valentine's Day Candlelight Dinner in Vadodara 2026", metaTitle: "Valentine's Candlelight Dinner Vadodara 2026 | Private Venue", metaDescription: "Romantic Valentine's Day candlelight dinner in Vadodara 2026. Private rooftop venue. Reserve your unforgettable evening!" },
      { slug: "valentines-special-vadodara", title: "Valentine's Special", h1: "Valentine's Day Special Celebration in Vadodara 2026", metaTitle: "Valentine's Day Special Vadodara 2026 | Unforgettable", metaDescription: "Experience Valentine's Day special celebration in Vadodara 2026 with romantic packages. Create magical memories now!" }
    ]
  },
  {
    slug: "rooftop-experience",
    name: "Rooftop Experience",
    emoji: "🌙",
    description: "Experience unforgettable moments on our stunning rooftop venue with panoramic city views, starlit ambiance, and exclusive setups.",
    metaTitle: "Rooftop Experience in Vadodara | Unforgettable Celebration",
    metaDescription: "Discover the best rooftop experience in Vadodara. Stunning city views, romantic ambiance, and exclusive private celebrations under the stars.",
    keywords: [
      { slug: "rooftop-celebration-vadodara", title: "Rooftop Celebration", h1: "Rooftop Celebration Venue in Vadodara", metaTitle: "Rooftop Celebration Vadodara | Premium Venue with City Views", metaDescription: "Book a stunning rooftop celebration in Vadodara. Premium private venue with panoramic city views, elegant decorations, and unforgettable ambiance for couples." },
      { slug: "rooftop-party-venue-vadodara", title: "Rooftop Party Venue", h1: "Best Rooftop Party Venue in Vadodara", metaTitle: "Rooftop Party Venue Vadodara | Private Events & Celebrations", metaDescription: "Find the best rooftop party venue in Vadodara. Perfect for intimate parties, couple celebrations, and private events with stunning city skyline views." },
      { slug: "rooftop-dining-vadodara", title: "Rooftop Dining", h1: "Rooftop Dining Experience in Vadodara", metaTitle: "Rooftop Dining Vadodara | Fine Dining Under the Stars", metaDescription: "Experience exquisite rooftop dining in Vadodara. Gourmet cuisine, candlelit tables, and breathtaking views for an unforgettable evening." },
      { slug: "rooftop-restaurant-vadodara", title: "Rooftop Restaurant", h1: "Best Rooftop Restaurant in Vadodara", metaTitle: "Rooftop Restaurant Vadodara | Romantic Dining Destination", metaDescription: "Discover the best rooftop restaurant in Vadodara for couples. Enjoy romantic atmosphere, delicious food, and stunning open-air dining experience." },
      { slug: "rooftop-birthday-celebration-vadodara", title: "Rooftop Birthday Celebration", h1: "Rooftop Birthday Celebration in Vadodara", metaTitle: "Rooftop Birthday Celebration Vadodara | Private Sky Venue", metaDescription: "Celebrate birthdays on a beautiful rooftop in Vadodara. Enjoy private rooftop venue with decorations, cake, and magical city views." },
      { slug: "rooftop-anniversary-vadodara", title: "Rooftop Anniversary", h1: "Rooftop Anniversary Celebration in Vadodara", metaTitle: "Rooftop Anniversary Vadodara | Romantic Open-Air Venue", metaDescription: "Celebrate your anniversary on a romantic rooftop in Vadodara. our private rooftop venue provides elegant decorations, candlelight dinner, and starlit ambiance." },
      { slug: "open-air-rooftop-vadodara", title: "Open Air Rooftop", h1: "Open Air Rooftop Venue in Vadodara", metaTitle: "Open Air Rooftop Vadodara | Fresh Air & City Lights", metaDescription: "Experience the best open air rooftop venue in Vadodara. Enjoy fresh breezes, city lights, and romantic atmosphere for couples." },
      { slug: "sky-lounge-vadodara", title: "Sky Lounge", h1: "Sky Lounge Experience in Vadodara", metaTitle: "Sky Lounge Vadodara | Elevated Romantic Experience", metaDescription: "Visit the premium sky lounge in Vadodara. Elevated dining, panoramic views, and exclusive atmosphere for memorable celebrations." },
      { slug: "terrace-dining-vadodara", title: "Terrace Dining", h1: "Terrace Dining for Couples in Vadodara", metaTitle: "Terrace Dining Vadodara | Al Fresco Romance", metaDescription: "Enjoy romantic terrace dining in Vadodara. Al fresco experience with beautiful setups, great food, and intimate ambiance for couples." },
      { slug: "rooftop-sunset-dinner-vadodara", title: "Rooftop Sunset Dinner", h1: "Rooftop Sunset Dinner in Vadodara", metaTitle: "Rooftop Sunset Dinner Vadodara | Golden Hour Romance", metaDescription: "Book a magical rooftop sunset dinner in Vadodara. Watch the golden hour with your partner while enjoying romantic dinner. All-inclusive packages available." }
    ]
  }
];

// ==================== VADODARA AREAS ====================
export const vadodaraAreas: AreaConfig[] = [
  { slug: "alkapuri-vadodara", name: "Alkapuri" },
  { slug: "akota-vadodara", name: "Akota" },
  { slug: "fatehgunj-vadodara", name: "Fatehgunj" },
  { slug: "sayajigunj-vadodara", name: "Sayajigunj" },
  { slug: "vasna-vadodara", name: "Vasna" },
  { slug: "manjalpur-vadodara", name: "Manjalpur" },
  { slug: "waghodia-road-vadodara", name: "Waghodia Road" },
  { slug: "gotri-vadodara", name: "Gotri" },
  { slug: "sama-vadodara", name: "Sama" },
  { slug: "karelibaug-vadodara", name: "Karelibaug" },
  { slug: "nizampura-vadodara", name: "Nizampura" },
  { slug: "subhanpura-vadodara", name: "Subhanpura" },
  { slug: "ajwa-road-vadodara", name: "Ajwa Road" },
  { slug: "old-padra-road-vadodara", name: "Old Padra Road" },
  { slug: "race-course-vadodara", name: "Race Course" },
  { slug: "ellora-park-vadodara", name: "Ellora Park" },
  { slug: "harni-vadodara", name: "Harni" },
  { slug: "tandalja-vadodara", name: "Tandalja" },
  { slug: "bhayli-vadodara", name: "Bhayli" },
  { slug: "sevasi-vadodara", name: "Sevasi" },
  { slug: "chhani-vadodara", name: "Chhani" },
  { slug: "makarpura-vadodara", name: "Makarpura" },
  { slug: "gorwa-vadodara", name: "Gorwa" },
  { slug: "tarsali-vadodara", name: "Tarsali" },
  { slug: "diwalipura-vadodara", name: "Diwalipura" },
  { slug: "maneja-vadodara", name: "Maneja" },
  { slug: "raopura-vadodara", name: "Raopura" },
  { slug: "mandvi-vadodara", name: "Mandvi" },
  { slug: "nyay-mandir-vadodara", name: "Nyay Mandir" },
  { slug: "jetalpur-vadodara", name: "Jetalpur" },
  { slug: "kalali-vadodara", name: "Kalali" },
  { slug: "undera-vadodara", name: "Undera" },
  { slug: "bil-vadodara", name: "Bil" },
  { slug: "karodiya-vadodara", name: "Karodiya" },
  { slug: "dabhoi-road-vadodara", name: "Dabhoi Road" },
  { slug: "sama-savli-road-vadodara", name: "Sama Savli Road" },
  { slug: "atladra-vadodara", name: "Atladra" },
  { slug: "tp-13-vadodara", name: "TP 13" },
  { slug: "koyali-vadodara", name: "Koyali" },
  { slug: "ranoli-vadodara", name: "Ranoli" }
];

// Helper functions
export function getPackageBySlug(slug: string): SetupPackage | undefined {
  return packages.find(p => p.slug === slug);
}

export function getServiceBySlug(slug: string): ServiceCategory | undefined {
  return serviceCategories.find(s => s.slug === slug);
}

export function getKeywordBySlug(serviceSlug: string, keywordSlug: string): ServiceKeyword | undefined {
  const service = getServiceBySlug(serviceSlug);
  return service?.keywords.find(k => k.slug === keywordSlug);
}

export function getAreaBySlug(slug: string): AreaConfig | undefined {
  return vadodaraAreas.find(a => a.slug === slug);
}

export function formatPrice(price: number): string {
  return `₹${price.toLocaleString('en-IN')}.00`;
}

// ==================== BLOG POSTS ====================
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  coverImage: string;
  publishedAt: string;
  readTime: string;
  category: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "top-10-birthday-surprise-ideas-vadodara",
    title: "Top 10 Birthday Surprise Ideas in Vadodara",
    excerpt: "Discover creative and romantic birthday surprise ideas to make your loved one's special day unforgettable in Vadodara.",
    metaTitle: "Top 10 Birthday Surprise Ideas in Vadodara 2026 | Best Ideas",
    metaDescription: "Looking for birthday surprise ideas in Vadodara? Discover 10 creative ways to surprise your partner, from rooftop dinners to midnight celebrations.",
    coverImage: "/images/gallery/romantic-rooftop-candlelight-dinner-vadodara-1.webp",
    publishedAt: "2026-01-15",
    readTime: "5 min",
    category: "Birthday",
    tags: ["birthday", "surprise", "vadodara", "celebration"]
  },
  {
    slug: "how-to-plan-perfect-proposal-vadodara",
    title: "How to Plan a Perfect Proposal in Vadodara",
    excerpt: "A complete guide to planning a romantic and memorable marriage proposal in Vadodara that she'll never forget.",
    metaTitle: "How to Plan a Perfect Proposal in Vadodara | Complete Guide",
    metaDescription: "Planning to propose in Vadodara? Learn how to plan the perfect proposal with our step-by-step guide. Best locations, timing & decoration ideas.",
    coverImage: "/images/gallery/romantic-table-decoration-vadodara-1.webp",
    publishedAt: "2026-01-12",
    readTime: "7 min",
    category: "Proposal",
    tags: ["proposal", "engagement", "romantic", "vadodara"]
  },
  {
    slug: "best-candlelight-dinner-spots-vadodara",
    title: "Best Candlelight Dinner Spots in Vadodara 2026",
    excerpt: "Explore the most romantic candlelight dinner restaurants and cafes in Vadodara for an unforgettable date night.",
    metaTitle: "Best Candlelight Dinner Spots in Vadodara 2026 | Top Picks",
    metaDescription: "Find the best candlelight dinner spots in Vadodara. Romantic restaurants, rooftop cafes & private dining options for couples.",
    coverImage: "/images/gallery/birthday-balloon-decoration-vadodara-1.webp",
    publishedAt: "2026-01-10",
    readTime: "6 min",
    category: "Date Night",
    tags: ["candlelight dinner", "romantic", "restaurants", "vadodara"]
  },
  {
    slug: "anniversary-celebration-ideas-couples",
    title: "Anniversary Celebration Ideas for Couples in Vadodara",
    excerpt: "Creative and romantic ways to celebrate your wedding anniversary in Vadodara and make it truly special.",
    metaTitle: "Anniversary Celebration Ideas Vadodara | Romantic Ideas",
    metaDescription: "Looking for anniversary celebration ideas in Vadodara? From intimate dinners to surprise parties, discover the best ways to celebrate your love.",
    coverImage: "/images/gallery/anniversary-dinner-setup-vadodara-1.webp",
    publishedAt: "2026-01-08",
    readTime: "6 min",
    category: "Anniversary",
    tags: ["anniversary", "couples", "celebration", "vadodara"]
  },
  {
    slug: "romantic-date-night-ideas-vadodara",
    title: "Romantic Date Night Ideas in Vadodara",
    excerpt: "Spice up your relationship with these creative and romantic date night ideas perfect for Vadodara couples.",
    metaTitle: "Romantic Date Night Ideas in Vadodara 2026 | Best Dates",
    metaDescription: "Need date night inspiration in Vadodara? Discover romantic ideas from rooftop dinners to stargazing experiences for couples.",
    coverImage: "/images/gallery/romantic-ambiance-cafe-vadodara-1.webp",
    publishedAt: "2026-01-05",
    readTime: "5 min",
    category: "Date Night",
    tags: ["date night", "romantic", "couples", "vadodara"]
  },
  {
    slug: "best-rooftop-restaurants-vadodara-couples",
    title: "Best Rooftop Restaurants in Vadodara for Couples",
    excerpt: "Discover the most romantic rooftop restaurants in Vadodara perfect for date nights and special celebrations.",
    metaTitle: "Best Rooftop Restaurants in Vadodara for Couples 2026",
    metaDescription: "Looking for rooftop restaurants in Vadodara? Find the best sky-high dining spots for romantic dinners and couple celebrations.",
    coverImage: "/images/gallery/couple-celebration-vadodara-1.webp",
    publishedAt: "2026-01-03",
    readTime: "5 min",
    category: "Restaurants",
    tags: ["rooftop", "restaurants", "couples", "vadodara"]
  },
  {
    slug: "surprise-birthday-party-wife-guide",
    title: "How to Plan a Surprise Birthday Party for Your Wife",
    excerpt: "A complete guide to planning the perfect surprise birthday party that will make your wife feel truly special.",
    metaTitle: "Surprise Birthday Party for Wife | Complete Planning Guide",
    metaDescription: "Want to surprise your wife on her birthday? Learn how to plan a memorable surprise party with decorations, cake & romantic setup.",
    coverImage: "/images/gallery/evening-romantic-celebration-vadodara-1.webp",
    publishedAt: "2025-12-28",
    readTime: "8 min",
    category: "Birthday",
    tags: ["birthday", "wife", "surprise party", "planning"]
  },
  {
    slug: "creative-anniversary-gift-ideas-experiences",
    title: "Creative Anniversary Gift Ideas: Experience Over Things",
    excerpt: "Why experience gifts make the best anniversary presents and how to create lasting memories together.",
    metaTitle: "Anniversary Gift Ideas | Why Experiences Beat Material Gifts",
    metaDescription: "Looking for unique anniversary gifts? Discover why experience gifts like romantic dinners create better memories than material presents.",
    coverImage: "/images/gallery/glass-house-dinner-vadodara-1.webp",
    publishedAt: "2025-12-25",
    readTime: "5 min",
    category: "Anniversary",
    tags: ["anniversary", "gifts", "experiences", "couples"]
  },
  {
    slug: "pre-wedding-photoshoot-locations-vadodara",
    title: "Best Pre-Wedding Photoshoot Locations in Vadodara",
    excerpt: "Stunning pre-wedding photoshoot locations in Vadodara including rooftops, gardens, and heritage sites.",
    metaTitle: "Best Pre-Wedding Photoshoot Locations Vadodara 2026",
    metaDescription: "Planning your pre-wedding shoot in Vadodara? Discover the best locations from rooftops to heritage sites for stunning photos.",
    coverImage: "/images/gallery/rooftop-romantic-setup-vadodara-1.webp",
    publishedAt: "2025-12-22",
    readTime: "6 min",
    category: "Pre-Wedding",
    tags: ["pre-wedding", "photoshoot", "locations", "vadodara"]
  },
  {
    slug: "baby-shower-planning-guide-vadodara",
    title: "Baby Shower Planning Guide for Vadodara Moms",
    excerpt: "Everything you need to know about planning the perfect baby shower in Vadodara, from venues to themes.",
    metaTitle: "Baby Shower Planning Guide Vadodara | Complete Checklist",
    metaDescription: "Planning a baby shower in Vadodara? Get our complete guide with venue ideas, themes, decorations & checklist for a perfect celebration.",
    coverImage: "/images/gallery/night-romantic-setup-vadodara-1.webp",
    publishedAt: "2025-12-20",
    readTime: "7 min",
    category: "Baby Shower",
    tags: ["baby shower", "planning", "vadodara", "celebration"]
  },
  {
    slug: "valentines-day-date-ideas-vadodara",
    title: "Valentine's Day Date Ideas in Vadodara",
    excerpt: "Make Valentine's Day special with these romantic date ideas perfect for couples in Vadodara.",
    metaTitle: "Valentine's Day Date Ideas Vadodara 2026 | Romantic Plans",
    metaDescription: "Looking for Valentine's Day ideas in Vadodara? Discover romantic date plans from candlelight dinners to rooftop surprises.",
    coverImage: "/images/gallery/proposal-setup-vadodara-1.webp",
    publishedAt: "2025-12-18",
    readTime: "5 min",
    category: "Valentine's Day",
    tags: ["valentines day", "date ideas", "romantic", "vadodara"]
  },
  {
    slug: "corporate-team-lunch-ideas-vadodara",
    title: "How to Organize a Corporate Team Lunch in Vadodara",
    excerpt: "Tips and venue ideas for organizing successful corporate team lunches and office celebrations in Vadodara.",
    metaTitle: "Corporate Team Lunch Vadodara | Venue & Planning Guide",
    metaDescription: "Planning a corporate team lunch in Vadodara? Find the best venues and get tips for organizing a successful office gathering.",
    coverImage: "/images/gallery/day-celebration-vadodara-1.webp",
    publishedAt: "2025-12-15",
    readTime: "5 min",
    category: "Corporate",
    tags: ["corporate", "team lunch", "office party", "vadodara"]
  },
  {
    slug: "kitty-party-ideas-venues-vadodara",
    title: "Kitty Party Ideas and Venues in Vadodara",
    excerpt: "Fun kitty party themes, games, and the best venues in Vadodara for your ladies' get-together.",
    metaTitle: "Kitty Party Ideas & Venues Vadodara 2026 | Best Places",
    metaDescription: "Planning a kitty party in Vadodara? Discover fun themes, games, and the best venues for your next ladies' gathering.",
    coverImage: "/images/gallery/surprise-party-vadodara-1.webp",
    publishedAt: "2025-12-12",
    readTime: "6 min",
    category: "Kitty Party",
    tags: ["kitty party", "venues", "ladies", "vadodara"]
  },
  {
    slug: "private-dining-experiences-vadodara",
    title: "Best Places for Private Dining in Vadodara",
    excerpt: "Exclusive private dining venues in Vadodara for intimate celebrations and special occasions.",
    metaTitle: "Private Dining Vadodara | Exclusive Restaurant Experiences",
    metaDescription: "Looking for private dining in Vadodara? Discover exclusive venues for intimate dinners, proposals & special celebrations.",
    coverImage: "/images/gallery/romantic-dinner-date-vadodara-1.webp",
    publishedAt: "2025-12-10",
    readTime: "5 min",
    category: "Dining",
    tags: ["private dining", "exclusive", "restaurants", "vadodara"]
  },
  {
    slug: "memorable-farewell-party-planning",
    title: "How to Plan a Memorable Farewell Party",
    excerpt: "Create lasting memories with our guide to planning the perfect farewell party for colleagues or friends.",
    metaTitle: "Farewell Party Planning Guide | Memorable Send-Off Ideas",
    metaDescription: "Planning a farewell party? Learn how to organize a memorable send-off with venue ideas, activities & emotional touches.",
    coverImage: "/images/gallery/valentines-day-celebration-vadodara-1.webp",
    publishedAt: "2025-12-08",
    readTime: "6 min",
    category: "Farewell",
    tags: ["farewell", "party planning", "office", "celebration"]
  },
  {
    slug: "birthday-decoration-ideas-budget",
    title: "Birthday Party Decoration Ideas on a Budget",
    excerpt: "Creative and affordable birthday decoration ideas that look expensive but won't break the bank.",
    metaTitle: "Budget Birthday Decoration Ideas | Affordable Party Decor",
    metaDescription: "Want stunning birthday decorations on a budget? Discover creative DIY ideas and affordable decoration tips for memorable parties.",
    coverImage: "/images/gallery/valentines-dinner-vadodara-1.webp",
    publishedAt: "2025-12-05",
    readTime: "5 min",
    category: "Birthday",
    tags: ["birthday", "decoration", "budget", "diy"]
  },
  {
    slug: "romantic-proposal-ideas-say-yes",
    title: "Romantic Proposal Ideas That Will Make Her Say Yes",
    excerpt: "Creative and heartfelt proposal ideas that are sure to get a 'YES!' from your special someone.",
    metaTitle: "Romantic Proposal Ideas | Creative Ways to Propose",
    metaDescription: "Looking for proposal inspiration? Discover romantic and creative proposal ideas guaranteed to make her say yes.",
    coverImage: "/images/gallery/valentines-romantic-setup-vadodara-1.webp",
    publishedAt: "2025-12-02",
    readTime: "7 min",
    category: "Proposal",
    tags: ["proposal", "romantic", "engagement", "ideas"]
  },
  {
    slug: "gender-reveal-party-ideas-vadodara",
    title: "Gender Reveal Party Ideas in Vadodara",
    excerpt: "Creative and exciting gender reveal party ideas to announce your baby's gender in style.",
    metaTitle: "Gender Reveal Party Ideas Vadodara | Creative Announcements",
    metaDescription: "Planning a gender reveal party in Vadodara? Discover creative reveal ideas, decorations & venues for the big announcement.",
    coverImage: "/images/gallery/birthday-surprise-for-girlfriend-vadodara-1.webp",
    publishedAt: "2025-11-28",
    readTime: "6 min",
    category: "Baby",
    tags: ["gender reveal", "baby", "party", "vadodara"]
  },
  {
    slug: "best-anniversary-restaurants-vadodara",
    title: "Best Anniversary Restaurants in Vadodara",
    excerpt: "Top restaurants in Vadodara perfect for celebrating your wedding anniversary with your partner.",
    metaTitle: "Best Anniversary Restaurants Vadodara 2026 | Top Picks",
    metaDescription: "Celebrating your anniversary in Vadodara? Find the best restaurants for romantic anniversary dinners with your partner.",
    coverImage: "/images/gallery/birthday-surprise-for-boyfriend-vadodara-1.webp",
    publishedAt: "2025-11-25",
    readTime: "5 min",
    category: "Anniversary",
    tags: ["anniversary", "restaurants", "romantic", "vadodara"]
  },
  {
    slug: "surprise-date-night-planning-guide",
    title: "How to Plan a Surprise Date Night",
    excerpt: "Step-by-step guide to planning a romantic surprise date night that your partner will love.",
    metaTitle: "Surprise Date Night Planning | Complete Guide for Couples",
    metaDescription: "Want to surprise your partner with a romantic date night? Get our complete planning guide with ideas, tips & checklist.",
    coverImage: "/images/gallery/birthday-room-decoration-vadodara-1.webp",
    publishedAt: "2025-11-22",
    readTime: "6 min",
    category: "Date Night",
    tags: ["date night", "surprise", "romantic", "planning"]
  },
  {
    slug: "maternity-photoshoot-ideas-vadodara",
    title: "Maternity Photoshoot Ideas for Expecting Mothers",
    excerpt: "Beautiful maternity photoshoot ideas and locations in Vadodara to capture your pregnancy journey.",
    metaTitle: "Maternity Photoshoot Ideas Vadodara | Pregnancy Photos",
    metaDescription: "Planning a maternity photoshoot in Vadodara? Discover poses, outfits & location ideas for stunning pregnancy photos.",
    coverImage: "/images/gallery/couple-birthday-party-vadodara-1.webp",
    publishedAt: "2025-11-18",
    readTime: "6 min",
    category: "Maternity",
    tags: ["maternity", "photoshoot", "pregnancy", "vadodara"]
  },
  {
    slug: "bachelor-bachelorette-party-ideas-vadodara",
    title: "Bachelor and Bachelorette Party Ideas in Vadodara",
    excerpt: "Fun and memorable bachelor/bachelorette party ideas and venues for the bride and groom-to-be.",
    metaTitle: "Bachelor & Bachelorette Party Ideas Vadodara 2026",
    metaDescription: "Planning a bachelor or bachelorette party in Vadodara? Discover fun ideas, themes & venues for an unforgettable celebration.",
    coverImage: "/images/gallery/pre-wedding-photoshoot-vadodara-1.webp",
    publishedAt: "2025-11-15",
    readTime: "7 min",
    category: "Pre-Wedding",
    tags: ["bachelor party", "bachelorette", "pre-wedding", "vadodara"]
  },
  {
    slug: "new-year-celebration-ideas-vadodara",
    title: "Best Places to Celebrate New Year in Vadodara",
    excerpt: "Top venues and ideas for celebrating New Year's Eve in Vadodara with your loved ones.",
    metaTitle: "New Year Celebration Vadodara 2026 | Best Places & Ideas",
    metaDescription: "Looking for New Year celebration venues in Vadodara? Find the best places to ring in the new year with parties & dinners.",
    coverImage: "/images/gallery/pre-wedding-shoot-vadodara-1.webp",
    publishedAt: "2025-11-12",
    readTime: "5 min",
    category: "New Year",
    tags: ["new year", "celebration", "venues", "vadodara"]
  },
  {
    slug: "couple-photoshoot-locations-vadodara",
    title: "Couple Photoshoot Locations in Vadodara",
    excerpt: "Romantic and scenic locations in Vadodara perfect for couple photoshoots and engagement shoots.",
    metaTitle: "Couple Photoshoot Locations Vadodara | Romantic Spots",
    metaDescription: "Planning a couple photoshoot in Vadodara? Discover the most romantic locations for stunning couple photos.",
    coverImage: "/images/gallery/candlelight-dinner-for-couples-vadodara-1.webp",
    publishedAt: "2025-11-08",
    readTime: "6 min",
    category: "Photoshoot",
    tags: ["couple", "photoshoot", "locations", "vadodara"]
  },
  {
    slug: "intimate-wedding-planning-guide",
    title: "Intimate Wedding Planning Guide for Vadodara Couples",
    excerpt: "Everything you need to know about planning a beautiful small wedding in Vadodara.",
    metaTitle: "Intimate Wedding Planning Vadodara | Small Wedding Guide",
    metaDescription: "Planning an intimate wedding in Vadodara? Get our complete guide with venue ideas, tips & checklist for a perfect small wedding.",
    coverImage: "/images/gallery/rooftop-dinner-vadodara-1.webp",
    publishedAt: "2025-11-05",
    readTime: "8 min",
    category: "Wedding",
    tags: ["wedding", "intimate", "small wedding", "vadodara"]
  }
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(b => b.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getBlogsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(b => b.category === category);
}
