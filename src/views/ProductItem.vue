<template>
<div class="product-item">
  <Intro>
    <span slot="intro_top">CHOOSE YOUR FAVORITE MOVIES</span>
    <span slot="intro_title">SINGLE MOVIE</span>
  </Intro>
  <DirectoryLinks></DirectoryLinks>
  <div class="container"
       :key="index"
       v-for="(item,index) in getSingleProduct"
  >
      <div class="row justify-content-center">
        <div class="product-img">
          <img :src="require(`@/assets/images/watchmovies/${item.img}.jpg`)" alt="" class="img-fluid">
        </div>
        <div class="product-info">
            <h4 class="product-title">
              {{item.title}}
            </h4>
          <div class="d-flex align-items-center">
            <StarsBlock
                :imdb-rating="item.rating"
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
            <span>{{ item.Actors}}</span>
          </p>
          <p class="movie-plot">
            {{ item.Plot}}
          </p>
          <div class="d-flex align-items-center">
            <div class="info-box">
              <span class="hd">HD</span>
<!--              <span class="rating">{{getCurrentProduct.Rated}}</span>-->
            </div>
          </div>
          <h3 class="prod-price">{{ item.price }}</h3>
          <button class="add-to-cart" @click="ADD_TO_CART(item)">add to cart</button>
          <div class="share-social">
            <span>Share:</span>
          </div>
          {{getShoppingCart}}
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
        product:{}
      }
  },
  methods:{
    ...mapActions(["getPostsAction","getCurrentProductData"]),
    ...mapMutations(["ADD_TO_CART","CLEAR_CART"]),

  },
  computed:{
    ...mapGetters(["allPosts","allTodos","getShoppingCart","getCurrentProduct","GET_ALL_SINGLE_PRODUCTS"]),
    getSingleProduct:function () {
      return this.GET_ALL_SINGLE_PRODUCTS.filter((value) => {
          if(value.title === this.$route.params.movie) return value
      })
    },
  },
  created() {

  },
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
