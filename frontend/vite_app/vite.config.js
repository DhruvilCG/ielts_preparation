import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    allowedHosts: [
      '6609-2409-40c1-3038-39e-832-f637-e527-ec7a.ngrok-free.app'
    ]
  },
  plugins: [react()],
})
