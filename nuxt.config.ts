// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  modules: ['@chakra-ui/nuxt-next', '@nuxtjs/eslint-module', 'nuxt-vitest'],
  chakra: {
    extendTheme: {
      colors: {
        brand: {
          whitee: '#fff'
        }
      }
    }
  },
  devtools: { enabled: true },
  vite: {
    define: {
      // Makes inline test dont include in bundle
      'import.meta.vitest': false
    },
    test: {
      includeSource: ['src/**/*.{js,ts}']
    }
  }
})
