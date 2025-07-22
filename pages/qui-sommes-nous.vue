<template>
    <Header />
    <main v-if="content">
        <h1 class="service-title">{{content.titre_service}} ?</h1>
        <div class="para">
            <h3 class="block-title">{{ content.block.titre }}</h3>
            <p class="block-text">{{ content.block.texte }}</p>
            <img :src="content.block.image" class="block-image" />
        </div>
        <div class="middle_para">
            <h3 class="middle-title">{{ content.middle_paragraph.title }}</h3>
            <p class="middle-content">{{ content.middle_paragraph.content }}</p>
        </div>
        <div class="modals">
            <div v-for="(modal, index) in modals" :key="index" class="modal">
                <img :src="modal.icon" alt="Modal Image" class="modal-icon" />
                <p class="modal-description">{{ modal.description }}</p>
            </div>
        </div>
    </main>
    <main v-else class="content-placeholder">
        <h1 class="service-title"></h1>
        <div class="para">
            <h3 class="block-title"></h3>
            <p class="block-text"></p>
            <div class="block-image-placeholder"></div>
        </div>
        <div class="middle_para">
            <h3 class="middle-title"></h3>
            <p class="middle-content"></p>
        </div>
        <div class="modals">
            <div v-for="i in 3" :key="i" class="modal">
                <div class="modal-icon-placeholder"></div>
                <p class="modal-description"></p>
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
            modals: [],
        }
    },
    async mounted() {
        //const resp = await fetch("https://web.weblinking.fr/wp-json/wp/v2/pages/5908");
        //const page = await resp.json();
        const page =  this.$pageCache.getPage(5908);
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
/* Original Content Styles */
.service-title {
    font-size: 2rem;
    color: #2d3748;
    margin-bottom: 1.5rem;
    text-align: center;
}

.para {
    max-width: 800px;
    margin: 0 auto 2rem;
    padding: 0 1rem;
}

.block-title {
    font-size: 1.5rem;
    color: #4a5568;
    margin-bottom: 1rem;
}

.block-text {
    line-height: 1.6;
    color: #4a5568;
    margin-bottom: 1rem;
}

.block-image {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin-top: 1rem;
}

.middle_para {
    max-width: 800px;
    margin: 0 auto 2rem;
    padding: 0 1rem;
}

.middle-title {
    font-size: 1.5rem;
    color: #4a5568;
    margin-bottom: 1rem;
}

.middle-content {
    line-height: 1.6;
    color: #4a5568;
}

.modals {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    max-width: 1200px;
    margin: 2rem auto;
    padding: 0 1rem;
}

.modal {
    flex: 1 1 300px;
    max-width: 350px;
    padding: 1.5rem;
    background: #f7fafc;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    text-align: center;
}

.modal-icon {
    width: 60px;
    height: 60px;
    margin-bottom: 1rem;
}

.modal-description {
    line-height: 1.6;
    color: #4a5568;
}

/* Placeholder Styles */
.content-placeholder .service-title,
.content-placeholder .block-title,
.content-placeholder .block-text,
.content-placeholder .middle-title,
.content-placeholder .middle-content,
.content-placeholder .modal-description {
    background-color: #f3f3f3;
    color: transparent;
    position: relative;
    overflow: hidden;
}

.content-placeholder .service-title {
    height: 2.5rem;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
}

.content-placeholder .block-title,
.content-placeholder .middle-title {
    height: 1.8rem;
    width: 60%;
}

.content-placeholder .block-text,
.content-placeholder .middle-content {
    height: 4rem;
}

.content-placeholder .modal-description {
    height: 4rem;
    margin-top: 0.5rem;
}

.content-placeholder .block-image-placeholder {
    width: 100%;
    height: 300px;
    background-color: #f3f3f3;
    border-radius: 8px;
    margin-top: 1rem;
}

.content-placeholder .modal-icon-placeholder {
    width: 60px;
    height: 60px;
    background-color: #f3f3f3;
    border-radius: 50%;
    margin: 0 auto 1rem;
}

/* Animation */
@keyframes placeholderShimmer {
    0% { background-position: -468px 0 }
    100% { background-position: 468px 0 }
}

.content-placeholder .service-title,
.content-placeholder .block-title,
.content-placeholder .block-text,
.content-placeholder .middle-title,
.content-placeholder .middle-content,
.content-placeholder .modal-description,
.content-placeholder .block-image-placeholder,
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
</style>