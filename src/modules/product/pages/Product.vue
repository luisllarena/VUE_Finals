<template>
  <div>
    <div id="modal__gallery" class="modal" v-show="isShowingModal">
      <div class="modal__content">
        <span class="modal__close" @click="closeModal">&times;</span>
        <div class="modal__body" tabindex="0" @focusout="closeModal">
          <img :src="modalImage" class="show__gallery" />
        </div>
      </div>
    </div>
    <main class="main">
      <div class="container">
        <ul class="breadcrumb">
          <li class="breadcrumb__item breadcrumb__item--hide">
            <a href="" class="breadcrumb__link"
              ><span class="breadcrumb__span">Home</span></a
            >
          </li>
          <li class="breadcrumb__item">
            <a href="" class="breadcrumb__link"
              ><span class="breadcrumb__span">Pets</span></a
            >
          </li>
          <li class="breadcrumb__item">
            <a href="" class="breadcrumb__link"
              ><span class="breadcrumb__span"
                >Pet number {{ $route.params.id }}</span
              ></a
            >
          </li>
        </ul>
        <div class="product">
          <div class="product__header">
            <div class="product__row">
              <div class="prodcut__gallery">
                <div class="gallery">
                  <div class="gallery__slideshow">
                    <span class="gallery__count">
                      <span class="gallery__number1">{{ slideIndex + 1 }}</span>
                      <span class="gallery__number2">{{
                        gallerySlides.length
                      }}</span>
                    </span>
                    <div class="gallery__slides">
                      <div class="gallery__slide">
                        <img
                          class="gallery__img"
                          :src="slide.img"
                          alt=""
                          v-for="(slide, index) in gallerySlides"
                          :key="index"
                          :style="
                            slideIndex === index
                              ? 'display:block;'
                              : 'display:none;'
                          "
                          @click="showModal(slide.img)"
                        />
                      </div>
                    </div>
                    <a @click.prevent="move(-1)" class="gallery__prev"
                      >&#10095;</a
                    >
                    <a @click.prevent="move(1)" class="gallery__next"
                      >&#10094;</a
                    >
                  </div>
                  <div class="gallery__content">
                    <div class="gallery__items">
                      <div
                        class="gallery__item"
                        :class="{
                          'gallery__item--is-acitve': slideIndex === index
                        }"
                        v-for="(slide, index) in gallerySlides"
                        :key="`item-${index}`"
                      >
                        <img
                          :src="slide.img"
                          @click="currentSlide(index)"
                          class="gallery__item-img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="product__left">
                <div class="product__category">Pets</div>
                <div class="product__info">
                  <h1 class="product__title">{{ product?.name }}</h1>
                </div>
                <div>
                  <button
                    class="btn btn--boxshadow btn--brand"
                    @click="addItem(product)"
                  >
                    Add to Cart
                  </button>
                </div>
                <div class="controls"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import SwiperSlider from '../components/SwiperSlider'
import CompareTab from '../components/CompareTab'
import CommentsTab from '../components/CommentsTab'
import FeaturesTab from '../components/FeaturesTab'
import moment from 'moment'
import '../assets/css/modal.css'

import axios from 'axios'

import { SET_PRODUCTS_MUTATIONS } from '@/modules/product/store/types'
import { mapMutations, mapState, mapActions, mapGetters } from 'vuex'

export default {
  name: 'Product',

  components: {
    SwiperSlider,
    CompareTab,
    CommentsTab,
    FeaturesTab
  },

  data() {
    return {
      dateCountDown: moment('2021-08-07 00:00:00'),
      diff: null,
      countDownInterval: null,
      gallerySlides: [], // Update this array dynamically
      ratings: [
        { width: 100, title: 'awesome' },
        { width: 80, title: 'good' },
        { width: 60, title: 'normal' },
        { width: 40, title: 'weak' },
        { width: 20, title: 'bad' }
      ],
      slideIndex: 0,
      isShowingModal: false,
      modalImage: null,
      rateWidth: 0,
      showRate: true,
      selectedColor: '',
      colorsOptions: ['red', 'green', 'blue'],
      selectedLang: [],
      langOptions: [
        { name: 'Vue.js', language: 'JavaScript' },
        { name: 'Adonis', language: 'JavaScript' },
        { name: 'Rails', language: 'Ruby' },
        { name: 'Sinatra', language: 'Ruby' },
        { name: 'Laravel', language: 'PHP' },
        { name: 'Phoenix', language: 'Elixir' }
      ],
      slides: [
        { img: require('@/assets/img/slideshow/1.png') },
        { img: require('@/assets/img/slideshow/2.png') },
        { img: require('@/assets/img/slideshow/3.png') },
        { img: require('@/assets/img/slideshow/4.png') }
      ],
      activeTab: 'compare',
      product: {}
    }
  },

  computed: {
    ...mapState('cart', ['items']),
    ...mapGetters('products', ['products'])
  },

  methods: {
    move(n) {
      if (this.gallerySlides.length <= this.slideIndex + n) {
        this.slideIndex = 0
      } else if (this.slideIndex + n < 0) {
        this.slideIndex = this.gallerySlides.length - 1
      } else {
        this.slideIndex += n
      }
    },
    currentSlide(index) {
      this.slideIndex = index
    },
    showModal(image) {
      this.isShowingModal = true
      this.modalImage = image
      document.body.style.overflow = 'hidden'
    },
    closeModal() {
      this.isShowingModal = false
      document.body.style.overflow = 'unset'
    },
    handleMouseover() {
      this.showRate = false
    },
    handleMouseleave() {
      this.showRate = true
    },
    formattedPrice(price) {
      return new Intl.NumberFormat('en', {
        style: 'currency',
        currency: 'PHP'
      }).format(price)
    },
    ...mapMutations('products', [SET_PRODUCTS_MUTATIONS]),
    ...mapActions('cart', ['addItem'])
  },

  created() {
    this.countDownInterval = setInterval(() => {
      let diffTime = this.dateCountDown.diff(moment())
      let durationTime = moment.duration(diffTime)
      this.diff = `${Math.floor(
        durationTime.asDays()
      )}:${durationTime.hours()}:${durationTime.minutes()}:${durationTime.seconds()}`
    }, 1000)

    // Retrieve product details from route params
    const productId = parseInt(this.$route.params.id)
    const productName = this.$route.params.name
    const productImg = this.$route.params.img

    // Set the product object with retrieved details
    this.product = {
      id: productId,
      name: productName,
      img: productImg
    }

    // Dynamically set gallerySlides based on productImg
    this.gallerySlides = [{ img: productImg }];
  },

  unmounted() {
    clearInterval(this.countDownInterval)
  }
}
</script>
