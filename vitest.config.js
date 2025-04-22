import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";  // 👈 Add this

export default defineConfig({
  plugins: [vue()],  // 👈 Enable Vue support
  test: {
    environment: "jsdom",
  },
});
