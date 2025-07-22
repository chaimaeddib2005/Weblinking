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
      <section class="content-block block-1">
        <div class="text-content">
          <h2 class="block-title">{{ content?.block?.titre || ' ' }}</h2>
          <p class="block-text">{{ content?.block?.texte || ' ' }}</p>
        </div>
        <img 
          v-if="content?.block?.image"
          :src="content.block.image" 
          alt="Content Image" 
          class="block-image"
        >
      </section>

      <section class="content-block block-2">
        <img 
          v-if="content?.block_copier?.image"
          :src="content.block_copier.image" 
          alt="Content Image" 
          class="block-image"
        >
        <div class="text-content">
          <h2 class="block-title">{{ content?.block_copier?.titre || ' ' }}</h2>
          <p class="block-text">{{ content?.block_copier?.texte || ' ' }}</p>
        </div>
      </section>

      <section class="content-block block-3">
        <div class="text-content">
          <h2 class="block-title">{{ content?.block_copier2?.titre || ' ' }}</h2>
          <p class="block-text">{{ content?.block_copier2?.texte || ' ' }}</p>
        </div>
        <img 
          v-if="content?.block_copier2?.image"
          :src="content.block_copier2.image" 
          alt="Content Image" 
          class="block-image"
        >
      </section>

      <section class="content-block block-4">
        <img 
          v-if="content?.block_copier3?.image"
          :src="content.block_copier3.image" 
          alt="Content Image" 
          class="block-image"
        >
        <div class="text-content">
          <h2 class="block-title">{{ content?.block_copier3?.titre || ' ' }}</h2>
          <p class="block-text">{{ content?.block_copier3?.texte || ' ' }}</p>
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
      //const resp = await fetch("https://web.weblinking.fr/wp-json/wp/v2/pages/5821");
      //const page = await resp.json();
      const page = this.$pageCache.getPage(5821);
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
.service-page {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  color: #2d3748;
  line-height: 1.6;
  transition: opacity 0.4s ease-in;
}

.service-page.is-loading {
  opacity: 0.5;
  pointer-events: none;
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
.content-block {
  display: flex;
  align-items: center;
  gap: 60px;
  margin: 80px 0;
  padding: 30px;
  border-radius: 12px;
  background-color: #f3f3f3;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.block-1, .block-3 {
  flex-direction: row;
}

.block-2, .block-4 {
  flex-direction: row-reverse;
}

.text-content {
  flex: 1;
}

.block-title {
  font-size: 1.75rem;
  font-weight: 600;
  color: #2b6cb0;
  margin-bottom: 20px;
}

.block-text {
  font-size: 1.1rem;
  color: #4a5568;
  line-height: 1.8;
}

.block-image {
  flex: 1;
  max-width: 50%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.block-image:hover {
  transform: scale(1.02);
}

/* Responsive Design */
@media (max-width: 768px) {
  .content-block {
    flex-direction: column;
    gap: 30px;
    padding: 20px;
    margin: 50px 0;
  }

  .block-1, .block-2, .block-3, .block-4 {
    flex-direction: column;
  }

  .block-image {
    max-width: 100%;
    order: -1;
  }

  .page-title {
    font-size: 2rem;
  }

  .block-title {
    font-size: 1.5rem;
  }
}
</style>