<template>
    <Header />
    <div class="service-page">
        <!-- Content when loaded -->
        <main v-if="content" class="main-content">
            <div class="hero-section">
                <h1 class="main-title">{{ content.titre_service }}</h1>
                <h3 class="subtitle">{{ content.sous_titre }}</h3>
            </div>

            <div class="content-block para1">
                <p class="block-text">{{ content.block.texte }}</p>
                <img class="block-image" :src="content.block.image" alt="Image Block 1" />
            </div>

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

        <!-- Placeholder content -->
        <main v-else class="content-placeholder">
            <!-- Hero Placeholder -->
            <div class="hero-section">
                <h1 class="main-title"></h1>
                <h3 class="subtitle"></h3>
            </div>

            <!-- Content Block 1 Placeholder -->
            <div class="content-block para1">
                <p class="block-text"></p>
                <div class="block-image-placeholder"></div>
            </div>

            <!-- Gauge Placeholder -->
            <div class="modern-gauges">
                <div class="gauge-row">
                    <div class="gauge-item" v-for="i in 4" :key="i">
                        <div class="gauge-wrapper">
                            <div class="gauge-percentage"></div>
                            <div class="gauge-container">
                                <div class="gauge-bar-placeholder"></div>
                            </div>
                        </div>
                        <div class="gauge-title"></div>
                    </div>
                </div>
            </div>

            <!-- Content Block 2 Placeholder -->
            <div class="content-block para2">
                <div class="block-image-placeholder"></div>
                <div class="text-content">
                    <h5 class="block-title"></h5>
                    <p class="block-text"></p>
                </div>
            </div>

            <!-- Middle Paragraph Placeholder -->
            <div class="middle-para centered-section">
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

            <!-- Bottom Paragraph Placeholder -->
            <div class="bottom-para centered-section">
                <p class="section-text"></p>
            </div>
        </main>
    </div>
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
        //const resp = await fetch("https://web.weblinking.fr/wp-json/wp/v2/pages/5835");
        //const page = await resp.json();
        const page =  this.$pageCache.getPage(5835);
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
    margin-bottom: 2rem;
}

.main-title {
    font-size: 2.8rem;
    font-weight: 700;
    color: #2c3e50;
    margin-bottom: 1rem;
}

.subtitle {
    font-size: 1.5rem;
    font-weight: 400;
    color: #4a5568;
    margin-bottom: 1rem;
}

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
.content-placeholder .main-title,
.content-placeholder .subtitle,
.content-placeholder .block-text,
.content-placeholder .block-title,
.content-placeholder .section-text,
.content-placeholder .modal-text,
.content-placeholder .gauge-title,
.content-placeholder .gauge-percentage {
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

.content-placeholder .subtitle {
    height: 1.5rem;
    width: 70%;
    margin: 0 auto;
}

.content-placeholder .block-text {
    height: 4.5rem;
}

.content-placeholder .block-title {
    height: 1.6rem;
    width: 50%;
    margin-bottom: 1rem;
}

.content-placeholder .section-text,
.content-placeholder .modal-text {
    height: 1.2rem;
}

.content-placeholder .gauge-percentage {
    height: 2.2rem;
    width: 50%;
    margin: 0 auto 0.3rem;
}

.content-placeholder .gauge-title {
    height: 1.1rem;
    width: 70%;
    margin: 0.5rem auto 0;
}

.content-placeholder .block-image-placeholder {
    height: 300px;
    width: 100%;
    background-color: #f3f3f3;
    border-radius: 12px;
}

.content-placeholder .gauge-bar-placeholder {
    height: 100%;
    width: 100%;
    background-color: #f3f3f3;
    border-radius: 4px;
}

.content-placeholder .modal-icon-placeholder {
    width: 70px;
    height: 70px;
    background-color: #f3f3f3;
    border-radius: 50%;
    margin-bottom: 1.5rem;
}

/* Animation */
@keyframes placeholderShimmer {
    0% { background-position: -468px 0 }
    100% { background-position: 468px 0 }
}

.content-placeholder .main-title,
.content-placeholder .subtitle,
.content-placeholder .block-text,
.content-placeholder .block-title,
.content-placeholder .section-text,
.content-placeholder .modal-text,
.content-placeholder .gauge-title,
.content-placeholder .gauge-percentage,
.content-placeholder .block-image-placeholder,
.content-placeholder .gauge-bar-placeholder,
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

/* Responsive adjustments */
@media (max-width: 768px) {
    .content-placeholder .main-title {
        height: 2.2rem;
    }
    
    .content-placeholder .subtitle {
        height: 1.3rem;
    }
    
    .content-placeholder .block-image-placeholder {
        height: 200px;
    }
    
    .content-placeholder .block-text {
        height: 3.5rem;
    }
}

@media (max-width: 480px) {
    .content-placeholder .main-title {
        width: 80%;
    }
    
    .content-placeholder .subtitle {
        width: 90%;
    }
    
    .content-placeholder .block-text {
        height: 2.5rem;
    }
    
    .content-placeholder .gauge-percentage {
        height: 1.8rem;
    }
}
</style>