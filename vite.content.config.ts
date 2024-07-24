import { defineConfig } from 'vite'
import { replaceCodePlugin } from 'vite-plugin-replace'
import { commonConfig, r } from './vite.config'
import hotReloadContent from './scripts/hot-reload/content'
import { __DEV__, outputDir } from './const'

// bundling the content script
export default defineConfig({
  ...commonConfig,
  build: {
    watch: __DEV__ ? {} : null,
    cssCodeSplit: false,
    emptyOutDir: false,
    sourcemap: false,
    outDir: r(`${outputDir}/contentScript`),
    rollupOptions: {
      input: {
        contentScript: r('src/contentScript/index.tsx'),
      },
      output: {
        assetFileNames: '[name].[ext]',
        entryFileNames: 'index.js',
        extend: true,
        format: 'iife',
      },
    },
  },
  plugins: [
    ...commonConfig.plugins,
    replaceCodePlugin({
      replacements: [
        {
          from: /:root\{/g,
          to: ':host{',
        },
      ],
    }),
    hotReloadContent(),
  ],
})
