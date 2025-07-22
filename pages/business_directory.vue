<template>
  <div>
    <Header />

    <main v-if="content" class="main-content">
      <div class="hero-section">
        <h1 class="main-title">{{ content.titre_service }}</h1>
      </div>

      <div class="top_para centered-section">
        <h3 class="section-title">{{ content.top_paragraph.title }}</h3>
        <p class="section-text">{{ content.top_paragraph.content }}</p>
      </div>

      <div class="content-block para1">
        <div class="block-text">
          <h6 class="block-title">{{ content.block.titre }}</h6>
          <p class="block-content">{{ content.block.texte }}</p>
        </div>
        <img class="block-image" :src="content.block.image" />
      </div>

      <div class="content-block para2">
        <img class="block-image" :src="content.block_copier.image" />
        <div class="block-text">
          <h6 class="block-title">{{ content.block_copier.titre }}</h6>
          <p class="block-content">{{ content.block_copier.texte }}</p>
        </div>
      </div>

      <div class="middle_para centered-section">
        <h5 class="section-title">{{ content.middle_paragraph.title }}</h5>
        <p class="section-text">{{ content.middle_paragraph.content }}</p>
      </div>

      <div class="modals-container">
        <div class="modals">
          <div class="modal" v-for="(modal, index) in modals" :key="index">
            <img class="modal-icon" :src="modal.icon" />
            <p class="modal-text">{{ modal.description }}</p>
          </div>
        </div>
      </div>
    </main>

    <main v-else class="content-placeholder">
      <!-- Hero Placeholder -->
      <div class="hero-section">
        <h1 class="main-title"></h1>
      </div>

      <!-- Top Paragraph Placeholder -->
      <div class="top_para centered-section">
        <h3 class="section-title"></h3>
        <p class="section-text"></p>
      </div>

      <!-- Content Block 1 Placeholder -->
      <div class="content-block para1">
        <div class="block-text">
          <h6 class="block-title"></h6>
          <p class="block-content"></p>
        </div>
        <div class="block-image-placeholder"></div>
      </div>

      <!-- Content Block 2 Placeholder -->
      <div class="content-block para2">
        <div class="block-image-placeholder"></div>
        <div class="block-text">
          <h6 class="block-title"></h6>
          <p class="block-content"></p>
        </div>
      </div>

      <!-- Middle Paragraph Placeholder -->
      <div class="middle_para centered-section">
        <h5 class="section-title"></h5>
        <p class="section-text"></p>
      </div>

      <!-- Modals Placeholder -->
      <div class="modals-container">
        <div class="modals">
          <div class="modal" v-for="i in 3" :key="i">
            <div class="modal-icon-placeholder"></div>
            <p class="modal-text"></p>
          </div>
        </div>
      </div>
    </main>

    <Feedback />
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: null,
      modals: [],
    };
  },
  async mounted() {
    //const resp = await fetch("https://web.weblinking.fr/wp-json/wp/v2/pages/5833");
    //const page = await resp.json();
    const page =  this.$pageCache.getPage(5833);
    this.content = page.acf;

    for (let key in this.content) {
      if (key.startsWith("modal")) {
        if (this.content[key].description) {
          this.modals.push(this.content[key]);
        }
      }
    }
  },
};
</script>

<style scoped>
/* Original styles remain unchanged */
.main-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem 3rem;
  color: #333;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
}

.hero-section {
  text-align: center;
  padding: 3rem 0;
}

.main-title {
  font-size: 2.8rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
}

.main-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #4299e1, #38b2ac);
  border-radius: 2px;
}

.centered-section {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem;
  padding: 0 1rem;
}

.section-title {
  font-size: 1.8rem;
  font-weight: 600;
  color: #4299e1;
  margin-bottom: 1.5rem;
}

.section-text {
  font-size: 1.1rem;
  color: #4a5568;
  line-height: 1.7;
}

.content-block {
  display: flex;
  align-items: center;
  gap: 3rem;
  margin-bottom: 4rem;
  border-bottom: #2d3748 1px solid;
}

.block-text {
  flex: 1;
}

.block-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.block-content {
  font-size: 1.1rem;
  color: #4a5568;
  line-height: 1.7;
}

.block-image {
  flex: 1;
  max-width: 50%;
  border-radius: 12px;
  transition: transform 0.3s ease;
}

.block-image:hover {
  transform: translateY(-5px);
}

.modals-container {
  background-color: #f8fafc;
  padding: 3rem 0;
  margin-top: 3rem;
  border-radius: 12px;
}

.modals {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.modal {
  flex: 1;
  min-width: 220px;
  max-width: 280px;
  text-align: center;
  padding: 2rem 1.5rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.modal:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.modal-icon {
  max-width: 70px;
  height: auto;
  margin-bottom: 1.5rem;
}

.modal-text {
  font-size: 1rem;
  color: #4a5568;
  line-height: 1.6;
}

/* Placeholder Styles */
.content-placeholder .main-title,
.content-placeholder .section-title,
.content-placeholder .section-text,
.content-placeholder .block-title,
.content-placeholder .block-content,
.content-placeholder .modal-text {
  background-color: #f3f3f3;
  color: transparent;
  position: relative;
  overflow: hidden;
}

.content-placeholder .main-title {
  height: 2.8rem;
  width: 60%;
  margin: 0 auto 1rem;
}

.content-placeholder .main-title::after {
  display: none;
}

.content-placeholder .section-title {
  height: 1.8rem;
  width: 50%;
  margin: 0 auto 1.5rem;
}

.content-placeholder .section-text {
  height: 1.1rem;
  width: 80%;
  margin: 0 auto;
}

.content-placeholder .block-title {
  height: 1.5rem;
  width: 60%;
  margin-bottom: 1rem;
}

.content-placeholder .block-content {
  height: 4rem;
}

.content-placeholder .block-image-placeholder {
  flex: 1;
  height: 250px;
  max-width: 50%;
  background-color: #f3f3f3;
  border-radius: 12px;
}

.content-placeholder .modal-icon-placeholder {
  width: 70px;
  height: 70px;
  background-color: #f3f3f3;
  border-radius: 50%;
  margin: 0 auto 1.5rem;
}

.content-placeholder .modal-text {
  height: 1rem;
  width: 90%;
  margin: 0 auto;
}

/* Animation */
@keyframes placeholderShimmer {
  0% { background-position: -468px 0 }
  100% { background-position: 468px 0 }
}

.content-placeholder .main-title,
.content-placeholder .section-title,
.content-placeholder .section-text,
.content-placeholder .block-title,
.content-placeholder .block-content,
.content-placeholder .modal-text,
.content-placeholder .block-image-placeholder,
.content-placeholder .modal-icon-placeholder {
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeholderShimmer;
  animation-timing-function: linear;
  background: linear-gradient(to right, #f3f3f3 8%, #ececec 18%, #f3f3f3 33%);
  background-size: 800px 104px;
  position: relative;
}

/* Responsive Adjustments for Placeholders */
@media (max-width: 768px) {
  .content-placeholder .main-title {
    height: 2.2rem;
    width: 80%;
  }
  
  .content-placeholder .section-title {
    height: 1.6rem;
  }
  
  .content-placeholder .block-image-placeholder {
    max-width: 100%;
    order: -1;
    height: 200px;
  }
  
  .content-placeholder .block-content {
    height: 3rem;
  }
}

@media (max-width: 576px) {
  .content-placeholder .main-title {
    height: 1.8rem;
    width: 90%;
  }
  
  .content-placeholder .section-text {
    width: 100%;
  }
  
  .content-placeholder .block-title {
    width: 80%;
  }
}
</style>