import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portfolio/',  // Make sure this is correct
  plugins: [react()],
});
