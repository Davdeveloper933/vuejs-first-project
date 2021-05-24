<template>
  <div class="stars-block d-inline-block overflow-hidden position-relative">
    <div class="rated-stars d-flex position-absolute" :style="{width:`${this.imdbRating*10}%`}">
      <span class="star"></span>
      <span class="star"></span>
      <span class="star"></span>
      <span class="star"></span>
      <span class="star"></span>
    </div>
    <div class="unrated-stars d-flex">
      <span class="star"></span>
      <span class="star"></span>
      <span class="star"></span>
      <span class="star"></span>
      <span class="star"></span>
    </div>
  </div>
</template>

<script>
import {mapGetters,mapActions,mapMutations} from "vuex"
export default {
name: "StarsBlock",
  // props:{
  //   imdbRating:{
  //     type:Number,
  //   }
  // },
  props:['imdbRating'],
  methods:{
    ...mapActions(["getPostsAction","getMovie"]),
    ...mapMutations(["updateMovies"])
  },
  computed:{
    ...mapGetters(["allPosts","allTodos","allMovies"]),
  },
  created() {
    this.getMovie()
    this.updateMovies(this.allMovies)

  },
}
</script>

<style scoped>

</style>