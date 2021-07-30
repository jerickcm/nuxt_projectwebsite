<template>
  <v-container fluid class="">
    <v-row class="mb-5 pb-5">
      <v-container>
        <v-row>
          <v-col class=" mb-0 pb-0">
            <v-container>
              <v-row>
                <v-col
                  xs="12"
                  sm="12"
                  md="12"
                  lg="8"
                  xl="8"
                  cols="12"
                  class="pa-0 ma-0"
                >
                  <v-container class="mr-0 pr-0 tag-border ">
                    <v-row>
                      <v-col class="mr-2">
                        <h1>Profile Username : {{ username }}</h1>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col class="mr-2">
                        <v-card class="pa-2">
                          <v-img
                            class="ml-2 mt-2"
                            v-if="profile['details'].cover_photo"
                            :src="profile['details'].cover_photo"
                          ></v-img>

                          <v-avatar
                            width="37"
                            v-if="profile['details'].profile_picture"
                          >
                            <v-img
                              :src="profile['details'].profile_picture"
                            ></v-img>
                          </v-avatar>

                          <v-avatar v-else class=" white--text" color="grey">
                            {{ profile.name.charAt(0).toUpperCase() }}
                          </v-avatar>

                          <v-card-text class="pa-0 pt-5">
                            <span class="fs-1-5">{{ profile.name }}</span
                            ><br />
                            <span class="fs-1-5">
                              <span class="font-Bonida">{{
                                allibataname
                              }}</span></span
                            ><br />

                            <span v-if="username">Username: {{ username }}</span
                            ><br />
                            <span v-if="profile.email"
                              >Email: {{ profile.email }}</span
                            ><br />
                            <span v-if="profile['details'].house_number">
                              Address No:
                              {{ profile['details'].house_number }}
                            </span>
                            <br />
                            <span v-if="profile['details'].street">
                              Address street: {{ profile['details'].street }}
                            </span>
                            <br />
                            <span v-if="profile['details'].city">
                              Address City: {{ profile['details'].city }}
                            </span>
                            <br />
                            <span v-if="profile['details'].province">
                              Address province:
                              {{ profile['details'].province }}
                            </span>
                            <br />
                            <span v-if="profile['details'].country">
                              Address country:
                              {{ profile['details'].country }}
                            </span>
                            <br />
                          </v-card-text>
                        </v-card>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-col>
                <v-col
                  xs="12"
                  sm="12"
                  md="12"
                  lg="4"
                  xl="4"
                  cols="12"
                  class="pa-0 ma-0"
                >
                  <v-container class="mr-0 pr-0">
                    <v-row>
                      <v-col class="ma-0 mt-0 pt-0">
                        <BlogList
                          :blogs_in_random="blogs_in_random"
                          title="Random Blogs"
                        />
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col class="ma-0 mt-0 pt-0">
                        <TagsIndex
                          :tags="tags"
                          :load_tags="load_tags"
                          :total_tags="total_tags"
                        />
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col class="ma-0 mt-0 pt-0">
                        <Tools />
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col class="ma-0 mt-0 pt-0">
                        <Arithmetic />
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col class="ma-0 mt-0 pt-0">
                        <Calculator />
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col class="ma-0 mt-0 pt-0">
                        <BlogList
                          :blogs_in_random="blogs_in_latest"
                          title="Latest Blogs"
                        />
                      </v-col>
                    </v-row>
                  </v-container>
                </v-col>
              </v-row>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
    </v-row>
    <Services />
  </v-container>
</template>

<script>
export default {
  head() {
    return {
      title: 'Profile ' + this.username,
      meta: [
        {
          hid: 'Profile',
          name: 'Profile',
          content: 'Profile'
        }
      ]
    }
  },

  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
      loading: false,
      profile: [],
      selection: 0,
      content: [],
      length: null,
      loading: false,
      page: 2,
      transparent: 'rgba(255, 255, 255, 0)',
      blogs_load: false,
      news_load: false,
      posts_load: false,
      selection: 0,
      content: [],
      news: [],
      posts: [],
      nuxt: [],
      selectedItem: 0,
      show: true,
      title: '',
      model: 6,
      rounded: ['0', 'sm', 'md', 'lg', 'xl', 'pill', 'circle'],
      links: [],

      posts_content: 0,
      news_content: 0,

      tags: [],
      load_tags: false,
      total_tags: 0,
      height: '200px',
      blogs_load: false,
      blogs_content: [],
      blogs_total: 0,

      nuxt: [],
      laravel: [],
      vue: [],
      load_nuxt: false,
      load_laravel: false,
      load_vue: false,

      show_nuxt: false,
      show_laravel: false,
      show_vue: false,
      blogs_in_random: [],
      blogs_in_latest: []
    }
  },
  async fetch() {
    this.loading = true
    // await this.$axios.$get('/sanctum/csrf-cookie')
    const res = await this.$axios.$get(`api/blog/page/1/item/10`)
    this.content = res.data
    this.length = res.data.length
    this.loading = false

    const BlogsRandom = await this.$axios.$get(`api/blog/index/10`)
    this.blogs_in_random = BlogsRandom.data

    const Blogslatest = await this.$axios.$get(`api/blog/latest/10`)
    this.blogs_in_latest = Blogslatest.data

    this.load_tags = true
    const tags = await this.$axios.$get(`api/tags`)
    this.load_tags = false
    this.tags = tags.data
    this.total_tags = tags.total
  },
  async watch() {},
  async asyncData({ $axios, error, params }) {
    try {
      await $axios.$get('/sanctum/csrf-cookie')
      let response = await $axios.$get(
        `api/user_details/username/${params.username}`
      )
      return { profile: response.user }
    } catch (error1) {
      // console.log(this.error.statusCode)
      error({ statusCode: 500, message: 'Page not found' })
    }
  },

  computed: {
    username() {
      return this.$route.params.username
    },
    allibataname() {
      return this.profile.name
    }
  },
  methods: {},
  async mounted() {
    // return { profile: response.user }
  },
  components: {},
  watch: {}
}
</script>
<style scoped>
ul.clean {
  list-style: none !important;
  list-style-type: none !important;
}
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

.title1 {
  text-decoration: none;
}
.v-application a {
  color: rgb(66, 77, 238);
  text-decoration: none;
}

.adj-title {
  min-height: 2rem;
  line-height: 1rem;
  margin: 0px;
  padding: 0px;
}

.hr-blue {
  border: 3px solid blue;
}
.hr-red {
  border: 3px solid red;
}
.hr-orange {
  border: 3px solid orange;
}
.hr-black {
  border: 3px solid black;
}
ul.clean {
  list-style: none !important;
  list-style-type: none !important;
}
.text-justify {
  text-align: justify;
  text-justify: inter-word;
}
.hr-brown {
  border: 3px solid brown;
}
.tag-border {
  border-right: 0.4rem solid #add8e6;
  border-top: 0.4rem solid #add8e6;
}
</style>
