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

    <main v-else class="content-placeholder">
      <!-- Hero Placeholder -->
      <section class="hero">
        <h1 class="service-title"></h1>
        <h5 class="service-subtitle"></h5>
      </section>

      <!-- Content Blocks Placeholder -->
      <div class="blocks-container">
        <div v-for="i in 3" :key="i" class="content-block" :class="{'image-right': i % 2 === 0, 'image-left': i % 2 !== 0}">
          <div class="block-content">
            <h5 class="block-title"></h5>
            <p class="block-text"></p>
          </div>
          <div class="block-image-placeholder"></div>
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

/* === Placeholder Styles === */
.content-placeholder .service-title,
.content-placeholder .service-subtitle,
.content-placeholder .block-title,
.content-placeholder .block-text {
  background-color: #f3f3f3;
  color: transparent;
  position: relative;
  overflow: hidden;
}

.content-placeholder .service-title {
  height: 2.8rem;
  width: 60%;
  margin: 0 auto 20px;
}

.content-placeholder .service-subtitle {
  height: 1.2rem;
  width: 70%;
  margin: 0 auto;
}

.content-placeholder .block-title {
  height: 1.6rem;
  width: 50%;
  margin-bottom: 15px;
}

.content-placeholder .block-title::after {
  display: none;
}

.content-placeholder .block-text {
  height: 4.5rem;
}

.content-placeholder .block-image-placeholder {
  width: 45%;
  height: 250px;
  background-color: #f3f3f3;
  border-radius: 8px;
}

/* Animation */
@keyframes placeholderShimmer {
  0% { background-position: -468px 0 }
  100% { background-position: 468px 0 }
}

.content-placeholder .service-title,
.content-placeholder .service-subtitle,
.content-placeholder .block-title,
.content-placeholder .block-text,
.content-placeholder .block-image-placeholder {
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeholderShimmer;
  animation-timing-function: linear;
  background: linear-gradient(to right, #f3f3f3 8%, #ececec 18%, #f3f3f3 33%);
  background-size: 800px 104px;
  position: relative;
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
  
  .block-image,
  .content-placeholder .block-image-placeholder {
    width: 100%;
    order: -1;
  }
  
  .content-placeholder .block-image-placeholder {
    height: 200px;
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
  
  .content-placeholder .service-title {
    height: 2.2rem;
    width: 80%;
  }
  
  .content-placeholder .service-subtitle {
    height: 1rem;
    width: 90%;
  }
  
  .content-placeholder .block-text {
    height: 3.5rem;
  }
}
</style>