<template>
  <Header />
  <div class="service-page">
    <main v-if="content" class="content-wrapper">
      <!-- Hero Section -->
      <section class="hero">
        <h1 class="service-title">{{ content.titre_service }}</h1>
        <h5 class="service-subtitle">{{ content.sous_titre }}</h5>
      </section>

      <!-- Content Blocks -->
      <div class="blocks-container">
        <div v-for="(block,index) in blocks" :key="index" class="content-block" :class="{'image-right': index % 2 === 0, 'image-left': index % 2 !== 0}">
          <div class="block-content">
            <h5 class="block-title">{{ block.titre }}</h5>
            <p class="block-text">{{ block.texte }}</p>
          </div>
          <img :src="block.image" :alt="block.titre" class="block-image">
        </div>
      </div>
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
      blocks: [],
    }
  },
  async mounted() {
    const resp = await fetch("https://web.weblinking.fr/wp-json/wp/v2/pages/5827");
    const page = await resp.json();
    this.content = page.acf;
    for(let key in this.content) {
      if(key.startsWith("block")) {
        this.blocks.push(this.content[key]);
      }
    }
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
.hero {
  text-align: center;
  padding: 60px 0 40px;
  border-bottom: 1px solid rgba(141, 110, 99, 0.2);
  margin-bottom: 40px;
}

.service-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a365d;
  margin-bottom: 20px;
}

.service-subtitle {
  font-size: 1.1rem;
  color: var(--brown-light);
  max-width: 700px;
  margin: 0 auto;
}

/* === Content Blocks === */
.blocks-container {
  display: flex;
  flex-direction: column;
  gap: 60px;
  margin: 60px 0;
}

.content-block {
  display: flex;
  align-items: center;
  gap: 40px;
  background-color: #f7f7f7;
  padding: 40px;
}

.block-content {
  flex: 1;
}

.block-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.4rem;
  color: var(--blue-dark);
  margin-bottom: 15px;
  position: relative;
  padding-bottom: 10px;
}

.block-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 2px;
  background: var(--green-dark);
}

.block-text {
  font-size: 0.95rem;
  color: var(--text-dark);
  line-height: 1.7;
  margin-bottom: 0;
}

.block-image {
  width: 45%;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.block-image:hover {
  transform: scale(1.02);
}

/* Alternate image positions */
.image-right {
  flex-direction: row;
}

.image-left {
  flex-direction: row-reverse;
}

/* Loading State */
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
@media (max-width: 768px) {
  .service-title {
    font-size: 1.8rem;
  }
  
  .service-subtitle {
    font-size: 1rem;
  }
  
  .content-block {
    flex-direction: column;
    gap: 30px;
  }
  
  .block-image {
    width: 100%;
    order: -1;
  }
  
  .block-content {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 40px 0 30px;
  }
  
  .blocks-container {
    gap: 40px;
  }
}
</style>