import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'serve-pomo',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/pomo') {
            req.url = '/pomo.html';
          }
          next();
        });
      }
    }
  ],
})
