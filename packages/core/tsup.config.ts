import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  esbuildOptions(options) {
    options.alias = {
      '#file-type/core':
        options.format === 'esm'
          ? './src/polyfills/esm.ts'
          : './src/polyfills/cjs.ts',
    }
  },
})
