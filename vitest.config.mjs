import { defineConfig, mergeConfig } from 'vitest/dist/config'
import tsconfigPaths from 'vite-tsconfig-paths'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      include: ['**/*.{test,spec}.?(c|m)[jt]s?(x)'],
      exclude: [
        '**/node_modules/**',
        '**/dist/**',
        '**/cypress/**',
        '**/.{idea,git,cache,output,temp}/**',
        '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*'
      ],
      includeSource: ['import.meta.vitest']
    },
    plugins: [tsconfigPaths()]
  })
)
