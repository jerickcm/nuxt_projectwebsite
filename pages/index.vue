<template>
  <v-container fluid class="">
    <v-row class="mb-5 pb-5">
      <v-container>
        <v-row>
          <v-col>
            <v-card color="blue lighten-5" class=" pa-2">
              <h1 class="blue--text text--darken-5 fs-1-3 font-roboto ">
                INHINYERU.com - Research and Development
              </h1>
              <p class="blue--text text--darken-4">
                This website is a build and blog website, where authors
                encounter problems and its solutions in coding shared with the
                development community of students , enthusiast and
                professionals. This website features are latest code fixes,
                tutorials and reviews, news about technology and programming
                also includes programming quotes and world event anniversaries.
                May also include personal blogs and top 10 - 100 reviews of the
                authors favorite things and current researches.
              </p>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <TopicsIndex />
        </v-row>
        <v-row>
          <v-container fluid>
            <v-row>
              <v-col class=" mb-0 pb-0">
                <hr color="orange" class="hr-orange" />
              </v-col>
            </v-row>
            <v-row>
              <v-col class="ma-0 mt-0 pt-0">
                <nuxt-link to="/blog">
                  <h2 class="ma-0 mt-0 pt-0 orange--text text--darken-5">
                    Blogs<v-icon color="orange" large>mdi-menu-right</v-icon>
                    ({{ blog_content }} articles)
                  </h2>
                </nuxt-link>
              </v-col>
            </v-row>

            <IndexWidget :content="content" path="/blog" />

            <v-row v-if="blogs_load">
              <v-col xs="12" sm="12" md="4" lg="4" xl="4" cols="12">
                <SkeletonCard />
              </v-col>
              <v-col xs="12" sm="12" md="4" lg="4" xl="4" cols="12">
                <SkeletonCard />
              </v-col>
              <v-col xs="12" sm="12" md="4" lg="4" xl="4" cols="12">
                <SkeletonCard />
              </v-col>
            </v-row>
          </v-container>
        </v-row>
        <v-row>
          <v-container fluid>
            <v-row>
              <v-col class=" mb-0 pb-0">
                <hr color="blue" class="hr-blue" />
              </v-col>
            </v-row>
            <v-row>
              <v-col class="ma-0 mt-0 pt-0">
                <h2 class="ma-0 mt-0 pt-0 blue--text ">
                  News ({{ news_content }} articles)
                </h2>
              </v-col>
            </v-row>
            <IndexWidget :content="news" path="/news" />

            <v-row v-if="news_load">
              <v-col xs="12" sm="12" md="4" lg="4" xl="4" cols="12">
                <SkeletonCard />
              </v-col>
              <v-col xs="12" sm="12" md="4" lg="4" xl="4" cols="12">
                <SkeletonCard />
              </v-col>
              <v-col xs="12" sm="12" md="4" lg="4" xl="4" cols="12">
                <SkeletonCard />
              </v-col>
            </v-row>
          </v-container>
        </v-row>
        <v-row>
          <v-container>
            <v-row>
              <v-col class=" mb-0 pb-0">
                <hr color="red" class="hr-red" />
              </v-col>
            </v-row>
            <v-row>
              <v-col class="ma-0 mt-0 pt-0">
                <h2 class="ma-0 mt-0 pt-0 red--text text-darken-5">
                  Post ({{ posts_content }} articles)
                </h2>
              </v-col>
            </v-row>
            <IndexWidget :content="posts" path="/post" />

            <v-row v-if="posts_load">
              <v-col xs="12" sm="12" md="4" lg="4" xl="4" cols="12">
                <SkeletonCard />
              </v-col>
              <v-col xs="12" sm="12" md="4" lg="4" xl="4" cols="12">
                <SkeletonCard />
              </v-col>
              <v-col xs="12" sm="12" md="4" lg="4" xl="4" cols="12">
                <SkeletonCard />
              </v-col>
            </v-row>
          </v-container>
        </v-row>
        <v-row>
          <TagsIndex />
        </v-row>
      </v-container>
    </v-row>

    <!--
    <v-row class="d-none">
      <v-col xs="12" sm="12" md="12" lg="12" cols="12" class=" pa-0">
        <Contact />
      </v-col>
    </v-row>
    <v-row>
      <v-col
        xs="12"
        sm="12"
        md="12"
        lg="12"
        xl="12"
        cols="12"
        class="ma-0 pa-0"
      >
        <v-sheet color="brown lighten-2">
          <v-container fluid>
            <v-row>
              <v-col xs="12" sm="12" md="12" lg="12" xl="12" cols="12">
                <v-progress-linear
                  v-if="LoadingStatus"
                  color="blue accent-5"
                  indeterminate
                  rounded
                  height="6"
                ></v-progress-linear>
                <v-sheet
                  v-if="!LoadingStatus"
                  v-for="message in MessageOfTheDay"
                  :key="message.author"
                  class="text-center "
                  color="brown lighten-2"
                >
                  <span
                    class="text-center mt-5 dont-break-out"
                    :class="{
                      'fs-0.5': $vuetify.breakpoint.smAndDown,
                      'fs-1.5': $vuetify.breakpoint.mdAndUp
                    }"
                  >
                    " {{ message.message }} " - {{ message.author }}
                  </span>
                </v-sheet>
              </v-col>
            </v-row>
          </v-container>
        </v-sheet>
      </v-col>
    </v-row>

    -->
  </v-container>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  loading: {
    color: 'orange',
    height: '5px'
  },
  // middleware: 'auth',
  auth: false,
  head() {
    return {
      title: 'Homepage ',
      meta: [
        {
          hid: 'Homepage ',
          name: 'Homepage ',
          content:
            'This website features are latest code fixes, tutorials and reviews, news about technology and programming also includes programming quotes and world event anniversaries. May also include personal blogs and top 10 - 100 reviews of the authors favorite things and current researches.'
        }
      ]
    }
  },
  data: () => ({
    transparent: 'rgba(255, 255, 255, 0)',
    blogs_load: false,
    news_load: false,
    posts_load: false,
    selection: 0,
    content: [],
    news: [],
    posts: [],
    nuxt: [],
    selectedItem: 0,
    show: true,
    title: '',
    model: 6,
    rounded: ['0', 'sm', 'md', 'lg', 'xl', 'pill', 'circle'],
    links: [],
    blog_content: 0,
    posts_content: 0,
    news_content: 0
  }),
  async fetch() {
    this.blogs_load = true
    this.news_load = true
    this.posts_load = true

    await this.$axios.$get('/sanctum/csrf-cookie')
    const res = await this.$axios.$get(`api/blog/page/1/item/3`)
    this.blogs_load = false
    this.content = res.data
    this.blog_content = res.total

    await this.$axios.$get('/sanctum/csrf-cookie')
    const news = await this.$axios.$get(`api/news/page/1/item/3`)
    this.news_load = false
    this.news = news.data
    this.news_content = news.total
    await this.$axios.$get('/sanctum/csrf-cookie')
    const posts = await this.$axios.$get(`api/post/page/1/item/3`)
    this.posts_load = false
    this.posts = posts.data
    this.posts_content = posts.total
  },
  layout: 'default',
  methods: {
    // ...mapActions('messageoftheday', ['fetchQuote'])
  },
  computed: {
    // ...mapGetters('messageoftheday', ['MessageOfTheDay', 'LoadingStatus'])
  },
  async mounted() {
    // await this.$axios.$get('/sanctum/csrf-cookie')
    // try {
    //   this.fetchQuote()
    // } catch (error) {
    //   console.log(error)
    // }
  }
}
</script>
<style scoped>
.dont-break-out {
  /* These are technically the same, but use both */
  overflow-wrap: break-word;
  word-wrap: break-word;

  -ms-word-break: break-all;
  /* This is the dangerous one in WebKit, as it breaks things wherever */
  word-break: break-all;
  /* Instead use this non-standard one: */
  word-break: break-word;

  /* Adds a hyphen where the word breaks, if supported (No Blink) */
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
}
.font-lulu {
  font-family: 'Lulu', sans-serif;
}
.font-halimun {
  font-family: 'Halimun', sans-serif;
}
/* .font-kalamreg {
  font-family: 'Kalam-Regular', sans-serif;
  line-height: 1.2;
} */
.font-barlowreg {
  font-family: 'Barlow-Regular', sans-serif;
}

.title1 {
  text-decoration: none;
}
.v-application a {
  color: rgb(66, 77, 238);
  text-decoration: none;
}

.adj-title {
  min-height: 2rem;
  line-height: 1rem;
  margin: 0px;
  padding: 0px;
}

.hr-blue {
  border: 3px solid blue;
}
.hr-red {
  border: 3px solid red;
}
.hr-orange {
  border: 3px solid orange;
}
.hr-black {
  border: 3px solid black;
}
</style>
