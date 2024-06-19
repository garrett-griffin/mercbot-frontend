import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import dotenv from 'dotenv'

dotenv.config()

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  define: { 'process.env': {}, },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
})

