<template>
  <v-container>
    <v-row class="">
      <v-col xs="12" sm="12" md="12" lg="8" xl="8" class="">
        <BlogCard
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
              <WidgetQuote />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <WidgetNews />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <WidgetPost />
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
  middleware: 'auth',
  auth: false,
  head: () => ({
    title: 'Blog',
    meta: [{ hid: 'Blog', name: 'Blog', content: 'Blog Article Page' }]
  }),
  async asyncData({ $axios, error, params }) {
    await $axios.$get('/sanctum/csrf-cookie')
    const res = await $axios.$get(`api/blog/page/1/item/10`)
    return {
      content: res.data,
      length: res.data.length
    }
  },
  data: () => ({
    loading: false,
    page: 2
  }),
  async created() {},
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
          .$get(`api/blog/page/${this.page}/item/${10}`)
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
