import postcss from './postcss.config.js';
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  server: {
    proxy: {
      "/apply": {
        target: "http://localhost:3000",
        secure: false,
        changeOrigin: true,
      }
    }
  }
})
