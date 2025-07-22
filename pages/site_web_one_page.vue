<template>
  <Header />
  <div class="service-page" :class="{ 'is-loading': isLoading }">
    
    <main class="content-wrapper">
      <section class="hero">
        <h1 class="hero-title">
          {{ content?.titre_service || ' ' }}
          <div v-if="isLoading" class="skeleton skeleton-title"></div>
        </h1>
        <h3 class="hero-subtitle">
          {{ content?.sous_titre || ' ' }}
          <div v-if="isLoading" class="skeleton skeleton-subtitle"></div>
        </h3>
      </section>

      <section class="content-block block-1">
        <div class="text-content">
          <h6 class="block-title">
            {{ content?.block?.titre || ' ' }}
            <div v-if="isLoading" class="skeleton skeleton-subtitle"></div>
          </h6>
          <p class="block-text">
            {{ content?.block?.texte || ' ' }}
            <div v-if="isLoading" class="skeleton skeleton-text"></div>
          </p>
        </div>
        <div class="image-wrapper">
          <img
            v-if="!isLoading && content?.block?.image"
            :src="content.block.image"
            :alt="content.block.titre"
            class="block-image"
          />
          <div v-else class="skeleton skeleton-image"></div>
        </div>
      </section>

      <section class="content-block block-2">
        <div class="image-wrapper">
          <img
            v-if="!isLoading && content?.block_copier?.image"
            :src="content.block_copier.image"
            :alt="content.block_copier.titre"
            class="block-image"
          />
          <div v-else class="skeleton skeleton-image"></div>
        </div>
        <div class="text-content">
          <h6 class="block-title">
            {{ content?.block_copier?.titre || ' ' }}
            <div v-if="isLoading" class="skeleton skeleton-subtitle"></div>
          </h6>
          <p class="block-text">
            {{ content?.block_copier?.texte || ' ' }}
            <div v-if="isLoading" class="skeleton skeleton-text"></div>
          </p>
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
      isLoading: true,
    }
  },
  async mounted() {
    try {
      //const resp = await fetch("https://web.weblinking.fr/wp-json/wp/v2/pages/5815");
      //const page = await resp.json();
      const page = this.$pageCache.getPage(5815);
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
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  transition: opacity 0.4s ease-in;
  opacity: 1;
}

.service-page.is-loading {
  opacity: 0.5;
  pointer-events: none;
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
  position: relative;
}

.hero-subtitle {
  font-size: 1.25rem;
  font-weight: 400;
  color: #4a5568;
  position: relative;
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
  position: relative;
}

.block-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2b6cb0;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  position: relative;
}

.block-text {
  font-size: 1.1rem;
  color: #4a5568;
  line-height: 1.8;
  position: relative;
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

.image-wrapper {
  flex: 1;
  position: relative;
}

/* === Skeleton Styles === */
.skeleton {
  background-color: #ddd;
  border-radius: 4px;
  animation: pulse 1.5s ease-in-out infinite;
  margin-top: 5px;
}

.skeleton-title {
  width: 60%;
  height: 32px;
  margin: 10px auto 0 auto;
}

.skeleton-subtitle {
  width: 40%;
  height: 20px;
  margin: 10px 0;
}

.skeleton-text {
  width: 100%;
  height: 14px;
  margin: 6px 0;
}

.skeleton-image {
  width: 100%;
  max-width: 400px;
  height: 250px;
  border-radius: 8px;
  margin-top: 10px;
}

/* Pulse animation */
@keyframes pulse {
  0% {
    background-color: #eee;
  }
  50% {
    background-color: #ddd;
  }
  100% {
    background-color: #eee;
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .service-page {
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
