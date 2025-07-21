<template>
  <Header />
  <h1 style="font-size: 4vw;font-weight: bold;text-align: center;">Garanties</h1>
  <div class="mission-container">
    <div class="mission-content">
      <h2 class="mission-title">
        Notre mission est de vous satisfaire
      </h2>
      <p class="mission-text">
        Nous consacrons tout notre savoir-faire à vous fournir un travail perfectionné vous permettant d'arriver aux résultats espérés.
      </p>

      <div class="highlight-section">
        <h2 class="highlight-title">
          Satisfaction avant paiement
        </h2>
        <div class="highlight-content">
          <p class="highlight-text">
            Dans notre travail, on se base toujours sur le principe de parfaire le résultat final afin de répondre aux besoins de nos clients conformément à leurs attentes. Dans le cas contraire, c'est-à-dire si le résultat n'a pas retenu la satisfaction du client, notre agence se décline de demander aucun paiement.
          </p>
          
          <div class="notice-box payment-notice">
            <h3 class="notice-title">Politique d'avance pour nouveaux clients</h3>
            <p class="notice-text">
              Une avance de 40% du montant de la valeur totale du service, est demandée pour les nouveaux clients qui n'ont pas de précédentes collaborations avec notre agence web agadir. Cette avance vise en premier lieu d'éliminer les demandes suspicieuses et les tentatives d'arnaqueurs de profiter gratuitement de nos prestations.
            </p>
          </div>
          
          <div class="process-steps">
            <div class="process-step">
              <div class="step-number">1</div>
              <p class="step-text">Client effectue une avance de 40% pour commencer le travail SEO</p>
            </div>
            
            <div class="process-step">
              <div class="step-number">2</div>
              <p class="step-text">Notre équipe améliore le positionnement du site</p>
            </div>
            
            <div class="process-step">
              <div class="step-number">3</div>
              <p class="step-text">Nous fournissons un rapport détaillé du nouveau classement</p>
            </div>
            
            <div class="process-step">
              <div class="step-number">4</div>
              <p class="step-text">Si satisfait, client paie les 60% restants. Sinon, remboursement intégral</p>
            </div>
          </div>
          
          <p class="highlight-text">
            L'avance de 40% ne concerne que les clients demandant de bénéficier de nos services pour la première fois. Par conséquent, aucune avance ne s'applique en cas de renouvellement de collaboration.
          </p>
        </div>
      </div>

      <h2 class="mission-title">
        Tests et évaluations pour un meilleur classement
      </h2>
      <div class="feature-box">
        <p class="feature-text">
          Le référencement Google se fait sur la base de plusieurs variables de classement. Notre équipe d'experts se charge de réaliser constamment des tests pour évaluer l'importance et l'impact de ces variables sur le référencement Google.
        </p>
        <p class="feature-text">
          Les résultats des tests effectués nous permettent de préciser les mots clés adéquats et les plus pertinents, et ainsi d'assurer le classement idéal pour les sites de nos clients.
        </p>
      </div>

      <h2 class="mission-title">
        Actualisation des algorithmes Google
      </h2>
      <div class="feature-box algorithm-box">
        <p class="feature-text">
          Pour ne présenter à ses internautes que les meilleurs résultats, Google utilise des algorithmes de référencement et de filtrage qui sont en perpétuelle actualisation et qui lui permet d'identifier les contenus de qualité qui méritent de s'afficher dans les pages avancées de recherche Google.
        </p>
        <p class="feature-text">
          Le fait que ces algorithmes sont variables et en changement permanent affecte directement et considérablement le positionnement des sites de nos clients en fonction des règles de classement prescrits par Google.
        </p>
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
.mission-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: 'Raleway', sans-serif;
  color: var(--text-dark);
  line-height: 1.6;
}

.mission-content {
  max-width: 800px;
  margin: 0 auto;
}

/* === Typography === */
.mission-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.6rem;
  color: var(--brown-dark);
  margin: 2.5rem 0 1.2rem;
  position: relative;
}

.mission-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 60px;
  height: 2px;
  background: var(--blue-dark);
}

.mission-text {
  font-size: 0.95rem;
  color: var(--text-dark);
  margin-bottom: 1.8rem;
}

/* === Highlight Section === */
.highlight-section {
  background-color: rgba(245, 245, 245, 0.7);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  margin: 2rem 0;
  border-left: 4px solid var(--blue-dark);
}

.highlight-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  color: var(--blue-dark);
  margin-bottom: 1.2rem;
}

.highlight-text {
  font-size: 0.95rem;
  color: var(--text-dark);
  margin-bottom: 1.2rem;
}

/* === Notice Box === */
.notice-box {
  background-color: rgba(101, 187, 106, 0.1);
  border-left: 4px solid var(--green-dark);
  padding: 1.2rem;
  margin: 1.5rem 0;
  border-radius: 0 var(--border-radius) var(--border-radius) 0;
}

.payment-notice {
  background-color: rgba(21, 101, 192, 0.05);
  border-left-color: var(--blue-dark);
}

.notice-title {
  font-size: 1.1rem;
  color: var(--green-dark);
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.payment-notice .notice-title {
  color: var(--blue-dark);
}

.notice-text {
  font-size: 0.9rem;
  color: var(--text-dark);
}

/* === Process Steps === */
.process-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.process-step {
  background: white;
  border-radius: var(--border-radius);
  padding: 1.2rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  text-align: center;
  transition: all 0.3s ease;
}

.process-step:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.step-number {
  width: 30px;
  height: 30px;
  background: var(--blue-dark);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 0.8rem;
  font-weight: bold;
}

.step-text {
  font-size: 0.85rem;
  color: var(--text-dark);
}

/* === Feature Boxes === */
.feature-box {
  background: white;
  border-radius: var(--border-radius);
  padding: 1.5rem;
  margin: 1.5rem 0;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.algorithm-box {
  border-top: 3px solid var(--green-dark);
}

.feature-text {
  font-size: 0.95rem;
  color: var(--text-dark);
  margin-bottom: 1rem;
}

/* === CTA Section === */
.cta-section {
  text-align: center;
  margin: 3rem 0 2rem;
  padding: 2rem;
  background: linear-gradient(135deg, rgba(93, 64, 55, 0.05) 0%, rgba(21, 101, 192, 0.05) 100%);
  border-radius: var(--border-radius);
}

.cta-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  color: var(--brown-dark);
  margin-bottom: 1.2rem;
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
  .mission-container {
    padding: 30px 15px;
  }
  
  .mission-title {
    font-size: 1.4rem;
  }
  
  .process-steps {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .mission-title {
    font-size: 1.3rem;
  }
  
  .highlight-section {
    padding: 1rem;
  }
  
  .cta-section {
    padding: 1.5rem;
  }
}
</style>