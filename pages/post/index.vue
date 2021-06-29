<template>
  <v-container>
    <v-row class="">
      <v-col xs="12" sm="12" md="12" lg="8" xl="8" class="">
        <PostCard
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
              <BlogWidget />
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
    setTimeout(function() {
      this.$nuxt.$loading.finish()
    }, 1000)
  },
  transition: {
    beforeEnter(el) {
      this.$nextTick(() => {
        this.$nuxt.$loading.start()
      })
    }
  },
  auth: false,
  head: () => ({
    selection: '',
    // content: '',
    // length: '',
    title: 'Post',
    meta: [{ hid: 'Posts', name: 'Posts', content: 'Post Article Page' }]
  }),
  data: () => ({
    loading: false,
    page: 2
  }),

  // async fetch() {
  //   await this.$axios.$get('/sanctum/csrf-cookie')
  //   const res = await this.$axios.$get(`api/post/list/1`)
  //   this.content = res.data
  //   this.length = res.data.length
  // },
  async asyncData({ $axios, error, params }) {
    await $axios.$get('/sanctum/csrf-cookie')
    const res = await $axios.$get(`api/post/list/1`)
    return {
      content: res.data,
      length: res.data.length
    }
  },
  mounted() {},
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
          .$get(`api/post/list/${this.page}`)
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
