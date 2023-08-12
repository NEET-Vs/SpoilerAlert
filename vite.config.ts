import { defineConfig } from 'vite'

export default defineConfig({
  define: {
    // Makes inline test dont include in bundle
    'import.meta.vitest': false
  },
  test: {
    includeSource: ['src/**/*.{js,ts}']
  }
})
