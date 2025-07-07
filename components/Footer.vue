<template>
    <footer class="footer">
        <div class="footer-content">
            <div class="footer-brand">
                <img src="/Logo.png" alt="Weblinking Logo" class="footer-logo">
            </div>
      
            <div class="footer-section">
                <h2>INFORMATIONS</h2>
                <ul>
                    <li><NuxtLink to="/qui-sommes-nous">Qui sommes nous</NuxtLink></li>
                    <li><NuxtLink to="/mentions-legales">Mentions legales</NuxtLink></li>
                    <li><NuxtLink to="/condition-general-de-vente">Condition général de vente</NuxtLink></li>
                    <li><NuxtLink to="/garanties">Garanties</NuxtLink></li>
                    <li><NuxtLink to="/blog">Blog</NuxtLink></li>
                </ul>
            </div>
      
            <div class="footer-section">
                <h2>Contact</h2>
                <address>
                    <p>Adresse:</p>
                    <p>
                        <a 
                            href="https://maps.google.com?q=Weblinking, App N° 115, 1er étage, Imm 04, Résidence Tarik El Kheir 6, Agadir 80000" 
                            target="_blank"
                            class="contact-link"
                        >
                            Weblinking, App N° 115, 1er étage, Imm 04<br>
                            Résidence Tarik El Kheir 6, Agadir 80000
                        </a>
                    </p>
                    <p>
                        <a 
                            href="tel:+212660222231" 
                            class="contact-link"
                        >
                            Phone: +212-660-22-22-31
                        </a>
                    </p>
                    <p>
                        <a 
                            href="mailto:contact@web.weblinking.fr" 
                            class="contact-link"
                        >
                            Email: contact@web.weblinking.fr
                        </a>
                    </p>
                </address>
            </div>
        </div>
    
        <div class="footer-copyright">
            <p>© 2020 Weblinking Sart . All Rights Reserved.</p>
        </div>
    </footer>
</template>

<style scoped>
.footer {
    background-color: #363535;
    color: white;
    padding: 2rem;
    font-family: Arial, sans-serif;
}

.footer-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    gap: 2rem;
}

.footer-logo {
    height: 40px;
    margin-bottom: 0.5rem;
}

.footer-section {
    flex: 1;
    min-width: 200px;
}

.footer-section h2 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
}

.footer-section ul {
    list-style: none;
    padding: 0;
}

.footer-section ul li {
    margin-bottom: 0.5rem;
}

.footer-section a {
    color: #ede5e5;
    text-decoration: none;
}

.footer-section a:hover {
    text-decoration: underline;
}

address p {
    margin: 0.25rem 0;
}

.contact-link {
    color: #ede5e5;
    text-decoration: none;
    transition: color 0.2s ease;
}

.contact-link:hover {
    color: #ffffff;
    text-decoration: underline;
}

.footer-copyright {
    text-align: center;
    margin-top: 2rem;
    padding-top: 1rem;
    border-top: 1px solid #ddd;
}

@media (max-width: 768px) {
    .footer-content {
        flex-direction: column;
    }
    
    .footer-section {
        margin-bottom: 1.5rem;
    }
}
</style>