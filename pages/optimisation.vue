<template>
  <Header />
  <div class="service-container">
    
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
          <img :src="content.block_copier2.image" alt="Image Block 2" class="block-image">
          <div class="text-content">
            <h2 class="block-title">{{ content.block_copier.titre }}</h2>
            <p class="block-text">{{ content.block_copier.texte }}</p>
          </div>
        </div>

        <div class="content-block block-3">
          <img :src="content.block_copier.image" alt="Image Block 3" class="block-image">
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

    <main v-else class="main-content placeholder-content">
      <!-- Hero Placeholder -->
      <section class="hero">
        <h1 class="hero-title"></h1>
        <div class="top-para">
          <p class="top-para-text"></p>
        </div>
      </section>

      <!-- Content Blocks Placeholder -->
      <section class="content-blocks">
        <div class="content-block block-1">
          <div class="text-content">
            <h2 class="block-title"></h2>
            <p class="block-text"></p>
          </div>
          <div class="block-image-placeholder"></div>
        </div>

        <div class="content-block block-2">
          <div class="block-image-placeholder"></div>
          <div class="text-content">
            <h2 class="block-title"></h2>
            <p class="block-text"></p>
          </div>
        </div>

        <div class="content-block block-3">
          <div class="block-image-placeholder"></div>
          <div class="text-content">
            <h2 class="block-title"></h2>
            <p class="block-text"></p>
          </div>
        </div>

        <div class="content-block block-4">
          <div class="text-content">
            <h2 class="block-title"></h2>
            <p class="block-text"></p>
          </div>
          <div class="block-image-placeholder"></div>
        </div>
      </section>

      <!-- Bottom Paragraph Placeholder -->
      <section class="bottom-para">
        <p class="bottom-para-text"></p>
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
  padding: 20px;
  border-radius: 8px;
}

.block-1, .block-4 {
  flex-direction: row;
}

.block-3, .block-2 {
  flex-direction: row-reverse;
}

.block-2, .block-4 {
  background-color: #f7fafc;
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
  object-fit: cover;
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

/* Placeholder Styles */
.placeholder-content .hero-title,
.placeholder-content .top-para-text,
.placeholder-content .block-title,
.placeholder-content .block-text,
.placeholder-content .bottom-para-text {
  background-color: #f3f3f3;
  color: transparent;
  position: relative;
  overflow: hidden;
}

.placeholder-content .hero-title {
  height: 3rem;
  width: 50%;
  margin: 0 auto 20px;
}

.placeholder-content .top-para-text {
  height: 4rem;
  max-width: 800px;
  margin: 0 auto;
}

.placeholder-content .block-title {
  height: 2rem;
  width: 70%;
  margin-bottom: 20px;
}

.placeholder-content .block-text {
  height: 5rem;
}

.placeholder-content .bottom-para-text {
  height: 4rem;
  max-width: 800px;
  margin: 0 auto;
}

.placeholder-content .block-image-placeholder {
  flex: 1;
  max-width: 50%;
  height: 300px;
  background-color: #f3f3f3;
  border-radius: 8px;
}

/* Animation */
@keyframes placeholderShimmer {
  0% { background-position: -468px 0 }
  100% { background-position: 468px 0 }
}

.placeholder-content .hero-title,
.placeholder-content .top-para-text,
.placeholder-content .block-title,
.placeholder-content .block-text,
.placeholder-content .bottom-para-text,
.placeholder-content .block-image-placeholder {
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
  .content-block {
    flex-direction: column;
    gap: 30px;
    margin-bottom: 60px;
  }

  .block-1, .block-2, .block-3, .block-4 {
    flex-direction: column;
  }

  .block-image,
  .placeholder-content .block-image-placeholder {
    max-width: 100%;
    order: -1;
  }

  .hero-title {
    font-size: 2rem;
  }

  .placeholder-content .hero-title {
    height: 2.4rem;
    width: 70%;
  }

  .block-title {
    font-size: 1.5rem;
  }

  .placeholder-content .block-title {
    height: 1.6rem;
  }

  .placeholder-content .block-text {
    height: 4rem;
  }

  .placeholder-content .block-image-placeholder {
    height: 200px;
  }
}
</style>