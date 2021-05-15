<template>
  <div class="home">
    <HomeSlider/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import HomeSlider from "../components/HomeSlider";
export default {
  name: 'Home',
  components: {HomeSlider},
  data(){
    return {

    }
  },
  computed: {

  },
  mounted() {

  }
}
</script>
