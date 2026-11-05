import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Required for GitHub Pages project site: https://ksbaig.github.io/ksbaig_Portfolio/
  base: '/ksbaig_Portfolio/',
  plugins: [react(), tailwindcss()],
})
