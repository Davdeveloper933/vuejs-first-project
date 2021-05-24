<template>
    <div class="products-catalog">
      <Intro>
        <span slot="intro_top">CHOOSE YOUR FAVORITE MOVIES</span>
        <span slot="intro_title">SHOP</span>
      </Intro>
      <DirectoryLinks></DirectoryLinks>
      <section class="container">
        <TitleTemplate
        >
          PRODUCT CATALOG
        </TitleTemplate>
        <div class="products">
          <div class="row justify-content-center" >
            <ProductsCatalogItem class="col-lg-3"
                 v-for="(item,index) in GET_ALL_CATEGORIES"
                 :key="index"
                 :product="item"
            >
            </ProductsCatalogItem>
          </div>
        </div>

      </section>
    </div>
</template>

<script>
import TitleTemplate from "@/components/TitleTemplate";
import DirectoryLinks from "@/components/DirectoryLinks";
import Intro from "@/components/Intro";
import {mapActions,mapGetters,mapMutations} from "vuex"
import ProductsCatalogItem from "@/components/ProductsCatalogItem";
export default {
name: "ProductsCatalog",
  components: {ProductsCatalogItem, Intro, DirectoryLinks, TitleTemplate},
  methods:{
    ...mapActions(["getProductCategories"]),
    ...mapMutations(["updateProductCategories"]),
  },
  computed:{
    ...mapGetters(["getCategories","GET_ALL_CATEGORIES"]),
  },
  created() {
    this.getProductCategories()
  }
}
</script>