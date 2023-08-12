// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  devtools: { enabled: true },
  modules: ['@nuxtjs/eslint-module', 'nuxt-vitest', '@chakra-ui/nuxt-next'],
  chakra: {
    extendTheme: {
      colors: {
        brand: {
          whitee: '#fff'
        }
      }
    }
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  }
})
