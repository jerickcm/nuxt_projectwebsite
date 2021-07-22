<template>
  <v-container fluid class="">
    <v-row class="mb-5 pb-5">
      <v-container>
        <v-row>
          <v-col class=" mb-0 pb-0">
            <hr color="blue" class="hr-blue" />
          </v-col>
        </v-row>
        <v-row>
          <v-col class="ma-0 mt-0 pt-0">
            <h1
              class="ma-0 mt-0 pt-0 blue--text text--darken-5 text--darken-5 font-roboto fs-1-5"
            >
              Description
            </h1>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="ma-0 mt-0 pt-0">
            <v-card color="blue lighten-5" class=" pa-2">
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
          <BlogsIndex />
        </v-row>
        <v-row>
          <TagsIndex />
        </v-row>
      </v-container>
    </v-row>
    <v-row fluid class="blue mt-0">
      <v-col justify="center" align="center" class="blue">
        <v-row justify="center" align="center" class="pt-4">
          <v-col justify="center" align="center">
            <h3>Our Services</h3>
          </v-col>
        </v-row>

        <v-row justify="center" align="center" class="lg-5">
          <v-col cols="12" xs="12" sm="12" md="3" lg="3" xl="3">
            <ul class="clean">
              <li class="white--text">
                <b>Branding</b>
              </li>
              <li class="dark--text">&nbsp;</li>
              <li class="dark--text">Naming</li>
              <li class="dark--text">Brand Creation</li>
              <li class="dark--text">Logo Development</li>
              <li class="dark--text">&nbsp;</li>
              <li class="dark--text">&nbsp;</li>
            </ul>
          </v-col>
          <v-col cols="12" xs="12" sm="12" md="3" lg="3" xl="3">
            <ul class="clean">
              <li class="white--text">
                <strong>Digital</strong>
              </li>
              <li class="dark--text">&nbsp;</li>
              <li class="dark--text">Web Design & Development</li>
              <li class="dark--text">Application Development</li>
              <li class="dark--text">Mobile Application Development</li>
              <li class="dark--text">Content Management System</li>
              <li class="dark--text">&nbsp;</li>
            </ul>
          </v-col>
          <v-col cols="12" xs="12" sm="12" md="3" lg="3" xl="3">
            <ul class="clean">
              <li class="white--text">
                <strong>Print</strong>
              </li>
              <li class="dark--text">&nbsp;</li>
              <li class="dark--text">Package Design</li>
              <li class="dark--text">Brochures</li>
              <li class="dark--text">Posters</li>
              <li class="dark--text">&nbsp;</li>
              <li class="dark--text">&nbsp;</li>
            </ul>
          </v-col>
          <v-col cols="12" xs="12" sm="12" md="3" lg="3" xl="3">
            <ul class="clean">
              <li class="white--text">
                <strong>Strategy</strong>
              </li>
              <li class="dark--text">&nbsp;</li>
              <li class="dark--text">Brand Analysis</li>
              <li class="dark--text">Focus Group</li>
              <li class="dark--text">Web Analytics</li>
              <li class="dark--text">Search Engine Optimization</li>
              <li class="dark--text">&nbsp;</li>
            </ul>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
// import { mapGetters, mapActions } from 'vuex'

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
    // this.news_load = true
    // this.posts_load = true

    // await this.$axios.$get('/sanctum/csrf-cookie')
    // const res = await this.$axios.$get(`api/blog/page/1/item/3`)
    // this.blogs_load = false
    // this.content = res.data
    // this.blog_content = res.total
    // await this.$axios.$get('/sanctum/csrf-cookie')
    // const news = await this.$axios.$get(`api/news/page/1/item/3`)
    // this.news_load = false
    // this.news = news.data
    // this.news_content = news.total
    // await this.$axios.$get('/sanctum/csrf-cookie')
    // const posts = await this.$axios.$get(`api/post/page/1/item/3`)
    // this.posts_load = false
    // this.posts = posts.data
    // this.posts_content = posts.total
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
ul.clean {
  list-style: none !important;
  list-style-type: none !important;
}
</style>
