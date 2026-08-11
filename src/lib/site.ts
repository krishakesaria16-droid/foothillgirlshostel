import exteriorAsset from "@/assets/hostel-exterior.png.asset.json";
import roomAsset from "@/assets/hostel-room.png.asset.json";
import bathroomAsset from "@/assets/hostel-bathroom.png.asset.json";
import wardrobeAsset from "@/assets/hostel-wardrobe.png.asset.json";
import logoAsset from "@/assets/hostel-logo.png.asset.json";

import hRoomA from "@/assets/h-room-a.jpeg.asset.json";
import hRoomB from "@/assets/h-room-b.jpeg.asset.json";
import hDouble from "@/assets/h-double.jpeg.asset.json";
import hStudy from "@/assets/h-study.jpeg.asset.json";
import hTriple from "@/assets/h-triple.png.asset.json";
import hQuad from "@/assets/h-quad.png.asset.json";

import pg1 from "@/assets/pg-1.jpeg.asset.json";
import pg2 from "@/assets/pg-2.jpeg.asset.json";
import pg3 from "@/assets/pg-3.jpeg.asset.json";
import pg4 from "@/assets/pg-4.jpeg.asset.json";
import pg5 from "@/assets/pg-5.jpeg.asset.json";
import pg6 from "@/assets/pg-6.jpeg.asset.json";
import pg7 from "@/assets/pg-7.jpeg.asset.json";
import pg8 from "@/assets/pg-8.jpeg.asset.json";
import pg9 from "@/assets/pg-9.jpeg.asset.json";
import pg10 from "@/assets/pg-10.jpeg.asset.json";
import pg11 from "@/assets/pg-11.jpeg.asset.json";
import pg12 from "@/assets/pg-12.jpeg.asset.json";
import pg13 from "@/assets/pg-13.jpeg.asset.json";
import pg14 from "@/assets/pg-14.jpeg.asset.json";

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
} as const;

export const HOSTEL_GALLERY = [
  IMAGES.exterior,
  IMAGES.room,
  IMAGES.wardrobe,
  IMAGES.bathroom,
];

export const PG_IMAGES = [
  pg1.url, pg2.url, pg3.url, pg4.url, pg5.url, pg6.url, pg7.url,
  pg8.url, pg9.url, pg10.url, pg11.url, pg12.url, pg13.url, pg14.url,
];
