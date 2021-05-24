<template>
  <div id="app" >
      <Header
          v-scroll="handleScroll"
          :class="{activeheader:triggered}"
      ></Header>
      <router-view/>
    <Footer/>
  </div>
</template>
<script>

  import Header from "@/components/Header";
  import Footer from "@/components/Footer";

  export default {
    name:'App',
    components: {Footer,Header},
    data() {
      return {
        triggered:false,
        // intersectionOptions: {
        //   root: null,
        //   rootMargin: '200px 0px 0px 0px',
        //   threshold: [0, 0.140] // [0.25, 0.75] if you want a 25% offset!
        // }
      }
    },
    methods: {

      handleScroll: function () {
        if (window.scrollY > 100) {
          this.triggered = true;
        }else {
          this.triggered = false;
        }
        // return window.scrollY > 100
      }

    },
    created() {
    },
    computed:{

    }
  }

</script>
