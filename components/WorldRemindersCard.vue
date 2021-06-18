<template>
  <v-sheet class="ma-0 pa-0">
    <v-row class="ma-0 pa-0">
      <v-col
        sm="12"
        md="8"
        lg="8"
        class="mb-0 pb-0 col-md-10 col-lg-10 offset-md-2 offset-lg-2"
      >
        <h1>World Reminders</h1>
        <p>Anniversary of past events.</p>
      </v-col>
    </v-row>
    <v-row class="ma-0 pa-0">
      <v-col class="mb-0 pb-0 col-md-10 col-lg-10 offset-md-2 offset-lg-2">
        <v-btn
          class="ma-1 blue lighten-3"
          v-for="(item, index) in months"
          :key="index"
          :to="'/world-reminders/' + item.name"
          >{{ item.name }}</v-btn
        >
      </v-col>
    </v-row>
    <v-row v-for="(item, index) in content" :key="index" class="ma-0 pa-0">
      <v-col class="mb-0 pb-0 col-md-10 col-lg-10 offset-md-2 offset-lg-2">
        <div class="pt-2 mt-2">
          <hr />
          <div class="pt-2 mt-2">
            <p class="blue--text">{{ item.date }}</p>
            <h2>{{ item.title }}</h2>
            <h3>{{ item.anniversary }} year anniversary</h3>
            <br />

            <p>{{ item.subtitle }}</p>

            <img
              v-if="item.image"
              :src="item.image"
              height="250rem"
              style="object-position: center"
              alt=""
            />

            <p v-html="item.content"></p>
            <br />
            <strong
              ><p>Author/Source : {{ item.author }}</p></strong
            >
          </div>
        </div>
      </v-col>
    </v-row>

    <v-row
      class="ma-0 pa-0"
      :class="loadcard"
      v-for="index in 10"
      :key="index + `b`"
    >
      <v-col class="mb-0 pb-0 col-md-10 col-lg-10 offset-md-2 offset-lg-2">
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
      <v-col class="mb-0 pb-0 col-md-10 col-lg-10 offset-md-2 offset-lg-2">
        <div elevation="2" outlined shaped tile class="pa-2 ma-0">
          <label for="" class="grey--text">Nothing Follows</label>
        </div>
      </v-col>
    </v-row>
    <v-row class="ma-0 pa-0">
      <v-col class="mb-0 pb-0 col-md-10 col-lg-10 offset-md-2 offset-lg-2">
        <div>
          <v-btn
            class="white--text"
            @click="getposts"
            :disabled="disable_next"
            :class="disable_color"
          >
            Next Article
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-sheet>
</template>
<script>
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
export default {
  data: () => ({
    months: [
      { name: 'January' },
      { name: 'February' },
      { name: 'March' },
      { name: 'April' },
      { name: 'May' },
      { name: 'June' },
      { name: 'July' },
      { name: 'August' },
      { name: 'September' },
      { name: 'October' },
      { name: 'November' },
      { name: 'December' },
    ],
    no_more_post: 'd-none',
    loadcard: '',
    loading: false,
    content: [],
    page: 1,
    data: [],
    increment: 0,
    disable_next: false,
    disable_color: 'green',
    date: '',
  }),
  async asyncData() {},
  async created() {},
  mounted() {
    this.getposts()
  },
  computed: {
    link(id) {
      return '/world-reminders/' + id
    },
  },
  methods: {
    getposts() {
      this.$axios.$get('/sanctum/csrf-cookie')
      NProgress.start()
      NProgress.inc()

      this.date = new Date().toJSON().slice(0, 10).replace(/-/g, '-')
      if (this.$route.params.id) {
        try {
          this.$axios
            .$get(
              `api/er/page/${this.page}/item/${10}/month/${
                this.$route.params.id
              }`
            )
            .then((res) => {
              if (res.data.length == 0) {
                this.no_more_post = ''
                this.disable_next = true
                this.disable_color = 'grey'
              } else {
                this.disable_next = false
                this.disable_color = 'green'
              }

              if (res.data.length < 10) {
                this.no_more_post = ''
                this.disable_next = true
                this.disable_color = 'grey'
              }

              for (const [key, value] of Object.entries(res.data)) {
                this.increment = this.increment + 1
                this.data.push({
                  id: value.id,
                  slug: value.slug,
                  title: value.title,
                  subtitle: value.subtitle,
                  event_date: value.event_date,
                  country: value.country,
                  content: value.content,
                  created_at: value.created_at,
                  human_date: value.human_date,
                  author: value.author,
                  image: value.image,
                  increment: this.increment,
                  date: value.date,
                  anniversary: value.anniversary,
                })
              }

              this.content = this.data
              NProgress.done()
              this.loadcard = 'd-none'
              this.page = this.page + 1
            })
            .catch((error) => {
              NProgress.done()
              this.loadcard = 'd-none'
            })
            .finally(() => {})
        } catch (error) {
          console.log('error')
        }
      } else {
        try {
          this.$axios
            .$get(`api/er/page/${this.page}/item/${10}/date/${this.date}`)
            .then((res) => {
              if (res.data.length == 0) {
                this.no_more_post = ''
                this.disable_next = true
                this.disable_color = 'grey'
              } else {
                this.disable_next = false
                this.disable_color = 'green'
              }

              if (res.data.length < 10) {
                this.no_more_post = ''
                this.disable_next = true
                this.disable_color = 'grey'
              }

              for (const [key, value] of Object.entries(res.data)) {
                this.increment = this.increment + 1
                this.data.push({
                  id: value.id,
                  slug: value.slug,
                  title: value.title,
                  subtitle: value.subtitle,
                  event_date: value.event_date,
                  country: value.country,
                  content: value.content,
                  created_at: value.created_at,
                  human_date: value.human_date,
                  author: value.author,
                  image: value.image,
                  increment: this.increment,
                  date: value.date,
                  anniversary: value.anniversary,
                })
              }

              this.content = this.data
              NProgress.done()
              this.loadcard = 'd-none'
              this.page = this.page + 1
            })
            .catch((error) => {
              NProgress.done()
              this.loadcard = 'd-none'
            })
            .finally(() => {})
        } catch (error) {
          console.log('error')
        }
      }
    },
  },
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
