<template>
  <v-container fluid class="ma-0 pa-0">
    <v-row>
      <v-col
        sm="12"
        md="8"
        lg="8"
        xl="8"
        class="mb-0 pb-0 col-md-8 col-lg-8 offset-md-2 offset-lg-2 offset-xl-2"
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

            <v-sheet v-html="posts['content']" class="ck-content"></v-sheet>
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
  head() {
    return {
      title: 'Blog:  ' + this.title,
      meta: [
        {
          hid: 'Blog',
          name: 'Blog',
          content: 'Blog' + this.title
        }
      ]
    }
  },
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
  async created() {
    // NProgress.start()
    // NProgress.inc()
    await this.$axios.$get('/sanctum/csrf-cookie')
    let response = await this.$axios.$get(`api/blog/${this.$route.query.slug}`)
    this.title = response.data[0].title
    // NProgress.done()
    this.pageload = false
    this.slug = this.$route.query.slug
    this.posts = response.data[0]
  },
  mounted() {},
  components: {},
  watch: {},
  methods: {}
}
</script>

<style scoped>
@import '~/assets/customcss/ckeditor.css';
</style>
