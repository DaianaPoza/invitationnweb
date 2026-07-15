import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  // La vista previa se publica en:
  // https://daianapoza.github.io/invitationnweb/
  base: '/invitationnweb/',

  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
})
