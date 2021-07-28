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
                  <v-container class="mb-2 mr-0 pr-0 tag-border">
                    <v-row>
                      <v-col>
                        <h1>Addition | Arithmetic </h1>
                        <p>Free Practice Addition online</p>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col> </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        <v-card class="pr-5 mr-5">
                          <v-container>
                            <v-row>
                              <v-col>
                                <v-text-field
                                  label="Addens"
                                  v-model="adden1"
                                  height="50"
                                  class="ma-2 pa-2 black--text"
                                  required
                                  shaped
                                  readonly
                                  style="font-size: 40px;"
                                  type="number"
                                ></v-text-field>
                              </v-col>
                              <v-col class="mt-5"
                                ><v-icon large>mdi-plus</v-icon></v-col
                              >
                              <v-col>
                                <v-text-field
                                  label="Addens"
                                  v-model="adden2"
                                  class="ma-2 pa-2 black--text"
                                  required
                                  readonly
                                  height="50"
                                  style="font-size: 40px;"
                                  type="number"
                                ></v-text-field
                              ></v-col>
                              <v-col class="mt-5"
                                ><v-icon large>mdi-equal</v-icon>
                              </v-col>
                              <v-col>
                                <v-text-field
                                  label="Sum"
                                  v-model="sum"
                                  height="50"
                                  class="ma-2 pa-2"
                                  style="font-size: 40px;"
                                  type="number"
                                ></v-text-field
                              ></v-col>
                            </v-row>
                            <v-row>
                              <v-col>
                                <v-btn dark @click="refresh_addens" color="blue"
                                  >New Problem</v-btn
                                >
                                <v-btn dark @click="check_answer" color="green"
                                  >Check Answer</v-btn
                                >
                              </v-col>
                              <v-col v-if="refresh">
                                <b v-if="result_check" class="green--text"
                                  >Correct: {{ sum }}</b
                                >
                                <b v-else class="red--text">Incorrect</b>
                              </v-col>
                            </v-row>
                          </v-container>
                        </v-card>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col style=""> </v-col>
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
                        <Arithmetic />
                      </v-col>
                    </v-row>
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
export default {
  head() {
    return {
      title: 'Addition | Arithmeric ',
      meta: [
        {
          hid: 'Addition | Arithmeric ',
          name: 'Addition | Arithmeric',
          content: 'Addition | Arithmeric'
        }
      ]
    }
  },
  data: () => ({
    adden1: '',
    adden2: '',
    sum: '',
    result_check: '',
    result_color: '',
    refresh: '',
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
    blogs_in_latest: [],
    page: 2
  }),
  mounted() {
    this.adden1 = Math.floor(Math.random() * 10)
    this.adden2 = Math.floor(Math.random() * 10)
  },
  layout: 'default',
  methods: {
    check_answer() {
      var computed_sum
      computed_sum = this.adden1 + this.adden2
      this.refresh = true
      if (this.sum == computed_sum) {
        this.result_check = true
        this.$toast.success('Correct')
      } else {
        this.result_check = false
        this.$toast.error('Incorrect')
      }
    },
    refresh_addens() {
      this.refresh = false
      this.adden1 = Math.floor(Math.random() * 10)
      this.adden2 = Math.floor(Math.random() * 10)
      this.sum = ''
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
input {
  font-size: 40px;
}
</style>
