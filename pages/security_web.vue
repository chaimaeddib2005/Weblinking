<template>
  <Header />
  <div class="service-page" :class="{ 'is-loading': isLoading }">
    <main class="content-wrapper">
      <!-- Hero Section -->
      <section class="hero-section">
        <h1 class="page-title">{{ content?.titre_service || ' ' }}</h1>
        <div class="top-para">
          <p class="top-para-text">{{ content?.top_paragraph?.content || ' ' }}</p>
        </div>
      </section>

      <!-- Content Blocks -->
      <section class="content-blocks">
        <div class="content-block block-1">
          <img 
            v-if="content?.block?.image"
            :src="content.block.image" 
            alt="Content Image" 
            class="block-image"
          >
          <div class="text-content">
            <h3 class="block-title">{{ content?.block?.titre || ' ' }}</h3>
            <p class="block-text">{{ content?.block?.texte || ' ' }}</p>
          </div>
        </div>

        <div class="content-block block-2">
          <div class="text-content">
            <h3 class="block-title">{{ content?.block_copier?.titre || ' ' }}</h3>
            <p class="block-text">{{ content?.block_copier?.texte || ' ' }}</p>
          </div>
          <img 
            v-if="content?.block_copier?.image"
            :src="content.block_copier.image" 
            alt="Content Image" 
            class="block-image"
          >
        </div>
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
      isLoading: true
    }
  },
  async mounted() {
    try {
      //const resp = await fetch("https://web.weblinking.fr/wp-json/wp/v2/pages/5825");
      //const page = await resp.json();
      const page = this.$pageCache.getPage(5825);
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
/* Only adding loading-specific styles without modifying existing ones */
.service-page {
  transition: opacity 0.4s ease-in;
}

.service-page.is-loading {
  opacity: 0.5;
  pointer-events: none;
}

/* === Your original styles below - completely untouched === */
.service-page {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  color: #2d3748;
  line-height: 1.6;
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Hero Section */
.hero-section {
  text-align: center;
  padding: 60px 0 40px;
}

.page-title {
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
.content-blocks {
  margin: 60px 0;
}

.content-block {
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 80px;
  background: #f7fafc;
  padding: 40px;
}

.block-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.block-image:hover {
  transform: scale(1.02);
}

.text-content {
  padding: 0 20px;
}

.block-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2b6cb0;
  margin-bottom: 15px;
}

.block-text {
  font-size: 1.1rem;
  color: #4a5568;
  line-height: 1.8;
}

/* Responsive Design */
@media (min-width: 768px) {
  .content-block {
    flex-direction: row;
    align-items: center;
  }
  
  .block-1 {
    flex-direction: row;
  }
  
  .block-2 {
    flex-direction: row-reverse;
  }
  
  .block-image {
    width: 50%;
  }
  
  .text-content {
    width: 50%;
    padding: 0 40px;
  }
}

@media (min-width: 1024px) {
  .page-title {
    font-size: 3rem;
  }
  
  .block-title {
    font-size: 1.75rem;
  }
}
</style>