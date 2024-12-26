import { AliasOptions, defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@shared': path.resolve(__dirname, './src/shared'),
      '@modules': path.resolve(__dirname, './src/modules'),
      '@books': path.resolve(__dirname, './src/modules/books'),
      '@cart': path.resolve(__dirname, './src/modules/cart'),
      '@routes': path.resolve(__dirname, './src/routes'),
      '@core': path.resolve(__dirname, './src/core'),
    } as AliasOptions,
  },
  plugins: [react()],
});
