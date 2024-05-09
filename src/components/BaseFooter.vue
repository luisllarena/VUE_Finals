<template>
  <footer class="footer">
    <span class="scroll__top" @click="goTop" v-show="showScrollTop"></span>
    <div class="footer__top">
      <div class="container">
        <div class="footer__row">
          <div class="footer__getcall">
            <img src="img/orange.jpg" alt="" />
            <div class="footer__getcall-info">
              <h3 class="footer__getcall-h3">Contact Us</h3>
              <span class="gooter__getcall-span">Any questions? Ask us!</span>
            </div>
          </div>
          <div class="footer__info">
            <span class="footer__info-span">Email: petpalsparadise@gmail.com</span>
            <br>
            <br>
            <span class="footer__info-span margin--right-10">
              Tel : 1023233030</span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="footer__main">
      <div class="container">
        <div class="footer__hr"></div>
        <div class="footer__about">
          <p class="footer__txt">
            © 2024 Pet Pals Paradise. All rights reserved.

All content, including text, images, graphics, and other materials on this website, is the property of Pet Pals Paradise or its content suppliers and is protected by United States and international copyright laws. The compilation of all content on this site is the exclusive property of [Your Website Name] and protected by U.S. and international copyright laws.

Unauthorized use, reproduction, or distribution of any content from this site is strictly prohibited. You may not modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any information, software, products, or services obtained from this website.

For inquiries regarding the use of content from this website, please contact at petpalsparadise@gmai.com
          </p>
        </div>
      </div>
      <div class="footer__team">
        design with &#x02665; by
        <a href="" class="footer__copy">mohammad nikoo &amp; tofiq hamza</a>
        © 2021
      </div>
    </div>
    <div class="overlay" :class="{ 'overlay--is-active': showSideBar }"></div>
  </footer>
</template>

<script>
export default {
  name: 'BaseFooter',

  props: {
    showSideBar: {
      type: Boolean,
      required: true
    }
  },

  data: () => ({
    showScrollTop: false,
    scrollTimeout: null
  }),

  methods: {
    handleScroll() {
      if (this.scrollTimeout) return

      console.log('user scrolled')

      this.scrollTimeout = setTimeout(() => {
        this.showScrollTop = window.scrollY > 200

        clearTimeout(this.scrollTimeout)
        this.scrollTimeout = 0
      }, 150)
    },
    goTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  },

  mounted() {
    document.addEventListener('scroll', this.handleScroll)
  },

  unmounted() {
    document.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style></style>
