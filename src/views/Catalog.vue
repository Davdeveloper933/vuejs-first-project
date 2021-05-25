<template>
  <div class="catalog">
    <Intro>
      <span slot="intro_top">BROWSE OUR MOVIES</span>
      <span slot="intro_title">CATALOG</span>
    </Intro>
    <DirectoryLinks></DirectoryLinks>
    <section class="container">
      <TitleTemplate
      >
        WATCH MOVIES ONLINE
      </TitleTemplate>
      <div class="row justify-content-center">
        <div class="col-12">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-xl-8">
                <form action="" class="d-flex">
                  <div class="input-wrapper">
                    <input type="text" placeholder="Find movies...">
                    <select name="" id=""
                            v-model="selected"
                    >
                      <option :value="category.category"
                              v-for="(category,index) in getCategories"
                              :key="index"
                      >{{category.category}}</option>
                    </select>
                    {{selected}}
                  </div>
                  <div class="button-wrapper">
                    <button type="button">Search</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="movies">
      <div class="container">
<!--        -->
        <div class="movies-list row" v-for="(item,index) in filterCategories" :key="index">
<!--          {{ item}}-->
          <div class="movie-item col-lg-3" v-for="(item,index) in item.children" :key="index">
            <div class="movie-poster" >
              <img :src="require(`../assets/images/watchmovies/${item.img}.jpg`)" alt="">
            </div>
            <div class="movie-text">
              <h5 class="movie-title">
                <a href="">{{item.title}}</a>
              </h5>
              <p class="movie-description">
                {{item.description}}
              </p>
              <StarsBlock
                  :imdb-rating="item.rating"
              ></StarsBlock>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TitleTemplate from "@/components/TitleTemplate";
import DirectoryLinks from "@/components/DirectoryLinks";
import Intro from "@/components/Intro";
// import StarsBlock from "@/components/StarsBlock";
import {mapMutations,mapGetters,mapActions} from "vuex";
import StarsBlock from "@/components/StarsBlock";
export default {
name: "Catalog",
  components: {StarsBlock, Intro, DirectoryLinks, TitleTemplate},
  data() {
    return {
      categories:[],
      selected:'All Categories'
    }
  },
  methods:{
    ...mapActions(["getProductCategories"]),
    ...mapMutations(["updateProductCategories"]),
    // filterCategories(selected) {
    //   this.getCategories.filter((item)=> {
    //     if(item.category === selected) {
    //       this.getAllCategories = item.children
    //       return this.getAllCategories
    //     }
    //   })
    //
    // }
  },
  computed:{
    ...mapGetters(["getCategories"]),
    // getAllCategories() {
    //   this.getCategories.forEach((item)=>{
    //     item.children.forEach((value)=> {
    //       this.categories.push(value)
    //     })
    //   })
    //   return [...new Map(this.categories.map(item => [item.title, item])).values()]
    // },
    filterCategories() {
      if(this.selected === 'All Categories') {
          return this.getCategories
      }else {
        return this.getCategories.filter((item)=> {
            if(item.category === this.selected) {
              return item
            }
        })
      }
    }
  },
  created() {
    this.getProductCategories()
  }
}
</script>

<style scoped>

</style>