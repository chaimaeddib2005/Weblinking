<template>
  <Header />
  <div class="service-container" v-if="content">
    
    <main class="service-content" v-if="content">
      <div class="hero-section">
        <h1 class="service-title">{{ content.titre_service }}</h1>
        
        <div class="top-paragraph">
          <h3 class="paragraph-title">{{ content.top_paragraph.title }}</h3>
          <p class="paragraph-text">{{ content.top_paragraph.content }}</p>
        </div>
      </div>

      <div class="features-grid">
        <div v-for="(modal,index) in modals" :key="index" class="feature-card">
          <div class="feature-icon">
            <img :src="modal.icon" alt="Feature icon" />
          </div>
          <p class="feature-description">{{ modal.description }}</p>
        </div>
      </div>
    </main>
    <main v-else class="loading-screen">
      <div class="loader"></div>
      <p>Chargement du contenu...</p>
    </main>
    
  </div>
  <Feedback />
    <Footer />
</template>

<script lang="js">
export default {
  data() {
    return {
      content: null,
      modals: [],
    }
  },
  async mounted() {
    const resp = await fetch("https://web.weblinking.fr/wp-json/wp/v2/pages/5813");
    const page = await resp.json();
    this.content = page.acf;
    for(let key in this.content) {
      if(key.startsWith("modal")) {
        if(this.content[key].description) {
          this.modals.push(this.content[key]);
        }
      }
    }
  }
}
</script>

<style scoped>
.service-container {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #2d3748;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.hero-section {
  text-align: center;
  padding: 60px 0 40px;
}
.service-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a365d;
  margin-bottom: 30px;
}

.top-paragraph {
  max-width: 800px;
  margin: 0 auto 50px;
}

.paragraph-title {
  font-size: 1.5rem;
  color: #2c5282;
  margin-bottom: 20px;
}

.paragraph-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #4a5568;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin: 60px 0;
}

.feature-card {
  background: white;
  border-radius: 12px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ebf8ff;
  border-radius: 50%;
  padding: 15px;
}

.feature-icon img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.feature-description {
  font-size: 1rem;
  line-height: 1.6;
  color: #4a5568;
}
/* Loading State */
.loading-screen {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  color: #4a5568;
}

.loader {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #4299e1;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
  margin-bottom: 1.5rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .service-title {
    font-size: 2rem;
  }
  
  .paragraph-title {
    font-size: 1.3rem;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .feature-card {
    padding: 20px;
  }
}
</style>