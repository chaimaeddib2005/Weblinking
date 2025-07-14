<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />

    <!-- Contact Buttons Container -->
    <div class="contact-buttons-container">
      <!-- Phone Call Button -->
      <a 
        href="tel:+212660222231"
        class="phone-button"
        aria-label="Appelez-nous"
      >
        <i class="fas fa-phone-alt contact-icon"></i>
      </a>

      <!-- WhatsApp Button -->
      <a 
        href="https://wa.me/212660222231?text=Comment%20peut-on%20vous%20aider%20?"
        class="whatsapp-button"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactez-nous sur WhatsApp"
      >
        <i class="fab fa-whatsapp"></i>
        <span class="button-text">Comment puis-je vous aider ?</span>
      </a>
    </div>
  </div>
</template>

<style>
/* Contact Buttons Container */
.contact-buttons-container {
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 999;
}

/* WhatsApp Button */
.whatsapp-button {
  background-color: #00b489;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  height: 50px;
  border-radius: 30px;
  color: white;
  font-size: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  gap: 10px;
}

.whatsapp-button:hover {
  background-color: #128C7E;
  transform: translateY(-2px);
}

.button-text {
  display: inline;
  font-size: 0.9rem;
  font-weight: 500;
}

/* Phone Button */
.phone-button {
  position: absolute;
  bottom: 70px; /* raised above the WhatsApp button */
  right: 0;
  width: 50px;
  height: 50px;
  background-color: #00b489;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.4rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.phone-button:hover {
  background-color: #128C7E;
  transform: translateY(-2px) scale(1.1);
}

/* Font Awesome Icon fix */
.contact-icon {
  color: white !important;
}

/* Responsive Adjustments */
@media (max-width: 767px) {
  .phone-button {
    bottom: 65px;
    width: 45px;
    height: 45px;
    font-size: 1.2rem;
  }

  .whatsapp-button {
    height: 45px;
    padding: 0 16px;
    font-size: 0.9rem;
  }
}
</style>

<script setup>
useHead({
  titleTemplate: (title) => title ? `${title} | Weblinking` : 'Weblinking - Agence digitale au Maroc',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', content: 'Weblinking est une agence digitale au Maroc spécialisée dans la création de sites web, marketing digital, SEO, et développement d\'applications.' },
    { hid: 'keywords', name: 'keywords', content: 'Weblinking, agence digitale, création site web, marketing digital, SEO Maroc, développement applications' },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:title', content: 'Weblinking - Agence digitale au Maroc' },
    { property: 'og:description', content: 'Weblinking est une agence digitale au Maroc spécialisée dans la création de sites web, marketing digital, SEO, et développement d\'applications.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://www.weblinking.ma/' },
    { property: 'og:image', content: 'https://www.weblinking.ma/og-image.jpg' }, // replace with your actual OG image URL
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Weblinking - Agence digitale au Maroc' },
    { name: 'twitter:description', content: 'Weblinking est une agence digitale au Maroc spécialisée dans la création de sites web, marketing digital, SEO, et développement d\'applications.' },
    { name: 'twitter:image', content: 'https://www.weblinking.ma/og-image.jpg' }, // replace with your actual Twitter card image URL
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/favicon.ico' },
    { rel: 'canonical', href: 'https://www.weblinking.ma/' },
    {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css'
    }
  ]
})
</script>

