<template>
  <v-container>
    <!-- <v-row class="">
      <v-col class="ma-2">
        <h1>News</h1>
        <p>Technological News</p>
      </v-col>
    </v-row> -->
    <v-row class="">
      <v-col xs="12" sm="12" md="12" lg="8" xl="8" class="">
        <NewsCard
          :content="content"
          :length="length"
          :loading="loading"
          @next-article="nextArticle"
        />
      </v-col>
      <v-col xs="12" sm="12" md="12" lg="4" xl="4" class="">
        <v-container>
          <v-row>
            <v-col>
              <QuoteWidget />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <WidgetBlog />
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
export default {
  created() {
    // setTimeout(function() {
    //   this.$nuxt.$loading.finish()
    // }, 1000)
  },
  transition: {
    // beforeEnter(el) {
    //   this.$nextTick(() => {
    //     this.$nuxt.$loading.start()
    //   })
    // }
  },

  middleware: 'auth',
  auth: false,
  head: () => ({
    title: 'News',
    meta: [{ hid: 'News', name: 'News', content: 'News Article Page' }]
  }),
  // async asyncData({ $axios, error, params }) {
  //   await $axios.$get('/sanctum/csrf-cookie')
  //   const res = await $axios.$get(`api/news/page/1/item/10`)
  //   console.log(res)
  //   return {
  //     content: res.data,
  //     length: res.data.length
  //   }
  // },
  async fetch() {
    this.loading = true
    await this.$axios.$get('/sanctum/csrf-cookie')
    const res = await this.$axios.$get(`api/news/page/1/item/10`)
    this.content = res.data
    this.length = res.data.length
    this.loading = false
    // console.log(res)
    // return {
    //   content: res.data,
    //   length: res.data.length
    // }
  },
  data: () => ({
    content: [],
    length: null,
    loading: false,
    page: 2
  }),
  async created() {},
  mounted() {
    // this.$nextTick(() => {
    //   this.$nuxt.$loading.start()
    //   setTimeout(() => this.$nuxt.$loading.finish(), 500)
    // })
  },
  watch: {
    lenght: function(val) {
      if (val < 10) {
        this.disable_next = true
        this.disable_color = 'grey'
      }
    }
  },
  computed: {},
  components: {},
  watch: {},
  methods: {
    async nextArticle() {
      this.loading = true
      await this.$axios.$get('/sanctum/csrf-cookie')
      NProgress.start()
      NProgress.inc()
      try {
        this.$axios
          .$get(`api/news/page/${this.page}/item/${10}`)
          .then(res => {
            this.length = res.data.length
            this.content = [...this.content, ...res.data]
            NProgress.done()
            this.page = this.page + 1
            this.loading = false
          })
          .catch(error => {
            this.loading = false
            NProgress.done()
          })
          .finally(() => {})
      } catch (error) {
        this.loading = false
        console.log('error')
      }
    }
  }
}
</script>
<style scoped>
ul.clean {
  list-style: none !important;
  list-style-type: none !important;
}
</style>
