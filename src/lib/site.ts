import exteriorAsset from "@/assets/hostel-exterior.png.asset.json";
import roomAsset from "@/assets/hostel-room.png.asset.json";
import bathroomAsset from "@/assets/hostel-bathroom.png.asset.json";
import wardrobeAsset from "@/assets/hostel-wardrobe.png.asset.json";
import logoAsset from "@/assets/hostel-logo.png.asset.json";

export const SITE = {
  name: "The Foothill Girls Hostel",
  shortName: "The Foothill",
  tagline: "Inside MIT College Campus, Kothrud, Pune",
  phone: "+91 8007660249",
  phoneHref: "tel:+918007660249",
  whatsapp: "918007660249",
  whatsappHref:
    "https://wa.me/918007660249?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20The%20Foothill%20Girls%20Hostel.",
  email: "nmchhajed@gmail.com",
  emailHref: "mailto:nmchhajed@gmail.com",
  address:
    "Inside MIT College Campus, next to Ramdev Mandir, Kothrud, Pune, Maharashtra 411038",
  mapEmbed: "https://www.google.com/maps?q=MIT-WPU,+Kothrud,+Pune&output=embed",
  mapDirections:
    "https://www.google.com/maps/dir/?api=1&destination=MIT-WPU+Kothrud+Pune",
} as const;

export const IMAGES = {
  exterior: exteriorAsset.url,
  room: roomAsset.url,
  bathroom: bathroomAsset.url,
  wardrobe: wardrobeAsset.url,
  logo: logoAsset.url,
} as const;
