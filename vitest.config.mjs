import { defineConfig, mergeConfig } from 'vitest/dist/config'
import tsconfigPaths from 'vite-tsconfig-paths'
// import viteConfig from './vite.config'
import nuxtConfig from './nuxt.config'

export default mergeConfig(
  nuxtConfig,
  defineConfig({
    test: {
      globals: true,
      environment: 'happy-dom',
      include: ['**/*.{test,spec}.?(c|m)[jt]s?(x)'],
      exclude: [
        '**/node_modules/**',
        '**/dist/**',
        '**/cypress/**',
        '**/.{idea,git,cache,output,temp}/**',
        '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build,nuxt}.config.*'
      ],
      includeSource: ['import.meta.vitest']
    },
    plugins: [tsconfigPaths()]
  })
)
