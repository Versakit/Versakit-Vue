<script setup lang="ts">
import HeroSection from './components/HeroSection.vue'
import FeaturesSection from './components/FeaturesSection.vue'
import ComponentsSection from './components/ComponentsSection.vue'
import ContributorsSection from './components/ContributorsSection.vue'
</script>

<template>
  <div class="home-page">
    <HeroSection />
    <FeaturesSection />
    <ComponentsSection />
    <ContributorsSection />
  </div>
</template>

<style scoped>
.home-page {
  width: 100%;
  overflow-x: hidden;
}
</style>
