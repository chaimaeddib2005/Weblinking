<template>
  <Header />
    
  <div class="service-page" :class="{ 'is-loading': isLoading }">
    
    <main class="content-wrapper">
      <section class="hero">
        <h1 class="hero-title">
          {{ content?.titre_service || ' ' }}
          <div v-if="isLoading" class="skeleton skeleton-title"></div>
        </h1>
        <h3 class="hero-subtitle">
          {{ content?.sous_titre || ' ' }}
          <div v-if="isLoading" class="skeleton skeleton-subtitle"></div>
        </h3>
      </section>

      <div class="top-section">
        <h2 class="section-title">
          {{ content?.top_paragraph?.title || ' ' }}
          <div v-if="isLoading" class="skeleton skeleton-subtitle"></div>
        </h2>
      </div>

      <section class="content-block block-1">
        <div class="text-content">
          <h2 class="block-title">
            {{ content?.block?.titre || ' ' }}
            <div v-if="isLoading" class="skeleton skeleton-subtitle"></div>
          </h2>
          <p class="block-text">
            {{ content?.block?.texte || ' ' }}
            <div v-if="isLoading" class="skeleton skeleton-text"></div>
          </p>
        </div>
        <div class="image-wrapper">
          <img
            v-if="!isLoading && content?.block?.image"
            :src="content.block.image"
            :alt="content.block.titre"
            class="block-image"
          />
          <div v-else class="skeleton skeleton-image"></div>
        </div>
      </section>

      <section class="content-block block-2">
        <div class="image-wrapper">
          <img
            v-if="!isLoading && content?.block_copier?.image"
            :src="content.block_copier.image"
            :alt="content.block_copier.titre"
            class="block-image"
          />
          <div v-else class="skeleton skeleton-image"></div>
        </div>
        <div class="text-content">
          <h2 class="block-title">
            {{ content?.block_copier?.titre || ' ' }}
            <div v-if="isLoading" class="skeleton skeleton-subtitle"></div>
          </h2>
          <p class="block-text">
            {{ content?.block_copier?.texte || ' ' }}
            <div v-if="isLoading" class="skeleton skeleton-text"></div>
          </p>
        </div>
      </section>

      <section class="middle-section">
        <h6 class="middle-text">
          {{ content?.middle_paragraph?.content || ' ' }}
          <div v-if="isLoading" class="skeleton skeleton-text"></div>
        </h6>
      </section>

      <section class="modals-container">
        <div class="modals-row">
          <div v-for="(modal, index) in modals" :key="index" class="modal-card">
            <div class="image-wrapper">
              <img 
                v-if="!isLoading && modal.icon" 
                :src="modal.icon" 
                class="modal-icon"
              />
              <div v-else class="skeleton skeleton-icon"></div>
            </div>
            <p class="modal-description">
              {{ modal.description || ' ' }}
              <div v-if="isLoading" class="skeleton skeleton-text"></div>
            </p>
          </div>
        </div>
        <div class="scroll-indicator scroll-left" @click="scrollModals(-300)">←</div>
        <div class="scroll-indicator scroll-right" @click="scrollModals(300)">→</div>
      </section>
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
      isLoading: true
    };
  },
  async mounted() {
    try {
      //const resp = await fetch("https://web.weblinking.fr/wp-json/wp/v2/pages/5811");
      //const page = await resp.json();
      const page = this.$pageCache.getPage(5811);
      this.content = page.acf;
      
      for (let key in this.content) {
        if (key.startsWith("modal")) {
          if (this.content[key].description) {
            this.modals.push(this.content[key]);
          }
        }
      }
    } catch (error) {
      console.error("Error loading content:", error);
    } finally {
      this.isLoading = false;
    }
  },
  methods: {
    scrollModals(offset) {
      if (this.isLoading) return;
      
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
/* Loading State */
.service-page {
  opacity: 1;
  transition: opacity 0.4s ease-in;
}

.service-page.is-loading {
  opacity: 0.5;
  pointer-events: none;
}

/* Skeleton Styles */
.skeleton {
  background-color: #ddd;
  border-radius: 4px;
  animation: pulse 1.5s ease-in-out infinite;
  margin-top: 5px;
}

.skeleton-title {
  width: 60%;
  height: 32px;
  margin: 10px auto 0 auto;
}

.skeleton-subtitle {
  width: 40%;
  height: 20px;
  margin: 10px 0;
}

.skeleton-text {
  width: 100%;
  height: 14px;
  margin: 6px 0;
}

.skeleton-image {
  width: 100%;
  max-width: 400px;
  height: 250px;
  border-radius: 8px;
  margin-top: 10px;
}

.skeleton-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin: 0 auto 20px;
}

/* Pulse animation */
@keyframes pulse {
  0% {
    background-color: #eee;
  }
  50% {
    background-color: #ddd;
  }
  100% {
    background-color: #eee;
  }
}

/* === Keep your existing styles below === */
.service-page {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  line-height: 1.6;
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.hero {
  text-align: center;
  padding: 60px 0 40px;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%);
  margin-bottom: 40px;
  border-radius: 8px;
}

.hero-title {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 15px;
  font-weight: 700;
}

.hero-subtitle {
  font-size: 1.5rem;
  color: #7f8c8d;
  font-weight: 400;
}

.section-title {
  font-size: 2rem;
  color: #2c3e50;
  margin: 40px 0 20px;
  text-align: center;
}

.content-block {
  display: flex;
  align-items: center;
  gap: 40px;
  margin: 60px 0;
  padding: 30px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
}

.block-1 {
  flex-direction: row;
}

.block-2 {
  flex-direction: row-reverse;
}

.text-content {
  flex: 1;
}

.block-title {
  font-size: 1.8rem;
  color: #3498db;
  margin-bottom: 20px;
}

.block-text {
  font-size: 1.1rem;
  color: #555;
  line-height: 1.8;
}

.block-image {
  flex: 1;
  max-width: 50%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: 0 3px 10px rgba(0,0,0,0.1);
}

.image-wrapper {
  flex: 1;
}

.middle-section {
  text-align: center;
  margin: 50px 0;
  padding: 30px;
  background-color: #f8f9fa;
  border-radius: 8px;
}

.middle-text {
  font-size: 1.2rem;
  color: #555;
  max-width: 800px;
  margin: 0 auto;
}

.modals-container {
  position: relative;
  margin: 60px 0 80px;
}

.modals-row {
  display: flex;
  overflow-x: auto;
  gap: 30px;
  padding: 30px 10px;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  cursor: grab;
}

.modals-row:active {
  cursor: grabbing;
}

.modals-row::-webkit-scrollbar {
  display: none;
}

.modal-card {
  flex: 0 0 300px;
  scroll-snap-align: start;
  background: white;
  padding: 30px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.modal-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}

.modal-icon {
  width: 60px;
  height: 60px;
  margin-bottom: 20px;
  object-fit: contain;
}

.modal-description {
  font-size: 1rem;
  color: #555;
}

.scroll-indicator {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  background: #00b489;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  font-weight: bold;
  font-size: 1.5rem;
  border: none;
  opacity: 0;
  transition: all 0.3s;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.modals-container:hover .scroll-indicator {
  opacity: 1;
}

.scroll-left {
  left: -25px;
}

.scroll-right {
  right: -25px;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .modal-card {
    min-width: calc(50% - 20px);
  }
}

@media (max-width: 768px) {
  .content-block {
    flex-direction: column;
    padding: 20px;
  }

  .block-1, .block-2 {
    flex-direction: column;
  }

  .block-image {
    max-width: 100%;
    margin-top: 20px;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }

  .modal-card {
    min-width: 280px;
  padding: 20px;
  }

  .scroll-indicator {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }

  .scroll-left {
    left: -15px;
  }

  .scroll-right {
    right: -15px;
  }
}

@media (max-width: 480px) {
  .modal-card {
    min-width: 260px;
  }
}
</style>