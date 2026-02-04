import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    const backendUrl = env.VITE_BACKEND_URL || 'http://localhost:8001';
    
    return {
      server: {
        host: '0.0.0.0',
        port: parseInt(process.env.PORT || '3000'),
        allowedHosts: 'all',
        proxy: {
          '/api': {
            target: backendUrl,
            changeOrigin: true,
          },
        },
      },
      preview: {
        host: '0.0.0.0',
        port: parseInt(process.env.PORT || '3000'),
        allowedHosts: 'all',
      },
      plugins: [react()],
      define: {
        'process.env.VITE_BACKEND_URL': JSON.stringify(env.VITE_BACKEND_URL),
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        outDir: 'dist',
        sourcemap: false,
      },
    };
});
