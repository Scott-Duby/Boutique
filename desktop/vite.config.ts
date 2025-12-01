import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import "dotenv/config"
import { TanStackRouterVite } from "@tanstack/router-plugin/vite"

// https://vite.dev/config/
export default defineConfig({
  // This is CRITICAL for Electron production builds
  base: './', 
  
  plugins: [ 
    TanStackRouterVite({ target: 'react', autoCodeSplitting: true }), 
    react(),
  ],
  build: {
    target: 'esnext',
  },
  
  resolve: {
    alias: {
      // The alias now correctly points to the 'src' folder in the root
      "@": path.resolve(__dirname, "src"),
    },
  },

  server: {
    // We set a specific port for 'wait-on' to listen to
    port: 5173,
    strictPort: true,
  }
})