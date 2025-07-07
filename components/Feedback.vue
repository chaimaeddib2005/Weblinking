<template>
  <div class="contact-container">
    <div class="content-wrapper">
      <div class="text-section">
        <h1>On est à votre écoute</h1>

        <p class="description">
          La satisfaction de nos clients est notre but majeur. Si vous souhaitez commencer un projet mais vous avez besoin d'aide, alors détendez-vous, nous serons à votre côté pour vous présenter tout accompagnement, conseils et solutions pour réussir votre projet. Nous avons pu gagner, au fil du temps, l'expérience et la confiance d'un grand nombre d'entreprises qui sont tout à fait satisfaites par notre collaboration.
        </p>
      </div>

      <div class="form-section">
        <form @submit.prevent="handleSubmit" class="contact-form">
          <div class="form-row">
            <div class="form-group">
              <label for="name">Votre nom</label>
              <input 
                type="text" 
                id="name" 
                v-model="formData.name" 
                required
              >
            </div>
            
            <div class="form-group">
              <label for="email">Votre Email</label>
              <input 
                type="email" 
                id="email" 
                v-model="formData.email" 
                required
              >
            </div>
          </div>
          
          <div class="form-row">
            <div class="form-group">
              <label for="phone">Téléphone</label>
              <input 
                type="tel" 
                id="phone" 
                v-model="formData.phone"
              >
            </div>
            
            <div class="form-group">
              <label for="subject">Objet</label>
              <input 
                type="text" 
                id="subject" 
                v-model="formData.subject"
              >
            </div>
          </div>
          
          <div class="form-group full-width">
            <label for="message">Votre Message</label>
            <textarea 
              id="message" 
              v-model="formData.message" 
              required
            ></textarea>
          </div>
          
          <button type="submit" class="submit-btn">
            ENVOYER VOTRE MESSAGE
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      }
    }
  },
  methods: {
    async handleSubmit() {
      try {
        const response = await fetch('https://web.weblinking.fr/wp-json/custom-contact/v1/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.formData)
        });

        const data = await response.json();

        if (data.success) {
          this.formData = {
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
          };
          alert('Merci pour votre message! Nous vous contacterons bientôt.');
        } else {
          console.error('Erreur:', data.message);
          alert("Une erreur s'est produite: " + data.message);
        }

      } catch (error) {
        console.error('Échec de l\'envoi:', error);
        alert("Désolé, une erreur s'est produite. Veuillez réessayer plus tard.");
      }
    }
  }
}
</script>


<style scoped>
.contact-container {
  background-color: #1e88e5; /* Blue background */
  padding: 60px 20px;
  color: white;
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
}

.text-section {
  flex: 1;
  min-width: 300px;
}

.form-section {
  flex: 1;
  min-width: 300px;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 25px;
  line-height: 1.2;
}

.description {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 0;
}

.contact-form {
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  color: #333;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.form-row {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}

.form-group {
  flex: 1;
  min-width: 0; /* Prevent flex items from overflowing */
}

.full-width {
  width: 100%;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 8px;
  color: #2c3e50;
}

input[type="text"],
input[type="email"],
input[type="tel"],
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  box-sizing: border-box;
  font-size: 1rem;
}

textarea {
  height: 150px;
  resize: vertical;
}

.submit-btn {
  background-color: #1565c0;
  color: white;
  border: none;
  padding: 14px 20px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 6px;
  text-transform: uppercase;
  font-weight: bold;
  width: 100%;
  margin-top: 10px;
  transition: background-color 0.3s;
}

.submit-btn:hover {
  background-color: #0d47a1;
}

@media (max-width: 768px) {
  .form-row {
    flex-direction: column;
    gap: 0;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  .content-wrapper {
    flex-direction: column;
    gap: 30px;
  }
}
</style>