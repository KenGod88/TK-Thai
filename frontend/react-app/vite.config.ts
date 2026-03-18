import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  server: {
    allowedHosts: [
      "unretained-insightfully-georgeanna.ngrok-free.dev"],
    proxy: {
      "/api": {
        target: "http://localhost:8100",
        changeOrigin: true,
        secure: false
      }
    }
  },
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})
