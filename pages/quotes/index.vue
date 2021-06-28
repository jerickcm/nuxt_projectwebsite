<template>
  <v-container fluid>
    <v-row class="">
      <v-col md="12" lg="12" class="">
        <QuotesCard
          :content="content"
          :length="length"
          :loading="loading"
          @next-article="nextArticle"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
        <script>
          ;(adsbygoogle = window.adsbygoogle || []).push({})
        </script>
        <ins
          class="adsbygoogle"
          style="display:block"
          data-ad-client="ca-pub-3213536425475125"
          data-ad-slot="3715096457"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
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
    title: 'Quotes',
    meta: [{ hid: 'Quotes', name: 'Quotes', content: 'Quotes Article Page' }]
  }),

  data: () => ({
    loading: false,
    page: 2
  }),
  async asyncData({ $axios, error, params }) {
    await $axios.$get('/sanctum/csrf-cookie')
    const res = await $axios.$get(`api/quotes/page/1/item/10`)
    return {
      content: res.data,
      length: res.data.length
    }
  },
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
          .$get(`api/quotes/page/${this.page}/item/${10}`)
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
