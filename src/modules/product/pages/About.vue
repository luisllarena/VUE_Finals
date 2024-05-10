<template>
  <div class="about">
    <h1>About Us</h1>
    <p>Welcome to PetPals Paradise, your ultimate destination for all things pets! Founded by Aimee Soriano, Gericho Nolasco, Luis Llarena, Diego Jumagdao, and John Villamor, PetPals is a passion project born out of our love for animals.</p>
    <p>At PetPals, we believe that every pet deserves a loving home, and we're dedicated to helping you find the perfect furry friend to bring into your life. Whether you're looking for a loyal dog, a playful cat, or any other type of pet, we've got you covered.</p>
    <p>Our team is committed to providing top-quality products and services to ensure the happiness and well-being of both you and your pet. From premium pet food and toys to cozy beds and stylish accessories, we've curated an extensive selection of items to meet all your pet care needs.</p>
    <p>Join us in our mission to make the world a better place for pets and pet owners alike. Explore our store today and discover the joy of pet companionship with PetPals!</p>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'About',

  setup() {
    const store = useStore()

    store.dispatch('products/getProducts', '')

    return {
      products: computed(() => store.state.products.products)
    }
  }
}
</script>
