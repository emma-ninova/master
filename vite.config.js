import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/master/', // Ensures all asset paths are prefixed correctly
  build: {
    outDir: 'dist/master', // Output folder matches your base path
    assetsDir: 'assets',   // Assets go into /master/assets/
    rollupOptions: {
      input: './index.html' // Ensures Vite uses your custom index.html
    }
  },
  server: {
    port: 5173,
    open: true
  }
})
