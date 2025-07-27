<template>
  <Header />
  <div v-if="content" class="container">
    <!-- Hero Section -->
    <div class="hero-section">
      <div class="hero-text">
        <p class="description">{{ content.description }}</p>
        <h1>{{ content.titre }}</h1>
        <p class="subtitle">{{ content.titre_copier }}</p>
        <a 
          class="fixed-contact-button whatsapp-button"
          style="width:fit-content"
          :href="`tel:${phone_number}`"
          aria-label="Appelez-nous"
        >
          Tél: +{{ phone_number  }}
        </a>
      </div>
      <div class="hero-image">
        <img :src="content.top_image" alt="Hero Image">
      </div>
    </div>

    <!-- Centered Titles -->
    <div class="centered-titles">
      <p class="small-title">{{ content.titre_copier2 }}</p>
      <h2 class="big-title">{{ content.titre_copier3 }}</h2>
    </div>

    <!-- Services Section -->
    <div class="services-container">
      <div class="services">
        <div v-for="(service, index) in services" :key="index" class="service" @click="navigateTo(index)">
          <img :src="service.service_icon" :alt="service.lien">
          <h3>{{ service.lien }}</h3>
          <p>{{ service.service_description }}</p>
        </div>
      </div>
      <div class="scroll-indicator scroll-left" @click="scrollServices(-300)">←</div>
      <div class="scroll-indicator scroll-right" @click="scrollServices(300)">→</div>
    </div>

    <!-- Contact Section -->
    <div class="contact-section">
      <h2 style="font-size: large; color: white;">{{ content.titre_copier4 }}</h2>
      <button @click="GoToContact" class="contact-btn">
          Contactez nous
      </button>
    </div>

    <!-- Realisations Section -->
    <div class="realisations">
      <h2>{{ content.titre_copier5 }}</h2>
      <div class="products-grid">
        <div v-for="(produit,index) in products" :key="index" class="product-card">
          <img :src="produit.image_produit" :alt="produit.nom_produit">
          <div class="product-info">
            <h3>{{ produit.nom_produit }}</h3>
            <p>{{ produit.description_produit }}</p>
          </div>
        </div>
      </div>
      <button @click="GoToRealisations" class="more-btn">
          Découverez plus
      </button>
    </div>

    <!-- SEO Section -->
    <div class="paragraph1">
      <h6>MEILLEURE RÉSULTAT DU MOTEUR DE RECHERCHE</h6>
      <h3>{{ content.paragraph.titre }}</h3>
      <p>{{ content.paragraph.description }}</p>
      <img :src="content.paragraph.image" alt="SEO Results">
    </div>

    <!-- Stats Section -->
    <div class="stats">
      <div class="stat">
        <div class="stat-name">{{ content.stats.nom }}</div>
        <div class="stat-value">{{ content.stats.percentage }} % </div>
      </div>
      <div class="stat">
        <div class="stat-name">{{ content.stats_copier.nom }}</div>
        <div class="stat-value">{{ content.stats_copier.percentage }} %</div>            
      </div>
      <div class="stat">
        <div class="stat-name">{{ content.stats_copier2.nom }}</div>
        <div class="stat-value">{{ content.stats_copier2.percentage }}%</div>
      </div>
      <div class="stat">
        <div class="stat-name">{{ content.stats_copier3.nom }}</div>
        <div class="stat-value">{{ content.stats_copier3.percentage }} h</div>
      </div> 
    </div>

    <!-- Partners Section -->
    <h3 class="partners-title">{{ content.titre_copier6 }}</h3>
    <div class="partenaires">
      <div v-for="(partenaire,index) in partenaires" :key="index" class="partenaire">
          <img :src="partenaire" :alt="'Partner ' + (index + 1)">
      </div>
    </div>

    <!-- Additional Content Sections -->
    <h2 class="content-title">{{ content.titre_copier7 }}</h2>
    <div class="para1">
      <p>{{ content.paragraph_copier.description }}</p>
      <img :src="content.paragraph_copier.image" alt="Content Image">
    </div>
    <div class="para2">
      <img :src="content.paragraph_copier2.image" alt="Content Image">
      <h3>{{ content.paragraph_copier2.titre}}</h3>
      <p>{{ content.paragraph_copier2.description }}</p>
    </div>
    <div class="para3">
      <p>{{ content.paragraph_copier3.description }}</p>
      <img :src="content.paragraph_copier3.image" alt="Content Image">
    </div>
  </div>
  <main v-else class="placeholder-container">
    <!-- Hero Section Placeholder -->
    <div class="hero-section placeholder">
      <div class="hero-text placeholder">
        <div class="placeholder-line" style="width: 70%; height: 20px; margin-bottom: 15px;"></div>
        <div class="placeholder-line" style="width: 100%; height: 40px; margin-bottom: 15px;"></div>
        <div class="placeholder-line" style="width: 80%; height: 25px; margin-bottom: 25px;"></div>
        <div class="placeholder-line" style="width: 200px; height: 40px;"></div>
      </div>
      <div class="hero-image placeholder">
        <div class="placeholder-image"></div>
      </div>
    </div>

    <!-- Centered Titles Placeholder -->
    <div class="centered-titles placeholder">
      <div class="placeholder-line" style="width: 40%; height: 18px; margin: 0 auto 10px;"></div>
      <div class="placeholder-line" style="width: 60%; height: 30px; margin: 0 auto;"></div>
    </div>

    <!-- Services Placeholder -->
    <div class="services-container placeholder">
      <div class="services">
        <div class="service placeholder" v-for="i in 4" :key="'service-'+i">
          <div class="placeholder-image" style="width: 70px; height: 70px; margin-bottom: 20px;"></div>
          <div class="placeholder-line" style="width: 80%; height: 22px; margin-bottom: 15px;"></div>
          <div class="placeholder-line" style="width: 100%; height: 16px;"></div>
          <div class="placeholder-line" style="width: 90%; height: 16px; margin-top: 8px;"></div>
        </div>
      </div>
    </div>

    <!-- Contact Section Placeholder -->
    <div class="contact-section placeholder" style="height: 100px;"></div>

    <!-- Realisations Placeholder -->
    <div class="realisations placeholder">
      <div class="placeholder-line" style="width: 30%; height: 32px; margin: 0 auto 40px;"></div>
      <div class="products-grid">
        <div class="product-card placeholder" v-for="i in 3" :key="'product-'+i">
          <div class="placeholder-image" style="height: 200px;"></div>
          <div class="product-info">
            <div class="placeholder-line" style="width: 80%; height: 22px; margin-bottom: 15px;"></div>
            <div class="placeholder-line" style="width: 100%; height: 16px;"></div>
            <div class="placeholder-line" style="width: 90%; height: 16px; margin-top: 8px;"></div>
          </div>
        </div>
      </div>
      <div class="placeholder-line" style="width: 200px; height: 40px; margin: 40px auto 0;"></div>
    </div>

    <!-- SEO Section Placeholder -->
    <div class="paragraph1 placeholder">
      <div class="placeholder-line" style="width: 50%; height: 18px; margin-bottom: 15px;"></div>
      <div class="placeholder-line" style="width: 70%; height: 28px; margin-bottom: 20px;"></div>
      <div class="placeholder-line" style="width: 100%; height: 16px; margin-bottom: 8px;"></div>
      <div class="placeholder-line" style="width: 95%; height: 16px; margin-bottom: 8px;"></div>
      <div class="placeholder-line" style="width: 90%; height: 16px; margin-bottom: 30px;"></div>
      <div class="placeholder-image" style="height: 300px;"></div>
    </div>

    <!-- Stats Placeholder -->
    <div class="stats placeholder">
      <div class="stat placeholder" v-for="i in 4" :key="'stat-'+i">
        <div class="placeholder-line" style="width: 70%; height: 18px; margin-bottom: 15px;"></div>
        <div class="placeholder-line" style="width: 50%; height: 32px; margin: 0 auto;"></div>
      </div>
    </div>

    <!-- Partners Placeholder -->
    <div class="placeholder" style="text-align: center; margin: 80px 0 40px;">
      <div class="placeholder-line" style="width: 40%; height: 32px; margin: 0 auto 40px;"></div>
      <div class="partenaires">
        <div class="partenaire placeholder" v-for="i in 5" :key="'partner-'+i">
          <div class="placeholder-image" style="height: 60px;"></div>
        </div>
      </div>
    </div>

    <!-- Additional Content Placeholders -->
    <div class="placeholder" style="text-align: center; margin: 80px 0 40px;">
      <div class="placeholder-line" style="width: 50%; height: 32px; margin: 0 auto;"></div>
    </div>
    
    <div class="para1 placeholder">
      <div class="placeholder-line" style="width: 100%; height: 16px; margin-bottom: 8px;"></div>
      <div class="placeholder-line" style="width: 95%; height: 16px; margin-bottom: 8px;"></div>
      <div class="placeholder-line" style="width: 90%; height: 16px; margin-bottom: 30px;"></div>
      <div class="placeholder-image" style="height: 300px;"></div>
    </div>
    
    <div class="para2 placeholder">
      <div class="placeholder-image" style="height: 300px; margin-bottom: 30px;"></div>
      <div class="placeholder-line" style="width: 60%; height: 28px; margin-bottom: 20px;"></div>
      <div class="placeholder-line" style="width: 80%; height: 16px; margin-bottom: 8px;"></div>
      <div class="placeholder-line" style="width: 85%; height: 16px; margin-bottom: 8px;"></div>
      <div class="placeholder-line" style="width: 75%; height: 16px;"></div>
    </div>
    
    <div class="para3 placeholder">
      <div class="placeholder-line" style="width: 100%; height: 16px; margin-bottom: 8px;"></div>
      <div class="placeholder-line" style="width: 95%; height: 16px; margin-bottom: 8px;"></div>
      <div class="placeholder-line" style="width: 90%; height: 16px; margin-bottom: 30px;"></div>
      <div class="placeholder-image" style="height: 300px;"></div>
    </div>
  </main>

  <Footer />
</template>

<script>
export default {
  data() {
    return {
      content: null,
      services: [],
      phone_number: "212660222231",
      products: [],
      partenaires: [],
      links: [],
      hover: false
    }
  },
  async mounted() {
    try {
      const contact =  this.$pageCache.getPage(5911);
      this.phone_number = contact.acf.phone_number;
      
    //  const res = await fetch("https://web.weblinking.fr/wp-json/wp/v2/pages/5737");
    //  const page = await res.json();
      const page =  this.$pageCache.getPage(5737);
      this.content = page.acf;
      
      this.links = [
        '/site_web_vitrine',
        '/site_web_ecomerce',
        '/site_Web_mobile',
        '/site_web_one_page',
        '/blog_pro',
        '/maintenance_wite_Web',
        '/business_directory',
        '/content_marketing',
        '/pay_per_click_management'
      ];
      
      // Load services
      for(let key in this.content) {
        if(key.startsWith('service')) {
          this.services.push(this.content[key]);
        }
      }
      
      // Load products
      for(let key in this.content) {
        if(key.startsWith('produit')) {
          this.products.push(this.content[key]);
        }
      }
      
      // Load partners
      for(let key in this.content) {
        if(key.startsWith('partenaire')) {
          this.partenaires.push(this.content[key]);
        }
      }
    } catch (error) {
      console.error("Error loading content:", error);
    }
  },
  methods: {
    navigateTo(index) {
      if (this.links[index]) {
        this.$router.push(this.links[index]);
      }
    },
    GoToContact() {
      this.$router.push('/contacts');
    },
    GoToRealisations() {
      this.$router.push('/realisations');
    },
    scrollServices(offset) {
      const servicesEl = this.$el.querySelector('.services');
      if (servicesEl) {
        servicesEl.scrollBy({
          left: offset,
          behavior: 'smooth'
        });
      }
    }
  }
}
</script>

<style scoped>
/* All your existing styles remain the same */

/* Add these new styles for the placeholders */
.placeholder-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.placeholder {
  background-color: #f6f7f8;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
}

.placeholder-line {
  background-color: #e1e1e1;
  border-radius: 4px;
  height: 16px;
  margin-bottom: 8px;
  animation: placeholderShimmer 1.5s infinite linear;
}

.placeholder-image {
  background-color: #e1e1e1;
  width: 100%;
  height: 100%;
  animation: placeholderShimmer 1.5s infinite linear;
}

@keyframes placeholderShimmer {
  0% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.6;
  }
}

/* Maintain all your existing styles below */
/* Base Styles */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  line-height: 1.6;
}

/* Hero Section */
.hero-section {
  display: flex;
  align-items: center;
  gap: 40px;
  margin: 60px 0;
}

.hero-text {
  flex: 1;
  padding-right: 20px;
}

.hero-image {
  flex: 1;
  text-align: right;
}
.contact-section{
  text-align: center;
  background-color:  #2c3e50 ;
  padding: 0.5vw;
  border-radius: 8px;
}
.hero-image img {
  max-height: 400px;
  max-width: 100%;
  object-fit: contain;
  border-radius: 8px;
}

.description {
  font-size: 1.2rem;
  color: #7f8c8d;
  margin-bottom: 20px;
  line-height: 1.7;
}

h1 {
  font-size: 2.8rem;
  margin: 0 0 15px 0;
  color: #2c3e50;
  font-weight: 700;
  line-height: 1.2;
}

.subtitle {
  font-size: 1.4rem;
  color: #00b489;
  margin: 25px 0;
  font-weight: 500;
}

.phone {
  font-size: 1.3rem;
  color: #2980b9;
  font-weight: 600;
  margin-top: 30px;
}

/* Centered Titles */
.centered-titles {
  text-align: center;
  margin: 80px 0 50px;
}

.small-title {
  font-size: 1.1rem;
  color: #7f8c8d;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.big-title {
  font-size: 2.2rem;
  color: #2c3e50;
  margin: 0;
  font-weight: 600;
}

/* Services Section */
.services-container {
  position: relative;
  margin: 60px 0 80px;
}

.services {
  display: flex;
  overflow-x: auto;
  gap: 30px;
  padding: 30px 10px;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  cursor: grab;
}

.services:active {
  cursor: grabbing;
}

.services::-webkit-scrollbar {
  display: none;
}

.service {
  flex: 0 0 300px;
  scroll-snap-align: start;
  background: white;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  cursor: pointer;
}

.service:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.12);
}

.service img {
  width: 70px;
  height: 70px;
  margin-bottom: 20px;
  object-fit: contain;
}

.service h3 {
  font-size: 1.4rem;
  color: #2c3e50;
  margin: 15px 0;
}

.service p {
  color: #7f8c8d;
  font-size: 1rem;
  line-height: 1.6;
}

.scroll-indicator {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  background: #00b489;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  font-weight: bold;
  font-size: 1.5rem;
  border: none;
  opacity: 0;
  transition: all 0.3s;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.services-container:hover .scroll-indicator {
  opacity: 1;
}

.scroll-left {
  left: -25px;
}

.scroll-right {
  right: -25px;
}

/* Button Styles */
button {
  background-color: #00b489;
  color: white;
  border: none;
  padding: 14px 30px;
  font-size: 1.1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 20px 0;
  font-weight: 600;
  letter-spacing: 0.5px;
}

button:hover {
  background-color: #128C7E;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.contact-btn {
  margin-top: 30px;
}

.more-btn {
  margin-top: 40px;
  background-color: #2c3e50;
}

.more-btn:hover {
  background-color: #1a5276;
}

/* Realisations Section */
.realisations {
  margin: 100px 0;
  text-align: center;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 40px;
  margin: 50px 0;
}

.product-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
}

.product-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.product-info {
  padding: 25px;
  text-align: left;
}

.product-info h3 {
  font-size: 1.3rem;
  color: #2c3e50;
  margin-bottom: 15px;
}

.product-info p {
  color: #7f8c8d;
  line-height: 1.7;
}

/* Paragraph Sections */
.paragraph1, .para1, .para2, .para3 {
  margin: 80px 0;
  padding: 50px;
  background: #f8f9fa;
  border-radius: 12px;
}

.para1, .para3 {
  display: flex;
  align-items: center;
  gap: 50px;
}

.para1 img, .para3 img {
  flex: 1;
  border-radius: 8px;
}

.para1 p, .para3 p {
  flex: 1;
  font-size: 1.1rem;
  line-height: 1.8;
}

.para2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.para2 img {
  width: 100%;
  max-width: 600px;
  margin-bottom: 30px;
  border-radius: 8px;
}

.para2 h3 {
  font-size: 1.8rem;
  margin-bottom: 20px;
}

.para2 p {
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.1rem;
  line-height: 1.8;
}

/* Stats Section */
.stats {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 30px;
  margin: 60px 0;
}

.stat {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: all 0.3s ease;
}

.stat:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
}

.stat-name {
  font-size: 1.2rem;
  color: #7f8c8d;
  margin-bottom: 15px;
}

.stat-value {
  font-size: 2.5rem;
  font-weight: 700;
  color: #128C7E;
}

/* Partenaires Section */
.partenaires {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  margin: 60px 0;
}

.partenaire {
  flex: 0 0 calc(20% - 40px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.partenaire:hover {
  transform: scale(1.05);
}

.partenaires img {
  max-width: 100%;
  max-height: 60px;
  object-fit: contain;
  filter: grayscale(100%);
  opacity: 0.7;
  transition: all 0.3s ease;
}

.partenaires img:hover {
  filter: grayscale(0%);
  opacity: 1;
}

.partners-title {
  text-align: center;
  margin: 80px 0 40px;
  font-size: 2rem;
}

.content-title {
  text-align: center;
  margin: 80px 0 40px;
  font-size: 2rem;
}

/* Responsive Design */
@media (max-width: 992px) {
  .hero-section {
    flex-direction: column;
  }
  
  .hero-text {
    padding-right: 0;
    text-align: center;
    order: 1;
  }
  
  .hero-image {
    order: 2;
    text-align: center;
  }
  
  .para1, .para3 {
    flex-direction: column;
  }
  
  .service {
    flex: 0 0 260px;
  }
}

@media (max-width: 768px) {
  h1 {
    font-size: 2.2rem;
  }
  
  .big-title {
    font-size: 1.8rem;
  }
  
  .stats {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .partenaire {
    flex: 0 0 calc(33% - 30px);
  }
  
  .scroll-indicator {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }
  
  .scroll-left {
    left: -15px;
  }
  
  .scroll-right {
    right: -15px;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 1.8rem;
  }
  
  .stats {
    grid-template-columns: 1fr;
  }
  
  .partenaire {
    flex: 0 0 calc(50% - 20px);
  }
  
  .paragraph1, .para1, .para2, .para3 {
    padding: 30px;
  }
  
  .service {
    flex: 0 0 220px;
    padding: 20px;
  }
}
</style>