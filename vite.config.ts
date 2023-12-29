import { defineConfig } from "@solidjs/start/config"

export default defineConfig({
  // https://kobalte.dev/docs/core/overview/ssr
  ssr: {
    noExternal: ["@kobalte/core", "@internationalized/message"],
  },
})
