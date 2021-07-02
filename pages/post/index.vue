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
              <WidgetQuote />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <WidgetBlog />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <WidgetNews />
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

  head: () => ({

    title: 'Post',
    meta: [{ hid: 'Posts', name: 'Posts', content: 'Post Article Page' }]
  }),
  data: () => ({
     selection: 0,
    content: [],
    length: null,
    loading: false,
    page: 2
  }),
   created() {

  },
  mounted() {},
  transition: {

  },
  auth: false,
  // async fetch() {
  //   await this.$axios.$get('/sanctum/csrf-cookie')
  //   const res = await this.$axios.$get(`api/post/list/1`)
  //   this.content = res.data
  //   this.length = res.data.length
  // },
  async fetch() {
    this.loading = true
    await this.$axios.$get('/sanctum/csrf-cookie')
    const res = await this.$axios.$get(`api/post/page/1/item/10`)
    this.content = res.data
    this.length = res.data.length
    this.loading = false
  },
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
