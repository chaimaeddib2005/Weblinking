<template>
  <Header />
  <div class="service-page" :class="{ 'is-loading': isLoading }">
    <div class="service-header">
      <h2 class="service-title">{{ content?.titre_service || ' ' }}</h2>
      <h4 class="service-subtitle">{{ content?.sous_titre || ' ' }}</h4>
    </div>

    <div class="content-blocks">
      <div class="content-block para1">
        <div class="text-content">
          <h6 class="block-title">{{ content?.block?.titre || ' ' }}</h6>
          <p class="block-text">{{ content?.block?.texte || ' ' }}</p>
        </div>
        <img
          v-if="content?.block?.image"
          :src="content.block.image"
          :alt="content.block.titre"
          class="block-image"
        />
      </div>

      <div class="content-block para2">
        <img
          v-if="content?.block_copier?.image"
          :src="content.block_copier.image"
          :alt="content.block_copier.titre"
          class="block-image"
        />
        <div class="text-content">
          <h6 class="block-title">{{ content?.block_copier?.titre || ' ' }}</h6>
          <p class="block-text">{{ content?.block_copier?.texte || ' ' }}</p>
        </div>
      </div>
    </div>
  </div>
  <Feedback />
  <Footer />
</template>

<script>
export default {
  data() {
    return {
      content: null,
      isLoading: true,
    }
  },
  async mounted() {
    try {
      //const resp = await fetch("https://web.weblinking.fr/wp-json/wp/v2/pages/5789");
      //const page = await resp.json();
      const page = this.$pageCache.getPage(5789);
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
/* Fade-in on content load */
.service-page {
  opacity: 1;
  transition: opacity 0.4s ease-in;
}

.service-page.is-loading {
  opacity: 0.3;
  pointer-events: none;
}

/* Base Styles */
.service-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
}

/* Header Section */
.service-header {
  text-align: center;
  margin-bottom: 60px;
}

.service-title {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 15px;
  font-weight: 700;
}

.service-subtitle {
  font-size: 1.3rem;
  color: #7f8c8d;
  font-weight: 400;
  margin: 0;
}

/* Content Blocks */
.content-blocks {
  display: flex;
  flex-direction: column;
  gap: 80px;
}

.content-block {
  display: flex;
  align-items: center;
  gap: 50px;
  background-color: #f3f3f3;
  padding: 40px;
  border-radius: 10px;
}

.text-content {
  flex: 1;
}

.block-title {
  font-size: 1.5rem;
  color: #3498db;
  margin-bottom: 20px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.block-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 0;
}

.block-image {
  flex: 1;
  max-width: 50%;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.block-image:hover {
  transform: scale(1.02);
}

/* Alternate layout for even blocks */
.para2 {
  flex-direction: row-reverse;
}

/* Responsive Design */
@media (max-width: 992px) {
  .content-block {
    gap: 30px;
  }
}

@media (max-width: 768px) {
  .service-title {
    font-size: 2rem;
  }

  .service-subtitle {
    font-size: 1.1rem;
  }

  .content-block {
    flex-direction: column;
  }

  .para2 {
    flex-direction: column;
  }

  .block-image {
    max-width: 100%;
    margin-top: 30px;
  }

  .block-title {
    font-size: 1.3rem;
  }
}

@media (max-width: 480px) {
  .service-header {
    margin-bottom: 40px;
  }

  .service-title {
    font-size: 1.8rem;
  }

  .content-blocks {
    gap: 50px;
  }

  .block-text {
    font-size: 1rem;
  }
}
</style>
