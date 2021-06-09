<template>
  <v-sheet class="ma-0 pa-0">
    <!-- <v-row>
      <v-col> dosiufnhv9uwh {{ GetPosts }}</v-col>

    </v-row> -->
    <v-row class="ma-0 pa-0">
      <v-col
        sm="12"
        md="8"
        lg="8"
        class="mb-0 pb-0 col-md-8  col-lg-6 offset-md-2"
      >
        <h1>Post</h1>
      </v-col>
    </v-row>
    <v-row v-for="(item, index) in posts" :key="index" class="ma-0 pa-0">
      <v-col
        sm="12"
        md="8"
        lg="8"
        class="mb-0 pb-0 col-md-8  col-lg-6 offset-md-2"
      >
        <v-card elevation="2" outlined shaped tile class=" pa-2 ma-0">
          <!-- color="blue lighten-5" -->
          <!-- -->
          <nuxt-link
            class="nuxtlink"
            target="_blank"
            :to="{
              path: 'posts_view',
              query: { slug: item.slug }
            }"
          >
            <v-img height="250" :src="item.image">
              <!-- <v-card-title class="white--text transparent">
                Article No: {{ item.increment }}
              </v-card-title> -->
            </v-img>
          </nuxt-link>

          <v-card-title>
            <nuxt-link
              class="nuxtlink"
              target="_blank"
              :to="{
                path: 'posts_view',
                query: { slug: item.slug }
              }"
              >Title : {{ item.title }}
            </nuxt-link>
          </v-card-title>
          <v-card-text class="">
            <span>Author: {{ item.name }} </span><br />
            <span>Date : {{ item.human_date }}</span
            ><br />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row
      class="ma-0 pa-0"
      :class="loadcard"
      v-for="index in 10"
      :key="index + `b`"
    >
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
        ></v-skeleton-loader>
      </v-col>
    </v-row>
    <v-row class="ma-0 pa-0" :class="no_more_post">
      <v-col
        sm="12"
        md="8"
        lg="8"
        class="mb-0 pb-0 col-md-8  col-lg-6 offset-md-2"
      >
        <v-card elevation="2" outlined shaped tile class=" pa-2 ma-0">
          Nothing Follows
        </v-card>
      </v-col>
    </v-row>
    <v-row class="ma-0 pa-0">
      <v-col
        sm="12"
        md="8"
        lg="8"
        class="mb-0 pb-0 col-md-8  col-lg-6 offset-md-2"
      >
        <v-card elevation="2" outlined shaped tile class=" pa-2 ma-0">
          <v-btn
            class="white--text"
            @click="getposts"
            :disabled="disable_next"
            :class="disable_color"
          >
            Next Post
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-sheet>
</template>
<script>
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { mapGetters, mapActions } from 'vuex'
export default {
  data: () => ({
    no_more_post: 'd-none',
    loadcard: '',
    loading: false,
    posts: [],
    page: 1,
    data: [],
    increment: 0,
    disable_next: false,
    disable_color: 'green'
  }),
  async created() {
    // await this.$axios.$get('/sanctum/csrf-cookie').then(response => {})
  },
  mounted() {
    this.getposts()
    this.generatePost()
  },
  computed: {
    // ...mapGetters('posts', ['GetPosts'])
  },

  methods: {
    // ...mapActions('posts', ['fetchPosts']),
    generatePost() {
      // console.log(this.GetPosts)
      // this.fetchPosts(this.page)
      // console.log(this.GetPosts)
      // console.log('called in mounted')
    },
    getposts() {
      NProgress.start()
      let payload = new FormData()
      NProgress.inc()
      try {
        this.$axios
          .$get(`api/post/list/${this.page}`)
          .then(res => {
            if (res.data.length == 0) {
              this.no_more_post = ''
              this.disable_next = true
              this.disable_color = 'grey'
            } else {
              this.disable_next = false
              this.disable_color = 'green'
            }

            for (const [key, value] of Object.entries(res.data)) {
              this.increment = this.increment + 1
              this.data.push({
                name: value.name,
                id: value.id,
                slug: value.slug,
                title: value.title,
                content: value.content,
                created_at: value.created_at,
                human_date: value.human_date,
                image: value.image,
                increment: this.increment
              })
            }

            this.posts = this.data
            NProgress.done()
            this.loadcard = 'd-none'
            this.page = this.page + 1
          })
          .catch(error => {
            NProgress.done()
            this.loadcard = 'd-none'
          })
          .finally(() => {})
      } catch (error) {
        console.log('error')
      }
    }
  }
}
</script>
<style scoped>
.transparent {
  background-color: blue !important;
  opacity: 0.25;
  border-color: transparent !important;
}
.nuxtlink {
  text-decoration: none;
}
</style>
