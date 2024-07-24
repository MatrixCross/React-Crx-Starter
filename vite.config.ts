import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'
import svgr from 'vite-plugin-svgr'
import AutoImport from 'unplugin-auto-import/vite'
import hotReloadBackground from './scripts/hot-reload/background'
import { __DEV__, outputDir } from './const'

export const r = (...args: string[]) => resolve(__dirname, '.', ...args)

export const commonConfig = {
  root: r('src'),
  define: {
    __DEV__,
  },
  resolve: {
    alias: {
      '~/': `${r('src')}/`,
    },
  },
  plugins: [react(), svgr(), UnoCSS(), AutoImport({
    dts: 'typings/auto-import.d.ts',
    imports: ['react'],
  })],
}

export default defineConfig({
  ...commonConfig,
  build: {
    watch: __DEV__ ? {} : null,
    cssCodeSplit: false,
    emptyOutDir: false,
    sourcemap: false,
    outDir: r(outputDir),
    rollupOptions: {
      input: {
        background: r('src/background/index.ts'),
        popup: r('src/popup/index.ts'),
      },
      output: {
        assetFileNames: '[name].[ext]',
        entryFileNames: '[name]/index.js',
        extend: true,
        format: 'es',
      },
    },
  },
  plugins: [...commonConfig.plugins, hotReloadBackground()],
})
