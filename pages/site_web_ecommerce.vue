<template>
  <div class="service-page">
    <Header />
    <div v-if="content" class="content-container">
      <div class="hero-section">
        <h1 class="service-title">{{ content.titre_service }}</h1>
        <h3 class="service-subtitle">{{content.sous_titre}}</h3>
      </div>

      <div class="top-section">
        <h2 class="section-title">{{ content.top_paragraph.title }}</h2>
      </div>

      <div class="content-block block-1">
        <div class="text-content">
          <h2 class="block-title">{{ content.block.titre }}</h2>
          <p class="block-text">{{ content.block.texte }}</p>
        </div>
        <img :src="content.block.image" class="block-image" />
      </div>

      <div class="content-block block-2">
        <img :src="content.block_copier.image" class="block-image" />
        <div class="text-content">
          <h2 class="block-title">{{ content.block_copier.titre }}</h2>
          <p class="block-text">{{ content.block_copier.texte }}</p>
        </div>
      </div>

      <div class="middle-section">
        <h6 class="middle-text">{{ content.middle_paragraph.content }}</h6>
      </div>

      <div class="modals-row">
        <div v-for="(modal,index) in modals" :key="index" class="modal-card">
          <img :src="modal.icon" class="modal-icon">
          <p class="modal-description">{{ modal.description }}</p>
        </div>
      </div>
    </div>

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
      modals: [],
    }
  },
  async mounted() {
    const resp = await fetch("https://web.weblinking.fr/wp-json/wp/v2/pages/5811");
    const page = await resp.json();
    this.content = page.acf;
    for(let key in this.content) {
      if(key.startsWith("modal")) {
        if(this.content[key].description) {
          this.modals.push(this.content[key]);
        }
      }
    }
  }
}
</script>

<style scoped>
.service-page {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  line-height: 1.6;
}

.content-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Hero Section */
.hero-section {
  text-align: center;
  padding: 60px 0 40px;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%);
  margin-bottom: 40px;
  border-radius: 8px;
}

.service-title {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 15px;
  font-weight: 700;
}

.service-subtitle {
  font-size: 1.5rem;
  color: #7f8c8d;
  font-weight: 400;
}

/* Sections */
.section-title {
  font-size: 2rem;
  color: #2c3e50;
  margin: 40px 0 20px;
  text-align: center;
}

/* Content Blocks */
.content-block {
  display: flex;
  align-items: center;
  gap: 40px;
  margin: 60px 0;
  padding: 30px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
}

.block-1 {
  flex-direction: row;
}

.block-2 {
  flex-direction: row-reverse;
}

.text-content {
  flex: 1;
}

.block-title {
  font-size: 1.8rem;
  color: #3498db;
  margin-bottom: 20px;
}

.block-text {
  font-size: 1.1rem;
  color: #555;
  line-height: 1.8;
}

.block-image {
  flex: 1;
  max-width: 50%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: 0 3px 10px rgba(0,0,0,0.1);
}

/* Middle Section */
.middle-section {
  text-align: center;
  margin: 50px 0;
  padding: 30px;
  background-color: #f8f9fa;
  border-radius: 8px;
}

.middle-text {
  font-size: 1.2rem;
  color: #555;
  max-width: 800px;
  margin: 0 auto;
}

/* Modals Row - Updated to keep all modals in one row */
.modals-row {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin: 60px 0;
  overflow-x: auto;
  padding-bottom: 20px;
}

.modal-card {
  flex: 1;
  min-width: 250px;
  background: white;
  padding: 30px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.modal-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}

.modal-icon {
  width: 60px;
  height: 60px;
  margin-bottom: 20px;
  object-fit: contain;
}

.modal-description {
  font-size: 1rem;
  color: #555;
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
@media (max-width: 1024px) {
  .modals-row {
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .modal-card {
    min-width: calc(50% - 20px);
  }
}

@media (max-width: 768px) {
  .content-block {
    flex-direction: column;
    padding: 20px;
  }
  
  .block-1, .block-2 {
    flex-direction: column;
  }
  
  .block-image {
    max-width: 100%;
    margin-top: 20px;
  }
  
  .service-title {
    font-size: 2rem;
  }
  
  .service-subtitle {
    font-size: 1.2rem;
  }
  
  .modal-card {
    min-width: 100%;
  }
}
</style>