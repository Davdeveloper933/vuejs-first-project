<template>
  <div class="product-catalog-item"
  >
    <div class="movie-poster" >
      <router-link :to="'/product-item/'+ product.title">
        <img :src="require(`@/assets/images/watchmovies/${product.img}.jpg`)" alt="">
      </router-link>
    </div>
    <router-link :to="'/product-item/'+ product.title" class="d-block movie-text">
      <h5 class="movie-title">
        <a href="">{{product.title}}</a>
      </h5>
      <p class="movie-description">
        {{product.description}}
      </p>
      <StarsBlock
          :imdb-rating="product.rating"
      ></StarsBlock>
    </router-link>
  </div>
</template>

<script>
import StarsBlock from "@/components/StarsBlock";
export default {
name: "ProductsCatalogItem",
  components: {StarsBlock},
  props:["product"]
}
</script>