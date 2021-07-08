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

        <v-sheet v-else>
          <h1 class="fs-1-3 blue--text">{{ posts['title'] }}</h1>
          <v-img
            v-if="posts['image'] != null"
            height="250"
            :src="posts['image']"
          >
          </v-img>
          <v-img v-else contain aspect-ratio="1.7" src="/images/default.jpg">
          </v-img>
          <v-card-title>
            <h2>Title : {{ posts['title'] }}</h2>
          </v-card-title>
          <v-card-text class="">
            <span>Author : {{ posts['name'] }}</span> <br />
            <!-- <span>Email : {{ posts['email'] }}</span> -->
            <br />
            <span>Date : {{ posts['human_date'] }}</span>

            <v-sheet v-html="posts['content']" class="ck-content"></v-sheet>
          </v-card-text>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <WidgetPosttags />
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
  async asyncData({ $axios, error, params }) {
    await $axios.$get('/sanctum/csrf-cookie')
    let response = await $axios.$get(`api/post/slug/${params.id}`)
    return {
      posts: response.data[0],
      pageload: false,
      slug: params.slug,
      title: response.data[0].title,
      image: response.data[0].image
    }
  },
  async created() {},
  computed: {
    id() {
      return this.$route.params.id
    }
  },
  components: {},
  watch: {},
  methods: {}
}
</script>
<style scoped>
@import '~/assets/customcss/ckeditor.css';
</style>
