<template>
  <div class="header-wrapper">
    <div class="header">
      <div class="header-container">
        <div class="logo-container" @click="Home">
          <img src="/logo.png" alt="Weblinking Logo" class="logo">
        </div>

        <nav class="nav-items">
          <!-- Desktop Navigation -->
          <div class="dropdown">
            <select @change="navigate" class="nav-select">
              <option disabled selected>Création site</option>
              <option value="/site_web_vitrine">Site web vitrine</option>
              <option value="/site_web_ecommerce">Site web e-commerce</option>
              <option value="/site_web_mobile">Site web mobile</option>
              <option value="/site_web_one_page">Site web one page</option>
              <option value="/blog_pro">Création de blogs professionnal</option>
            </select>
          </div>

          <div class="dropdown">
            <select @change="navigate" class="nav-select">
              <option selected disabled>Référencement</option>
              <option value="/referencement_naturel">Référencement naturel</option>
              <option value="/referencement_local">Référencement local</option>
              <option value="/optimisation">Optimisation</option>
            </select>
          </div>

          <div class="dropdown">
            <select @change="navigate" class="nav-select">
              <option selected disabled>Maintenance</option>
              <option value="/security_web">Sécurité web</option>
              <option value="/qualite_site_web">Qualité site web</option>
              <option value="/support_web">Support web</option>
              <option value="/maintenance_web">Maintenance web</option>
            </select>
          </div>

          <div class="dropdown">
            <select @change="navigate" class="nav-select">
              <option selected disabled>E-Marketing</option>
              <option value="/business_directory">Business Directory</option>
              <option value="/content_marketing">Content Marketing</option>
              <option value="/search_engine_marketing">Search Engine Marketing</option>
              <option value="/pay_per_click">Pay Per Click Management</option>
            </select>
          </div>

          <NuxtLink to="/realisations" class="nav-link">Réalisations</NuxtLink>
          <NuxtLink to="/contacts" class="nav-link">Contact</NuxtLink>
        </nav>

        <div class="mobile-menu">
          <i @click="toggleMenu" class="fas fa-bars menu-icon"></i>
        </div>
      </div>

      <!-- Mobile Menu Content -->
      <div v-if="menuOpen" class="mobile-menu-content">
        <div class="mobile-nav-items">
          <div class="mobile-dropdown">
            <select @change="navigate" class="mobile-nav-select">
              <option disabled selected>Création site</option>
              <option value="/site_web_vitrine">Site web vitrine</option>
              <option value="/site_web_ecommerce">Site web e-commerce</option>
              <option value="/site_web_mobile">Site web mobile</option>
              <option value="/site_web_one_page">Site web one page</option>
              <option value="/blog_pro">Création de blogs professionnal</option>
            </select>
          </div>

          <div class="mobile-dropdown">
            <select @change="navigate" class="mobile-nav-select">
              <option selected disabled>Référencement</option>
              <option value="/referencement_naturel">Référencement naturel</option>
              <option value="/referencement_local">Référencement local</option>
              <option value="/optimisation">Optimisation</option>
            </select>
          </div>

          <div class="mobile-dropdown">
            <select @change="navigate" class="mobile-nav-select">
              <option selected disabled>Maintenance</option>
              <option value="/security_web">Sécurité web</option>
              <option value="/qualite_site_web">Qualité site web</option>
              <option value="/support_web">Support web</option>
              <option value="/maintenance_web">Maintenance web</option>
            </select>
          </div>

          <div class="mobile-dropdown">
            <select @change="navigate" class="mobile-nav-select">
              <option selected disabled>E-Marketing</option>
              <option value="/business_directory">Business Directory</option>
              <option value="/content_marketing">Content Marketing</option>
              <option value="/search_engine_marketing">Search Engine Marketing</option>
              <option value="/pay_per_click">Pay Per Click Management</option>
            </select>
          </div>

          <NuxtLink to="/realisations" class="mobile-nav-link" @click="toggleMenu">Réalisations</NuxtLink>
          <NuxtLink to="/contacts" class="mobile-nav-link" @click="toggleMenu">Contact</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const router = useRouter()
const menuOpen = ref(false)

function navigate(event) {
  const path = event.target.value
  if (path) {
    router.push(path)
    menuOpen.value = false
  }
}

function Home() {
  router.push('/')
}

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}
</script>

<style scoped>
.header-wrapper {
  width: 100%;
  background-color: #2c3e50;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.header {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
}

.logo-container {
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
}

.logo {
  height: 50px;
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.05);
}

.nav-items {
  display: flex;
  align-items: center;
  gap: 12px;
  height: 100%;
}

.dropdown {
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
}

.nav-select {
  background-color: transparent;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 6px;
  padding: 10px 15px;
  font-size: 0.9rem;
  cursor: pointer;
  appearance: none;
  transition: all 0.3s ease;
  min-width: 150px;
  height: 40px;
}

.nav-select:hover {
  border-color: rgba(255, 255, 255, 0.6);
  background-color: rgba(255, 255, 255, 0.05);
}

.nav-select:focus {
  outline: none;
  border-color: #3498db;
  box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.3);
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 10px 15px;
  border-radius: 6px;
  transition: all 0.3s ease;
  white-space: nowrap;
  font-size: 0.9rem;
  height: 40px;
  display: flex;
  align-items: center;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

/* Mobile Menu Styles */
.mobile-menu {
  display: none;
}

.menu-icon {
  font-size: 1.8rem;
  cursor: pointer;
  color: white;
  padding: 10px;
}

.mobile-menu-content {
  background-color: #34495e;
  padding: 20px;
  width: 100%;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.mobile-nav-items {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.mobile-dropdown {
  width: 100%;
}

.mobile-nav-select {
  width: 100%;
  padding: 12px 15px;
  background-color: #2c3e50;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  font-size: 0.9rem;
  appearance: none;
}

.mobile-nav-link {
  display: block;
  color: white;
  text-decoration: none;
  padding: 12px 15px;
  border-radius: 6px;
  background-color: rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.mobile-nav-link:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.dropdown::after {
  content: "▼";
  font-size: 0.6rem;
  color: white;
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}

.mobile-dropdown::after {
  content: "▼";
  font-size: 0.6rem;
  color: white;
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}

/* Responsive Styles */
@media (max-width: 1024px) {
  .nav-items {
    display: none;
  }

  .mobile-menu {
    display: flex;
    align-items: center;
    margin-left: auto;
  }
  
  .header-container {
    padding: 0 15px;
  }
}

@media (min-width: 1025px) {
  .mobile-menu-content {
    display: none;
  }
}
/* Style for the select dropdown options */
.nav-select option {
  background-color: #2c3e50; /* Same as header background */
  color: white;
  padding: 10px;
}

.mobile-nav-select option {
  background-color: #34495e; /* Same as mobile menu background */
  color: white;
  padding: 10px;
}

/* Additional fix for Firefox */
.nav-select,
.mobile-nav-select {
  color: white;
}

.nav-select option:checked,
.mobile-nav-select option:checked {
  background-color: #3498db; /* Highlight color for selected option */
}

/* For Chrome/Safari */
@media screen and (-webkit-min-device-pixel-ratio:0) {
  .nav-select,
  .mobile-nav-select {
    color: white;
  }
  
  .nav-select option,
  .mobile-nav-select option {
    background-color: #2c3e50;
    color: white;
  }
}

/* For IE */
@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  .nav-select,
  .mobile-nav-select {
    color: white;
  }
  
  .nav-select option,
  .mobile-nav-select option {
    background-color: #2c3e50;
    color: white;
  }
}
</style>