<template>
  <form class="comment-form" @submit.prevent="submitComment">
    <h2>Laisser un commentaire</h2>
    <p>
      Votre adresse e-mail ne sera pas publiée.
      Les champs obligatoires sont indiqués avec <span class="required">*</span>
    </p>

    <label for="comment">Commentaire <span class="required">*</span></label>
    <textarea id="comment" v-model="form.comment" required></textarea>

    <div class="form-row">
      <div class="form-group">
        <label for="name">Nom <span class="required">*</span></label>
        <input type="text" id="name" v-model="form.name" required />
      </div>

      <div class="form-group">
        <label for="email">E-mail <span class="required">*</span></label>
        <input type="email" id="email" v-model="form.email" required />
      </div>

      <div class="form-group">
        <label for="website">Site web</label>
        <input type="url" id="website" v-model="form.website" />
      </div>
    </div>

    <div class="checkbox-wrapper">
      <input type="checkbox" id="remember" v-model="form.remember" />
      <label for="remember">
        Enregistrer mon nom, mon e-mail et mon site dans le navigateur pour mon prochain commentaire.
      </label>
    </div>

    <button type="submit">Laisser un commentaire</button>
  </form>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  comment: '',
  name: '',
  email: '',
  website: '',
  remember: false
})

const submitComment = async () => {
  try {
    const response = await fetch('https://web.weblinking.fr/wp-json/custom-comment/v1/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })

    const result = await response.json()

    if (result.success) {
      alert('Merci pour votre commentaire !')
      form.comment = ''
      form.name = ''
      form.email = ''
      form.website = ''
      form.remember = false
    } else {
      alert('Erreur : ' + result.message)
    }

  } catch (error) {
    console.error(error)
    alert("Une erreur s'est produite. Veuillez réessayer plus tard.")
  }
}
</script>


<style scoped>
.comment-form {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  font-family: 'Segoe UI', sans-serif;
}

.comment-form h2 {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  color: #222;
}

.comment-form p {
  margin-bottom: 1.5rem;
  color: #444;
}

.required {
  color: red;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #333;
}

textarea {
  width: 100%;
  min-height: 120px;
  resize: vertical;
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  margin-bottom: 1.5rem;
}

input[type="text"],
input[type="email"],
input[type="url"] {
  width: 100%;
  padding: 0.6rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  margin-bottom: 1rem;
}

.form-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.form-group {
  flex: 1;
  min-width: 200px;
}

.checkbox-wrapper {
  display: flex;
  align-items: center;
  margin: 1.5rem 0;
}

.checkbox-wrapper input[type="checkbox"] {
  margin-right: 0.5rem;
}

button[type="submit"] {
  background-color: #00b86b;
  color: white;
  padding: 0.8rem 1.8rem;
  font-size: 1rem;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: background 0.3s ease;
}

button[type="submit"]:hover {
  background-color: #00a45e;
}
</style>
