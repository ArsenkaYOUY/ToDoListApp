import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve('./src'),
      '@components': path.resolve('./src/components'),
      '@styles': path.resolve('./src/styles'),
      '@data': path.resolve('./src/data'),
      '@helpers' : path.resolve('./src/styles/helpers')
    }
  }
})
