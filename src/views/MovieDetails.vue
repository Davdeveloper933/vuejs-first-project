 <template>
  <div class="single-movie">
        <Intro>
          <span slot="intro_top">Facts & info</span>
          <span slot="intro_title">Movie details</span>
        </Intro>
        <DirectoryLinks></DirectoryLinks>
        <section class="container">
          <TitleTemplate
          >
            {{movieInfo.Title}}
          </TitleTemplate>
          <div>
            <div class="d-flex row">
              <div class="movie-info col-6">
                <div class="d-flex row">
                  <div class="movie-img col-6">
                    <img :src="movieInfo['Poster']" class="img-fluid" alt="">
                  </div>
                  <div class="movie-desc col-5">
                    <StarsBlock
                        :imdb-rating="this.allMovies.imdbRating"
                    ></StarsBlock>

                    <p class="movie-detail genre">Genre:
                      <span>{{ movieInfo['Genre']}}</span>
                    </p>
                    <p class="movie-detail">Release year:
                      <span>{{ movieInfo['Year']}}</span>
                    </p>
                    <p class="movie-detail">Running time:
                      <span>{{movieInfo['Runtime']}}</span>
                    </p>
                    <p class="movie-detail country">Country:
                      <span>{{movieInfo['Country']}}</span>
                    </p>
                    <p class="movie-plot pt-2 pb-2">
                      {{movieInfo['Plot']}}
                    </p>
                  </div>
                </div>
              </div>
              <div class="movie-trailer col-6">
                <iframe height="100%" width="100%" src="https://www.youtube.com/embed/UUkn-enk2RU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </section>
        <section>
          <Reviews></Reviews>
          <LeaveComment></LeaveComment>
        </section>

  </div>
</template>

<script>
// OMDB API KEY :
// 26094334
import {mapGetters,mapActions} from 'vuex'
import Intro from "@/components/Intro";
import DirectoryLinks from "@/components/DirectoryLinks";
import TitleTemplate from "@/components/TitleTemplate";
import StarsBlock from "@/components/StarsBlock";
import Reviews from "@/components/Reviews";
import LeaveComment from "@/components/LeaveComment";
export default {
name: "MovieDetails",
  components: {LeaveComment, Reviews, StarsBlock, TitleTemplate, DirectoryLinks, Intro},
  data() {
    return {
        imdbRating: null,
        movieInfo:{}
    }
  },
  computed:{...mapGetters(["allPosts","allMovies"]),
  },
  methods:{
          ...mapActions(["getPostsAction","getMovie"]),
    getData () {
            this.getPostsAction(26094334).then(response =>{
              this.imdbRating = parseFloat(response.data.imdbRating)
              this.movieInfo = response.data;
            })
    },
  },
  mounted() {
    console.log(this.movieInfo)
  },
  created() {
    this.getData()
  },
}
</script>
