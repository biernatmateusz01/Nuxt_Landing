// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Landing',
      meta: [
        { name: 'description', content: 'We believe, using a deep learning we can push medicine forward' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
      ]
    }
  },

  css: ['~/assets/css/index.css'],

  modules: ["@nuxtjs/tailwindcss"],
});
