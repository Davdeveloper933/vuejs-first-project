<template>
  <div class="home-slider">
    <div class="container">
    <slick
        ref="slick"
        :options="slickOptions"
        @afterChange="handleAfterChange"
        @beforeChange="handleBeforeChange"
        @breakpoint="handleBreakpoint"
        @destroy="handleDestroy"
        @edge="handleEdge"
        @init="handleInit"
        @reInit="handleReInit"
        @setPosition="handleSetPosition"
        @swipe="handleSwipe"
        @lazyLoaded="handleLazyLoaded"
        @lazyLoadError="handleLazeLoadError">
        <div class="slider-item"
             v-for="item in sliderItems"
             :key="item.title"
        >
          <img :src="require(`@/assets/images/${item.src}`)" alt="" class="img-fluid w-100">
          <h2 class="film-title">{{ item.title }}</h2>
          <p class="film-desc">{{ item.desc }}</p>
        </div>
    </slick>
    </div>
  </div>
</template>

<script>
import Slick from 'vue-slick';
import 'slick-carousel/slick/slick.css';
export default {
  name: "HomeSlider",
  components:{Slick},
  data() {
      return {
        slickOptions: {
          slidesToShow: 2,
          autoplay:true,
          dots:true,
          arrows:false,
          // Any other options that can be got from plugin documentation
        },
        sliderItems:[
          {
            src:'slider-1-570x364.jpg',
            title:'IT (2017)',
            desc:'2017, USA, Drama, Horror, Thriller'
          },
          {
            src:'slider-2-570x364.jpg',
            title:'The Haunting of Hill House',
            desc:'2018, USA, Drama, Horror, Mystery'
          },
          {
            src:'slider-3-570x364.jpg',
            title:'First Man (2018)',
            desc:'2018, USA, Biography, Drama, History'
          },
          // {
          //   src:'slider-4-570x364.jpg',
          //   title:'Black Mirror',
          //   desc:'2011, USA, Drama, Sci-Fi, Thriller'
          // },
          // {
          //   src:'slider-5-570x364.jpg',
          //   title:'Daredevil',
          //   desc:'2015, USA, Drama, Sci-Fi, Thriller'
          // },
          // {
          //   src:'slider-6-570x364.jpg',
          //   title:'Stranger Things',
          //   desc:'2016, USA, Drama, Fantasy, Horror'
          // },
        ]
      }
  },
  methods: {
    next() {
      this.$refs.slick.next();
    },

    prev() {
      this.$refs.slick.prev();
    },

    reInit() {
      // Helpful if you have to deal with v-for to update dynamic lists
      this.$nextTick(() => {
        this.$refs.slick.reSlick();
      });
    },

    // Events listeners
    handleAfterChange(event, slick, currentSlide) {
      console.log('handleAfterChange', event, slick, currentSlide);
    },
    handleBeforeChange(event, slick, currentSlide, nextSlide) {
      console.log('handleBeforeChange', event, slick, currentSlide, nextSlide);
    },
    handleBreakpoint(event, slick, breakpoint) {
      console.log('handleBreakpoint', event, slick, breakpoint);
    },
    handleDestroy(event, slick) {
      console.log('handleDestroy', event, slick);
    },
    handleEdge(event, slick, direction) {
      console.log('handleEdge', event, slick, direction);
    },
    handleInit(event, slick) {
      console.log('handleInit', event, slick);
    },
    handleReInit(event, slick) {
      console.log('handleReInit', event, slick);
    },
    handleSetPosition(event, slick) {
      console.log('handleSetPosition', event, slick);
    },
    handleSwipe(event, slick, direction) {
      console.log('handleSwipe', event, slick, direction);
    },
    handleLazyLoaded(event, slick, image, imageSource) {
      console.log('handleLazyLoaded', event, slick, image, imageSource);
    },
    handleLazeLoadError(event, slick, image, imageSource) {
      console.log('handleLazeLoadError', event, slick, image, imageSource);
    },
  },

}
</script>
