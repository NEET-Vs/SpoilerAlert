// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  srcDir: 'src/',
  modules: [
    '@chakra-ui/nuxt-next',
    '@nuxtjs/eslint-module',
    'nuxt-vitest',
    '@nuxtjs/tailwindcss'
  ],
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
      tailwindcss: {
        cssPath: '~/assets/css/main.css',
        configPath: 'tailwind.config',
        exposeConfig: false,
        exposeLevel: 2,
        config: {},
        injectPosition: 'first',
        viewer: true
      },
      autoprefixer: {}
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
