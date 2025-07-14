<template>
  <div class="header-wrapper">
    <div class="header">
      <div class="header-container">
        <div class="logo-container" @click="Home">
          <img src="/Logo.png" alt="Weblinking Logo" class="logo">
        </div>

        <nav class="nav-items">
          <!-- Desktop Navigation -->
          <div class="dropdown" @mouseover="showDropdown" @mouseleave="hideDropdown">
            <div class="dropdown-title">Création site</div>
            <div class="dropdown-content">
              <NuxtLink to="/site_web_vitrine" class="dropdown-link">Site web vitrine</NuxtLink>
              <NuxtLink to="/site_web_ecommerce" class="dropdown-link">Site web e-commerce</NuxtLink>
              <NuxtLink to="/site_web_mobile" class="dropdown-link">Site web mobile</NuxtLink>
              <NuxtLink to="/site_web_one_page" class="dropdown-link">Site web one page</NuxtLink>
              <NuxtLink to="/blog_pro" class="dropdown-link">Création de blogs professionnal</NuxtLink>
            </div>
          </div>

          <div class="dropdown" @mouseover="showDropdown" @mouseleave="hideDropdown">
            <div class="dropdown-title">Référencement</div>
            <div class="dropdown-content">
              <NuxtLink to="/referencement_naturel" class="dropdown-link">Référencement naturel</NuxtLink>
              <NuxtLink to="/referencement_local" class="dropdown-link">Référencement local</NuxtLink>
              <NuxtLink to="/optimisation" class="dropdown-link">Optimisation</NuxtLink>
            </div>
          </div>

          <div class="dropdown" @mouseover="showDropdown" @mouseleave="hideDropdown">
            <div class="dropdown-title">Maintenance</div>
            <div class="dropdown-content">
              <NuxtLink to="/security_web" class="dropdown-link">Sécurité web</NuxtLink>
              <NuxtLink to="/qualite_site_web" class="dropdown-link">Qualité site web</NuxtLink>
              <NuxtLink to="/support_web" class="dropdown-link">Support web</NuxtLink>
              <NuxtLink to="/maintenance_web" class="dropdown-link">Maintenance web</NuxtLink>
            </div>
          </div>

          <div class="dropdown" @mouseover="showDropdown" @mouseleave="hideDropdown">
            <div class="dropdown-title">E-Marketing</div>
            <div class="dropdown-content">
              <NuxtLink to="/business_directory" class="dropdown-link">Business Directory</NuxtLink>
              <NuxtLink to="/content_marketing" class="dropdown-link">Content Marketing</NuxtLink>
              <NuxtLink to="/search_engine_marketing" class="dropdown-link">Search Engine Marketing</NuxtLink>
              <NuxtLink to="/pay_per_click" class="dropdown-link">Pay Per Click Management</NuxtLink>
            </div>
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

function showDropdown(event) {
  const dropdown = event.currentTarget
  dropdown.querySelector('.dropdown-content').style.display = 'block'
}

function hideDropdown(event) {
  const dropdown = event.currentTarget
  dropdown.querySelector('.dropdown-content').style.display = 'none'
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

.dropdown-title {
  color: white;
  padding: 10px 15px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  font-size: 0.9rem;
  height: 40px;
  display: flex;
  align-items: center;
}

.dropdown-title:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.dropdown-content {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #2c3e50;
  min-width: 200px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
  z-index: 1;
  border-radius: 0 0 6px 6px;
  overflow: hidden;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown-link {
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  transition: background-color 0.3s ease;
}

.dropdown-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
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
  position: relative;
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
.mobile-nav-select option {
  background-color: #34495e;
  color: white;
  padding: 10px;
}

/* Additional fix for Firefox */
.mobile-nav-select {
  color: white;
}

.mobile-nav-select option:checked {
  background-color: #3498db;
}

/* For Chrome/Safari */
@media screen and (-webkit-min-device-pixel-ratio:0) {
  .mobile-nav-select {
    color: white;
  }
  
  .mobile-nav-select option {
    background-color: #2c3e50;
    color: white;
  }
}

/* For IE */
@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  .mobile-nav-select {
    color: white;
  }
  
  .mobile-nav-select option {
    background-color: #2c3e50;
    color: white;
  }
}
</style>