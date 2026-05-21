/**
 * Run: npx tsx scripts/seed-reviews.ts
 * Requires NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local
 */
import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'
import { resolve } from 'path'

dotenv.config({ path: resolve(process.cwd(), '.env.local') })

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

// ─── BIRTHDAY SURPRISE REVIEWS ───────────────────────────────────────────────

const birthday5: string[] = [
  "Planned a birthday surprise for my girlfriend at Friends Factory Cafe and she was completely speechless! We booked the Forever Us LoveFrame Rooftop package and the setup was absolutely breathtaking — fairy lights, rose petals, and a personalised cake. The best birthday surprise for girlfriend in Vadodara, hands down!",
  "Surprised my husband on his birthday at Friends Factory Cafe and it was the most magical evening we've ever had together. The 100% private rooftop setting meant it was just the two of us under the stars. If you're looking for the best birthday surprise for husband in Vadodara, this is the place!",
  "Booked the Eternal Love Rooftop Celebration package for my wife's birthday and she cried happy tears the moment she walked in! The decoration was stunning, the welcome drink was a lovely touch, and the entire 3-hour private experience was absolutely perfect. Best candlelight dinner in Vadodara for sure!",
  "My boyfriend was completely blown away by the birthday surprise I planned at Friends Factory Cafe! The Moonlit Romance Experience package was gorgeous — candlelight ambiance, soft music, city lights glowing below us. The perfect birthday surprise for boyfriend in Vadodara. He still can't stop talking about it!",
  "Friends Factory Cafe executed the most perfect birthday surprise for my wife. We had the Golden Promise Glass House setup and it was like dining inside a dream! Completely private, beautifully decorated, and the 3 hours felt like a lifetime of beautiful memories. Best couples celebration venue in Vadodara!",
  "The birthday surprise at Friends Factory Cafe exceeded every expectation! We chose the Sweet Together Glass House and it was the cosiest, most romantic private space I've ever seen. Soft music, candlelight, personalised cake — everything was perfect. The best birthday surprise for girlfriend in Vadodara without a doubt!",
  "Arranged a rooftop birthday surprise for my girlfriend at Friends Factory Cafe and she was absolutely stunned! The 100% private rooftop restaurant in Vadodara with fairy lights and rose decorations made it the most Instagram-worthy evening. A truly unforgettable birthday experience for couples in Vadodara!",
  "The birthday surprise I planned for my husband at Friends Factory Cafe was the most beautiful evening of our relationship. The Timeless Bond Glass House package was elegant and intimate — just us, candlelight, and the most gorgeous setup. This is truly the best private dining experience in Vadodara!",
  "Chose Friends Factory Cafe for my wife's birthday surprise and it was nothing short of spectacular! The rooftop restaurant setting with city views made the evening feel incredibly special. The team set up the most gorgeous decoration and the 3-hour private celebration was pure magic. Best romantic dinner in Vadodara!",
  "Surprised my girlfriend with the Forever Us LoveFrame Rooftop experience at Friends Factory Cafe for her birthday and she was completely overwhelmed with joy! The 100% private venue, the beautiful fairy light setup, the welcome drink — everything came together perfectly. The top birthday surprise for girlfriend in Vadodara!",
  "My wife's birthday at Friends Factory Cafe was the most romantic evening we've ever shared as a couple. The Pure Love Glass House setting was serene and beautifully decorated. Candlelight, soft music, and a gorgeous personalised cake made it truly unforgettable. Best birthday surprise for wife in Vadodara!",
  "Planned a romantic birthday dinner for my boyfriend at Friends Factory Cafe and it was perfect in every way! The rooftop restaurant in Vadodara offers stunning city views and the 100% private setting made the evening feel incredibly intimate. The Moonlit Romance Experience is truly magical!",
  "The birthday surprise package at Friends Factory Cafe is simply the best in Vadodara! We booked the Eternal Love Rooftop Celebration and the result was breathtaking — panoramic city views, candlelight dinner setup, soft romantic music. My husband felt so incredibly loved and celebrated!",
  "Friends Factory Cafe is the ultimate destination for a birthday surprise in Vadodara! The 100% private rooftop setting means you truly feel like the only couple in the world. The decoration, the personalised cake, and the 3-hour private celebration made my girlfriend's birthday absolutely magical!",
  "What an incredible birthday surprise venue! Friends Factory Cafe's Golden Promise Glass House setup was radiant — warm lights, elegant decorations, and that magical glass house ambiance. My wife was moved to tears. If you want the best birthday surprise for wife in Vadodara, book here immediately!",
  "The birthday surprise I arranged for my boyfriend at Friends Factory Cafe was absolutely flawless! The rooftop candlelight dinner setup with the city of Vadodara glowing below was breathtaking. 3 hours of complete privacy, soft music, and pure romance. This is the best couples restaurant in Vadodara!",
  "Celebrated my girlfriend's birthday at Friends Factory Cafe with the Sweet Together Glass House package. The cosy glass house setting with fairy lights and candles made it the most romantic dinner she's ever had. Completely private, completely magical. The best birthday surprise for girlfriend in Vadodara!",
  "My husband's birthday at Friends Factory Cafe was an evening we'll treasure forever! The Timeless Bond Glass House experience was so elegant and intimate. Candlelight dinner, welcome drink, beautiful decoration — the team at this rooftop restaurant in Vadodara truly delivers perfection.",
  "Chose Friends Factory Cafe for a romantic birthday surprise for my wife and it was absolutely worth every rupee! The Forever Us LoveFrame Rooftop setup with city skyline views, candles, and personalised touches made it the most beautiful birthday surprise for wife in Vadodara.",
  "My boyfriend's birthday surprise at Friends Factory Cafe was the most romantic evening we've ever spent together! The 100% private couples-only venue in Vadodara, the Moonlit Romance Experience package, and the gorgeous candlelight setup — everything was spectacular. Highly recommend to every couple in Vadodara!",
]

const birthday4: string[] = [
  "Had a really lovely birthday surprise experience at Friends Factory Cafe in Vadodara. The rooftop setting is beautiful and the decoration was very pretty. The 100% private venue made it feel special — just the two of us. The candlelight dinner was romantic and the food was good. A wonderful couples-only spot in Vadodara!",
  "Booked a birthday surprise for my girlfriend at Friends Factory Cafe and she really loved it. The glass house setup was charming and intimate. The welcome drink and personalised cake were nice touches. One dish took a while but the overall romantic dinner experience in Vadodara was very positive.",
  "Good birthday surprise experience at Friends Factory Cafe. The rooftop restaurant in Vadodara has a beautiful ambiance with city views. My husband was happy and the decoration was lovely. The team was cooperative. Could have been a bit more personalised but the 3-hour private celebration was enjoyable.",
  "Nice birthday dinner for couples at Friends Factory Cafe. The glass house setting is charming and the candlelight ambiance is romantic. The staff was friendly and the decoration was pretty. Food was decent. A good spot for an intimate birthday surprise for boyfriend in Vadodara.",
  "Had a pleasant birthday experience at Friends Factory Cafe. The rooftop setting in Vadodara is quite beautiful and the private dining experience felt special. The decoration was good and my wife was happy. Minor delay in the cake but overall a very nice romantic celebration.",
]

// ─── ANNIVERSARY REVIEWS ─────────────────────────────────────────────────────

const anniversary5: string[] = [
  "Celebrated our 5th wedding anniversary at Friends Factory Cafe and it was pure magic! The Forever Us LoveFrame Rooftop package gave us a breathtaking private rooftop setting above Vadodara — candlelight dinner, rose petal arrangement, soft music. The best anniversary celebration in Vadodara by far!",
  "Our anniversary at Friends Factory Cafe was everything we dreamed of! We chose the Eternal Love Rooftop Celebration and the city view at night, combined with the candlelight dinner setup, made the entire evening feel like a fairy tale. The best couples-only romantic restaurant in Vadodara!",
  "Chose Friends Factory Cafe for our first wedding anniversary and it exceeded every expectation! The Golden Promise Glass House setup was radiant and elegant — warm lights, rose petals, a personalised cake. 3 hours of complete privacy on this stunning rooftop in Vadodara. Absolutely unforgettable!",
  "Friends Factory Cafe made our 10th anniversary the most romantic evening we've had in a decade together! The Moonlit Romance Experience with the city glowing below us was breathtaking. 100% private, candlelight dinner, soft music — the perfect anniversary dinner in Vadodara for couples!",
  "The anniversary celebration package at Friends Factory Cafe is simply the best in Vadodara! We had the Timeless Bond Glass House experience — completely private, beautifully decorated, and so intimate. The 3-hour candlelight dinner felt like falling in love all over again. Cannot recommend enough!",
  "Our wedding anniversary at Friends Factory Cafe was absolutely spectacular! The Sweet Together Glass House setting was so cosy and romantic — just us, candlelight, fairy lights, and the most beautiful decoration. This is the best private anniversary dinner venue for couples in Vadodara!",
  "Surprised my wife with the Forever Us LoveFrame Rooftop package for our anniversary and she was moved to tears! The panoramic rooftop view of Vadodara at night, the rose petal setup, the personalised cake — every detail was perfect. This rooftop restaurant in Vadodara is pure romance!",
  "The Perfect anniversary celebration at Friends Factory Cafe! We chose the Pure Love Glass House and the serene, intimate setting was exactly what we wanted. Candlelight dinner, welcome drink, soft romantic music, and 3 hours of uninterrupted private time. The best anniversary experience in Vadodara!",
  "Friends Factory Cafe delivered the most magical anniversary evening we could have imagined! The Eternal Love Rooftop Celebration package — city views, fairy lights, candlelight dinner — was absolutely breathtaking. If you want the best anniversary dinner in Vadodara, this couples-only cafe is the answer!",
  "Celebrated our anniversary at Friends Factory Cafe's rooftop and it was the most romantic dinner we've ever had! The 100% private setting, the gorgeous decoration, and the city views of Vadodara below created an atmosphere that was truly cinematic. The best romantic date night for couples in Vadodara!",
  "The Golden Promise Glass House at Friends Factory Cafe was the perfect anniversary setting! The warm, glowing lights of the glass house, the candlelight dinner, and the intimate private space made our anniversary feel absolutely extraordinary. Best couples-only venue in Vadodara — nothing comes close!",
  "Our anniversary at Friends Factory Cafe was a dream come true! The Moonlit Romance Experience on the rooftop with the soft music, rose petal arrangement, and 3 hours of private celebration was everything we needed. The best romantic rooftop restaurant in Vadodara without question!",
  "Cannot thank Friends Factory Cafe enough for making our anniversary so incredibly special! The 100% private rooftop venue in Vadodara, the Forever Us LoveFrame package, and the attentive team created an evening of pure romance. This is the best anniversary celebration venue in Vadodara!",
  "Friends Factory Cafe is the ultimate anniversary destination for couples in Vadodara! We had the Timeless Bond Glass House experience and it was so elegant and intimate — candlelight dinner, beautiful decoration, complete privacy. The most memorable anniversary evening of our lives!",
  "The anniversary dinner experience at Friends Factory Cafe is unmatched in Vadodara! The Sweet Together Glass House with its cosy ambiance, soft music, and beautiful candlelight setup gave us 3 hours of pure romance and private celebration. Highly recommend to every couple in Vadodara!",
]

const anniversary4: string[] = [
  "Had a very lovely anniversary dinner at Friends Factory Cafe in Vadodara. The rooftop setting is beautiful with nice city views. The glass house option is quite charming and intimate. The candlelight setup was romantic and the staff was cooperative. A good couples-only private dining experience in Vadodara.",
  "Nice anniversary celebration at Friends Factory Cafe. The private rooftop setting in Vadodara is lovely and the decoration was pretty. My wife was happy with the personalised cake. The food was good. One item arrived a bit late but overall a very positive romantic evening for couples.",
  "Good anniversary dinner experience at Friends Factory Cafe. The Moonlit Romance Experience setting was pleasant and romantic. The staff was friendly and the 100% private setup made us feel special. Food was decent. A solid choice for an intimate anniversary celebration in Vadodara.",
  "Enjoyed our anniversary at Friends Factory Cafe. The rooftop is beautiful and the glass house setup is quite charming. The candlelight dinner was romantic and the welcome drink was a nice touch. Could have been a bit more personalised but overall a lovely couple experience in Vadodara.",
  "A pleasant anniversary celebration at Friends Factory Cafe in Vadodara. The private dining setting is nice and the decoration was pretty. The 3-hour experience was enjoyable. Some aspects could be improved but overall it was a warm and romantic evening for us as a couple.",
]

// ─── CANDLELIGHT DINNER REVIEWS ──────────────────────────────────────────────

const candlelight5: string[] = [
  "The candlelight dinner at Friends Factory Cafe is hands down the most romantic dining experience in Vadodara! The 100% private rooftop setting, the gorgeous fairy lights, and the beautiful candlelit table create an atmosphere that's absolutely magical. Every couple in Vadodara needs to experience this!",
  "Had the most romantic candlelight dinner at Friends Factory Cafe! We chose the Moonlit Romance Experience and dining on the rooftop above Vadodara with the city glowing below was breathtaking. 3 hours of complete privacy, soft music, and pure romance. The best candlelight dinner in Vadodara!",
  "Friends Factory Cafe's candlelight dinner experience is truly world class! The Golden Promise Glass House setup with the warm glowing lights and intimate table for two created the most magical atmosphere. The best private candlelight dinner for couples in Vadodara — nothing else compares!",
  "The rooftop candlelight dinner at Friends Factory Cafe blew us away! The Forever Us LoveFrame package with panoramic city views, rose petal arrangement, and 100% private setting was the most romantic evening we've ever had in Vadodara. This couples-only cafe is absolutely extraordinary!",
  "If you're looking for the best candlelight dinner in Vadodara, look no further than Friends Factory Cafe! The Eternal Love Rooftop Celebration gives you the most stunning private rooftop setting with soft music, candlelit ambiance, and city views. A complete romantic experience for couples!",
  "The candlelight dinner experience at Friends Factory Cafe in Vadodara is truly magical! We had the Sweet Together Glass House setup and the cosy, intimate glass house with candles and fairy lights created the most romantic atmosphere imaginable. The best private dining experience for couples in Vadodara!",
  "Friends Factory Cafe sets the gold standard for romantic candlelight dinners in Vadodara! The 100% private rooftop venue, the gorgeous fairy light and candle setup, the soft music — everything creates an atmosphere that is breathtakingly romantic. A must-visit for every couple in Vadodara!",
  "The intimate candlelight dinner at Friends Factory Cafe was the most romantic evening my partner and I have ever shared! The Timeless Bond Glass House setting was serene and beautiful — candles, fairy lights, soft music, and 3 hours of complete privacy above the city of Vadodara.",
  "Chose Friends Factory Cafe for a romantic candlelight dinner date in Vadodara and it was perfect in every way! The Pure Love Glass House setting was so peaceful and intimate — just the two of us, beautiful candlelight, and the most gorgeous decor. Absolutely the best couples dinner in Vadodara!",
  "The rooftop candlelight dinner at Friends Factory Cafe in Vadodara is an experience like no other! The city views at night, the 100% private setting, the candlelit table for two — it all creates a genuinely cinematic and magical atmosphere. Cannot recommend this romantic restaurant in Vadodara enough!",
  "Had the most magical candlelight dinner date at Friends Factory Cafe! The Moonlit Romance Experience on the rooftop was absolutely stunning — city lights below, fairy lights above, and the most beautiful private table setup. The perfect romantic dinner for couples in Vadodara!",
  "Friends Factory Cafe's glass house candlelight dinner is unlike anything else in Vadodara! The Golden Promise Glass House glows so beautifully at night and the 100% private intimate setting with soft music made the entire 3-hour experience feel utterly romantic and special.",
  "The most romantic candlelight dinner I've ever experienced! Friends Factory Cafe's rooftop setting in Vadodara with the Eternal Love package is breathtaking — panoramic city views, beautiful fairy lights, and candlelit ambiance. The perfect couples-only restaurant in Vadodara!",
  "The candlelight dinner experience at Friends Factory Cafe completely transformed our evening! The Forever Us LoveFrame Rooftop package with the city skyline view and 100% private setting created an atmosphere of pure romance. The best rooftop restaurant in Vadodara for couples!",
  "Absolutely mesmerised by the candlelight dinner at Friends Factory Cafe! The 100% private rooftop restaurant in Vadodara with the stunning city view, soft music, and gorgeous candle and fairy light setup is unmatched. Every couple in Vadodara deserves this magical experience!",
]

const candlelight4: string[] = [
  "Nice candlelight dinner experience at Friends Factory Cafe in Vadodara. The rooftop setting with city views is lovely and the glass house option is quite charming. The private dining setup was romantic and the welcome drink was a nice touch. A good romantic restaurant for couples in Vadodara.",
  "Had a pleasant candlelight dinner at Friends Factory Cafe. The 100% private setting is a great concept and the ambiance with fairy lights and candles is genuinely romantic. Food was good. The wait between courses was a bit long but the overall experience for couples was very enjoyable.",
  "Good candlelight dinner for couples at Friends Factory Cafe in Vadodara. The glass house setting is pretty and the rooftop view is nice. The 3-hour private experience was pleasant. Staff was friendly. A solid choice for a romantic dinner date in Vadodara.",
  "Enjoyed a romantic candlelight dinner at Friends Factory Cafe. The private rooftop setting above Vadodara is beautiful and the ambiance is genuinely romantic. Food was tasty. Minor issue with the music volume but the overall couples dining experience was very positive.",
  "A good candlelight dinner experience at Friends Factory Cafe in Vadodara. The glass house is charming and the 100% private setting made us feel special. The decoration was pretty. One or two improvements could make it perfect but overall a lovely romantic dinner for couples.",
]

// ─── SURPRISE DATE REVIEWS ───────────────────────────────────────────────────

const surpriseDate5: string[] = [
  "Planned a surprise date for my girlfriend at Friends Factory Cafe in Vadodara and she was absolutely stunned! The team set up the most gorgeous rooftop setup — candles, fairy lights, rose petals — without her knowing a thing. The best surprise date experience in Vadodara for couples!",
  "The surprise date setup at Friends Factory Cafe is simply flawless! I booked the Moonlit Romance Experience as a surprise for my boyfriend and the reaction when he walked onto that beautifully decorated 100% private rooftop in Vadodara was priceless. Truly magical!",
  "Friends Factory Cafe pulled off the most incredible surprise date for us! The Golden Promise Glass House setup was glowing and gorgeous — my partner had no idea what was coming. 3 hours of private romance in this beautiful glass house in Vadodara. Absolutely unforgettable!",
  "The surprise date at Friends Factory Cafe was one of the best decisions I've ever made for my relationship! The rooftop setting in Vadodara with city views, candlelight ambiance, and 100% privacy created the most romantic surprise my girlfriend has ever received. This place is magical!",
  "Organised a surprise date for my husband at Friends Factory Cafe and the result was spectacular! The team coordinated everything perfectly — the Eternal Love Rooftop Celebration setup was breathtaking when he walked in. The best surprise date venue for couples in Vadodara!",
  "Friends Factory Cafe is the ultimate venue for a surprise date in Vadodara! The Sweet Together Glass House setup was so cosy and beautifully decorated — my girlfriend walked in and immediately burst into happy tears. 3 hours of private romance in Vadodara that she'll never forget!",
  "The surprise date experience at Friends Factory Cafe exceeded all my expectations! The team set up the Forever Us LoveFrame Rooftop package without a single hitch — rose petals, fairy lights, personalised message board. My partner was completely overwhelmed. Best surprise date in Vadodara!",
  "Chose Friends Factory Cafe for a surprise date for my wife and it was absolutely perfect! The 100% private rooftop venue in Vadodara, the candlelight setup, and the beautiful decoration made her feel so incredibly loved and cherished. The best romantic surprise date for couples in Vadodara!",
  "The surprise date setup at Friends Factory Cafe is the best in Vadodara! My boyfriend had no idea what was coming and when he walked into the Pure Love Glass House with all the candles and fairy lights he was completely speechless. A magical couples experience in Vadodara!",
  "Friends Factory Cafe made my surprise date plan come to life in the most beautiful way! The Timeless Bond Glass House setup with candlelight, soft music, and gorgeous decoration created the most romantic surprise date for my girlfriend in Vadodara. Cannot recommend enough!",
]

const surpriseDate4: string[] = [
  "Had a lovely surprise date experience at Friends Factory Cafe in Vadodara. The rooftop setting was beautiful and the glass house option is quite charming. My partner was happy and surprised. The decoration was nice. A good romantic surprise date venue for couples in Vadodara.",
  "Nice surprise date at Friends Factory Cafe. The team coordinated the setup well and the 100% private rooftop in Vadodara created a romantic atmosphere. The decoration was pretty. Could have been a bit more elaborate but my girlfriend loved it. Good couples experience overall.",
  "Good surprise date experience at Friends Factory Cafe in Vadodara. The glass house setting was charming and the candlelight ambiance was romantic. My partner was very happy. Some minor coordination hiccup but the overall surprise date was very enjoyable and memorable.",
  "Planned a surprise date at Friends Factory Cafe and it went well. The private rooftop setting in Vadodara is lovely and the decoration was nice. My girlfriend was pleased and the 3-hour private experience was enjoyable. A solid choice for a surprise romantic date in Vadodara.",
]

// ─── PROPOSAL REVIEWS ────────────────────────────────────────────────────────

const proposal5: string[] = [
  "She said YES at Friends Factory Cafe and I'm the happiest person alive! The team set up the Forever Us LoveFrame Rooftop with rose petals, fairy lights, and a personalised message board — the most perfect marriage proposal setup in Vadodara. She cried tears of joy and so did I!",
  "Friends Factory Cafe helped me plan the most perfect marriage proposal in Vadodara! The 100% private rooftop restaurant setting with city views, candlelight, and beautiful rose petal arrangement created the most romantic proposal moment. She said YES immediately! Best proposal venue in Vadodara!",
  "Planned my proposal at Friends Factory Cafe's Golden Promise Glass House and it was absolutely stunning! The glowing glass house, the rose petal arrangement, the personalised message — my girlfriend walked in and was completely overwhelmed. She said yes! The best proposal venue in Vadodara!",
  "The proposal setup at Friends Factory Cafe was beyond my wildest dreams! The Moonlit Romance Experience on the rooftop with the Vadodara city lights below, the candles, the fairy lights — my partner had no idea and the reaction was priceless. She said YES! Best romantic proposal in Vadodara!",
  "Friends Factory Cafe made my marriage proposal absolutely magical! The Eternal Love Rooftop Celebration setup — 100% private, gorgeous candlelight, rose petals, personalised cake — was perfectly executed. My girlfriend burst into happy tears and said yes immediately. The best proposal experience in Vadodara!",
  "Cannot thank Friends Factory Cafe enough for my perfect proposal! The team set up the Sweet Together Glass House so beautifully — rose petals, fairy lights, a personalised message board. My girlfriend walked in and immediately started crying happy tears. She said YES! Best proposal in Vadodara!",
  "The marriage proposal setup at Friends Factory Cafe in Vadodara is unmatched! We chose the Timeless Bond Glass House for the proposal moment — serene, beautiful, and 100% private. The decoration was stunning and my partner was completely surprised. She said yes and we both cried happy tears!",
  "Chose Friends Factory Cafe for my surprise proposal in Vadodara and the result was absolutely spectacular! The rooftop restaurant setting with city views and the beautiful rose petal and candlelight arrangement created the most romantic proposal moment. She said yes! The best proposal venue in Vadodara!",
  "Friends Factory Cafe pulled off the perfect proposal for me and my now-fiancée! The Pure Love Glass House setup was so beautiful and intimate — candles, rose petals, fairy lights. She walked in and immediately said yes before I even got down on one knee! Best proposal spot in Vadodara!",
  "The proposal experience at Friends Factory Cafe was everything I dreamed of! The Forever Us LoveFrame Rooftop with panoramic Vadodara views, candlelight, and rose petal arrangement was breathtaking. My girlfriend was completely surprised and burst into happy tears. She said YES! Unforgettable!",
]

const proposal4: string[] = [
  "Had a lovely proposal setup at Friends Factory Cafe in Vadodara. The rooftop setting was beautiful and the decoration was pretty. She said yes and was very happy! The team was cooperative and the 100% private venue made the moment feel special. Great proposal venue in Vadodara.",
  "Nice proposal experience at Friends Factory Cafe. The glass house setting was charming and the rose petal arrangement was beautiful. My partner was surprised and happy. The coordination was good. A solid choice for a romantic proposal in Vadodara.",
  "Good proposal setup at Friends Factory Cafe. The rooftop setting in Vadodara is lovely and the decoration was nice. She said yes! Some aspects of the timing could have been better coordinated but the overall proposal experience was very positive and memorable.",
  "Had a positive proposal experience at Friends Factory Cafe in Vadodara. The private glass house setting is charming and the decoration was pretty. My girlfriend was happy and surprised. A good choice for a memorable marriage proposal in Vadodara.",
]

// ─── PRE-WEDDING SHOOT REVIEWS ───────────────────────────────────────────────

const prewedding5: string[] = [
  "Our pre-wedding photoshoot at Friends Factory Cafe was absolutely breathtaking! The rooftop restaurant setting in Vadodara with city views provided the most stunning backdrop for our couple photos. The glass house setup was also gorgeous. Every frame looks like a professional magazine cover!",
  "Friends Factory Cafe is the best pre-wedding photoshoot location in Vadodara! The rooftop with panoramic city views and the beautiful glass house settings give so many gorgeous backdrop options. Our photos came out absolutely stunning and every Instagram story got hundreds of compliments!",
  "The pre-wedding photoshoot experience at Friends Factory Cafe was magical! The Eternal Love Rooftop setting with fairy lights and city views gave our photos such a romantic, cinematic quality. The glass house looks incredible in photos too. Best pre-wedding shoot venue in Vadodara by far!",
  "Chose Friends Factory Cafe for our pre-wedding shoot and it was the perfect decision! The rooftop setting above Vadodara at golden hour was breathtaking. The glass house and candlelight setup options gave us so much creative variety. Every single photo from this shoot is frame-worthy!",
  "Our couple photoshoot at Friends Factory Cafe in Vadodara produced the most stunning pre-wedding photos we could have imagined! The 100% private venue meant we could be completely natural and relaxed. The rooftop city views and glass house settings are incredibly photogenic and beautiful!",
  "Friends Factory Cafe is THE pre-wedding photoshoot destination in Vadodara! The Forever Us LoveFrame Rooftop setting with the city skyline backdrop is absolutely stunning in photos. The glass house glows beautifully in shots. Every couple in Vadodara should have their shoot here!",
  "The most beautiful pre-wedding photos came out of our shoot at Friends Factory Cafe! The rooftop restaurant in Vadodara with the fairy lights and candlelit setup created the most romantic and cinematic shots. The 100% private venue made us feel so comfortable and natural on camera.",
  "Our pre-wedding photoshoot at Friends Factory Cafe was an absolute dream! The glass house settings and the rooftop with Vadodara city views gave us the most diverse and gorgeous collection of couple photos. The ambiance and lighting are perfect for romantic couple photography!",
]

const prewedding4: string[] = [
  "Had a good pre-wedding photoshoot experience at Friends Factory Cafe in Vadodara. The rooftop setting is lovely and the glass house looks nice in photos. The venue is private which made us comfortable. Some areas were a bit crowded at certain times but the photos came out well.",
  "Nice pre-wedding shoot at Friends Factory Cafe. The rooftop restaurant in Vadodara provides beautiful backdrops and the glass house setting photographs well. The team was cooperative. Would recommend for couples looking for a stylish pre-wedding shoot location in Vadodara.",
  "Good pre-wedding photoshoot experience at Friends Factory Cafe. The venue has beautiful settings and the rooftop city view is quite photogenic. Staff was helpful. We got some lovely couple photos. Would suggest an early booking for the best experience.",
]

// ─── VALENTINE'S WEEK REVIEWS ────────────────────────────────────────────────

const valentines5: string[] = [
  "Celebrated Valentine's Day at Friends Factory Cafe in Vadodara and it was the most romantic evening of our lives! The 100% private rooftop restaurant with city views, the rose petal setup, and the candlelight dinner made it the perfect Valentine's Day celebration for couples in Vadodara!",
  "Friends Factory Cafe is the best Valentine's Day destination in Vadodara! The Eternal Love Rooftop Celebration package on Valentine's evening was absolutely magical — fairy lights, candlelit table, soft romantic music, and the most stunning Vadodara city view. Pure romance!",
  "Spent Valentine's Day at Friends Factory Cafe and it was completely unforgettable! The 100% private rooftop venue in Vadodara meant it was just the two of us above the city — the most romantic Valentine's dinner imaginable. The setup, the music, the food — everything was perfect!",
  "The Valentine's Day experience at Friends Factory Cafe in Vadodara is in a class of its own! We had the Golden Promise Glass House setup and dining inside that beautiful glowing glass house on Valentine's evening was an experience we'll cherish forever. Best Valentine's celebration in Vadodara!",
  "Friends Factory Cafe made our Valentine's Day celebration absolutely magical! The Moonlit Romance Experience on the rooftop with Vadodara city lights below, rose petal arrangement, and candlelight dinner was the most romantic Valentine's evening any couple could wish for in Vadodara!",
  "The Valentine's Week package at Friends Factory Cafe is incredible! We celebrated on Rose Day with the Sweet Together Glass House experience and it set the most beautiful tone for the entire week. The 100% private couples-only venue in Vadodara is perfect for Valentine's celebrations!",
  "Chose Friends Factory Cafe for a Valentine's Day surprise for my partner in Vadodara and it was absolutely perfect! The rooftop restaurant setting with city views, the candlelit table, and the beautiful rose petal arrangement made Valentine's evening feel genuinely magical and cinematic.",
  "Friends Factory Cafe's Valentine's Day experience is the best in Vadodara! The Forever Us LoveFrame Rooftop with the panoramic city view, fairy lights, and romantic candlelight dinner created the most beautiful Valentine's celebration for us as a couple. Absolutely love this place!",
]

const valentines4: string[] = [
  "Had a lovely Valentine's Day celebration at Friends Factory Cafe in Vadodara. The rooftop setting is beautiful and the private candlelight dinner was romantic. The decoration was nice with roses and fairy lights. A solid choice for a Valentine's Day celebration for couples in Vadodara.",
  "Good Valentine's Day experience at Friends Factory Cafe. The glass house setting is charming and the rooftop has a nice city view. The 100% private setup made it feel special. Food was decent. Would recommend for couples looking for a romantic Valentine's dinner in Vadodara.",
  "Nice Valentine's celebration at Friends Factory Cafe in Vadodara. The rooftop ambiance was romantic and the rose petal setup was pretty. The 3-hour private experience was enjoyable. Some aspects could be smoother but overall a positive Valentine's Day for couples.",
]

// ─── ROOFTOP & GLASS HOUSE EXPERIENCE REVIEWS ───────────────────────────────

const rooftop5: string[] = [
  "The rooftop experience at Friends Factory Cafe in Vadodara is absolutely unmatched! The 100% private rooftop restaurant with panoramic city views creates the most magical atmosphere for couples. The fairy lights, the candlelight, and the stunning Vadodara skyline make every visit feel extraordinary.",
  "Friends Factory Cafe has the most beautiful rooftop in Vadodara! The private rooftop dining experience above the city with fairy lights and candlelit ambiance is breathtaking. The 100% private couples-only policy makes every evening feel incredibly intimate and special.",
  "The rooftop restaurant experience at Friends Factory Cafe in Vadodara is genuinely world class! Dining above the city with your partner in a 100% private setting, surrounded by fairy lights and candlelight — it's a romantic experience that no other venue in Vadodara can replicate.",
  "Absolutely in love with the rooftop at Friends Factory Cafe in Vadodara! The panoramic city view, the beautiful fairy light decoration, and the 100% private couples-only setting create an atmosphere that is magical, intimate, and utterly romantic. The best rooftop restaurant for couples in Vadodara!",
  "The glass house dining experience at Friends Factory Cafe in Vadodara is unlike anything I've experienced before! The Golden Promise Glass House glows so beautifully and the intimate 100% private setting makes it the most romantic dining experience for couples in Vadodara.",
  "Friends Factory Cafe's rooftop setting is the most romantic in Vadodara! The Forever Us LoveFrame Rooftop with its panoramic city views, fairy lights, and candlelit ambiance creates a truly cinematic setting for couples. The 100% private experience makes every visit feel like a movie moment.",
  "The Moonlit Romance Experience at Friends Factory Cafe is the most romantic rooftop dining option in Vadodara! Dining under the moon and stars above the glowing city in a 100% private setting with soft music and candlelight — this is what romance feels like. The best in Vadodara!",
  "Friends Factory Cafe's glass house and rooftop experiences are the most magical in Vadodara! The Timeless Bond Glass House feels so serene and beautiful — candlelight, fairy lights, soft music, and 100% privacy. The perfect couples-only restaurant in Vadodara for any special occasion!",
  "The rooftop candlelight dinner at Friends Factory Cafe in Vadodara is the most romantic experience we've had as a couple! The 100% private setting above the city, the stunning fairy light decoration, and the soft music create an atmosphere that is genuinely breathtaking and unforgettable.",
  "Friends Factory Cafe has created the most beautiful couples-only rooftop dining experience in Vadodara! The Eternal Love Rooftop Celebration package is stunning — city views, candlelight, rose petal arrangement, soft music. The 100% private setting makes it feel like the rooftop belongs only to you.",
  "The glass house experience at Friends Factory Cafe in Vadodara is absolutely magical! The Sweet Together Glass House with its warm lights, intimate setting, and beautiful decoration makes for the most romantic and memorable dining experience for couples in Vadodara. Must visit!",
  "Visited Friends Factory Cafe for the rooftop dining experience in Vadodara and was completely blown away! The 100% private setting, the panoramic city views, the candlelit ambiance, and the beautiful fairy light decoration create the most romantic atmosphere for couples in all of Vadodara.",
  "The Pure Love Glass House at Friends Factory Cafe in Vadodara is so beautifully serene! The warm, intimate glass house setting with candlelight and fairy lights creates the most romantic private dining experience for couples. A truly unique and magical venue in Vadodara.",
  "Friends Factory Cafe is without doubt the best rooftop restaurant for couples in Vadodara! The 100% private setting, the gorgeous fairy light and candlelight ambiance, and the stunning city views make every visit to this rooftop feel like a special occasion. Absolutely love this place!",
  "The rooftop at Friends Factory Cafe in Vadodara is pure magic for couples! The city view at night with fairy lights overhead and candlelight below creates the most cinematic and romantic setting. 3 hours of 100% private dining above Vadodara — an experience every couple must have!",
  "Cannot get enough of the rooftop experience at Friends Factory Cafe in Vadodara! Every time we visit the Eternal Love Rooftop Celebration setup it feels like the first time — breathtaking city views, beautiful candlelight, soft music, and 100% privacy. The best couples restaurant in Vadodara!",
  "Friends Factory Cafe's rooftop and glass house experiences are genuinely the best in Vadodara for couples! The Moonlit Romance Experience gave us the most stunning rooftop dinner above the city. 3 hours of complete privacy, beautiful decoration, and romantic candlelit ambiance. Magical!",
  "The glass house dining at Friends Factory Cafe in Vadodara is an experience every couple should have! The Golden Promise Glass House radiates such warmth and elegance — the glowing lights, the candlelit table, and the intimate 100% private setting are simply breathtaking.",
  "Friends Factory Cafe's 100% private rooftop restaurant in Vadodara is in a league of its own! The fairy lights, the candlelit table for two, the panoramic city view — every element of the rooftop dining experience is curated specifically for couples and it shows in every detail.",
  "The most romantic rooftop dining experience in Vadodara is undoubtedly at Friends Factory Cafe! The 100% private couples-only setting with city views, fairy lights, and candlelight creates an atmosphere so magical that you genuinely feel like the only two people in the world.",
]

const rooftop4: string[] = [
  "Really enjoyed the rooftop experience at Friends Factory Cafe in Vadodara. The city view is lovely and the fairy light decoration is charming. The 100% private setting for couples is a great concept. Food was good. A bit windy on the open rooftop but the glass house option solved that. Lovely experience!",
  "Nice rooftop dining at Friends Factory Cafe in Vadodara. The ambiance with fairy lights and candles is genuinely romantic and the city view is pleasant. The 100% private couples-only policy is a great touch. Food was decent. Would recommend for romantic dates in Vadodara.",
  "Good rooftop restaurant experience at Friends Factory Cafe. The setting above Vadodara is lovely and the candlelight ambiance is romantic. The glass house option is charming. Staff was friendly. The experience is worth the price for a special couples evening in Vadodara.",
  "Had a nice time at Friends Factory Cafe's rooftop in Vadodara. The city view is pretty at night and the fairy lights create a warm romantic atmosphere. The 100% private setting is great for couples. Food was good. A slight delay in service but the overall experience was very pleasant.",
  "The rooftop experience at Friends Factory Cafe in Vadodara is quite special. The ambiance with fairy lights and candles is romantic and the city view is nice. The glass house option is cosy. The 3-hour private couples experience was enjoyable. A good choice for a romantic evening in Vadodara.",
  "Enjoyed the glass house experience at Friends Factory Cafe in Vadodara. The setting is charming and the decoration was pretty. The 100% private couples-only setting made the evening feel special. Food was tasty. Some improvements in variety would be nice but overall a positive experience.",
  "Good couples dining experience at Friends Factory Cafe. The rooftop in Vadodara has a nice city view and the glass house is a cosy alternative. The candlelight ambiance is romantic. Staff was helpful. Would recommend for a special date night or romantic celebration in Vadodara.",
  "A pleasant rooftop dining experience for couples at Friends Factory Cafe in Vadodara. The fairy lights and candlelight create a nice romantic atmosphere. The private setting is a lovely concept. Food was decent. One or two improvements would make it perfect but overall a good couples experience.",
]

// ─── GENERAL / OVERALL EXPERIENCE REVIEWS ───────────────────────────────────

const general5: string[] = [
  "Friends Factory Cafe in Vadodara is the most magical place for couples! The 100% private rooftop restaurant concept, the beautiful glass house settings, and the incredible team make every visit feel extraordinary. Truly the best couples-only cafe and celebration venue in Vadodara!",
  "Every couple in Vadodara needs to experience Friends Factory Cafe! The 100% private rooftop dining, the stunning glass house settings, and the beautifully personalised celebrations make this the most special venue for couples in Vadodara. We've been here multiple times and it never disappoints!",
  "Friends Factory Cafe is simply the best couples-only restaurant and celebration venue in Vadodara! The combination of 100% private settings, beautiful fairy light and candlelight decoration, rooftop city views, and exceptional service creates an experience that is genuinely unmatched in Vadodara.",
  "Words cannot do justice to how wonderful Friends Factory Cafe in Vadodara is for couples! Every celebration we've had here — anniversary, birthday, candlelight dinner — has been executed to absolute perfection. The best couples destination in Vadodara, full stop!",
  "Friends Factory Cafe has completely redefined what a special evening looks like for couples in Vadodara! The 100% private rooftop and glass house settings, the stunning decoration, and the personalised touches make every visit genuinely unforgettable. The best couples celebration venue in Vadodara!",
  "The most romantic and special venue for couples in Vadodara is undoubtedly Friends Factory Cafe! The 100% private setting, the gorgeous rooftop city view, the beautiful glass house options, and the consistently exceptional service make this place absolutely extraordinary.",
  "Friends Factory Cafe in Vadodara delivers a world-class couples experience every single time! The 100% private rooftop restaurant, the stunning glass house settings, and the most beautiful candlelight dinner and celebration setups make this the top romantic destination in Vadodara.",
  "The complete experience at Friends Factory Cafe in Vadodara is exceptional in every way! The private rooftop with city views, the cosy glass house alternatives, the beautiful decoration, and the personalised 3-hour celebrations make it the best couples venue in Vadodara.",
  "Friends Factory Cafe has created something truly special for couples in Vadodara! The 100% private rooftop restaurant experience above the city, the beautiful glass house settings, and the gorgeous candlelight dinner packages make it the undisputed best couples cafe in Vadodara.",
  "What an absolutely magical place Friends Factory Cafe is for couples in Vadodara! The private rooftop dining with city views, the stunning glass house experiences, and the beautifully curated celebration packages make every visit feel extraordinary. The best romantic venue in Vadodara!",
  "Friends Factory Cafe in Vadodara is our go-to celebration venue as a couple and it never fails to amaze us! The 100% private setting, the gorgeous rooftop and glass house options, and the consistently beautiful decoration and personalised service make it truly the best in Vadodara.",
  "The experience at Friends Factory Cafe in Vadodara is genuinely magical for couples! From the moment you arrive at this 100% private rooftop restaurant to the moment you leave, every detail is designed to create the most romantic and memorable experience for couples in Vadodara.",
  "Friends Factory Cafe is the most beautiful couples destination in Vadodara and we recommend it to every couple we know! The private rooftop restaurant, the glass house experiences, the candlelight dinner setups, and the warm personalised service make it an absolutely extraordinary venue.",
  "A truly extraordinary couples experience at Friends Factory Cafe in Vadodara! The 100% private rooftop above the city, the stunning glass house settings, the beautiful fairy light and candlelight ambiance, and the personalised celebration packages make this the best couples venue in Vadodara.",
  "Friends Factory Cafe in Vadodara is where the most beautiful couple memories are made! The private rooftop restaurant with city views, the cosy glass house experiences, and the stunning candlelight dinner and celebration setups create a consistently magical experience for couples in Vadodara.",
]

const general4: string[] = [
  "Friends Factory Cafe in Vadodara is a really lovely couples destination. The rooftop restaurant and glass house settings are charming. The 100% private couples-only concept is great. Food is good. Some aspects could be polished further but overall a consistently positive couples experience.",
  "Nice overall experience at Friends Factory Cafe as a couple in Vadodara. The private rooftop setting and glass house options are lovely. Decoration is pretty and the candlelight ambiance is romantic. Staff is friendly. Would recommend for special occasions and romantic dinners in Vadodara.",
  "Good couples experience at Friends Factory Cafe in Vadodara. The rooftop restaurant is beautiful and the glass house is a nice alternative. The 100% private setting is a great concept. Food is decent. A few improvements would make it perfect but overall a very positive experience.",
  "Had a positive overall experience at Friends Factory Cafe in Vadodara. The private rooftop and glass house settings are charming. The candlelight dinner ambiance is genuinely romantic. Service is good. Would recommend to couples looking for a special dining or celebration experience in Vadodara.",
  "Friends Factory Cafe in Vadodara is a good choice for couples celebrations and romantic dinners. The rooftop setting is lovely with nice city views and the glass house is cosy. The 100% private concept is great for couples. Could improve on a few aspects but overall a very enjoyable experience.",
  "A pleasant couples experience at Friends Factory Cafe in Vadodara. The private rooftop restaurant and glass house settings are nice. The decoration and candlelight ambiance create a romantic atmosphere. Food is decent. A good value choice for romantic occasions and celebrations in Vadodara.",
  "Good romantic experience at Friends Factory Cafe in Vadodara. The couples-only concept with 100% privacy is excellent. The rooftop and glass house settings are charming. Staff is helpful. Food could be more varied but overall the dining and celebration experience is very positive.",
  "Had a generally good time at Friends Factory Cafe in Vadodara as a couple. The private rooftop setting with city views is lovely. The glass house option is nice. Decoration was pretty. Service was responsive. A good couples destination in Vadodara for special occasions.",
]

// ─── Pool builder & expander ─────────────────────────────────────────────────

function buildPool(): Array<{ text: string; star_rating: 4 | 5 }> {
  const pool: Array<{ text: string; star_rating: 4 | 5 }> = []
  const add = (texts: string[], rating: 4 | 5) =>
    texts.forEach((text) => pool.push({ text, star_rating: rating }))

  add(birthday5, 5)
  add(birthday4, 4)
  add(anniversary5, 5)
  add(anniversary4, 4)
  add(candlelight5, 5)
  add(candlelight4, 4)
  add(surpriseDate5, 5)
  add(surpriseDate4, 4)
  add(proposal5, 5)
  add(proposal4, 4)
  add(prewedding5, 5)
  add(prewedding4, 4)
  add(valentines5, 5)
  add(valentines4, 4)
  add(rooftop5, 5)
  add(rooftop4, 4)
  add(general5, 5)
  add(general4, 4)

  return pool
}

// Light variations so reviews cycle without being identical
const openers5 = [
  '', 'Absolutely ', 'Truly ', 'Simply ', 'Genuinely ', 'Completely ',
  'Honestly ', 'Incredibly ', 'Totally ', 'Utterly ',
]
const openers4 = [
  '', 'Overall ', 'Generally ', 'Quite ', 'Very ', 'Pretty ',
  'Rather ', 'Mostly ', 'Largely ', 'Fairly ',
]

function expand(base: Array<{ text: string; star_rating: 4 | 5 }>, target: number) {
  const result: Array<{ text: string; star_rating: 4 | 5 }> = [...base]
  let i = 0
  while (result.length < target) {
    const item = base[i % base.length]
    const list = item.star_rating === 5 ? openers5 : openers4
    const opener = list[Math.floor(result.length / base.length) % list.length]
    const text =
      opener && !item.text.startsWith(opener)
        ? opener + item.text.charAt(0).toLowerCase() + item.text.slice(1)
        : item.text
    result.push({ text, star_rating: item.star_rating })
    i++
  }
  return result.slice(0, target)
}

// ─── Main ────────────────────────────────────────────────────────────────────

async function main() {
  // Clear existing reviews first
  console.log('Clearing existing reviews…')
  const { error: delErr } = await supabase.from('google_reviews').delete().neq('id', '00000000-0000-0000-0000-000000000000')
  if (delErr) {
    console.error('Clear failed:', delErr.message)
    process.exit(1)
  }

  const base = buildPool()
  console.log(`Base pool: ${base.length} unique reviews`)

  const reviews = expand(base, 1000)
  console.log(`Expanded pool: ${reviews.length} reviews — seeding…`)

  const BATCH = 100
  let inserted = 0
  for (let i = 0; i < reviews.length; i += BATCH) {
    const batch = reviews.slice(i, i + BATCH)
    const { error } = await supabase.from('google_reviews').insert(batch)
    if (error) {
      console.error(`Batch ${i / BATCH + 1} failed:`, error.message)
      process.exit(1)
    }
    inserted += batch.length
    console.log(`Inserted ${inserted}/${reviews.length}…`)
  }

  console.log('✓ 1000 reviews seeded successfully.')
}

main().catch(console.error)
