import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/amna-portfolio/', // 👈 add this line (MUST match your repo name)
});
