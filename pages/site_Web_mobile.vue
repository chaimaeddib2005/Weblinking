<template>
  <Header />
  <div class="service-container" :class="{ 'is-loading': isLoading }">
    
    <main class="service-content">
      <div class="hero-section">
        <h1 class="service-title">
          {{ content?.titre_service || ' ' }}
          <div v-if="isLoading" class="skeleton skeleton-title"></div>
        </h1>

        <div class="top-paragraph">
          <h3 class="paragraph-title">
            {{ content?.top_paragraph?.title || ' ' }}
            <div v-if="isLoading" class="skeleton skeleton-subtitle"></div>
          </h3>
          <p class="paragraph-text">
            {{ content?.top_paragraph?.content || ' ' }}
            <div v-if="isLoading" class="skeleton skeleton-text"></div>
          </p>
        </div>
      </div>

      <div class="features-grid">
        <div v-for="(modal, index) in modals" :key="index" class="feature-card">
          <div class="feature-icon">
            <img v-if="!isLoading" :src="modal.icon" alt="Feature icon" />
            <div v-else class="skeleton skeleton-icon"></div>
          </div>
          <p class="feature-description">
            {{ !isLoading ? modal.description : ' ' }}
            <div v-if="isLoading" class="skeleton skeleton-text"></div>
          </p>
        </div>
      </div>
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
      isLoading: true,
    }
  },
  async mounted() {
    try {
      const resp = await fetch("https://web.weblinking.fr/wp-json/wp/v2/pages/5813");
      const page = await resp.json();
      this.content = page.acf;
      this.modals = [];
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
  transition: opacity 0.4s ease-in;
  opacity: 1;
}

.service-container.is-loading {
  opacity: 0.5;
  pointer-events: none;
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
  position: relative;
}

.top-paragraph {
  max-width: 800px;
  margin: 0 auto 50px;
}

.paragraph-title {
  font-size: 1.5rem;
  color: #2c5282;
  margin-bottom: 20px;
  position: relative;
}

.paragraph-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #4a5568;
  position: relative;
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
  position: relative;
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
  position: relative;
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
  position: relative;
}

/* === Skeleton Styles === */
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

.skeleton-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 0 auto;
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
