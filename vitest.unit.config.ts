import { defineConfig } from "vitest/config"
import { AliasOptions } from 'vite';
import path from 'path';

export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src/'),
            '@shared': path.resolve(__dirname, './src/shared'),
            '@modules': path.resolve(__dirname, './src/modules'),
            '@books': path.resolve(__dirname, './src/modules/books'),
            '@cart': path.resolve(__dirname, './src/modules/cart'),
            '@routes': path.resolve(__dirname, './src/routes'),
            '@core': path.resolve(__dirname, './src/core'),
        } as AliasOptions,
    },
    test: {
        
        globals: true,
        environment: 'node',
        coverage: {
            reporter: ['text'],
            include: ['src/**/*.ts'],
            exclude: ['src/**/index.ts', 'src/**/*.d.ts', 'src/**/*.provider.ts'],
            thresholds: {
                functions: 100,
                branches: 100,
                statements: 100,
                autoUpdate: true,
            }
        },
    },
});