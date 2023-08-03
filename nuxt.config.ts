// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    preset: 'netlify',
    serveStatic: true
  },
  app: {
    cdnURL: "https://dtpu9zq1caghj.cloudfront.net"
  }
  
})
