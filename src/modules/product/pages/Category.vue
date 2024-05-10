<template>
  <main class="main">
    <div class="container">
      <!-- Sidebar -->
      <div class="page__sidebar">
        <!-- Filters -->
        <!-- Your existing filter implementation -->
      </div>

      <!-- Content -->
      <div class="page__content">
        <h1>Pets</h1>
        <div class="products">
          <!-- Hardcoded products -->
          <router-link
            :to="{ name: 'Product', params: { id: item.id, name: item.name, img: item.img } }"
            v-for="(item, index) in hardcodedProducts"
            :key="item.id"
            class="products__item"
          >
            <div class="card">
              <div class="card__image">
                <img
                  :src="item.img"
                  alt=""
                  class="card__img"
                />
              </div>
              <div class="card__title">
                {{ item.name }}
              </div>
              <div class="card__price">
                <span class="card__total-price">{{
                  formattedPrice(item.price)
                }}</span>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Category',

  data() {
    return {
      isBrandOpen: true,
      isColorOpen: true,
      selectedFilters: [],
      hardcodedProducts: [
        { id: 1, name: 'Dave the Labrador', price: 50000.00, img: require('@/assets/labra.jpg'), desc: 'hello i am a labrador'},
        { id: 2, name: 'Lucy the Chihuahua', price: 35000.00, img: require('@/assets/chua.jpg') },
        { id: 3, name: 'Odie the Japanese Spitz', price: 48000.00, img: require('@/assets/jap.jpg') },
        { id: 4, name: 'Yumi the Black Labrador', price: 48000.00, img: require('@/assets/blacklab.jpg') },
        // Add more hardcoded products as needed
      ]
    };
  },

  methods: {
    removeAll() {
      this.selectedFilters = [];
    },
    formattedPrice(price) {
      return new Intl.NumberFormat('en', {
        style: 'currency',
        currency: 'PHP'
      }).format(price);
    }
  }
};
</script>

<style></style>
