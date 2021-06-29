<template>
  <v-container class=" ">
    <v-row>
      <v-col>
        <h1 color="dark">Project Website - Research and Development</h1>
        <p>
          Latest Code fixes, Tutorials and Reviews, News about technology and
          Programming also includes Programming quotes and world event
          anniversaries. May also include personal blogs and top 10 - 100
          reviews of the authors favorite things and current researches.
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-container>
        <v-row>
          <v-col>
            <h2 color="dark">Blogs</h2>
          </v-col>
        </v-row>
        <v-row
          color="blue"
          v-for="(i, ind) in Math.ceil(content.length / 3)"
          :key="ind"
        >
          <v-col
            xs="12"
            sm="12"
            md="4"
            lg="4"
            xl="4"
            v-for="(item, indx) in content.slice((i - 1) * 3, i * 3)"
            :key="indx"
          >
            <v-card elevation="2" outlined shaped tile class="pa-2 ma-0">
              <nuxt-link
                class="nuxtlink"
                target="_blank"
                :to="{
                  path: 'blog/' + item.slug
                }"
              >
                <v-img contain aspect-ratio="1.7" :src="item.image"> </v-img>
              </nuxt-link>

              <v-card-title>
                <h2 class="title1 blue--text fs-1 cardtitle">
                  <nuxt-link
                    class="nuxtlink"
                    target="_blank"
                    :to="{
                      path: 'blog/' + item.slug
                    }"
                  >
                    {{ item.title }}
                  </nuxt-link>
                </h2>
              </v-card-title>
              <v-card-text class="">
                <v-chip-group
                  v-model="selection"
                  active-class="deep-purple accent-4 white--text"
                  column
                >
                  <span class="pt-3">Tags: &zwnj;&zwnj;</span>
                  <v-chip
                    :to="`/blog/tags/${itm}`"
                    v-for="(itm, index) in item.tags"
                    :key="index"
                    color="blue"
                    class="white--text"
                    >{{ itm }}</v-chip
                  >
                </v-chip-group>
                <span>Author: {{ item.name }} </span><br />
                <span>Date : {{ item.human_date }}</span
                ><br />
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row v-if="blogs_load">
          <v-col xs="12" sm="12" md="4" lg="4" xl="4">
            <v-skeleton-loader
              elevation="2"
              outlined
              shaped
              tile
              class="pa-2 ma-2"
              type="card"
            ></v-skeleton-loader>
          </v-col>
          <v-col xs="12" sm="12" md="4" lg="4" xl="4">
            <v-skeleton-loader
              elevation="2"
              outlined
              shaped
              tile
              class="pa-2 ma-2"
              type="card"
            ></v-skeleton-loader>
          </v-col>
          <v-col xs="12" sm="12" md="4" lg="4" xl="4">
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
      </v-container>
    </v-row>
    <v-row>
      <v-container>
        <v-row>
          <v-col>
            <h2 color="dark">News</h2>
          </v-col>
        </v-row>
        <v-row
          color="blue"
          v-for="(i, ind) in Math.ceil(news.length / 3)"
          :key="ind"
        >
          <v-col
            xs="12"
            sm="12"
            md="4"
            lg="4"
            xl="4"
            v-for="(item, indx) in news.slice((i - 1) * 3, i * 3)"
            :key="indx"
          >
            <v-card elevation="2" outlined shaped tile class="pa-2 ma-0">
              <nuxt-link
                target="_blank"
                class="nuxtlink"
                :to="{
                  path: 'news/' + item.slug
                }"
              >
                <v-img
                  contain
                  aspect-ratio="1.7"
                  height="250"
                  :src="item.image"
                >
                </v-img>
              </nuxt-link>

              <v-card-title>
                <h2 class="title1 blue--text fs-1 cardtitle">
                  <nuxt-link
                    target="_blank"
                    class="nuxtlink"
                    :to="{
                      path: 'news/' + item.slug
                    }"
                  >
                    {{ item.title }}
                  </nuxt-link>
                </h2>
              </v-card-title>
              <v-card-text class="">
                <v-chip-group
                  v-model="selection"
                  active-class="deep-purple accent-4 white--text"
                  column
                >
                  <span class="pt-3">Tags: &zwnj;&zwnj;</span>
                  <v-chip
                    v-for="(itm, index) in item.tags"
                    :key="index"
                    color="blue"
                    class="white--text"
                    >{{ itm }}</v-chip
                  >
                </v-chip-group>
                <span>Author: {{ item.name }} </span><br />
                <span>Date : {{ item.human_date }}</span
                ><br />
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row v-if="news_load">
          <v-col xs="12" sm="12" md="4" lg="4" xl="4">
            <v-skeleton-loader
              elevation="2"
              outlined
              shaped
              tile
              class="pa-2 ma-2"
              type="card"
            ></v-skeleton-loader>
          </v-col>
          <v-col xs="12" sm="12" md="4" lg="4" xl="4">
            <v-skeleton-loader
              elevation="2"
              outlined
              shaped
              tile
              class="pa-2 ma-2"
              type="card"
            ></v-skeleton-loader>
          </v-col>
          <v-col xs="12" sm="12" md="4" lg="4" xl="4">
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
      </v-container>
    </v-row>
    <v-row>
      <v-container>
        <v-row>
          <v-col>
            <h2 color="dark">Post</h2>
          </v-col>
        </v-row>
        <v-row
          color="blue"
          v-for="(i, ind) in Math.ceil(posts.length / 3)"
          :key="ind"
        >
          <v-col
            xs="12"
            sm="12"
            md="4"
            lg="4"
            xl="4"
            v-for="(item, indx) in posts.slice((i - 1) * 3, i * 3)"
            :key="indx"
          >
            <v-card elevation="2" outlined shaped tile class="pa-2 ma-0">
              <nuxt-link
                target="_blank"
                class="nuxtlink"
                :to="{
                  path: 'post/' + item.slug
                }"
              >
                <v-img
                  contain
                  aspect-ratio="1.7"
                  height="250"
                  :src="item.image"
                >
                </v-img>
              </nuxt-link>

              <v-card-title>
                <h2 class="title1 blue--text fs-1 cardtitle">
                  <nuxt-link
                    target="_blank"
                    class="nuxtlink"
                    :to="{
                      path: 'post/' + item.slug
                    }"
                  >
                    {{ item.title }}
                  </nuxt-link>
                </h2>
              </v-card-title>
              <v-card-text class="">
                <v-chip-group
                  v-model="selection"
                  active-class="deep-purple accent-4 white--text"
                  column
                >
                  <span class="pt-3">Tags: &zwnj;&zwnj;</span>
                  <v-chip
                    v-for="(itm, index) in item.tags"
                    :key="index"
                    color="blue"
                    class="white--text"
                    >{{ itm }}</v-chip
                  >
                </v-chip-group>
                <span>Author: {{ item.name }} </span><br />
                <span>Date : {{ item.human_date }}</span
                ><br />
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row v-if="news_load">
          <v-col xs="12" sm="12" md="4" lg="4" xl="4">
            <v-skeleton-loader
              elevation="2"
              outlined
              shaped
              tile
              class="pa-2 ma-2"
              type="card"
            ></v-skeleton-loader>
          </v-col>
          <v-col xs="12" sm="12" md="4" lg="4" xl="4">
            <v-skeleton-loader
              elevation="2"
              outlined
              shaped
              tile
              class="pa-2 ma-2"
              type="card"
            ></v-skeleton-loader>
          </v-col>
          <v-col xs="12" sm="12" md="4" lg="4" xl="4">
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
      </v-container>
    </v-row>
    <v-row>
      <v-col xs="12" sm="12" lg="12" class="">
        <v-sheet class="" elevation="2">
          <v-container class="">
            <v-row>
              <v-col cols="12" sm="12" lg="12">
                <v-progress-linear
                  v-if="LoadingStatus"
                  color="blue accent-5"
                  indeterminate
                  rounded
                  height="6"
                ></v-progress-linear>
                <v-sheet
                  v-if="!LoadingStatus"
                  v-for="message in MessageOfTheDay"
                  :key="message.author"
                  class="text-center "
                >
                  <span
                    class="text-center mt-5 dont-break-out"
                    :class="{
                      'fs-0.5': $vuetify.breakpoint.smAndDown,
                      'fs-1.5': $vuetify.breakpoint.mdAndUp
                    }"
                  >
                    " {{ message.message }} " - {{ message.author }}
                  </span>
                </v-sheet>
              </v-col>
            </v-row>
          </v-container>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  loading: {
    color: 'orange',
    height: '5px'
  },
  middleware: 'auth',
  auth: false,
  head: () => ({
    title: 'Homepage ',
    meta: [{ hid: 'Homepage', name: 'Homepage', content: 'Homepage' }]
  }),
  data: () => ({
    blogs_load: false,
    news_load: false,
    posts_load: false,
    selection: 0,
    content: [],
    news: [],
    posts: [],
    selectedItem: 0,
    show: true,
    title: '',
    model: 6,
    rounded: ['0', 'sm', 'md', 'lg', 'xl', 'pill', 'circle'],
    links: []
  }),
  async fetch() {
    this.blogs_load = true
    this.news_load = true
    this.posts_load = true

    await this.$axios.$get('/sanctum/csrf-cookie')
    const res = await this.$axios.$get(`api/blog/page/1/item/3`)
    this.blogs_load = false
    this.content = res.data

    await this.$axios.$get('/sanctum/csrf-cookie')
    const news = await this.$axios.$get(`api/news/page/1/item/3`)
    this.news_load = false
    this.news = news.data

    await this.$axios.$get('/sanctum/csrf-cookie')
    const posts = await this.$axios.$get(`api/post/page/1/item/3`)
    this.posts_load = false
    this.posts = posts.data
  },
  layout: 'default',
  methods: {
    ...mapActions('messageoftheday', ['fetchQuote'])
  },
  computed: {
    ...mapGetters('messageoftheday', ['MessageOfTheDay', 'LoadingStatus'])
  },
  async mounted() {
    await this.$axios.$get('/sanctum/csrf-cookie')
    try {
      this.fetchQuote()
    } catch (error) {
      console.log(error)
    }
  }
}
</script>
<style scoped>
.dont-break-out {
  /* These are technically the same, but use both */
  overflow-wrap: break-word;
  word-wrap: break-word;

  -ms-word-break: break-all;
  /* This is the dangerous one in WebKit, as it breaks things wherever */
  word-break: break-all;
  /* Instead use this non-standard one: */
  word-break: break-word;

  /* Adds a hyphen where the word breaks, if supported (No Blink) */
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
}
.font-lulu {
  font-family: 'Lulu', sans-serif;
}
.font-halimun {
  font-family: 'Halimun', sans-serif;
}
/* .font-kalamreg {
  font-family: 'Kalam-Regular', sans-serif;
  line-height: 1.2;
} */
.font-barlowreg {
  font-family: 'Barlow-Regular', sans-serif;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
.title1 {
  text-decoration: none;
}
.v-application a {
  color: rgb(66, 77, 238);
  text-decoration: none;
}
.cardtitle {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
