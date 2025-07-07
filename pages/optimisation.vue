<template>
  <div class="service-container">
    <Header />
    <main v-if="content" class="main-content">
      <!-- Hero Section -->
      <section class="hero">
        <h1 class="hero-title">{{ content.titre_service }}</h1>
        <div class="top-para">
          <p class="top-para-text">{{ content.top_paragraph.content }}</p>
        </div>
      </section>

      <!-- Content Blocks -->
      <section class="content-blocks">
        <div class="content-block block-1">
          <div class="text-content">
            <h2 class="block-title">{{ content.block.titre }}</h2>
            <p class="block-text">{{ content.block.texte }}</p>
          </div>
          <img :src="content.block.image" alt="Image Block 1" class="block-image">
        </div>

        <div class="content-block block-2">
          <img :src="content.block_copier.image" alt="Image Block 2" class="block-image">
          <div class="text-content">
            <h2 class="block-title">{{ content.block_copier.titre }}</h2>
            <p class="block-text">{{ content.block_copier.texte }}</p>
          </div>
        </div>

        <div class="content-block block-3">
          <img :src="content.block_copier2.image" alt="Image Block 3" class="block-image">
          <div class="text-content">
            <h2 class="block-title">{{ content.block_copier2.titre }}</h2>
            <p class="block-text">{{ content.block_copier2.texte }}</p>
          </div>
        </div>

        <div class="content-block block-4">
          <div class="text-content">
            <h2 class="block-title">{{ content.block_copier3.titre }}</h2>
            <p class="block-text">{{ content.block_copier3.texte }}</p>
          </div>
          <img :src="content.block_copier3.image" alt="Image Block 4" class="block-image">
        </div>
      </section>

      <!-- Bottom Paragraph -->
      <section class="bottom-para">
        <p class="bottom-para-text">{{ content.buttom_paragraph.content }}</p>
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
    const resp = await fetch("https://web.weblinking.fr/wp-json/wp/v2/pages/5823");
    const page = await resp.json();
    this.content = page.acf;
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
.content-blocks {
  margin: 60px 0;
}

.content-block {
  display: flex;
  align-items: center;
  gap: 60px;
  margin-bottom: 80px;
}

.block-1, .block-4 {
  flex-direction: row;
}

.block-2, .block-3 {
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
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.block-image:hover {
  transform: scale(1.02);
}

/* Bottom Paragraph */
.bottom-para {
  text-align: center;
  margin: 60px auto;
  max-width: 800px;
}

.bottom-para-text {
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
@media (max-width: 768px) {
  .content-block {
    flex-direction: column;
    gap: 30px;
    margin-bottom: 60px;
  }

  .block-1, .block-2, .block-3, .block-4 {
    flex-direction: column;
  }

  .block-image {
    max-width: 100%;
    order: -1;
  }

  .hero-title {
    font-size: 2rem;
  }

  .block-title {
    font-size: 1.5rem;
  }
}
</style>