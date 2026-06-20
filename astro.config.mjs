import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Update `site` to your production URL. It's used for canonical links,
// Open Graph tags, and the auto-generated sitemap.
export default defineConfig({
  site: "https://danielwatts.dev",
  integrations: [sitemap()],
  compressHTML: true,
});
