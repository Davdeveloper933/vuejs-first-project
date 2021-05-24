<template>
  <div class="home">
    <HomeSlider/>
    <WatchMovies/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import HomeSlider from "@/components/HomeSlider";
import WatchMovies from "@/components/WatchMovies";
export default {
  name: 'Home',
  components: {WatchMovies, HomeSlider}
}
</script>
