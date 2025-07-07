<template>
    <Header />
    <main v-if="content" class="main-content">
        <div class="hero-section">
            <h1 class="main-title">{{ content.titre_service }}</h1>
        </div>

        <div class="top-para content-section">
            <h4 class="section-title">{{ content.top_paragraph.title }}</h4>
            <p class="section-text">{{ content.top_paragraph.content }}</p>
        </div>

        <div class="content-grid">
            <div class="content-block para1">
                <p class="block-text">{{ content.block.texte }}</p>
                <img class="block-image" :src="content.block.image" alt="Pay Per Click Image" />
            </div>

            <div class="content-block para2">
                <img class="block-image" :src="content.block_copier.image" alt="Pay Per Click Image" />
                <div class="text-content">
                    <h2 class="block-title">{{ content.block_copier.titre }}</h2>
                    <p class="block-text">{{ content.block_copier.texte }}</p>
                </div>
            </div>
        </div>

        <div class="middle-para content-section">
            <h4 class="section-title">{{ content.middle_paragraph.title }}</h4>
            <p class="section-text">{{ content.middle_paragraph.content }}</p>
        </div>

        <div class="modals-container">
            <div class="modals-grid">
                <div v-for="(modal, index) in modals" :key="index" class="modal-card">
                    <img class="modal-icon" :src="modal.icon" alt="Modal icon" />
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
</template>

<script lang="js">
export default{
    data(){
        return{
            content:null,
            modals:[]
        }
    },
    async mounted(){
        const resp = await fetch("https://web.weblinking.fr/wp-json/wp/v2/pages/5839");
        const page = await resp.json();
        this.content = page.acf;
        for(let key in this.content){
            if(key.startsWith("modal")){
                if(this.content[key].description){
                    this.modals.push(this.content[key]);
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
    padding: 0 1.5rem 3rem;
    color: #333;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
}

/* Hero Section */
.hero-section {
    text-align: center;
    padding: 3rem 0 2rem;
}

.main-title {
    font-size: 2.8rem;
    font-weight: 700;
    color: #2d3748;
    margin-bottom: 1rem;
    position: relative;
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

/* Content Sections */
.content-section {
    margin: 3rem auto;
    max-width: 800px;
    text-align: center;
}

.section-title {
    font-size: 1.8rem;
    color: #4299e1;
    margin-bottom: 1.5rem;
    font-weight: 600;
}

.section-text {
    font-size: 1.1rem;
    color: #4a5568;
    line-height: 1.7;
}

/* Content Grid */
.content-grid {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin: 3rem 0;
}

.content-block {
    display: flex;
    align-items: center;
    gap: 3rem;
    padding: 2rem;
    border-radius: 12px;
    background-color: #fff;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.para1 {
    background: linear-gradient(90deg, #f8fafc, #ffffff);
}

.para2 {
    background: linear-gradient(90deg, #ffffff, #f8fafc);
}

.block-text {
    flex: 1;
    font-size: 1.1rem;
    color: #4a5568;
    line-height: 1.7;
}

.block-title {
    font-size: 1.8rem;
    color: #2d3748;
    margin-bottom: 1rem;
    font-weight: 600;
}

.block-image {
    flex: 1;
    max-width: 45%;
    border-radius: 12px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.block-image:hover {
    transform: translateY(-5px);
}

/* Modals Section */
.modals-container {
    background-color: #f8fafc;
    padding: 3rem 1.5rem;
    margin-top: 3rem;
    border-radius: 12px;
}

.modals-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

.modal-card {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.modal-card:hover {
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
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

/* Responsive Adjustments */
@media (max-width: 992px) {
    .content-block {
        gap: 2rem;
        padding: 1.5rem;
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
    
    .modals-grid {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
}

@media (max-width: 480px) {
    .main-content {
        padding: 0 1rem 2rem;
    }
    
    .main-title {
        font-size: 1.8rem;
    }
    
    .modal-card {
        padding: 1.5rem;
    }
}
</style>