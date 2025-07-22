<template>
  <Header />
  <div class="service-page" :class="{ 'is-loading': isLoading }">
    <main class="content-wrapper">
      <!-- Hero Section -->
      <section class="hero-section">
        <h1 class="service-title">
          {{ content?.titre_service || ' ' }}
          <div v-if="isLoading" class="skeleton skeleton-title"></div>
        </h1>
        <div class="top-para">
          <p class="top-para-text">
            {{ content?.top_paragraph?.content || ' ' }}
            <div v-if="isLoading" class="skeleton skeleton-text"></div>
          </p>
        </div>
      </section>

      <!-- Content Block -->
      <section class="content-block">
        <div class="text-content">
          <h6 class="block-title">
            {{ content?.block?.titre || ' ' }}
            <div v-if="isLoading" class="skeleton skeleton-subtitle"></div>
          </h6>
          <p class="block-text">
            {{ content?.block?.texte || ' ' }}
            <div v-if="isLoading" class="skeleton skeleton-text"></div>
          </p>
        </div>
        <div class="image-wrapper">
          <img
            v-if="!isLoading && content?.block?.image"
            :src="content.block.image"
            alt="Image Block 1"
            class="block-image"
          />
          <div v-else class="skeleton skeleton-image"></div>
        </div>
      </section>
    </main>
  </div>
  <Feedback />
  <Footer />
</template>

<script>
export default {
  data() {
    return {
      content: null,
      isLoading: true,
    }
  },
  async mounted() {
    try {
      //const resp = await fetch("https://web.weblinking.fr/wp-json/wp/v2/pages/5829");
      //const page = await resp.json();
      const page = this.$pageCache.getPage(5829);
      this.content = page.acf;
    } catch (error) {
      console.error("Error loading content:", error);
    } finally {
      this.isLoading = false;
    }
  }
}
</script>

<style scoped>
/* Fade-in on content load */
.service-page {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
  font-family: 'Raleway', sans-serif;
  color: #333;
  line-height: 1.6;
  transition: opacity 0.4s ease-in;
  opacity: 1;
}

.service-page.is-loading {
  opacity: 0.5; /* dim the content when loading */
  pointer-events: none;
}

/* === Hero Section === */
.hero-section {
  text-align: center;
  padding: 50px 0 30px;
  margin-bottom: 40px;
  border-bottom: 1px solid rgba(141, 110, 99, 0.1);
}

.service-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a365d;
  margin-bottom: 20px;
  position: relative;
}

.top-para-text {
  font-size: 0.95rem;
  color: #666;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.7;
}

/* === Content Block === */
.content-block {
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 50px auto;
  max-width: 800px;
}

.text-content {
  order: 2;
}

.block-title {
  font-size: 0.9rem;
  font-weight: 600;
  color: #1565C0;
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
}

.block-text {
  font-size: 0.95rem;
  color: #333;
  line-height: 1.7;
  margin-bottom: 0;
}

.block-image {
  width: 100%;
  border-radius: 6px;
  transition: transform 0.3s ease;
  order: 1;
}

.block-image:hover {
  transform: scale(1.02);
}

.image-wrapper {
  order: 1;
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

.skeleton-image {
  width: 100%;
  max-width: 400px;
  height: 250px;
  border-radius: 6px;
  margin-top: 10px;
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

/* Responsive Design */
@media (min-width: 768px) {
  .content-block {
    flex-direction: row;
    align-items: flex-start;
    gap: 40px;
  }
  
  .text-content {
    flex: 1;
    order: 1;
    padding-right: 30px;
  }
  
  .image-wrapper {
    flex: 1;
    order: 2;
    max-width: 50%;
  }
  
  .service-title {
    font-size: 2.2rem;
  }

  .block-text {
    font-size: 0.9rem;
  }
}

@media (min-width: 992px) {
  .service-title {
    font-size: 2.5rem;
  }
  
  .top-para-text {
    font-size: 1rem;
  }
}
</style>
