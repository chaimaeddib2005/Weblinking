<template>
  <Header />
  <div class="service-page">
    <main v-if="content" class="content-wrapper">
      <!-- Hero Section -->
      <section class="hero-section">
        <h1 class="service-title">{{ content.titre_service }}</h1>
        <div class="top-para">
          <p class="top-para-text">{{ content.top_paragraph.content }}</p>
        </div>
      </section>

      <!-- Content Block -->
      <section class="content-block">
        <div class="text-content">
          <h6 class="block-title">{{ content.block.titre }}</h6>
          <p class="block-text">{{ content.block.texte }}</p>
        </div>
        <img :src="content.block.image" alt="Image Block 1" class="block-image">
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
    }
  },
  async mounted() {
    const resp = await fetch("https://web.weblinking.fr/wp-json/wp/v2/pages/5829");
    const page = await resp.json();
    this.content = page.acf;
  }
}
</script>

<style scoped>
/* === Color Palette === */
:root {
  --brown-dark: #5D4037;
  --brown-light: #8D6E63;
  --blue-dark: #1565C0;
  --blue-light: #42A5F5;
  --green-dark: #2E7D32;
  --green-light: #66BB6A;
  --text-dark: #333333;
  --text-light: #666666;
  --bg-light: #F9F9F9;
}

/* === Base Styles === */
.service-page {
  font-family: 'Raleway', sans-serif;
  color: var(--text-dark);
  line-height: 1.6;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
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
}

.top-para-text {
  font-size: 0.95rem;
  color: var(--text-light);
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
  color: var(--blue-dark);
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.block-text {
  font-size: 0.95rem;
  color: var(--text-dark);
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

/* === Loading State === */
.loading-screen {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  color: var(--text-light);
}

.loader {
  border: 4px solid #f3f3f3;
  border-top: 4px solid var(--blue-dark);
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

/* === Responsive Design === */
@media (min-width: 768px) {
  .content-block {
    flex-direction: row;
    align-items: flex-start; /* Changed from center to flex-start */
    gap: 40px;
  }
  
  .text-content {
    flex: 1;
    order: 1;
    padding-right: 30px;
  }
  
  .block-image {
    flex: 1;
    order: 2;
    max-width: 50%;
  }
  
  .service-title {
    font-size: 2.2rem;
  }

  .block-text {
    font-size: 0.9rem; /* Slightly smaller for desktop */
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