import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    optimizeDeps: {
        include: ['@testing-library/jest-dom', '@testing-library/react', 'jest'],
    },
    build: {
        terserOptions: {
            compress: {
                keep_infinity: true,
                unused: true
            },
        }
    }
})
