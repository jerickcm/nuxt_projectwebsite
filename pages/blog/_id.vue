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
        <v-sheet v-else shaped tile class="pa-1 ma-1">
          <v-card flat v-if="posts['image'] != null">
            <v-img contain height="250" :src="posts['image']"> </v-img>
          </v-card>
          <v-card flat v-else>
            <v-img src="/images/default.jpg"> </v-img>
          </v-card>

          <v-chip-group
            v-model="selection"
            active-class="deep-purple accent-4 white--text"
            column
          >
            <span class="pt-2">Tags: &zwnj;&zwnj;</span
            ><v-chip
              v-for="(itm, index) in posts['tags']"
              :key="index"
              color="blue"
              class="white--text"
              >{{ itm }}</v-chip
            >
          </v-chip-group>
          <v-card-title>
            <h1 class="fs-1-3 font-roboto" color="dark">
              {{ posts['title'] }}
            </h1>
          </v-card-title>
          <v-card-text class="">
            <span>Author : {{ posts['name'] }}</span> <br />
            <!-- <span>Email : {{ posts['email'] }}</span> -->
            <br />
            <span>Date : {{ posts['human_date'] }}</span>
            <!-- <textarea
              v-html="posts['content']"
              class="ck-content mt-5 "
            ></textarea> -->
            <v-sheet
              v-html="posts['content']"
              class="ck-content mt-5 "
            ></v-sheet>
          </v-card-text>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <WidgetBlogtags />
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
    selection: '',
    posts: {
      content: [],
      image: '',
      date: '',
      author: ''
    },
    image: '',
    title: '',
    pageload: true
  }),
  async asyncData({ $axios, error, params }) {
    try {
      await $axios.$get('/sanctum/csrf-cookie')
      let response = await $axios.$get(`api/blog/${params.id}`)
      return {
        posts: response.data[0],
        pageload: false,
        slug: params.slug,
        title: response.data[0].title,
        tags: response.data[0].tags,
        image: response.data[0].image
      }
    } catch (err) {
      error({ statusCode: 500, message: 'Page not found' })
    }
  },
  computed: {
    id() {
      return this.$route.params.id
    }
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
