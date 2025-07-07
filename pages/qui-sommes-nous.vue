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
    <main v-else class="loading-screen">
      <div class="loader"></div>
      <p>Chargement du contenu...</p>
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
        const resp = await fetch("https://web.weblinking.fr/wp-json/wp/v2/pages/5908");
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
/* Loading State */
.loading-screen {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 50vh;
    color: #4a5568;
    font-family: sans-serif;
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

/* Content Styles */
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
</style>