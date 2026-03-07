import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import fs from 'fs'

export default defineConfig({
  base: './',
  plugins: [
    tailwindcss(),
    vue(),
    {
      name: 'serve-versakit-vue',
      configureServer(server) {
        server.middlewares.use('/versakit-vue-dist', (req, res, next) => {
          // e.g. request to /versakit-vue-dist/esm/index.esm.js -> req.url is /esm/index.esm.js
          const filePath = path.resolve(
            __dirname,
            '../packages/versakit-vue/dist' + req.url,
          )

          if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
            if (filePath.endsWith('.js')) {
              res.setHeader('Content-Type', 'application/javascript')
            } else if (filePath.endsWith('.css')) {
              res.setHeader('Content-Type', 'text/css')
            }

            const content = fs.readFileSync(filePath)
            res.end(content)
          } else {
            next()
          }
        })
      },
    },
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    fs: {
      allow: ['..'],
    },
  },
})
