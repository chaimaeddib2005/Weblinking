<template>
  <div>
    <Header />

    <main v-if="content" class="contact-container">
      <div class="contact-content">
        <h1 class="contact-title">Contactez nous</h1>
        <div class="contact-info">
          <div class="contact-item">
            <i class="fas fa-phone "></i>
            <a :href="`tel:${content.phone_number}`">Tél: +{{ content.phone_number }}</a>
          </div>
          <div class="contact-item">
            <i class="fas fa-envelope"></i>
            <a :href="`mailto:${content.email}`">{{ content.email }}</a>
          </div>
          <div class="contact-item">
            <i class="fas fa-map-marker-alt"></i>
            <a
              :href="`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(content.address)}`"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ content.address }}
            </a>
          </div>
        </div>
        <div class="map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.5089797237047!2d-9.55682952582352!3d30.39329800196042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3b7d7739956fb%3A0x1d36d50d410f7022!2sAgence%20de%20r%C3%A9f%C3%A9rencement%20%26%20e-marketing%20Weblinking!5e0!3m2!1sfr!2sma!4v1751814267097!5m2!1sfr!2sma" 
            width="100%" 
            height="450" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
            class="contact-map">
          </iframe>
        </div>
      </div>
    </main>

    <main v-else class="content-placeholder">
      <div class="contact-content">
        <div class="contact-title placeholder-title"></div>
        <div class="contact-info">
          <div class="contact-item">
            <i class="fas fa-phone placeholder-icon"></i>
            <div class="placeholder-text"></div>
          </div>
          <div class="contact-item">
            <i class="fas fa-envelope placeholder-icon"></i>
            <div class="placeholder-text"></div>
          </div>
          <div class="contact-item">
            <i class="fas fa-map-marker-alt placeholder-icon"></i>
            <div class="placeholder-text"></div>
          </div>
        </div>
        <div class="map-container placeholder-map"></div>
      </div>
    </main>
  </div>

  <!-- Feedback placed outside main container for full width -->
  <div class="feedback-container">
    <Feedback />
  </div>
  
  <Footer />
</template>

<script lang="js">
export default {
  data() {
    return {
      content: null,
    };
  },
  async created() {
    //const resp = await fetch("https://web.weblinking.fr/wp-json/wp/v2/pages/5911");
    //const page = await resp.json();
    const page =  this.$pageCache.getPage(5911);
    this.content = page.acf;
  },
};
</script>

<style scoped>
.contact-content {
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
}

.contact-title {
  text-align: center;
  color: #2d3748;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  position: relative;
  padding-bottom: 1rem;
}

.contact-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: #4299e1;
}

.contact-info {
  margin-bottom: 3rem;
}

.contact-item {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  color: #4a5568;
}

.contact-item i {
  margin-right: 0.5rem;
  color: #2c5282;
  font-size: 1.2rem;
}

.contact-item a {
  color: #2b6cb0;
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-item a:hover {
  color: #2c5282;
}

.map-container {
  margin-top: 2rem;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Placeholder Styles */
.content-placeholder .contact-content {
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
}

.placeholder-title {
  height: 3rem;
  width: 60%;
  margin: 0 auto 2rem;
  position: relative;
  background-color: #f3f3f3;
  border-radius: 4px;
}

.placeholder-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: #f3f3f3;
}

.placeholder-icon {
  margin-right: 0.5rem;
  color: #f3f3f3;
  font-size: 1.2rem;
}

.placeholder-text {
  height: 1.2rem;
  width: 200px;
  background-color: #f3f3f3;
  border-radius: 4px;
}

.placeholder-map {
  height: 450px;
  background-color: #f3f3f3;
  border-radius: 8px;
  margin-top: 2rem;
}

/* Animation */
@keyframes placeholderShimmer {
  0% { background-position: -468px 0 }
  100% { background-position: 468px 0 }
}

.placeholder-title,
.placeholder-text,
.placeholder-map {
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeholderShimmer;
  animation-timing-function: linear;
  background: linear-gradient(to right, #f3f3f3 8%, #ececec 18%, #f3f3f3 33%);
  background-size: 800px 104px;
  position: relative;
}

/* Responsive Design */
@media (max-width: 768px) {
  .contact-container {
    padding: 0 1rem;
  }

  .contact-content {
    padding: 1.5rem;
  }

  .contact-title {
    font-size: 2rem;
  }

  .contact-item {
    font-size: 1rem;
  }

  .placeholder-title {
    width: 80%;
    height: 2.5rem;
  }

  .placeholder-text {
    width: 150px;
  }
}
</style>