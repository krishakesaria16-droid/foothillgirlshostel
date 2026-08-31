const P = "/photos";

const exteriorAsset = { url: `${P}/hostel-exterior.png` };
const roomAsset = { url: `${P}/hostel-room.png` };
const bathroomAsset = { url: `${P}/hostel-bathroom.png` };
const wardrobeAsset = { url: `${P}/hostel-wardrobe.png` };
const logoAsset = { url: `${P}/hostel-logo-circle.jpeg` };
const pgDouble = { url: `${P}/pg-double.png` };

const hRoomA = { url: `${P}/h-room-a.jpeg` };
const hRoomB = { url: `${P}/h-room-b.jpeg` };
const hDouble = { url: `${P}/h-double.jpeg` };
const hDoubleNew = { url: `${P}/h-double-new.png` };
const hStudy = { url: `${P}/h-study.jpeg` };
const hTriple = { url: `${P}/h-triple.png` };
const hQuad = { url: `${P}/h-quad.png` };

const pgNew = Array.from({ length: 9 }, (_, i) => ({ url: `${P}/pg-new-${i + 1}.jpeg` }));

void hRoomA;

export const SITE = {
  name: "The Foothill Stay",
  shortName: "The Foothill Stay",
  tagline: "Premium Girls Hostel & PG — Near MIT-WPU, Kothrud, Pune",
  phone1: "7773996600",
  phone1Href: "tel:+917773996600",
  phone2: "8181815543",
  phone2Href: "tel:+918181815543",
  pgPhone: "8888444859",
  pgPhoneHref: "tel:+918888444859",
  email: "thefoothillstay@gmail.com",
  emailHref: "mailto:thefoothillstay@gmail.com",
  address: "Inside MIT-WPU Campus, Kothrud, Pune, Maharashtra 411038",
  pgAddress: "Vanaraji Society, 5 minutes from MIT-WPU, Kothrud, Pune",
  mapEmbed: "https://www.google.com/maps?q=MIT-WPU,+Kothrud,+Pune&output=embed",
  mapDirections:
    "https://www.google.com/maps/dir/?api=1&destination=MIT-WPU+Kothrud+Pune",
  pgMapEmbed:
    "https://www.google.com/maps?q=Vanaraji+Society+Kothrud+Pune&output=embed",
  pgMapDirections:
    "https://www.google.com/maps/dir/?api=1&destination=Vanaraji+Society+Kothrud+Pune",
} as const;

export const IMAGES = {
  exterior: exteriorAsset.url,
  room: roomAsset.url,
  bathroom: bathroomAsset.url,
  wardrobe: wardrobeAsset.url,
  logo: logoAsset.url,
  double: hDoubleNew.url,
  triple: hTriple.url,
  quad: hQuad.url,
  pgDouble: pgDouble.url,
} as const;

export const HOSTEL_GALLERY = [
  IMAGES.exterior,
  IMAGES.room,
  IMAGES.wardrobe,
  IMAGES.bathroom,
  hRoomB.url,
  hDouble.url,
  hStudy.url,
  hTriple.url,
  hQuad.url,
];

export const PG_IMAGES = pgNew.map((a) => a.url);

// Floor-specific PG photo collections — kept strictly separate.
export const FLOOR_9_IMAGES = Array.from(
  { length: 11 },
  (_, i) => `${P}/f9-${i + 1}.jpeg`
);

export const FLOOR_10_IMAGES = [
  "f10-1", "f10-2", "f10-3", "f10-4", "f10-5",
  "f10-6", "f10-7", "f10-8", "f10-10", "f10-9",
].map((n) => `${P}/${n}.jpeg`);
