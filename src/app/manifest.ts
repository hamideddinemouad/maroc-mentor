import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Maroc Mentor",
    short_name: "Maroc Mentor",
    description:
      "Accompagnement direct pour les dirigeants de PME qui veulent renforcer leur impact, leur calme et leur prise de décision.",
    start_url: "/",
    display: "standalone",
    background_color: "#050910",
    theme_color: "#050910",
    lang: "fr",
    icons: [
      {
        src: "/logo.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
