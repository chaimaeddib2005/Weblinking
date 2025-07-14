<template>
  <Header />
  <div class="service-container">
    
    <main v-if="content" class="main-content">
      <!-- Hero Section -->
      <section class="hero">
        <h1 class="hero-title">{{ content.titre_service }}</h1>
        <div class="top-para">
          <p class="top-para-text">{{ content.top_paragraph.content }}</p>
        </div>
      </section>

      <!-- Content Blocks -->
      <section class="content-section">
        <div class="content-block block-odd">
          <div class="text-content">
            <h6 class="block-title">{{ content.block_copier.titre }}</h6>
            <p class="block-text">{{ content.block_copier.texte }}</p>
          </div>
          <img :src="content.block_copier.image" alt="Content Image" class="block-image">
        </div>

        <div class="content-block block-even">
          <img :src="content.block_copier2.image" alt="Content Image" class="block-image">
          <div class="text-content">
            <h6 class="block-title">{{ content.block_copier2.titre }}</h6>
            <p class="block-text">{{ content.block_copier2.texte }}</p>
          </div>
        </div>

        <div class="content-block block-odd">
          <div class="text-content">
            <h6 class="block-title">{{ content.block_copier3.titre }}</h6>
            <p class="block-text">{{ content.block_copier3.texte }}</p>
          </div>
          <img :src="content.block_copier3.image" alt="Content Image" class="block-image">
        </div>
      </section>

      <!-- Middle Paragraph -->
      <section class="middle-para">
        <p class="middle-para-text">{{ content.middle_paragraph.content }}</p>
      </section>

      <!-- Compact Modals in Single Row with Navigation -->
      <section class="modals-section">
        <div class="modals-container">
          <div class="scroll-indicator scroll-left" @click="scrollModals(-300)">←</div>
          <div class="modals-row">
            <div v-for="(modal,index) in modals" :key="index" class="modal-card">
              <img :src="modal.icon" alt="Modal icon" class="modal-icon">
              <p class="modal-text">{{ modal.description }}</p>
            </div>
          </div>
          <div class="scroll-indicator scroll-right" @click="scrollModals(300)">→</div>
        </div>
      </section>

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
    const resp = await fetch("https://web.weblinking.fr/wp-json/wp/v2/pages/5819");
    const page = await resp.json();
    this.content = page.acf;
    for(let key in this.content) {
      if(key.startsWith("modal")) {
        if(this.content[key].description) {
          this.modals.push(this.content[key]);
        }
      }
    }
  },
  methods: {
    scrollModals(offset) {
      const modalsEl = this.$el.querySelector('.modals-row');
      if (modalsEl) {
        modalsEl.scrollBy({
          left: offset,
          behavior: 'smooth'
        });
      }
    }
  }
}
</script>

<style scoped>
.service-container {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  color: #2d3748;
  line-height: 1.6;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Hero Section */
.hero {
  text-align: center;
  padding: 60px 0 40px;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a365d;
  margin-bottom: 20px;
}

.top-para-text {
  font-size: 1.1rem;
  color: #4a5568;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.8;
}

/* Content Blocks */
.content-section {
  margin: 60px 0;
}

.content-block {
  display: flex;
  align-items: center;
  gap: 60px;
  margin-bottom: 80px;
  padding: 20px;
  background: #f7fafc;
  border-radius: 8px;
}

.block-odd {
  flex-direction: row;
}

.block-even {
  flex-direction: row-reverse;
}

.text-content {
  flex: 1;
}

.block-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2b6cb0;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.block-text {
  font-size: 1.1rem;
  color: #4a5568;
  line-height: 1.8;
}

.block-image {
  flex: 1;
  max-width: 50%;
  border-radius: 8px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.block-image:hover {
  transform: scale(1.02);
}

/* Paragraph Sections */
.middle-para, .bottom-para {
  margin: 60px auto;
  max-width: 800px;
}

.middle-para-text, .bottom-para-text {
  font-size: 1.1rem;
  color: #4a5568;
  line-height: 1.8;
  text-align: center;
}

/* Modals Section with Navigation */
.modals-section {
  margin: 60px 0;
}

.modals-container {
  position: relative;
  margin: 0 auto;
  max-width: 100%;
}

.modals-row {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  padding: 20px 0;
  margin: 0 50px;
}

.modals-row::-webkit-scrollbar {
  display: none;
}

.modal-card {
  flex: 0 0 auto;
  width: 180px;
  scroll-snap-align: start;
  background: white;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.modal-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.modal-icon {
  width: 40px;
  height: 40px;
  margin-bottom: 12px;
  object-fit: contain;
}

.modal-text {
  font-size: 0.85rem;
  color: #4a5568;
  line-height: 1.4;
  margin: 0;
}

/* Navigation Arrows */
.scroll-indicator {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  background: #00b489;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  font-weight: bold;
  font-size: 1.2rem;
  border: none;
  opacity: 0.8;
  transition: all 0.3s;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.scroll-indicator:hover {
  opacity: 1;
  transform: translateY(-50%) scale(1.1);
}

.scroll-left {
  left: 0;
}

.scroll-right {
  right: 0;
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

/* Responsive Design */
@media (max-width: 768px) {
  .content-block {
    flex-direction: column;
    gap: 30px;
    margin-bottom: 60px;
  }

  .block-odd, .block-even {
    flex-direction: column;
  }

  .block-image {
    max-width: 100%;
    order: -1;
  }

  .hero-title {
    font-size: 2rem;
  }

  .modal-card {
    width: 160px;
    padding: 15px;
  }
  
  .modal-icon {
    width: 32px;
    height: 32px;
  }

  .scroll-indicator {
    width: 30px;
    height: 30px;
    font-size: 1rem;
  }
}
</style>