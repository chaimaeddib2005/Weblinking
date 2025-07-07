<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>
<script setup>
useHead({
  titleTemplate: (title) => title ? `${title} | Weblinking` : 'Weblinking - Agence digitale au Maroc',
  title: 'Weblinking - Agence digitale au Maroc',
  htmlAttrs: {
    lang: 'fr'
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      name: 'description',
      content: 'Weblinking est une agence digitale basée au Maroc, spécialisée dans la création de sites web, le référencement naturel SEO, le marketing digital et la gestion de projet.'
    },
    { name: 'author', content: 'Weblinking' },
    { name: 'robots', content: 'index, follow' },

    // Open Graph (for Facebook, LinkedIn, etc.)
    { property: 'og:title', content: 'Weblinking - Agence digitale au Maroc' },
    {
      property: 'og:description',
      content: 'Agence digitale spécialisée en création de sites web, SEO, marketing digital et plus.'
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://www.weblinking.ma/' },
    { property: 'og:image', content: 'https://www.weblinking.ma/_nuxt/img/logo_weblinking.png' }, // change if needed

    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Weblinking - Agence digitale au Maroc' },
    {
      name: 'twitter:description',
      content: 'Création de sites web, référencement SEO, marketing digital. Votre partenaire web au Maroc.'
    },
    { name: 'twitter:image', content: 'https://www.weblinking.ma/_nuxt/img/logo_weblinking.png' }
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/favicon.ico' }, 

     {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css'
    }
  ]
})


</script>