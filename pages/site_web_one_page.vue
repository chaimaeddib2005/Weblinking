<template>
  <div class="service-page">
    <Header />
    <main v-if="content" class="content-wrapper">
      <section class="hero">
        <h1 class="hero-title">{{ content.titre_service }}</h1>
        <h3 class="hero-subtitle">{{ content.sous_titre }}</h3>
      </section>

      <section class="content-block block-1">
        <div class="text-content">
          <h6 class="block-title">{{ content.block.titre }}</h6>
          <p class="block-text">{{ content.block.texte }}</p>
        </div>
        <img :src="content.block.image" :alt="content.block.titre" class="block-image">
      </section>

      <section class="content-block block-2">
        <img :src="content.block_copier.image" :alt="content.block_copier.titre" class="block-image">
        <div class="text-content">
          <h6 class="block-title">{{ content.block_copier.titre }}</h6>
          <p class="block-text">{{ content.block_copier.texte }}</p>
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
    const resp = await fetch("https://web.weblinking.fr/wp-json/wp/v2/pages/5815");
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
  padding: 0 2rem;
}

/* Hero Section */
.hero {
  text-align: center;
  padding: 4rem 0 3rem;
  margin-bottom: 3rem;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a365d;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.25rem;
  font-weight: 400;
  color: #4a5568;
}

/* Content Blocks */
.content-block {
  display: flex;
  align-items: center;
  gap: 4rem;
  margin: 5rem 0;
  padding: 2rem;
  border-radius: 12px;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.block-1 {
  flex-direction: row;
}

.block-2 {
  flex-direction: row-reverse;
}

.text-content {
  flex: 1;
  min-width: 40%;
}

.block-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2b6cb0;
  margin-bottom: 1.5rem;
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
  height: auto;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.block-image:hover {
  transform: scale(1.02);
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
  .content-wrapper {
    padding: 0 1.5rem;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .content-block {
    flex-direction: column;
    gap: 2rem;
    padding: 1.5rem;
    margin: 3rem 0;
  }

  .block-1, .block-2 {
    flex-direction: column;
  }

  .text-content {
    min-width: 100%;
  }

  .block-image {
    max-width: 100%;
    margin-top: 1.5rem;
  }
}
</style>