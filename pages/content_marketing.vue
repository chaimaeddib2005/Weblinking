<template>
    <Header />
    <main v-if="content" class="main-content">
        <div class="hero-section">
            <h1 class="main-title">{{ content.titre_service }}</h1>
            <h3 class="subtitle">{{ content.sous_titre }}</h3>
        </div>

        <div class="content-block para1">
            <p class="block-text">{{ content.block.texte }}</p>
            <img class="block-image" :src="content.block.image" alt="Image Block 1" />
        </div>

        <!-- Modern Gauge Section -->
        <div class="modern-gauges">
            <div class="gauge-row">
                <div class="gauge-item" v-for="(stat, index) in stats" :key="index">
                    <div class="gauge-wrapper">
                        <div class="gauge-percentage">{{ stat.percentage }}%</div>
                        <div class="gauge-container">
                            <div class="gauge-bar" :style="{ width: stat.percentage + '%', background: getGradient(stat.percentage) }"></div>
                        </div>
                    </div>
                    <div class="gauge-title">{{ stat.nom }}</div>
                </div>
            </div>
        </div>

        <div class="content-block para2">
            <img class="block-image" :src="content.block_copier.image" alt="Image Block 2" />
            <div class="text-content">
                <h5 class="block-title">{{ content.block_copier.titre }}</h5>
                <p class="block-text">{{ content.block_copier.texte }}</p>
            </div>
        </div>

        <div class="middle-para centered-section">
            <p class="section-text">{{ content.middle_paragraph.content }}</p>
        </div>

        <div class="modals-container">
            <div class="modals">
                <div class="modal" v-for="(modal,index) in modals" :key="index">
                    <img :src="modal.icon" alt="Modal icon" class="modal-icon">
                    <p class="modal-text">{{ modal.description }}</p>
                </div>
            </div>
        </div>

        <div class="bottom-para centered-section">
            <p class="section-text">{{ content.buttom_paragraph.content }}</p>
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
            stats: [],
            modals: []
        }
    },
    methods: {
        getGradient(percentage) {
            if (percentage >= 80) return 'linear-gradient(90deg, #4CAF50, #8BC34A)';
            if (percentage >= 60) return 'linear-gradient(90deg, #FFC107, #FFEB3B)';
            return 'linear-gradient(90deg, #FF5722, #FF9800)';
        }
    },
    async mounted(){
        const resp = await fetch("https://web.weblinking.fr/wp-json/wp/v2/pages/5835");
        const page = await resp.json();
        this.content = page.acf;
        this.stats = [
            this.content.stats,
            this.content.stats_copier,
            this.content.stats_copier2,
            this.content.stats_copier3
        ].filter(stat => stat);
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
    margin-bottom: 2rem;
}

.main-title {
    font-size: 2.8rem;
    font-weight: 700;
    color: #2d3748;
    margin-bottom: 1rem;
}

.subtitle {
    font-size: 1.5rem;
    font-weight: 400;
    color: #4a5568;
    margin-bottom: 1rem;
}

/* Content Blocks */
.content-block {
    display: flex;
    align-items: center;
    gap: 3rem;
    margin: 3rem 0;
}

.block-text {
    flex: 1;
    font-size: 1.1rem;
    color: #4a5568;
    line-height: 1.7;
}

.block-image {
    flex: 1;
    max-width: 50%;
    border-radius: 12px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.block-image:hover {
    transform: translateY(-5px);
}

.block-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: #2d3748;
    margin-bottom: 1rem;
}

/* Centered Sections */
.centered-section {
    text-align: center;
    max-width: 800px;
    margin: 3rem auto;
    padding: 0 1rem;
}

.section-text {
    font-size: 1.1rem;
    color: #4a5568;
    line-height: 1.7;
}

/* Modals */
.modals-container {
    background-color: #f8fafc;
    padding: 3rem 0;
    margin: 3rem 0;
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

/* Modern Gauge Styles (preserved) */
.modern-gauges {
    padding: 3rem 1rem;
    margin: 2rem auto;
    max-width: 900px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.gauge-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 2.5rem;
    margin-top: 1.5rem;
}

.gauge-item {
    flex: 1;
    min-width: 160px;
    max-width: 200px;
    text-align: center;
}

.gauge-wrapper {
    margin-bottom: 0.8rem;
}

.gauge-percentage {
    font-size: 2.2rem;
    font-weight: 700;
    color: #2d3748;
    margin-bottom: 0.3rem;
    font-family: 'Arial', sans-serif;
}

.gauge-container {
    height: 8px;
    background-color: #edf2f7;
    border-radius: 4px;
    overflow: hidden;
    position: relative;
    box-shadow: 0 1px 2px rgba(0,0,0,0.05) inset;
}

.gauge-bar {
    height: 100%;
    border-radius: 4px;
    transition: width 1s ease-out, background 0.5s ease;
}

.gauge-title {
    font-size: 1.1rem;
    font-weight: 600;
    color: #4a5568;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-top: 0.5rem;
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
@media (max-width: 768px) {
    .main-title {
        font-size: 2.2rem;
    }
    
    .subtitle {
        font-size: 1.3rem;
    }
    
    .content-block {
        flex-direction: column;
        gap: 1.5rem;
    }
    
    .block-image {
        max-width: 100%;
        order: -1;
    }
    
    .gauge-row {
        gap: 1.5rem;
    }
    
    .gauge-item {
        min-width: 140px;
    }
    
    .gauge-percentage {
        font-size: 1.8rem;
    }
    
    .modal {
        min-width: 160px;
        padding: 1.5rem 1rem;
    }
}

@media (max-width: 480px) {
    .main-content {
        padding: 0 1rem 2rem;
    }
    
    .main-title {
        font-size: 1.8rem;
    }
    
    .gauge-row {
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    }
    
    .gauge-item {
        width: 100%;
        max-width: 220px;
    }
    
    .modal {
        min-width: 100%;
        max-width: 100%;
    }
}
</style>