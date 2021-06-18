<template>
  <v-container fluid class="white">
    <v-row class="">
      <v-col md="12" lg="12" class="">
        <v-sheet class="ma-0 pa-0">
          <v-row class="ma-0 pa-0">
            <v-col
              sm="12"
              md="8"
              lg="8"
              xl="8"
              class="
                mb-0
                pb-0
                col-md-8 col-lg-8
                offset-md-2 offset-lg-2 offset-xl-2
              "
            >
              <h1>News</h1>
              <p>Technological News</p>
            </v-col>
          </v-row>

          <v-row
            v-for="(item, index) in content"
            :key="index"
            class="ma-0 pa-0"
          >
            <v-col
              sm="12"
              md="8"
              lg="8"
              xl="8"
              class="
                mb-0
                pb-0
                col-md-8 col-lg-8
                offset-md-2 offset-lg-2 offset-xl-2
              "
            >
              <v-card elevation="2" outlined shaped tile class="pa-2 ma-0">
                <nuxt-link
                  class="nuxtlink"
                  :to="{
                    path: 'news/' + item.slug,
                  }"
                >
                  <v-img height="250" :src="item.image"> </v-img>
                </nuxt-link>
                <v-card-title>
                  <nuxt-link
                    class="nuxtlink"
                    :to="{
                      path: 'news/' + item.slug,
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

          <!-- <v-row
            class="ma-0 pa-0"
            :class="loadcard"
            v-for="index in 10"
            :key="index + `b`"
          >
            <v-col
              sm="12"
              md="8"
              lg="8"
              xl="8"
              class="
                mb-0
                pb-0
                col-md-8 col-lg-8
                offset-md-2 offset-lg-2 offset-xl-2
              "
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
          </v-row> -->

          <v-row class="ma-0 pa-0" :class="no_more_post">
            <v-col
              sm="12"
              md="8"
              lg="8"
              xl="8"
              class="
                mb-0
                pb-0
                col-md-8 col-lg-8
                offset-md-2 offset-lg-2 offset-xl-2
              "
            >
              <v-card elevation="2" outlined shaped tile class="pa-2 ma-0">
                <label for="" class="grey--text">Nothing Follows</label>
              </v-card>
            </v-col>
          </v-row>
          <v-row class="ma-0 pa-0">
            <v-col
              sm="12"
              md="8"
              lg="8"
              xl="8"
              class="
                mb-0
                pb-0
                col-md-8 col-lg-8
                offset-md-2 offset-lg-2 offset-xl-2
              "
            >
              <v-card elevation="2" outlined shaped tile class="pa-2 ma-0">
                <v-btn
                  class="white--text"
                  @click="getposts"
                  :disabled="length==10? false:true"
                  :class="length==10? 'green':'grey'"
                >
                  Next Article
                </v-btn>
              </v-card>
            </v-col>
          </v-row>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
export default {
  middleware: 'auth',
  auth: false,
  head: () => ({
    title: 'News',
    meta: [{ hid: 'News', name: 'News', content: 'News Article Page' }],
  }),
  async asyncData({ $axios, error, params }) {
    await $axios.$get('/sanctum/csrf-cookie')
    const res = await $axios.$get(`api/news/page/1/item/10`)
    return {
      content: res.data,
      data: res.data,
      length: res.data.length,
    }
  },
  data: () => ({
    loading: false,
    no_more_post: 'd-none',
    loadcard: 'd-none',
    page: 2,
    data: [],
    increment: 0,
    disable_next: false,
    disable_color: 'green',
  }),
  async created() {},
  mounted() {},
  watch: {
    lenght: function (val) {
      if (val < 10) {
        this.disable_next = true
        this.disable_color = 'grey'
      }

    },

  },
  computed: {

  },
  components: {},
  watch: {},
  methods: {
    getposts() {
      this.$axios.$get('/sanctum/csrf-cookie')
      NProgress.start()
      NProgress.inc()
      try {
        this.$axios
          .$get(`api/news/page/${this.page}/item/${10}`)
          .then((res) => {

            this.length = res.data.length;

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
                name: value.name,
                id: value.id,
                slug: value.slug,
                title: value.title,
                content: value.content,
                created_at: value.created_at,
                human_date: value.human_date,
                image: value.image,
                increment: this.increment,
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
    },
  },
}
</script>
<style scoped>
ul.clean {
  list-style: none !important;
  list-style-type: none !important;
}
</style>
