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

    <main v-else class="main-content placeholder-content">
        <div class="hero-section">
            <h1 class="main-title"></h1>
        </div>

        <div class="top-para content-section">
            <h4 class="section-title"></h4>
            <p class="section-text"></p>
        </div>

        <div class="content-grid">
            <div class="content-block para1">
                <p class="block-text"></p>
                <div class="block-image-placeholder"></div>
            </div>

            <div class="content-block para2">
                <div class="block-image-placeholder"></div>
                <div class="text-content">
                    <h2 class="block-title"></h2>
                    <p class="block-text"></p>
                </div>
            </div>
        </div>

        <div class="middle-para content-section">
            <h4 class="section-title"></h4>
            <p class="section-text"></p>
        </div>

        <div class="modals-container">
            <div class="modals-grid">
                <div v-for="i in 3" :key="i" class="modal-card">
                    <div class="modal-icon-placeholder"></div>
                    <p class="modal-text"></p>
                </div>
            </div>
        </div>
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
        //const resp = await fetch("https://web.weblinking.fr/wp-json/wp/v2/pages/5839");
        //const page = await resp.json();
        const page =  this.$pageCache.getPage(5839);
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

/* Placeholder Styles */
.placeholder-content .main-title,
.placeholder-content .section-title,
.placeholder-content .section-text,
.placeholder-content .block-title,
.placeholder-content .block-text,
.placeholder-content .modal-text {
    background-color: #f3f3f3;
    color: transparent;
    position: relative;
    overflow: hidden;
}

.placeholder-content .main-title {
    height: 3.2rem;
    width: 50%;
    margin: 0 auto 1rem;
}

.placeholder-content .main-title::after {
    display: none;
}

.placeholder-content .section-title {
    height: 2rem;
    width: 60%;
    margin: 0 auto 1.5rem;
}

.placeholder-content .section-text {
    height: 4.5rem;
}

.placeholder-content .block-title {
    height: 2rem;
    width: 70%;
    margin-bottom: 1rem;
}

.placeholder-content .block-text {
    height: 5rem;
}

.placeholder-content .modal-text {
    height: 3rem;
    margin-top: 0.5rem;
}

.placeholder-content .block-image-placeholder {
    flex: 1;
    max-width: 45%;
    height: 250px;
    background-color: #f3f3f3;
    border-radius: 12px;
}

.placeholder-content .modal-icon-placeholder {
    width: 70px;
    height: 70px;
    background-color: #f3f3f3;
    border-radius: 50%;
    margin: 0 auto 1.5rem;
}

/* Animation */
@keyframes placeholderShimmer {
    0% { background-position: -468px 0 }
    100% { background-position: 468px 0 }
}

.placeholder-content .main-title,
.placeholder-content .section-title,
.placeholder-content .section-text,
.placeholder-content .block-title,
.placeholder-content .block-text,
.placeholder-content .modal-text,
.placeholder-content .block-image-placeholder,
.placeholder-content .modal-icon-placeholder {
    animation-duration: 1.5s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeholderShimmer;
    animation-timing-function: linear;
    background: linear-gradient(to right, #f3f3f3 8%, #ececec 18%, #f3f3f3 33%);
    background-size: 800px 104px;
    position: relative;
}

/* Responsive Adjustments */
@media (max-width: 992px) {
    .content-block {
        gap: 2rem;
        padding: 1.5rem;
    }
    
    .placeholder-content .block-image-placeholder {
        height: 200px;
    }
}

@media (max-width: 768px) {
    .main-title {
        font-size: 2.2rem;
    }
    
    .placeholder-content .main-title {
        height: 2.6rem;
        width: 70%;
    }
    
    .content-block {
        flex-direction: column;
        gap: 1.5rem;
    }
    
    .block-image,
    .placeholder-content .block-image-placeholder {
        max-width: 100%;
        order: -1;
    }
    
    .modals-grid {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
    
    .placeholder-content .section-text {
        height: 3.5rem;
    }
    
    .placeholder-content .block-text {
        height: 4rem;
    }
}

@media (max-width: 480px) {
    .main-content {
        padding: 0 1rem 2rem;
    }
    
    .main-title {
        font-size: 1.8rem;
    }
    
    .placeholder-content .main-title {
        height: 2rem;
        width: 80%;
    }
    
    .modal-card {
        padding: 1.5rem;
    }
    
    .placeholder-content .section-title {
        height: 1.6rem;
    }
    
    .placeholder-content .block-title {
        height: 1.6rem;
    }
}
</style>