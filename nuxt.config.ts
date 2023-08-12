// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "src/",
  modules: ["@chakra-ui/nuxt-next"],
  chakra: {
    extendTheme: {
      colors: {
        brand: {
          whitee: "#fff",
        },
      },
    },
  },
  devtools: { enabled: true },
});
