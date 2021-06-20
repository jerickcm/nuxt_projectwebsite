<template>
  <v-container fluid class="white">
    <v-row class="">
      <v-col md="12" lg="12" class="">
        <NewsCard
          :content="content"
          :length="length"
          :loading="loading"
          @next-article="nextArticle"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
export default {
  created() {
    this.$nuxt.$loading.finish()
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
    title: 'News',
    meta: [{ hid: 'News', name: 'News', content: 'News Article Page' }]
  }),
  async asyncData({ $axios, error, params }) {
    await $axios.$get('/sanctum/csrf-cookie')
    const res = await $axios.$get(`api/news/page/1/item/10`)
    console.log(res)
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
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
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
