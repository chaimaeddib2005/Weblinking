<template>
  <Header />
  <div class="faq-container">
     <h1 style="font-size: 4vw;font-weight: bold;text-align: center;">Conditions générales de vente</h1>
    <div class="faq-content">
      <h2 class="faq-title">
        Comment effectuer une demande sur le site ?
      </h2>
      <p class="faq-text">
        Si vous souhaitez bénéficier de nos services, vous devez nous adresser votre demande en remplissant les champs de la rubrique contact : Nom et prénom, adresse email, numéro de téléphone, sans oublier de détailler votre demande et de préciser les services que vous souhaitez obtenir. Vous recevez une réponse sur votre demande le plus rapidement possible.
      </p>

      <h2 class="faq-title">
        Quels sont les modes de paiement acceptés ?
      </h2>
      <p class="faq-text">
        Tous nos clients n'ont pas les mêmes moyens de paiement, c'est pour cela que nous avons mis à leur disposition plusieurs modes de règlement. La liste ci-dessous contient les modes qu'on propose :
      </p>
      
      <div class="payment-methods">
        <div class="payment-method">
          <h3 class="payment-title">Virement bancaire</h3>
          <p class="payment-desc">Nous acceptons le virement bancaire pour régler vos commandes validées.</p>
        </div>
        
        <div class="payment-method">
          <h3 class="payment-title">Carte bancaire</h3>
          <p class="payment-desc">Vous pouvez régler votre paiement par carte bancaire et suivre instantanément l'opération. Le règlement par carte bancaire se fait en toute sécurité de vos données.</p>
        </div>
        
        <div class="payment-method">
          <h3 class="payment-title">PayPal</h3>
          <p class="payment-desc">Ce mode est de plus en plus adopté pour réaliser les transactions financières en ligne sans limites géographiques, fait partie de nos modes de paiement possibles.</p>
        </div>
        
        <div class="payment-method">
          <h3 class="payment-title">Payoneer</h3>
          <p class="payment-desc">Nous vous proposons également de payer directement et en ligne vos commandes via votre compte Payoneer.</p>
        </div>
        
        <div class="payment-method">
          <h3 class="payment-title">Skrill</h3>
          <p class="payment-desc">C'est un nouveau moyen de paiement qui permet d'effectuer rapidement les règlements à l'international et en sécurité totale de vos informations.</p>
        </div>
        
        <div class="payment-method">
          <h3 class="payment-title">Western Union</h3>
          <p class="payment-desc">Avec l'expansion de ses points de transfert d'argent disponibles dans presque tous les pays du monde et la rapidité des virements, beaucoup de personnes préfèrent Western Union comme moyen pour réaliser les transactions financières loin des modes en ligne.</p>
        </div>
        
        <div class="payment-method">
          <h3 class="payment-title">Mandat par poste</h3>
          <p class="payment-desc">C'est un autre choix que vous pouvez faire en vue de nous passer les montants relatifs à vos commandes.</p>
        </div>
      </div>
      
      <div class="notice-box">
        <h3 class="notice-title">À signaler</h3>
        <p class="notice-text">Nous veillons à ce que nos prestations et services fournis et présentés à nos clients soient de qualité et à la hauteur de leurs attentes, et nous n'acceptons que les modes de paiement assurant une sécurité à vos données. En contrepartie, on ne peut accepter en aucun cas tout genre de répudiation à peine qu'elle soit justifiée. Nous gardons dans les situations pareilles, le droit de présenter une plainte et de procéder à un suivi.</p>
      </div>

      <h2 class="faq-title">
        Acceptation ou refus de votre demande
      </h2>
      <p class="faq-text">
        L'agence peut refuser votre demande de référencement en cas de contenu suspicieux ou illégal ou qui inclut du spam.
      </p>

      <h2 class="faq-title">
        Affiliés et partenaires
      </h2>
      <p class="faq-text">
        Les partenaires de weblinking.ma et ses affiliés s'engagent à encourager les packs netlinking sans l'utilisation de moyens soupçonneux tels que les courriers électroniques non sollicités autrement appelés spam.
      </p>
      
      <h2 class="faq-title">
        Garantie sur nos services
      </h2>
      <p class="faq-text">
        Si le client se retrouve insatisfait du résultat de notre référencement et promotion de son site, ou qu'il n'a pas bénéficié de la prise en compte escomptée, nous nous engageons à soumettre gratuitement sa demande de référencement à une nouvelle évaluation si nous finissons par juger que l'erreur est de notre part.
      </p>
      
      <h2 class="faq-title">
        Modifications
      </h2>
      <p class="faq-text">
        L'agence Weblinking : agence web Agadir se permet de modifier les conditions générales de vente en tout moment et sans préavis.
      </p>
      
      <div class="cta-box">
        <h2 class="cta-title">On est à votre écoute</h2>
        <p class="cta-text">La satisfaction de nos clients est notre but majeur. Si vous souhaitez commencer un projet mais vous avez besoin d'aide, alors détendez-vous, nous serons à votre côté pour vous présenter tout accompagnement, conseils et solutions pour réussir votre projet. Nous avons pu gagner, au fil du temps, l'expérience et la confiance d'un grand nombre d'entreprises qui sont tout à fait satisfaites par notre collaboration.</p>
        <button class="cta-button">Contactez-nous</button>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup>
// No script logic needed for this page
</script>

<style scoped>
/* === Color Palette === */
:root {
  --brown-dark: #5D4037;
  --brown-light: #8D6E63;
  --blue-dark: #1565C0;
  --blue-light: #42A5F5;
  --green-dark: #2E7D32;
  --green-light: #66BB6A;
  --text-dark: #333333;
  --text-light: #666666;
  --bg-light: #F9F9F9;
  --border-radius: 8px;
}

/* === Base Styles === */
.faq-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: 'Raleway', sans-serif;
  color: var(--text-dark);
  line-height: 1.6;
}

.faq-content {
  max-width: 800px;
  margin: 0 auto;
}

/* === Typography === */
.faq-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  color: var(--brown-dark);
  margin: 2rem 0 1rem;
  position: relative;
  padding-bottom: 0.5rem;
}

.faq-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 2px;
  background: var(--blue-dark);
}

.faq-text {
  font-size: 0.95rem;
  color: var(--text-dark);
  margin-bottom: 1.5rem;
}

/* === Payment Methods === */
.payment-methods {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin: 1.5rem 0;
}

.payment-method {
  background: white;
  border: 1px solid #eee;
  border-radius: var(--border-radius);
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.payment-method:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  border-color: var(--blue-light);
}

.payment-title {
  font-size: 1.1rem;
  color: var(--blue-dark);
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.payment-desc {
  font-size: 0.9rem;
  color: var(--text-light);
}

/* === Notice Box === */
.notice-box {
  background-color: rgba(101, 187, 106, 0.1);
  border-left: 4px solid var(--green-dark);
  padding: 1.5rem;
  margin: 2rem 0;
  border-radius: 0 var(--border-radius) var(--border-radius) 0;
}

.notice-title {
  font-size: 1.1rem;
  color: var(--green-dark);
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.notice-text {
  font-size: 0.9rem;
  color: var(--text-dark);
}

/* === CTA Section === */
.cta-box {
  background-color: var(--bg-light);
  padding: 2rem;
  border-radius: var(--border-radius);
  margin: 3rem 0;
  text-align: center;
}

.cta-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  color: var(--brown-dark);
  margin-bottom: 1rem;
}

.cta-text {
  font-size: 0.95rem;
  color: var(--text-dark);
  margin-bottom: 1.5rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.cta-button {
  background-color: var(--blue-dark);
  color: white;
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 30px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
}

.cta-button:hover {
  background-color: var(--blue-light);
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

/* === Responsive Design === */
@media (max-width: 768px) {
  .faq-container {
    padding: 30px 15px;
  }
  
  .payment-methods {
    grid-template-columns: 1fr;
  }
  
  .faq-title {
    font-size: 1.3rem;
  }
}

@media (max-width: 480px) {
  .faq-title {
    font-size: 1.2rem;
  }
  
  .cta-box {
    padding: 1.5rem;
  }
}
</style>