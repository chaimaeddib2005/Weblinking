<template>
    <Header />
    <main v-if="content" class="main-content">
        <h1 class="service-title">{{ content.titre_service }}</h1>
        
        <div class="top_para content-section">
            <h3 class="section-subtitle">{{ content.top_paragraph.title }}</h3>
            <p class="section-text">{{ content.top_paragraph.content }}</p>
        </div>
        
        <div class="para1 content-section">
            <div class="text-content">
                <h4 class="block-title">{{ content.block.titre }}</h4>
                <p class="block-text">{{ content.block.texte }}</p>
            </div>
            <img class="content-image" :src="content.block.image" alt="Image Block 1" />
        </div>
        
        <div class="para2 content-section">
            <img class="content-image" :src="content.block_copier.image" alt="Image Block 2" />
            <div class="text-content">
                <h4 class="block-title">{{ content.block_copier.titre }}</h4>
                <p class="block-text">{{ content.block_copier.texte }}</p>
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
    
    <main v-else class="main-content placeholder-content">
        <h1 class="service-title"></h1>
        
        <div class="top_para content-section">
            <h3 class="section-subtitle"></h3>
            <p class="section-text"></p>
        </div>
        
        <div class="para1 content-section">
            <div class="text-content">
                <h4 class="block-title"></h4>
                <p class="block-text"></p>
            </div>
            <div class="content-image-placeholder"></div>
        </div>
        
        <div class="para2 content-section">
            <div class="content-image-placeholder"></div>
            <div class="text-content">
                <h4 class="block-title"></h4>
                <p class="block-text"></p>
            </div>
        </div>
        
        <!-- Modern Gauge Placeholder -->
        <div class="modern-gauges">
            <div class="gauge-row">
                <div class="gauge-item" v-for="i in 4" :key="i">
                    <div class="gauge-wrapper">
                        <div class="gauge-percentage-placeholder"></div>
                        <div class="gauge-container">
                            <div class="gauge-bar-placeholder"></div>
                        </div>
                    </div>
                    <div class="gauge-title-placeholder"></div>
                </div>
            </div>
        </div>
    </main>

    <Feedback />
    <Footer />
</template>

<script lang="js">
export default {
    data() {
        return {
            content: null,
            stats: []
        }
    },
    methods: {
        getGradient(percentage) {
            if (percentage >= 80) return 'linear-gradient(90deg, #4CAF50, #8BC34A)';
            if (percentage >= 60) return 'linear-gradient(90deg, #FFC107, #FFEB3B)';
            return 'linear-gradient(90deg, #FF5722, #FF9800)';
        }
    },
    async mounted() {
        //const resp = await fetch("https://web.weblinking.fr/wp-json/wp/v2/pages/5831");
        //const page = await resp.json();
        const page =  this.$pageCache.getPage(5831);
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
    padding: 2rem 1.5rem;
    color: #333;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
}

.service-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: #2d3748;
    margin-bottom: 2rem;
    text-align: center;
    position: relative;
    padding-bottom: 1rem;
}

.service-title::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, #4299e1, #38b2ac);
    border-radius: 2px;
}

/* Content Sections */
.content-section {
    margin-bottom: 3rem;
    padding: 1.5rem;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.section-subtitle {
    font-size: 1.5rem;
    color: #4299e1;
    margin-bottom: 1rem;
    font-weight: 600;
}

.section-text {
    font-size: 1.1rem;
    color: #4a5568;
    line-height: 1.7;
}

/* Block Styles */
.para1, .para2 {
    display: flex;
    align-items: center;
    gap: 2rem;
}

.para2 {
    flex-direction: row-reverse;
}

.text-content {
    flex: 1;
}

.block-title {
    font-size: 1.3rem;
    color: #2d3748;
    margin-bottom: 1rem;
    font-weight: 600;
}

.block-text {
    font-size: 1rem;
    color: #4a5568;
    line-height: 1.6;
}

.content-image {
    flex: 1;
    max-width: 50%;
    border-radius: 8px;
    transition: transform 0.3s ease;
}

.content-image:hover {
    transform: scale(1.02);
}

/* Modern Gauge Styles */
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

/* Placeholder Styles */
.placeholder-content .service-title,
.placeholder-content .section-subtitle,
.placeholder-content .section-text,
.placeholder-content .block-title,
.placeholder-content .block-text,
.placeholder-content .gauge-percentage-placeholder,
.placeholder-content .gauge-title-placeholder {
    background-color: #f3f3f3;
    color: transparent;
    position: relative;
    overflow: hidden;
}

.placeholder-content .service-title {
    height: 3rem;
    width: 50%;
    margin: 0 auto 2rem;
}

.placeholder-content .section-subtitle {
    height: 1.8rem;
    width: 60%;
    margin-bottom: 1rem;
}

.placeholder-content .section-text {
    height: 4rem;
}

.placeholder-content .block-title {
    height: 1.5rem;
    width: 70%;
    margin-bottom: 1rem;
}

.placeholder-content .block-text {
    height: 4rem;
}

.placeholder-content .content-image-placeholder {
    flex: 1;
    max-width: 50%;
    height: 250px;
    background-color: #f3f3f3;
    border-radius: 8px;
}

.placeholder-content .gauge-percentage-placeholder {
    height: 2.2rem;
    width: 60px;
    margin: 0 auto 0.3rem;
}

.placeholder-content .gauge-bar-placeholder {
    height: 100%;
    width: 70%;
    background-color: #f3f3f3;
    border-radius: 4px;
}

.placeholder-content .gauge-title-placeholder {
    height: 1.1rem;
    width: 80%;
    margin: 0.5rem auto 0;
}

/* Animation */
@keyframes placeholderShimmer {
    0% { background-position: -468px 0 }
    100% { background-position: 468px 0 }
}

.placeholder-content .service-title,
.placeholder-content .section-subtitle,
.placeholder-content .section-text,
.placeholder-content .block-title,
.placeholder-content .block-text,
.placeholder-content .content-image-placeholder,
.placeholder-content .gauge-percentage-placeholder,
.placeholder-content .gauge-bar-placeholder,
.placeholder-content .gauge-title-placeholder {
    animation-duration: 1.5s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeholderShimmer;
    animation-timing-function: linear;
    background: linear-gradient(to right, #f3f3f3 8%, #ececec 18%, #f3f3f3 33%);
    background-size: 800px 104px;
    position: relative;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .service-title {
        font-size: 2rem;
    }
    
    .para1, .para2 {
        flex-direction: column;
    }
    
    .content-image,
    .placeholder-content .content-image-placeholder {
        max-width: 100%;
        margin-bottom: 1.5rem;
    }
    
    .gauge-row {
        gap: 1.5rem;
    }
    
    .gauge-item {
        min-width: 140px;
    }
    
    .placeholder-content .service-title {
        height: 2.4rem;
        width: 70%;
    }
    
    .placeholder-content .content-image-placeholder {
        height: 200px;
    }
}

@media (max-width: 480px) {
    .main-content {
        padding: 1.5rem 1rem;
    }
    
    .service-title {
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
    
    .placeholder-content .service-title {
        height: 2rem;
        width: 80%;
    }
    
    .placeholder-content .section-text {
        height: 3rem;
    }
    
    .placeholder-content .block-text {
        height: 3rem;
    }
}
</style>