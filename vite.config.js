import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.SERVICE_ID': JSON.stringify(process.env.SERVICE_ID),
    'process.env.TEMPLATE_ID': JSON.stringify(process.env.TEMPLATE_ID),
    'process.env.USER_ID': JSON.stringify(process.env.USER_ID)
    }
})
