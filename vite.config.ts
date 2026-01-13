import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    build: {
        outDir: 'dist',
        sourcemap: false,
        minify: 'terser',
        target: 'es2020',
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true,
            },
        },
        rollupOptions: {
            output: {
                manualChunks: {
                    'vendor': ['react', 'react-dom'],
                    'framer': ['framer-motion'],
                    'ui': ['lucide-react'],
                },
            },
        },
    },
    server: {
        port: 3000,
        strictPort: false,
        host: '0.0.0.0',
    },
});
