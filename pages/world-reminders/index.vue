<template>
  <v-container fluid>
    <v-row class="">
      <v-col xs="12" sm="12" md="12" lg="8" xl="8" class="">
        <WorldRemindersCard
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
    title: 'World Reminders',
    meta: [
      {
        hid: 'World Reminders',
        name: 'World Reminders',
        content: 'World Reminders'
      }
    ]
  }),

  data: () => ({
    loading: false,
    page: 2
  }),
  async asyncData({ $axios, error, params }) {
    await $axios.$get('/sanctum/csrf-cookie')
    const res = await $axios.$get(
      `api/er/page/1/item/10/date/${new Date()
        .toJSON()
        .slice(0, 10)
        .replace(/-/g, '-')}`
    )
    return {
      content: res.data,
      length: res.data.length
    }
  },
  async created() {},
  mounted() {},
  components: {},
  watch: {},
  computed: {
    date() {
      return new Date()
        .toJSON()
        .slice(0, 10)
        .replace(/-/g, '-')
    }
  },
  methods: {
    async nextArticle() {
      this.loading = true
      await this.$axios.$get('/sanctum/csrf-cookie')
      NProgress.start()
      NProgress.inc()

      this.date = new Date()
        .toJSON()
        .slice(0, 10)
        .replace(/-/g, '-')

      try {
        this.$axios
          .$get(`api/er/page/${this.page}/item/${10}/date${this.date}`)
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
