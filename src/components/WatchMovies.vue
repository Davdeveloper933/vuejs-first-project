<template>
    <section class="watch-movies">
      <div class="container">
        <TitleTemplate
        >
          WATCH MOVIES ONLINE
        </TitleTemplate>

        <div class="tabs-container d-flex justify-content-center">
            <button class="tab active">Top Rated</button>
            <button class="tab">New Releases</button>
            <button class="tab">Coming Soon</button>
        </div>
        <div class="watchlist-filter">
          <div class="">
            <isotope :options='option' class="row" id="root_isotope" :list="topRated" @filter="filterOption=arguments[0]" @sort="sortOption=arguments[0]">
            <div class="col-3"
                 v-for="movie in topRated"
                 :key="movie.title"
            >
              <div>
                <img :src="require(`@/assets/images/watchmovies/${movie.src}`)" alt="">
                <div>
                  <h2 class="filter-item-title">{{ movie.title}}</h2>
                  <p class="filter-item-desc">{{ movie.desc }}</p>
                  <div class="stars">
                    <span class="star-icon"></span>
                  </div>
                </div>
              </div>
            </div>
            </isotope>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
import TitleTemplate from "@/components/TitleTemplate";

export default {
  name: "WatchMovies",
  components: {TitleTemplate},
  data() {
    return {
      option: {
        getSortData: {
          id: "id"
        },
        sortBy : "id"
      },
      topRated:[
        {
          src:'gallery-1.jpg',
          title:'Ant-Man and the Wasp',
          desc:'2018, USA, Action',
          stars:[1,2,3,4,5]
        },
        {
          src:'gallery-2.jpg',
          title:'Avengers: Infinity War',
          desc:'2018, USA, Action, Fantasy',
          stars:[1,2,3,4,5]
        },
        {
          src:'gallery-3.jpg',
          title:'The Flash',
          desc:'2014, USA, Adventure, Fantasy',
          stars:[1,2,3,4,5]
        },
        {
          src:'gallery-4.jpg',
          title:'Game of Thrones',
          desc:'2018, USA, Adventure, Action',
          stars:[1,2,3,4,5]
        },
        {
          src:'gallery-5.jpg',
          title:'Titans',
          desc:'2018, USA, Drama,Adventure',
          stars:[1,2,3,4,5]
        },
        {
          src:'gallery-6.jpg',
          title:'Aquaman',
          desc:'2018, USA, Action, Fantasy',
          stars:[1,2,3,4,5]
        },
        {
          src:'gallery-7.jpg',
          title:'Hold the Dark',
          desc:'2018, USA, Adventure, Mystery',
          stars:[1,2,3,4,5]
        },
        {
          src:'gallery-8.jpg',
          title:'The Predator',
          desc:'2018, USA, Adventure, Horror',
          stars:[1,2,3,4,5]
        },
      ]
    }
  },
  methods:{

  }
}
</script>

<style scoped>

</style>