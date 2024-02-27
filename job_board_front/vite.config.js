import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react() ],
  ss: {
    postcss: {
      plugins: [
        tailwindcss, // Add Tailwind CSS plugin
        autoprefixer, // Add Autoprefixer plugin
      ],
    },
  },
  
})
