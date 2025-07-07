<template>
  <div class="service-page">
    <Header />
    <main v-if="content" class="content-wrapper">
      <!-- Hero Section -->
      <section class="hero-section">
        <h1 class="page-title">{{ content.titre_service }}</h1>
        <div class="top-para">
          <p class="top-para-text">{{ content.top_paragraph.content }}</p>
        </div>
      </section>

      <!-- Content Blocks -->
      <section class="content-blocks">
        <div class="content-block block-1">
          <img :src="content.block.image" alt="Content Image" class="block-image">
          <div class="text-content">
            <h3 class="block-title">{{ content.block.titre }}</h3>
            <p class="block-text">{{ content.block.texte }}</p>
          </div>
        </div>

        <div class="content-block block-2">
          <div class="text-content">
            <h3 class="block-title">{{ content.block_copier.titre }}</h3>
            <p class="block-text">{{ content.block_copier.texte }}</p>
          </div>
          <img :src="content.block_copier.image" alt="Content Image" class="block-image">
        </div>
      </section>
    </main>

    <main v-else class="loading-screen">
      <div class="loader"></div>
      <p>Chargement du contenu...</p>
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
    }
  },
  async mounted() {
    const resp = await fetch("https://web.weblinking.fr/wp-json/wp/v2/pages/5825");
    const page = await resp.json();
    this.content = page.acf;
  }
}
</script>

<style scoped>
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
}

.block-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
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

/* Loading State (preserved exactly as provided) */
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