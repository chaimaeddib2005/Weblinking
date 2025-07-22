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

    <main v-else class="content-placeholder">
      <!-- Hero Placeholder -->
      <section class="hero">
        <h1 class="hero-title"></h1>
        <h3 class="hero-subtitle"></h3>
      </section>

      <!-- Content Block 1 Placeholder -->
      <section class="content-block block-1">
        <div class="text-content">
          <h6 class="block-title"></h6>
          <p class="block-text"></p>
        </div>
        <div class="block-image-placeholder"></div>
      </section>

      <!-- Content Block 2 Placeholder -->
      <section class="content-block block-2">
        <div class="block-image-placeholder"></div>
        <div class="text-content">
          <h6 class="block-title"></h6>
          <p class="block-text"></p>
        </div>
      </section>
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
    //const resp = await fetch("https://web.weblinking.fr/wp-json/wp/v2/pages/5817");
    //const page = await resp.json();
    const page =  this.$pageCache.getPage(5817);
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

.content-wrapper, .content-placeholder {
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
  background-color: #f7fafc;
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

/* Placeholder Styles */
.content-placeholder .hero-title,
.content-placeholder .hero-subtitle,
.content-placeholder .block-title,
.content-placeholder .block-text {
  background-color: #f3f3f3;
  color: transparent;
  position: relative;
  overflow: hidden;
}

.content-placeholder .hero-title {
  height: 2.8rem;
  width: 60%;
  margin: 0 auto 1rem;
}

.content-placeholder .hero-subtitle {
  height: 1.4rem;
  width: 50%;
  margin: 0 auto;
}

.content-placeholder .block-title {
  height: 1.4rem;
  width: 50%;
  margin-bottom: 1.5rem;
}

.content-placeholder .block-text {
  height: 5rem;
}

.content-placeholder .block-image-placeholder {
  flex: 1;
  height: 300px;
  max-width: 50%;
  background-color: #f3f3f3;
  border-radius: 8px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

/* Animation */
@keyframes placeholderShimmer {
  0% { background-position: -468px 0 }
  100% { background-position: 468px 0 }
}

.content-placeholder .hero-title,
.content-placeholder .hero-subtitle,
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

/* Responsive Design */
@media (max-width: 768px) {
  .content-wrapper, .content-placeholder {
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

  .block-image, .content-placeholder .block-image-placeholder {
    max-width: 100%;
    margin-top: 1.5rem;
  }

  /* Adjust placeholder sizes for mobile */
  .content-placeholder .hero-title {
    height: 2.2rem;
    width: 80%;
  }

  .content-placeholder .hero-subtitle {
    height: 1.2rem;
    width: 70%;
  }

  .content-placeholder .block-image-placeholder {
    height: 200px;
  }

  .content-placeholder .block-text {
    height: 3.5rem;
  }
}
</style>