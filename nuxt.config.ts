// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  modules: [
    'nuxt-icon',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/supabase',
    '@pinia/nuxt',
    '@vite-pwa/nuxt'
  ],
  runtimeConfig: {
    public: {
      bucketUrl: process.env.BUCKET_URL
    }
  },
  // redirectOptions: {
  //   login: '/auth',
  //   callback: 'http://localhost:3000',
  //   exclude: [],
  //   cookieRedirect: false,
  // },
  devtools: { enabled: false },
  pwa: {
    manifest: {
      name: "Intercon",
      short_name: "Intercon",
      description: "This is a Threads Clone",
      theme_color: "#000000",
      icons: [
        {
          src: "pwa-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
    devOptions: {
      enabled: true,
      type: "module",
    },
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    }
  }
})
