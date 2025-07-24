
// ClientApps/vite.config.js

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import fs from 'fs'
import path, { resolve } from 'path'

const viewsDir = path.resolve(__dirname, 'views')
const outputBase = path.resolve(__dirname, '..', 'wwwroot', 'pages')

// Fungsi rekursif hapus folder
function deleteFolderRecursive(folderPath) {
  if (fs.existsSync(folderPath)) {
    fs.readdirSync(folderPath).forEach(file => {
      const curPath = path.join(folderPath, file)
      if (fs.lstatSync(curPath).isDirectory()) {
        deleteFolderRecursive(curPath)
      } else {
        fs.unlinkSync(curPath)
      }
    })
    fs.rmdirSync(folderPath)
  }
}

// 🧩 Scan semua controller folder
const input = {}

if (fs.existsSync(viewsDir)) {
  const controllerFolders = fs.readdirSync(viewsDir).filter(folder =>
    fs.statSync(path.join(viewsDir, folder)).isDirectory()
  )

  controllerFolders.forEach(controller => {
    const controllerPath = path.join(viewsDir, controller)
    const files = fs.readdirSync(controllerPath)

    files.forEach(file => {
      if (/^[a-zA-Z0-9_-]+-main\.js$/.test(file)) {
        const actionName = file.replace('-main.js', '')
        const key = `${controller}/${actionName}`

        input[key] = resolve(controllerPath, file)

        // 💾 Ensure wwwroot/pages/[controller]/[action] exists
        const outputFolder = path.resolve(__dirname, '..', 'wwwroot', 'pages', controller, actionName)
        if (!fs.existsSync(outputFolder)) {
          fs.mkdirSync(outputFolder, { recursive: true })
        }
      }
    })
  })
}

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname)
    }
  },
  build: {
    outDir: resolve(__dirname, '..', 'wwwroot', 'pages'),
    emptyOutDir: false,
    minify: 'esbuild',
    sourcemap: false,
    rollupOptions: Object.keys(input).length > 0
      ? {
          input,
          output: {            
              manualChunks(id) {
                if (id.includes('node_modules')) {
                  if (id.includes('@fortawesome')) return 'fontawesome'
                  if (id.includes('primevue')) return 'primevue'
                  if (id.includes('primeicons')) return 'primeicons'
                  return 'vendor'
                }
              },
              entryFileNames: chunk => {
                const parts = chunk.name.split('/')
                const controller = parts[0]
                const action = parts[1] || controller // fallback jika tidak ada action
                return `${controller}/${action}/${action}-main.js`
              },
              chunkFileNames: chunk => {
                const parts = chunk.name.split('/')
                const controller = parts[0]
                const action = parts[1] || controller
                return `${controller}/${action}/[name]-[hash].js`
              },
              assetFileNames: chunk => {
                const parts = chunk.name.split('/')
                const controller = parts[0]
                const action = parts[1] || controller
                return `${controller}/${action}/[name]-[hash][extname]`
              }

          }
        }
      : undefined
  }
})
