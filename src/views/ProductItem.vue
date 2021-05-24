<template>
<div class="product-item">
  <Intro>
    <span slot="intro_top">CHOOSE YOUR FAVORITE MOVIES</span>
    <span slot="intro_title">SINGLE MOVIE</span>
  </Intro>
  <DirectoryLinks></DirectoryLinks>
  <div class="container" >
    <input type="file" ref="file_input" @change="onChange">
    <span v-if="this.$refs.file_input">files: {{fileName}}</span>
      <div class="row justify-content-center">
        <div class="product-img">
          <img :src="allMovies['Poster']" alt="" class="img-fluid">
        </div>
        <div class="product-info">
            <h4 class="product-title">
              {{product.title}}, USA
            </h4>
          <div class="d-flex align-items-center">
            <StarsBlock
                :imdb-rating="this.allMovies.imdbRating"
            ></StarsBlock>
            <span class="cust-reviews">
              2 customer reviews
            </span>
          </div>
          <p>
            <span class="">Producer: </span>
            <span>Mervin Townsend</span>
          </p>
          <p>
            <span class="">Actors:</span>
            <span>David Oliver, Helen Price, Ethan Booth</span>
          </p>
          <p class="movie-plot">
            Id aliquet lectus proin nibh nisl. Ultrices dui sapien eget mi proin sed libero enim. Justo laoreet sit amet cursus sit amet. Est ultricies integer quis auctor elit. Erat velit scelerisque in dictum.
          </p>
          <div class="d-flex align-items-center">
            <div class="info-box">
              <span class="hd">HD</span>
              <span class="rating">16+</span>
            </div>
          </div>
          <h3 class="prod-price">{{ product.price }}</h3>
          <button class="add-to-cart" @click="ADD_TO_CART(product)">add to cart</button>
          {{this.$store.getters.getShoppingCart}}
          <div class="share-social">
            <span>Share:</span>
          </div>
        </div>
      </div>
  </div>
</div>
</template>

<script>
import Intro from "@/components/Intro";
import DirectoryLinks from "@/components/DirectoryLinks";
import {mapActions,mapGetters,mapMutations} from 'vuex'
import StarsBlock from "@/components/StarsBlock";
export default {
name: "ProductItem",
  components: {StarsBlock, DirectoryLinks, Intro},
  props:{
    currentProduct:{
      type:Object
    }
  },
  data() {
      return {
        fileName:null,
        product:{
          id:0,
          price:29,
          title:'ANT-MAN AND THE WASP',
          quantity:1,
          total:this.price
        }
      }
  },
  methods:{
    ...mapActions(["getPostsAction","getMovie"]),
    ...mapMutations(["ADD_TO_CART","CLEAR_CART"]),
    getData () {
      this.getPostsAction(26094334).then(response => {
        this.movieData = response.data;
      })
    },
    onChange() {
      this.fileName = this.$refs.file_input.files[0].name
    }
  },
  computed:{
    ...mapGetters(["allPosts","allTodos","allMovies","getShoppingCart"]),

  },
  created() {
    this.getMovie()
  },
  mounted() {

  }
}
</script>

<style scoped lang="scss">

.add-to-cart {
  background: lightgray;
  border-radius: 6px;
  padding: 10px 20px;
  color: red;
}

</style>
