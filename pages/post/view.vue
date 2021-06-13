<template>
  <v-container fluid class="ma-0 pa-0">
    <v-row>
      <v-col
        sm="12"
        md="8"
        lg="8"
        class="mb-0 pb-0 col-md-8  col-lg-6 offset-md-2"
      >
        <v-skeleton-loader
          elevation="2"
          outlined
          shaped
          tile
          class="pa-2 ma-2"
          type="card"
          v-if="pageload"
        ></v-skeleton-loader>
        <v-card v-else outlined shaped tile class="pa-1 ma-1">
          <h1 class="blue--text">{{ posts['title'] }}</h1>

          <v-img height="250" :src="posts['image']"> </v-img>
          <v-card-title>
            <h2>Title : {{ posts['title'] }}</h2>
          </v-card-title>
          <v-card-text class="">
            <span>Author : {{ posts['name'] }}</span> <br />
            <span>Email : {{ posts['email'] }}</span
            ><br />
            <span>Date : {{ posts['human_date'] }}</span>

            <v-sheet
              color="grey lighten-5"
              outlined
              v-html="posts['content']"
              class="ck-content pa-0 ma-1 pt-2 pb-2"
            ></v-sheet>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
export default {
  data: () => ({
    posts: {
      content: [],
      image: '',
      date: '',
      author: ''
    },
    title: '',
    pageload: true
  }),
  head() {
    return {
      title: 'Post:' + this.title,
      meta: [
        {
          hid: 'Post',
          name: 'Post',
          content: 'Post' + this.title
        }
      ]
    }
  },
  mounted() {
    console.log('mounted')
  },
  async asyncData({ $axios, error, params }) {},
  async created() {
    // NProgress.start()
    // NProgress.inc()
    await this.$axios.$get('/sanctum/csrf-cookie')
    let response = await this.$axios.$get(
      `api/post/slug/${this.$route.query.slug}`
    )
    this.title = response.data[0].title
    // NProgress.done()
    this.pageload = false
    this.slug = this.$route.query.slug
    this.posts = response.data[0]
  },
  components: {},
  watch: {},
  methods: {}
}
</script>
<style scoped>
@import '~/assets/customcss/ckeditor.css';
</style>
