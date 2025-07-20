<template>
  <div class="portfolio-page">
    <Header />
    <main class="main-content">
      <h1 class="portfolio-title" v-if="!isLoading">{{ content?.titre_service }}</h1>
      <div class="portfolio-title placeholder" v-else></div>
      
      <div class="realisations-grid">
        <template v-if="isLoading">
          <div v-for="i in 6" :key="'placeholder-' + i" class="product-card placeholder">
            <div class="product-image-container">
              <div class="placeholder-image"></div>
              <div class="product-overlay">
                <div class="placeholder-title"></div>
                <div class="placeholder-text"></div>
              </div>
            </div>
          </div>
        </template>

        <template v-else>
          <div v-for="(product, index) in realisations" :key="index" class="product-card">
            <div class="product-image-container">
              <img :src="product.image_produit" :alt="product.nom" class="product-image">
              <div class="product-overlay">
                <h3 class="product-name">{{ product.nom }}</h3>
                <p class="product-description">{{ product.description_produit }}</p>
              </div>
            </div>
          </div>
        </template>
      </div>
    </main>

    <Feedback />
    <Footer />
  </div>
</template>

<script lang="js">
export default {
  data() {
    return {
      content: null,
      realisations: [],
      isLoading: true
    }
  },
  async mounted() {
    try {
      const resp = await fetch("https://web.weblinking.fr/wp-json/wp/v2/pages/5906");
      const page = await resp.json();
      this.content = page.acf;
      
      for(let key in this.content) {
        if(key.startsWith("produit")) {
          if(this.content[key].image_produit) {
            this.realisations.push(this.content[key]);
          }
        }
      }
    } catch (error) {
      console.error("Error loading content:", error);
    } finally {
      this.isLoading = false;
    }
  }
}
</script>

<style scoped>
.portfolio-page {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

.main-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
}

/* Title Styles */
.portfolio-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #2d3748;
  position: relative;
}

.portfolio-title::after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #4299e1, #38b2ac);
}

.portfolio-title.placeholder {
  height: 2.5rem;
  width: 40%;
  margin: 0 auto 3rem;
  background-color: #e0e0e0;
  border-radius: 4px;
}

/* Realisations Grid */
.realisations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.product-card {
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  aspect-ratio: 1/1;
  transition: transform 0.3s ease;
  background-color: #f8f9fa;
}

.product-card.placeholder {
  background-color: #f0f0f0;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-image-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
}

.product-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  display: block;
}

.placeholder-image {
  width: 100%;
  height: 100%;
  background-color: #e0e0e0;
}

.product-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.product-card:hover .product-overlay {
  opacity: 1;
}

.product-name {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-align: center;
  color: white;
}

.product-description {
  font-size: 1rem;
  line-height: 1.6;
  text-align: center;
  color: rgba(255, 255, 255, 0.9);
}

/* Placeholder Elements */
.placeholder-title {
  height: 1.5rem;
  width: 70%;
  background-color: rgba(255,255,255,0.3);
  margin: 0 auto 1rem;
  border-radius: 4px;
}

.placeholder-text {
  height: 1rem;
  width: 90%;
  background-color: rgba(255,255,255,0.3);
  margin: 0 auto;
  border-radius: 4px;
}

/* Animation for placeholders */
@keyframes pulse {
  0% { opacity: 0.6; }
  50% { opacity: 0.3; }
  100% { opacity: 0.6; }
}

.portfolio-title.placeholder,
.placeholder-image,
.placeholder-title,
.placeholder-text {
  animation: pulse 1.5s infinite ease-in-out;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .realisations-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  
  .portfolio-title {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .realisations-grid {
    grid-template-columns: 1fr;
  }
  
  .main-content {
    padding: 2rem 1rem;
  }
}
</style>