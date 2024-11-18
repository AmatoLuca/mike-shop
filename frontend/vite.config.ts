import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import the plugin
//import eslintPlugin from 'vite-plugin-eslint';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // proxy requests prefixed '/api' and '/uploads'
    proxy: {
      '/api': 'http://localhost:5001',
      '/uploads': 'http://localhost:5000',
    },
  },
});
