import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: '/ronaldrbb/',
    plugins: [react()],
    build: { outDir: 'build' },
});
