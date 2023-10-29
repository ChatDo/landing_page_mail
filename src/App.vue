<template>
  <Navbar/>
  <Accueil/>
  <Product/>
  <Forms/>
  <Footer/>
  <button class="bg-purple-700 w-full h-3" @click="scrollToTop" id="backToTopButton" v-show="showButton">
    Back to Top
  </button>
</template>

<script setup>
import Product from "./components/Product.vue";
import Navbar from "./components/Navbar.vue";
import Accueil from "@/components/Accueil.vue";
import Forms from "@/components/Forms.vue";
import Footer from "@/components/Footer.vue";
</script>

<script>
export default {
  data() {
    return {
      showButton: false
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // Optional for smooth scrolling
      });
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  handleScroll() {
    this.showButton = window.scrollY > 20;
  }
}
</script>
