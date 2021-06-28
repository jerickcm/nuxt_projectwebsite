<template>
  <v-container fluid>
    <v-row class="">
      <v-col ms="10" lg="10">
        <WorldRemindersCard
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
  auth: false,
  head() {
    return {
      title: 'World Reminders ' + this.id,
      meta: [
        {
          hid: 'World Reminders',
          name: 'World Reminders',
          content: 'World Reminders'
        }
      ]
    }
  },
  data: () => ({
    loading: false,
    page: 2
  }),
  async asyncData({ $axios, error, params }) {
    await $axios.$get('/sanctum/csrf-cookie')
    const res = await $axios.$get(`api/er/page/1/item/10/month/${params.id}`)
    return {
      content: res.data,
      length: res.data.length
    }
  },
  async created() {},
  computed: {
    async id() {
      return this.$route.params.id
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
          .$get(`api/er/page/${this.page}/item/${10}/month/${this.id}`)
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
