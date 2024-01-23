import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite'; // Add this line

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['@fortawesome/react-fontawesome'],
    },
  },
});
