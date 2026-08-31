import { createFileRoute } from "@tanstack/react-router";
import { FloorPage } from "@/components/site/FloorPage";
import { FLOOR_10_IMAGES } from "@/lib/site";

export const Route = createFileRoute("/pg/vanaraji-10th-floor")({
  head: () => ({
    meta: [
      { title: "Vanaraji 10th Floor — Girls PG Near MIT-WPU | The Foothill Stay" },
      {
        name: "description",
        content:
          "Vanaraji 10th Floor premium girls PG, 5 minutes walking distance from MIT-WPU, Kothrud, Pune. Double-sharing rooms, fiber internet, housekeeping, 24×7 security.",
      },
      { property: "og:title", content: "Vanaraji 10th Floor — Girls PG Near MIT-WPU" },
      {
        property: "og:description",
        content: "Premium girls PG on Vanaraji 10th Floor, 5 min walk from MIT-WPU.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/pg/vanaraji-10th-floor" }],
  }),
  component: () => (
    <FloorPage
      floorName="Vanaraji 10th Floor"
      images={FLOOR_10_IMAGES}
      roomImage={FLOOR_10_IMAGES[0]}
      nextFloor={{ label: "Explore 9th Floor", to: "/pg/vanaraji-9th-floor" }}
    />
  ),
});
