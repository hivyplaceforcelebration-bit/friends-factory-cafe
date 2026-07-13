// Friends Factory Cafe — Astro Config
// friendsfactorycafe.com | Vadodara, Gujarat

export const siteConfig = {
  name: "Friends Factory Cafe",
  tagline: "Where Every Occasion Turns Into a Forever Memory Under the Stars",
  phone: "+91 7487888730",
  whatsapp: "917487888730",
  email: "hello@friendsfactorycafe.com",
  address: "424, OneWest, Asopalav W, 4th Floor, Priya Talkies Road, Gotri, Vadodara, Gujarat 391101",
  city: "Vadodara",
  website: "https://friendsfactorycafe.com",
  themeColor: "#D97706",
  rating: "4.9",
  reviewCount: "500",
  socialLinks: {
    instagram: "https://www.instagram.com/friendsfactorycafe/",
    facebook: "https://www.facebook.com/friendsfactorycafe/",
  },
  tracking: {
    ga4: "G-MEDYR6ELNY",
    googleAdsId: import.meta.env.PUBLIC_FFC_GOOGLE_ADS_ID || "AW-17868092300",
    metaPixel: import.meta.env.PUBLIC_FFC_META_PIXEL || "2357920771285041",
    googleVerification: "TODO_FFC_MAIN_UNIQUE_TOKEN",
    googleAds: {
      submitLeadForm: import.meta.env.PUBLIC_FFC_GOOGLE_ADS_SUBMIT_LEAD_FORM || "AW-17868092300/gb5wCL399s8cEIznlchC",
      whatsappLead: import.meta.env.PUBLIC_FFC_GOOGLE_ADS_WHATSAPP_LEAD || "AW-17868092300/R-6MCMD99s8cEIznlchC",
      phoneLead: import.meta.env.PUBLIC_FFC_GOOGLE_ADS_PHONE_LEAD || "AW-17868092300/ysejCMP99s8cEIznlchC",
    },
  },
  geo: {
    region: "IN-GJ",
    placename: "Vadodara",
    position: "22.3072;73.1812",
    icbm: "22.3072, 73.1812",
  },
};

export const packages = [
  {
    slug: "the-promise-creative-area",
    name: "The Promise Creative Area",
    emoji: "💍",
    price: "₹4,700",
    description: "A beautifully curated creative space perfect for proposals, intimate birthday surprises, and romantic first dates. Balloon decor, candles & welcome drink included.",
  },
  {
    slug: "pure-love-glass-house",
    name: "Pure Love Glass House",
    emoji: "🤍💍🏡",
    price: "₹4,700",
    description: "A pristine glass house setting that encapsulates pure love — transparent walls, fairy lights, rose petals, and a complete multi-course vegetarian meal.",
  },
  {
    slug: "moonlit-romance-experience",
    name: "Moonlit Romance Experience",
    emoji: "🌙💞",
    price: "₹5,100",
    description: "Experience romance under the moonlight. Twinkling LED canopy, candlelight table for two, ambient music, and a curated dining experience.",
  },
  {
    slug: "sweet-together-glass-house",
    name: "Sweet Together Glass House",
    emoji: "🍯💖",
    price: "₹5,500",
    description: "A sweet, intimate glass house setup with honey-gold accents, flower arrangements, personalised decor, and a complete dessert-included meal package.",
  },
  {
    slug: "timeless-bond-glass-house",
    name: "Timeless Bond Glass House",
    emoji: "♾️💞🏡",
    price: "₹5,700",
    description: "An infinity-themed glass house experience celebrating bonds that last forever. Premium decor, couple photography assistance, and gourmet dining.",
  },
  {
    slug: "golden-promise-glass-house",
    name: "Golden Promise Glass House",
    emoji: "✨💛🏡",
    price: "₹6,000",
    description: "Luxurious gold-themed glass house setup ideal for anniversaries and proposals. Gold accents, flower wall backdrop, champagne mocktail, and a premium 5-course meal.",
  },
  {
    slug: "eternal-love-rooftop-celebration",
    name: "Eternal Love Rooftop Celebration",
    emoji: "💖✨🌙",
    price: "₹6,500",
    description: "Celebrate eternal love on our private rooftop under the stars. Rose arch, fairy lights, city skyline views, and an exclusive 3-hour rooftop dining experience.",
  },
  {
    slug: "forever-us-loveframe-rooftop",
    name: "Forever Us LoveFrame Rooftop",
    emoji: "💑✨🌃",
    price: "₹6,900",
    description: "Our most exclusive experience — a private rooftop LoveFrame setup with skyline views, professional decor, welcome drinks, celebration cake, and a premium complete meal.",
  },
];

export const services = [
  { slug: "candlelight-dinner", name: "Candlelight Dinner", emoji: "🕯️", description: "Private rooftop and glass house candlelight dinners for couples" },
  { slug: "birthday-surprise", name: "Birthday Surprise", emoji: "🎂", description: "Midnight surprises, balloon setups, and personalised birthday celebrations" },
  { slug: "anniversary-celebration", name: "Anniversary Celebration", emoji: "💑", description: "Romantic anniversary dinners, rooftop setups, and milestone celebrations" },
  { slug: "proposal", name: "Proposal Setup", emoji: "💍", description: "Surprise proposals with rose arch, ring placement, and private venue" },
  { slug: "date-night", name: "Date Night", emoji: "🌙", description: "Curated romantic date nights for couples in Vadodara" },
  { slug: "pre-wedding-shoot", name: "Pre-Wedding Shoot", emoji: "📸", description: "Rooftop and glass house pre-wedding photography sessions" },
];

export const vadodaraAreas = [
  { slug: "alkapuri", name: "Alkapuri" },
  { slug: "akota", name: "Akota" },
  { slug: "fatehgunj", name: "Fatehgunj" },
  { slug: "sayajigunj", name: "Sayajigunj" },
  { slug: "vasna", name: "Vasna" },
  { slug: "manjalpur", name: "Manjalpur" },
  { slug: "waghodia-road", name: "Waghodia Road" },
  { slug: "gotri", name: "Gotri" },
  { slug: "sama", name: "Sama" },
  { slug: "karelibaug", name: "Karelibaug" },
  { slug: "nizampura", name: "Nizampura" },
  { slug: "subhanpura", name: "Subhanpura" },
  { slug: "ajwa-road", name: "Ajwa Road" },
  { slug: "old-padra-road", name: "Old Padra Road" },
  { slug: "race-course", name: "Race Course" },
  { slug: "ellora-park", name: "Ellora Park" },
  { slug: "harni", name: "Harni" },
  { slug: "tandalja", name: "Tandalja" },
  { slug: "bhayli", name: "Bhayli" },
  { slug: "sevasi", name: "Sevasi" },
  { slug: "chhani", name: "Chhani" },
  { slug: "makarpura", name: "Makarpura" },
  { slug: "gorwa", name: "Gorwa" },
  { slug: "tarsali", name: "Tarsali" },
  { slug: "diwalipura", name: "Diwalipura" },
  { slug: "maneja", name: "Maneja" },
  { slug: "raopura", name: "Raopura" },
  { slug: "mandvi", name: "Mandvi" },
  { slug: "jetalpur", name: "Jetalpur" },
  { slug: "kalali", name: "Kalali" },
  { slug: "undera", name: "Undera" },
];

export const keywordPages = [
  // Candlelight Dinner
  { slug: "candlelight-dinner-vadodara", title: "Candlelight Dinner Vadodara", h1: "Best Candlelight Dinner in Vadodara", service: "Candlelight Dinner", description: "Book a romantic candlelight dinner in Vadodara at Friends Factory Cafe. Private rooftop and glass house setups from ₹4,700." },
  { slug: "candlelight-dinner-for-couples-vadodara", title: "Candlelight Dinner for Couples Vadodara", h1: "Candlelight Dinner for Couples in Vadodara", service: "Candlelight Dinner", description: "Romantic candlelight dinner for couples in Vadodara. Private venue, complete meal, and beautiful decor from ₹4,700." },
  { slug: "rooftop-candlelight-dinner-vadodara", title: "Rooftop Candlelight Dinner Vadodara", h1: "Rooftop Candlelight Dinner in Vadodara", service: "Candlelight Dinner", description: "Experience rooftop candlelight dinner in Vadodara with stunning city views. All-inclusive packages from ₹5,100." },
  { slug: "romantic-dinner-vadodara", title: "Romantic Dinner Vadodara", h1: "Romantic Dinner in Vadodara", service: "Candlelight Dinner", description: "Plan a romantic dinner in Vadodara with candlelight, music, and beautiful decorations. Book now." },
  { slug: "candlelight-dinner-packages-vadodara", title: "Candlelight Dinner Packages Vadodara", h1: "Candlelight Dinner Packages in Vadodara", service: "Candlelight Dinner", description: "Explore candlelight dinner packages in Vadodara with food, decorations, and music. Packages from ₹4,700." },
  { slug: "outdoor-candlelight-dinner-vadodara", title: "Outdoor Candlelight Dinner Vadodara", h1: "Outdoor Candlelight Dinner in Vadodara", service: "Candlelight Dinner", description: "Outdoor candlelight dinner in Vadodara on our private rooftop. Fresh air, city views, and romance from ₹5,100." },
  { slug: "candlelight-dinner-places-vadodara", title: "Candlelight Dinner Places Vadodara", h1: "Best Candlelight Dinner Places in Vadodara", service: "Candlelight Dinner", description: "Find the best candlelight dinner places in Vadodara for couples. Private rooftop and glass house setups." },
  { slug: "candlelight-dinner-restaurants-vadodara", title: "Candlelight Dinner Restaurants Vadodara", h1: "Best Candlelight Dinner Restaurants in Vadodara", service: "Candlelight Dinner", description: "Discover the best candlelight dinner restaurants in Vadodara. Romantic ambiance and complete packages." },
  { slug: "intimate-dinner-vadodara", title: "Intimate Dinner Vadodara", h1: "Intimate Private Dinner in Vadodara", service: "Candlelight Dinner", description: "Book an intimate private dinner in Vadodara for two. 100% private venue, candlelight, and music." },
  { slug: "private-dinner-vadodara", title: "Private Dinner Vadodara", h1: "Private Dinner in Vadodara", service: "Candlelight Dinner", description: "Private dinner in Vadodara for couples. Exclusive rooftop and glass house settings from ₹4,700." },
  { slug: "couple-dinner-vadodara", title: "Couple Dinner Vadodara", h1: "Romantic Couple Dinner in Vadodara", service: "Candlelight Dinner", description: "Romantic couple dinner in Vadodara with candlelight and personalised decor. Book your special evening." },
  { slug: "dinner-date-vadodara", title: "Dinner Date Vadodara", h1: "Perfect Dinner Date in Vadodara", service: "Candlelight Dinner", description: "Plan the perfect dinner date in Vadodara. Candlelight, music, and a complete gourmet meal." },
  // Birthday Surprise
  { slug: "birthday-surprise-for-boyfriend-vadodara", title: "Birthday Surprise for Boyfriend Vadodara", h1: "Best Birthday Surprise for Boyfriend in Vadodara", service: "Birthday Surprise", description: "Plan the perfect birthday surprise for your boyfriend in Vadodara. Romantic decorations and intimate celebration from ₹4,700." },
  { slug: "birthday-surprise-for-girlfriend-vadodara", title: "Birthday Surprise for Girlfriend Vadodara", h1: "Romantic Birthday Surprise for Girlfriend in Vadodara", service: "Birthday Surprise", description: "Create unforgettable birthday memories for your girlfriend in Vadodara with balloon decorations and romantic setup." },
  { slug: "birthday-surprise-for-husband-vadodara", title: "Birthday Surprise for Husband Vadodara", h1: "Special Birthday Surprise for Husband in Vadodara", service: "Birthday Surprise", description: "Surprise your husband with a romantic birthday celebration in Vadodara. Stunning decorations and private venue." },
  { slug: "birthday-surprise-for-wife-vadodara", title: "Birthday Surprise for Wife Vadodara", h1: "Romantic Birthday Surprise for Wife in Vadodara", service: "Birthday Surprise", description: "Plan a dreamy birthday surprise for your wife in Vadodara with elegant decorations and romantic ambiance." },
  { slug: "midnight-birthday-surprise-vadodara", title: "Midnight Birthday Surprise Vadodara", h1: "Midnight Birthday Surprise in Vadodara", service: "Birthday Surprise", description: "Book a midnight birthday surprise in Vadodara to celebrate at 12 AM with cake, decorations, and romantic moments." },
  { slug: "birthday-party-vadodara", title: "Birthday Party Vadodara", h1: "Best Birthday Party Venue in Vadodara", service: "Birthday Surprise", description: "Plan the ultimate birthday party in Vadodara. Private rooftop balloon decoration, cake, and setup from ₹4,700." },
  { slug: "birthday-room-decoration-vadodara", title: "Birthday Room Decoration Vadodara", h1: "Birthday Room Decoration in Vadodara", service: "Birthday Surprise", description: "Beautiful birthday room decoration in Vadodara with balloons, flowers, and romantic themes for couples." },
  { slug: "surprise-birthday-vadodara", title: "Surprise Birthday Vadodara", h1: "Surprise Birthday Celebration in Vadodara", service: "Birthday Surprise", description: "Celebrate a surprise birthday in Vadodara with stunning balloon decorations and private dining from ₹4,700." },
  // Anniversary
  { slug: "anniversary-dinner-vadodara", title: "Anniversary Dinner Vadodara", h1: "Romantic Anniversary Dinner in Vadodara", service: "Anniversary", description: "Book a romantic anniversary dinner in Vadodara. Candlelight setup, special decorations, and intimate dining." },
  { slug: "anniversary-surprise-for-wife-vadodara", title: "Anniversary Surprise for Wife Vadodara", h1: "Anniversary Surprise for Wife in Vadodara", service: "Anniversary", description: "Create a beautiful anniversary surprise for your wife in Vadodara with elegant decorations and romantic ambiance." },
  { slug: "anniversary-surprise-for-husband-vadodara", title: "Anniversary Surprise for Husband Vadodara", h1: "Anniversary Surprise for Husband in Vadodara", service: "Anniversary", description: "Plan a special anniversary surprise for your husband in Vadodara with romantic decorations and intimate celebration." },
  { slug: "romantic-anniversary-date-vadodara", title: "Romantic Anniversary Date Vadodara", h1: "Romantic Anniversary Date in Vadodara", service: "Anniversary", description: "Plan a romantic anniversary date in Vadodara with candlelight dinner and beautiful decorations." },
  { slug: "first-anniversary-celebration-vadodara", title: "First Anniversary Celebration Vadodara", h1: "First Anniversary Celebration in Vadodara", service: "Anniversary", description: "Celebrate your first anniversary in Vadodara with a special romantic setup. Private rooftop venue awaits." },
  { slug: "anniversary-decoration-vadodara", title: "Anniversary Decoration Vadodara", h1: "Anniversary Decoration in Vadodara", service: "Anniversary", description: "Beautiful anniversary decoration in Vadodara with flowers, balloons, and romantic themes." },
  // Proposal
  { slug: "proposal-setup-vadodara", title: "Proposal Setup Vadodara", h1: "Romantic Proposal Setup in Vadodara", service: "Proposal", description: "Book a romantic proposal setup in Vadodara. Beautiful decorations and private rooftop venue for your big question." },
  { slug: "rooftop-proposal-vadodara", title: "Rooftop Proposal Vadodara", h1: "Rooftop Proposal in Vadodara", service: "Proposal", description: "Plan a stunning rooftop proposal in Vadodara with city views and romantic decorations." },
  { slug: "marriage-proposal-vadodara", title: "Marriage Proposal Vadodara", h1: "Marriage Proposal Venue in Vadodara", service: "Proposal", description: "Find the perfect marriage proposal venue in Vadodara. Enjoy private rooftop celebrations from ₹4,700." },
  { slug: "surprise-proposal-vadodara", title: "Surprise Proposal Vadodara", h1: "Surprise Proposal Ideas in Vadodara", service: "Proposal", description: "Plan a surprise proposal in Vadodara with secret setup and romantic decorations. All-inclusive packages." },
  // Date Night
  { slug: "date-night-vadodara", title: "Date Night Vadodara", h1: "Perfect Date Night in Vadodara", service: "Date Night", description: "Plan the perfect date night in Vadodara. Private venue, candlelight, and romantic music from ₹4,700." },
  { slug: "couple-date-vadodara", title: "Couple Date Vadodara", h1: "Romantic Couple Date in Vadodara", service: "Date Night", description: "Book a romantic couple date in Vadodara. Private glass house and rooftop settings with complete packages." },
  { slug: "surprise-date-vadodara", title: "Surprise Date Vadodara", h1: "Surprise Date in Vadodara", service: "Date Night", description: "Plan a surprise date in Vadodara for your partner. We handle all the decoration and setup secretly." },
  { slug: "special-date-vadodara", title: "Special Date Vadodara", h1: "Special Date Night in Vadodara", service: "Date Night", description: "Make it a truly special date in Vadodara with personalised decoration and complete romantic package." },
  { slug: "unique-date-ideas-vadodara", title: "Unique Date Ideas Vadodara", h1: "Unique Date Ideas in Vadodara", service: "Date Night", description: "Find unique date ideas in Vadodara for couples. From rooftop dinners to glass house experiences." },
  { slug: "romantic-cafe-vadodara", title: "Romantic Cafe Vadodara", h1: "Best Romantic Cafe in Vadodara", service: "Date Night", description: "Friends Factory Cafe is Vadodara's best romantic cafe for couples. Private, intimate, and beautifully decorated." },
  { slug: "couple-cafe-vadodara", title: "Couple Cafe Vadodara", h1: "Best Couple Cafe in Vadodara", service: "Date Night", description: "Vadodara's most popular couple cafe. Private rooftop and glass house for intimate dining experiences." },
  { slug: "romantic-restaurants-vadodara", title: "Romantic Restaurants Vadodara", h1: "Best Romantic Restaurants in Vadodara", service: "Date Night", description: "Discover the best romantic restaurants in Vadodara for couples. Private dining in Gotri, Vadodara." },
];

export const menuItems = {
  starters: [
    { name: "Mojito Welcome Drink", description: "A refreshing mojito sip to start your celebration", emoji: "🍹" },
    { name: "Cheese Fondue", description: "Rich melting cheese with crispy cheese balls, golden wedges & crunchy nachos", emoji: "🧀" },
    { name: "Paneer Tortilla", description: "Soft warm tortilla hugging spicy paneer with chef's secret seasoning", emoji: "🌯" },
    { name: "Peri Peri Fries with Mac & Cheese", description: "Smoky peri-peri fries with velvety mac & cheese dip", emoji: "🍟" },
    { name: "Tangy Loaf", description: "Warm toasty loaf drizzled with gooey cheesy garlic sauce", emoji: "🍞" },
    { name: "Unlimited Cold Drinks", description: "Unlimited refreshing cold drinks throughout your celebration", emoji: "🥤" },
  ],
  mains: [
    { name: "Romantic Dinner for Two", description: "Chef-curated multi-course vegetarian dinner served with love", emoji: "🍽️" },
  ],
  desserts: [
    { name: "Chocolate Dessert", description: "Silky melt-in-your-mouth chocolate ending to a perfect evening", emoji: "🍫" },
    { name: "Mineral Water", description: "Pure refreshing mineral water for your comfort", emoji: "💧" },
  ],
  addons: [
    { name: "Photography / Reel Video", price: "₹2,500", description: "Capture your celebration with couple photography and a cinematic reel video add-on", emoji: "🎥" },
    { name: "Celebration Cake", price: "₹350", description: "Beautifully crafted cake to sweeten the moment", emoji: "🍰" },
    { name: "Bubbly Champagne (Non-Alcoholic)", price: "₹500", description: "Fruit fizz mocktail — pop, pour & toast to love", emoji: "🥂" },
    { name: "Flower Bouquet", price: "₹400", description: "Fresh roses arranged in a beautiful bouquet", emoji: "💐" },
    { name: "Personalised Photo Printout", price: "₹200", description: "A printed photo of your favourite memory", emoji: "🖼️" },
  ],
};

export const navigation = [
  { label: "Packages", href: "/packages/" },
  { label: "Menu", href: "/menu/" },
  { label: "About", href: "/about/" },
  { label: "Virtual Tour", href: "/virtual-tour/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contact", href: "/contact/" },
];
