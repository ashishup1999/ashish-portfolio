import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ashish's Portfolio",
    short_name: "Ashish's Portfolio",
    description: "Ashish's Portfolio",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      {
        src: "/images/coder_guy.svg",
        sizes: "192x192",
        type: "image/svg+xml",
      },
      {
        src: "/images/coder_guy.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  };
}
