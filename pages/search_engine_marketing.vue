<template>
    <Header />
    <main v-if="content" class="main-content">
        <div class="hero-section">
            <h1 class="main-title">{{ content.titre_service }}</h1>
        </div>

        <div class="top-para content-section">
            <h4 class="section-title">{{ content.top_paragraph.title }}</h4>
            <p class="top-para-text">{{ content.top_paragraph.content }}</p>
        </div>

        <div class="content-blocks">
            <div class="content-block para1">
                <div class="text-content">
                    <h5 class="block-title">{{ content.block.titre }}</h5>
                    <p class="block-text">{{ content.block.texte }}</p>
                </div>
                <img class="block-image" :src="content.block.image" alt="Image Block 1" />
            </div>

            <div class="content-block para2">
                <div class="text-content">
                    <h5 class="block-title">{{ content.block_copier.titre }}</h5>
                    <p class="block-text">{{ content.block_copier.texte }}</p>
                </div>
                <img class="block-image" :src="content.block_copier.image" alt="Image Block 2" />
            </div>

            <div class="content-block para3">
                <div class="text-content">
                    <h5 class="block-title">{{ content.block_copier2.titre }}</h5>
                    <p class="block-text">{{ content.block_copier2.texte }}</p>
                </div>
                <img class="block-image" :src="content.block_copier2.image" alt="Image Block 3" />
            </div>
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
        const resp = await fetch("https://web.weblinking.fr/wp-json/wp/v2/pages/5837");
        const page = await resp.json();
        this.content = page.acf;
        this.stats = [
            this.content.stats,
            this.content.stats_copier,
            this.content.stats_copier2,
            this.content.stats_copier3
        ].filter(stat => stat);
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
    color: #2c3e50;
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
    margin-bottom: 3rem;
}

.section-title {
    font-size: 1.8rem;
    color: #4299e1;
    margin-bottom: 1rem;
    font-weight: 600;
    text-align: center;
}

.top-para-text {
    font-size: 1.1rem;
    color: #4a5568;
    line-height: 1.7;
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
}

/* Content Blocks */
.content-blocks {
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
    flex-direction: row-reverse;
}
.para3 {
    background: linear-gradient(90deg, #f8fafc, #ffffff);
}

.text-content {
    flex: 1;
}

.block-title {
    font-size: 1.5rem;
    color: #2d3748;
    margin-bottom: 1rem;
    font-weight: 600;
}

.block-text {
    font-size: 1.1rem;
    color: #4a5568;
    line-height: 1.7;
}

.block-image {
    flex: 1;
    max-width: 45%;
    border-radius: 12px;
    transition: transform 0.3s ease;
}

.block-image:hover {
    transform: translateY(-5px);
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
    
    .para2 {
        flex-direction: column;
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
}
</style>