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

const pg1 = { url: `${P}/pg-1.jpeg` };
const pg2 = { url: `${P}/pg-2.jpeg` };
const pg3 = { url: `${P}/pg-3.jpeg` };
const pg4 = { url: `${P}/pg-4.jpeg` };
const pg5 = { url: `${P}/pg-5.jpeg` };
const pg6 = { url: `${P}/pg-6.jpeg` };
const pg7 = { url: `${P}/pg-7.jpeg` };
const pg8 = { url: `${P}/pg-8.jpeg` };
const pg9 = { url: `${P}/pg-9.jpeg` };
const pg10 = { url: `${P}/pg-10.jpeg` };
const pg11 = { url: `${P}/pg-11.jpeg` };
const pg12 = { url: `${P}/pg-12.jpeg` };
const pg13 = { url: `${P}/pg-13.jpeg` };
const pg14 = { url: `${P}/pg-14.jpeg` };
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

export const PG_IMAGES = [
  pg1.url, pg2.url, pg3.url, pg4.url, pg5.url, pg6.url, pg7.url,
  pg8.url, pg9.url, pg10.url, pg11.url, pg12.url, pg13.url, pg14.url,
];
