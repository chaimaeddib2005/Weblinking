<template>
    <Header />
    <main v-if="content" class="main-content">
        <h1 class="portfolio-title">{{ content.titre_service }}</h1>
        
        <div class="realisations-grid">
            <div v-for="(product, index) in realisations" :key="index" class="product-card">
                <div class="product-image-container">
                    <img :src="product.image_produit" :alt="product.nom" class="product-image">
                    <div class="product-overlay">
                        <h3 class="product-name">{{ product.nom }}</h3>
                        <p class="product-description">{{ product.description_produit }}</p>
                    </div>
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
</template>

<script lang="js">
export default{
    data(){
        return{
            content:null,
            realisations:[],
        }
    },
    async mounted(){
        const resp = await fetch("https://web.weblinking.fr/wp-json/wp/v2/pages/5906");
        const page = await resp.json();
        this.content = page.acf;
        for(let key in this.content){
            if(key.startsWith("produit")){
                if(this.content[key].image_produit) {
                    this.realisations.push(this.content[key]);
                }
            }
        }
    }
}
</script>

<style scoped>
/* Base Styles */
.main-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 1.5rem;
}

.portfolio-title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: #2d3748;
    position: relative;
}

.portfolio-title::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #4299e1, #38b2ac);
}

/* Realisations Grid */
.realisations-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.product-card {
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    aspect-ratio: 1/1;
    transition: transform 0.3s ease;
    background-color: #f8f9fa; /* Added background for images with transparency */
}

.product-card:hover {
    transform: translateY(-5px);
}

.product-image-container {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white; /* Ensure consistent background */
}

.product-image {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain; /* Changed from 'cover' to 'contain' */
    display: block;
}

.product-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.product-card:hover .product-overlay {
    opacity: 1;
}

.product-name {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    text-align: center;
    color: white;
}

.product-description {
    font-size: 1rem;
    line-height: 1.6;
    text-align: center;
    color: rgba(255, 255, 255, 0.9);
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

/* Responsive Adjustments */
@media (max-width: 768px) {
    .realisations-grid {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
    
    .portfolio-title {
        font-size: 2rem;
    }
}

@media (max-width: 480px) {
    .realisations-grid {
        grid-template-columns: 1fr;
    }
    
    .main-content {
        padding: 2rem 1rem;
    }
}
</style>