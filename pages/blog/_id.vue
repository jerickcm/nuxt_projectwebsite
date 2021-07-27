<template>
  <v-container fluid class="">
    <v-row class="mb-5 pb-5">
      <v-container fluid>
        <v-row>
          <v-col class=" mb-0 pb-0">
            <v-container fluid>
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
                  <v-container
                    class="mr-0 pr-0 tag-border"
                    style="overflow-x: scroll;"
                  >
                    <v-row>
                      <v-col
                        xs="12"
                        sm="12"
                        md="12"
                        lg="12"
                        xl="12"
                        cols="12"
                        class="mb-0 pb-0"
                      >
                        <v-skeleton-loader
                          elevation="2"
                          outlined
                          shaped
                          tile
                          class="pa-2 ma-2"
                          type="card"
                          v-if="pageload"
                        ></v-skeleton-loader>
                        <v-sheet v-else shaped tile class="pa-1 ma-1">
                          <v-card flat v-if="posts['image'] != null">
                            <v-img contain height="250" :src="posts['image']">
                            </v-img>
                          </v-card>
                          <v-card flat v-else>
                            <v-img src="/images/default.jpg"> </v-img>
                          </v-card>
                          <v-card-subtitle class="pa-0 ma-0 ml-1">
                            <v-chip-group
                              v-model="selection"
                              active-class="deep-purple accent-4 white--text"
                              column
                            >
                              <span class="pt-2">Tags: &zwnj;&zwnj;</span
                              ><v-chip
                                v-for="(itm, index) in posts['tags']"
                                :key="index"
                                color="blue"
                                class="white--text"
                                >{{ itm }}</v-chip
                              >
                            </v-chip-group>
                          </v-card-subtitle>
                          <v-card-title>
                            <h1 class="fs-1-3 font-roboto" color="dark">
                              {{ posts['title'] }}
                            </h1>
                          </v-card-title>

                          <v-card-text class="">
                            <span><b>Author :</b> {{ posts['name'] }}</span>

                            <br />
                            <span>
                              <b>Originally Published on :</b>
                              {{ posts['created'] }}
                            </span>
                            -
                            <span>
                              <b>Last Validated on :</b> {{ posts['updated'] }}
                            </span>
                            <br />
                            <v-icon>mdi-eye</v-icon> {{ posts['pageview'] }}
                            <br />
                            <br />
                            <v-sheet v-html="posts['headline']"></v-sheet>

                            <v-sheet
                              v-html="posts['content']"
                              class="ck-content mt-5 "
                            ></v-sheet>
                          </v-card-text>
                        </v-sheet>
                      </v-col>
                    </v-row>
                    <!-- <v-row>
                      <v-col>
                        <WidgetBlogtags />
                      </v-col>
                    </v-row> -->
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
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
export default {
  head() {
    return {
      title: 'Blog:  ' + this.title,
      meta: [
        {
          hid: 'Blog',
          name: 'Blog',
          content: 'Blog' + this.title
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.headline
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.image
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: this.title
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.headline
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.image
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: this.image
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: this.title
        },
        {
          hid: 'twitter:site',
          name: 'twitter:site',
          content: 'https://twitter.com/InhinyeruC'
        }
      ]
    }
  },
  data: () => ({
    selection: '',
    posts: {
      content: [],
      headline: '',
      image: '',
      date: '',
      author: ''
    },
    image: '',
    headline: '',
    title: '',
    pageload: true,
    loading: false,
    page: 2,
    selection: 0,
    content: [],
    length: null,
    loading: false,
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
  }),
  async asyncData({ $axios, error, params }) {
    const dev_front = process.env.DEV_FRONT
    const prod_front = process.env.PROD_FRONT
    const front =
      process.env.NODE_ENV === 'development' ? dev_front : prod_front
    try {
      let response = await $axios.$get(`api/blog/${params.id}`)
      let image_hid
      if (response.data[0].image == null) {
        image_hid = front + '/images/adefltu.jpg'
      } else {
        image_hid = response.data[0].image
      }
      return {
        posts: response.data[0],
        pageload: false,
        slug: params.slug,
        title: response.data[0].title,
        headline: response.data[0].headline,
        tags: response.data[0].tags,
        image: image_hid
      }
    } catch (err) {
      error({ statusCode: 500, message: 'Page not found' })
    }
  },
  computed: {
    id() {
      return this.$route.params.id
    }
  },
  async fetch() {
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
  mounted() {},
  components: {},
  watch: {},
  methods: {}
}
</script>

<style scoped>
@import '~/assets/customcss/ckeditor.css';
</style>
<style scoped>
ul.clean {
  list-style: none !important;
  list-style-type: none !important;
}
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
