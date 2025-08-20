import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

// Detect correct base path for GitHub Pages deployments.
// - Project Pages: https://<user>.github.io/<repo>/ → base = "/<repo>/"
// - User/Org Pages: https://<user>.github.io/ → base = "/"
const repository = process.env.GITHUB_REPOSITORY?.split("/")?.[1] ?? "unduck";
const isGithubActions = Boolean(process.env.GITHUB_ACTIONS);
const baseForPages = isGithubActions
  ? (repository.endsWith(".github.io") ? "/" : `/${repository}/`)
  : "/";

export default defineConfig({
  base: baseForPages,
  plugins: [
    VitePWA({
      registerType: "autoUpdate",
    }),
  ],
});
