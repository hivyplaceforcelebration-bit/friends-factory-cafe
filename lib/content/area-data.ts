export interface AreaInfo {
  slug: string;
  name: string;
  distanceMin: number; // minutes from venue
  landmark: string;    // well-known nearby landmark
  character: string;   // one-line neighbourhood description
}

export const VENUE_AREA = "Gotri";

export const areaData: AreaInfo[] = [
  { slug: "alkapuri", name: "Alkapuri", distanceMin: 9, landmark: "Alkapuri Circle", character: "upscale residential and commercial hub" },
  { slug: "akota", name: "Akota", distanceMin: 10, landmark: "Akota Garden", character: "serene lakeside neighbourhood" },
  { slug: "fatehgunj", name: "Fatehgunj", distanceMin: 12, landmark: "Fatehgunj Market", character: "vibrant student and shopping district" },
  { slug: "sayajigunj", name: "Sayajigunj", distanceMin: 11, landmark: "Sayaji Hotel", character: "bustling city-centre locality" },
  { slug: "vasna", name: "Vasna", distanceMin: 14, landmark: "Vasna Barrage", character: "riverside residential enclave" },
  { slug: "manjalpur", name: "Manjalpur", distanceMin: 17, landmark: "Manjalpur BRTS Stop", character: "rapidly growing south Vadodara township" },
  { slug: "waghodia-road", name: "Waghodia Road", distanceMin: 20, landmark: "Waghodia Road GIDC", character: "expanding eastern industrial corridor" },
  { slug: "gotri", name: "Gotri", distanceMin: 2, landmark: "Gotri Canal Road", character: "the very neighbourhood where Friends Factory Cafe is located" },
  { slug: "sama", name: "Sama", distanceMin: 15, landmark: "Sama Sports Complex", character: "northern residential and sports hub" },
  { slug: "karelibaug", name: "Karelibaug", distanceMin: 13, landmark: "Karelibaug Garden", character: "leafy, family-oriented locality" },
  { slug: "nizampura", name: "Nizampura", distanceMin: 16, landmark: "Nizampura Railway Bridge", character: "well-connected northern suburb" },
  { slug: "subhanpura", name: "Subhanpura", distanceMin: 4, landmark: "Subhanpura Char Rasta", character: "prime locality directly adjacent to Gotri" },
  { slug: "ajwa-road", name: "Ajwa Road", distanceMin: 18, landmark: "Ajwa Garden Lake", character: "picturesque road leading to the scenic Ajwa reservoir" },
  { slug: "old-padra-road", name: "Old Padra Road", distanceMin: 6, landmark: "Old Padra Road Junction", character: "busy arterial road with great connectivity" },
  { slug: "race-course", name: "Race Course", distanceMin: 11, landmark: "Vadodara Race Course Ground", character: "heritage-rich central locality" },
  { slug: "ellora-park", name: "Ellora Park", distanceMin: 8, landmark: "Ellora Park Lake", character: "calm lake-side residential area" },
  { slug: "harni", name: "Harni", distanceMin: 7, landmark: "Harni Lake", character: "peaceful lakeside neighbourhood" },
  { slug: "tandalja", name: "Tandalja", distanceMin: 9, landmark: "Tandalja Road", character: "quiet residential locality near the city outskirts" },
  { slug: "bhayli", name: "Bhayli", distanceMin: 13, landmark: "Bhayli Village Crossroads", character: "emerging suburban township on the city fringe" },
  { slug: "sevasi", name: "Sevasi", distanceMin: 3, landmark: "Sevasi Canal Bridge", character: "the locality directly neighbouring Gotri, walking distance away" },
  { slug: "chhani", name: "Chhani", distanceMin: 20, landmark: "Chhani Road GIDC", character: "northern industrial and residential area" },
  { slug: "makarpura", name: "Makarpura", distanceMin: 22, landmark: "Makarpura Palace", character: "southern suburb with a royal heritage palace" },
  { slug: "gorwa", name: "Gorwa", distanceMin: 18, landmark: "HPCL Gorwa Refinery", character: "western industrial township" },
  { slug: "tarsali", name: "Tarsali", distanceMin: 21, landmark: "Tarsali Flyover", character: "south Vadodara developing township" },
  { slug: "diwalipura", name: "Diwalipura", distanceMin: 10, landmark: "Diwalipura Crossroads", character: "well-located central residential area" },
  { slug: "maneja", name: "Maneja", distanceMin: 19, landmark: "Maneja Station Road", character: "south-east residential suburb" },
  { slug: "raopura", name: "Raopura", distanceMin: 14, landmark: "Raopura Tower", character: "heritage old-city locality" },
  { slug: "mandvi", name: "Mandvi", distanceMin: 13, landmark: "Mandvi Tower", character: "historic walled-city neighbourhood" },
  { slug: "nyay-mandir", name: "Nyay Mandir", distanceMin: 12, landmark: "Vadodara District Court", character: "civic and administrative centre" },
  { slug: "jetalpur", name: "Jetalpur", distanceMin: 16, landmark: "Jetalpur Road", character: "southern suburb with good highway connectivity" },
  { slug: "kalali", name: "Kalali", distanceMin: 17, landmark: "Kalali Crossroads", character: "north-eastern outskirt near NH-48" },
  { slug: "undera", name: "Undera", distanceMin: 23, landmark: "Undera Village", character: "semi-rural township on the northern fringe" },
  { slug: "bil", name: "Bil", distanceMin: 15, landmark: "Bil Village", character: "quiet suburban village locality" },
  { slug: "karodiya", name: "Karodiya", distanceMin: 18, landmark: "Karodiya Road", character: "emerging township in east Vadodara" },
  { slug: "dabhoi-road", name: "Dabhoi Road", distanceMin: 20, landmark: "Dabhoi Road Crossroads", character: "southern highway corridor" },
  { slug: "sama-savli-road", name: "Sama Savli Road", distanceMin: 16, landmark: "Sama Savli Road Junction", character: "north-eastern arterial road" },
  { slug: "atladra", name: "Atladra", distanceMin: 12, landmark: "Atladra Bridge", character: "riverside locality on the Vishwamitri riverbank" },
  { slug: "tp-13", name: "TP 13", distanceMin: 8, landmark: "TP 13 Scheme", character: "planned residential township in west Vadodara" },
  { slug: "koyali", name: "Koyali", distanceMin: 25, landmark: "IOCL Koyali Refinery", character: "north-eastern industrial township" },
  { slug: "ranoli", name: "Ranoli", distanceMin: 22, landmark: "Ranoli Industrial Area", character: "north Vadodara industrial hub" },
];

export function getArea(slugSuffix: string): AreaInfo {
  const found = areaData.find(a => a.slug === slugSuffix);
  return found ?? { slug: slugSuffix, name: slugSuffix.replace(/-/g, " "), distanceMin: 15, landmark: "Vadodara", character: "Vadodara locality" };
}
