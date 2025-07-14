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

    <main v-else class="loading-screen">
      <div class="loader"></div>
      <p>Chargement du contenu...</p>
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
    const resp = await fetch("https://web.weblinking.fr/wp-json/wp/v2/pages/5833");
    const page = await resp.json();
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
/* Base Styles */
.main-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem 3rem;
  color: #333;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
}

/* Hero Section */
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

/* Centered Sections */
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

/* Content Blocks */
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

/* Modals Section */
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

/* Loading State (preserved) */
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
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Responsive Adjustments */
@media (max-width: 992px) {
  .content-block {
    gap: 2rem;
  }
  
  .modal {
    min-width: 180px;
  }
}

@media (max-width: 768px) {
  .main-title {
    font-size: 2.2rem;
  }
  
  .content-block {
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .block-image {
    max-width: 100%;
    order: -1;
  }
  
  .para2 .block-image {
    order: -1;
  }
  
  .section-title {
    font-size: 1.6rem;
  }
  
  .modal {
    min-width: 160px;
    padding: 1.5rem 1rem;
  }
}

@media (max-width: 576px) {
  .main-content {
    padding: 0 1rem 2rem;
  }
  
  .main-title {
    font-size: 1.8rem;
  }
  
  .centered-section {
    padding: 0;
  }
  
  .modals {
    gap: 1rem;
  }
  
  .modal {
    min-width: 100%;
    max-width: 100%;
  }
}
</style>