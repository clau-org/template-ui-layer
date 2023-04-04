// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  srcDir: 'src/',

  /**
   * Environment shared with the CLIENT
   */

  nitro: {
    preset: 'deno'
  },
  extends: [
    '@clau-org/ui-core'
  ],
  
})
