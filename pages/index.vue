<template>
  <v-container class=" ">
    <!-- <v-row>
      <v-col xs="12" sm="12" lg="12" md="12" class="ma-0 pa-0">
        <v-sheet class="black lighten-5" elevation="2" min-height="10vh">
          <v-container>
            <v-row class="pt-5">
              <v-col cols="12" sm="12" lg="9" class="text-center"
                ><label
                  class="font-lulu white--text"
                  :class="{
                    'fs-1.1': $vuetify.breakpoint.smAndDown,
                    'fs-3': $vuetify.breakpoint.mdAndUp
                  }"
                  >JERICK C. MANGALUS</label
                >
              </v-col>
              <v-col cols="12" sm="12" lg="3" class="text-center mt-7"
                ><label
                  class="text-right white--text"
                  :class="{
                    'fs-0-5': $vuetify.breakpoint.smAndDown,
                    'fs-1-0': $vuetify.breakpoint.mdAndUp
                  }"
                  >[ Technology R&D ]
                </label>
              </v-col>
            </v-row>

            <v-row>
              <v-col class="col-md-6 offset-md-3 text-center">
                <div class="hidden-sm-and-down text-center">
                  <v-btn
                    plain
                    text
                    tile
                    rounded
                    class="black pa-1 ma-1 white--text"
                    v-for="link in links"
                    :key="link.label"
                  >
                    {{ link.label }}
                  </v-btn>
                </div>
                <v-card class="mx-auto hidden-md-and-up d-none" tile>
                  <v-list dense>
                    <v-list-item-group v-model="selectedItem" color="primary">
                      <v-list-item v-for="(item, i) in links" :key="i">
                        <v-list-item-content>
                          <v-list-item-title
                            v-text="item.label"
                          ></v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list-item-group>
                  </v-list>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-sheet>
      </v-col>
    </v-row> -->
    <!-- <v-row>
      <v-col xs="12" sm="12" lg="12" class="ma-0 pa-0">
        <v-sheet class="grey lighten-5 pa-1 ma-1" elevation="2">
          <v-container class="">
            <v-row no-gutters class="mt-5">
              <v-col cols="12" sm="12" lg="12">
                <v-layout justify-center align-center>
                  <v-avatar
                    :size="150"
                    class="text-center black"
                    v-if="$vuetify.breakpoint.smAndDown"
                  >
                    <v-img
                      class="text-center"
                      src="/images/cartoon-darken.jpg"
                    ></v-img>
                  </v-avatar>

                  <v-avatar :size="350" class="text-center black" v-else>
                    <v-img
                      class="text-center"
                      src="/images/cartoon-darken.jpg"
                    ></v-img>
                  </v-avatar> </v-layout
              ></v-col>
            </v-row>
            <v-row no-gutters class="mt-5">
              <v-col
                cols="12"
                sm="12"
                lg="12"
                class="font-avenir fs-1-4 text-center"
              >
              </v-col>
            </v-row>
          </v-container>
        </v-sheet>
      </v-col>
    </v-row> -->
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
    <!-- <v-row>
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
                <v-img height="250" :src="item.image"> </v-img>
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
                <span>Author: {{ item.name }} </span><br />
                <span>Date : {{ item.human_date }}</span
                ><br />
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-row> -->
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
    <!-- <v-row>
      <v-col xs="12" sm="12" lg="12" class="ma-0 pa-0">
        <v-sheet color="background" class="" elevation="2" min-height="30vh">
          <v-container class="">
            <v-row no-gutters>
              <v-col cols="12" sm="12" lg="12" class="pa-1 ma-1">
                <p
                  class="pl-5 pr-5 text-justify  font-barlowreg"
                  :class="{
                    'fs-1': $vuetify.breakpoint.smAndDown,
                    'fs-2': $vuetify.breakpoint.mdAndUp
                  }"
                >
                  The inspiration of this website build is to expand my
                  knowledge base , in web development. Secondly I am planning to
                  retain this website in a public server earning from ads. Maybe
                  in my free time I could just update it with my newly learned
                  tricks in web deveopment. This website is running in frontend
                  Vue in a nuxt framework and backend is Laravel8. The time this
                  site is being developed is in the new release of PHP version
                  8. Also docker is in my list of research I am actually
                  surprised with laravel response to api is very slow and that
                  is because i am using windows file system that later i
                  discovered you need to be inside the linux filesystem because
                  I was running the backend in a linux container image. This
                  project is using docker in local and docker also in Google
                  Cloud Platform that is my dev-ops application. I am using
                  Laravel sail to build the containers connecting backend and
                  frontend I used Laravel Santum together with Nuxt auth next
                  node plugin. Along development I am learning a lot I advise
                  aldo for developer to do this during work from home. By the
                  way developing this site is during the pandemic it started in
                  March 20, 2020 here in the Philippines and at present covid-19
                  is still a threat to peoples lives. Even though their is
                  already a vaccine the production seems to still inadequate.
                </p>
              </v-col>
            </v-row>
          </v-container>
        </v-sheet>
      </v-col>
    </v-row> -->
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
    <!-- <v-row>
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
    </v-row> -->
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
    await this.$axios.$get('/sanctum/csrf-cookie')
    const res = await this.$axios.$get(`api/blog/page/1/item/3`)
    this.blogs_load = false
    this.content = res.data
    this.news_load = true
    await this.$axios.$get('/sanctum/csrf-cookie')
    const news = await this.$axios.$get(`api/news/page/1/item/3`)
    this.news_load = false
    this.news = news.data
  },
  layout: 'default',
  methods: {
    ...mapActions('messageoftheday', ['fetchQuote'])
  },
  computed: {
    ...mapGetters('messageoftheday', ['MessageOfTheDay', 'LoadingStatus'])
  },
  async created() {},
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
