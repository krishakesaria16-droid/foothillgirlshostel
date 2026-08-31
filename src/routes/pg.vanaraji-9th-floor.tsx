import { createFileRoute } from "@tanstack/react-router";
import { FloorPage } from "@/components/site/FloorPage";
import { FLOOR_9_IMAGES } from "@/lib/site";

export const Route = createFileRoute("/pg/vanaraji-9th-floor")({
  head: () => ({
    meta: [
      { title: "Vanaraji 9th Floor — Girls PG Near MIT-WPU | The Foothill Stay" },
      {
        name: "description",
        content:
          "Vanaraji 9th Floor premium girls PG, 5 minutes walking distance from MIT-WPU, Kothrud, Pune. Double-sharing rooms, fiber internet, housekeeping, 24×7 security.",
      },
      { property: "og:title", content: "Vanaraji 9th Floor — Girls PG Near MIT-WPU" },
      {
        property: "og:description",
        content: "Premium girls PG on Vanaraji 9th Floor, 5 min walk from MIT-WPU.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/pg/vanaraji-9th-floor" }],
  }),
  component: () => (
    <FloorPage
      floorName="Vanaraji 9th Floor"
      images={FLOOR_9_IMAGES}
      roomImage={FLOOR_9_IMAGES[0]}
      nextFloor={{ label: "Explore 10th Floor", to: "/pg/vanaraji-10th-floor" }}
    />
  ),
});
