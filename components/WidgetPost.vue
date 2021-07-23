<template>
  <v-sheet>
    <h2 class="ml-3 mb-2">Post</h2>
    <v-container v-if="!loader">
      <v-row>
        <v-col
          class=" ma-0 pa-0 pt-2"
          xs="12"
          sm="12"
          md="12"
          lg="12"
          xl="12"
          v-for="(item, indx) in content"
          :key="indx"
        >
          <v-hover v-slot="{ hover }" open-delay="200">
            <v-card
              :elevation="hover ? 16 : 2"
              :class="{ 'on-hover': hover }"
              outlined
              shaped
              tile
              class="pa-2 ma-0 "
            >
              <nuxt-link
                target="_blank"
                class="nuxtlink"
                :to="{
                  path: '/post/' + item.slug
                }"
              >
                <v-img
                  v-if="item.image != null"
                  contain
                  aspect-ratio="2.3"
                  :src="item.image"
                >
                </v-img>

                <v-img
                  v-else
                  contain
                  aspect-ratio="2.3"
                  src="/images/default.jpg"
                >
                </v-img>
              </nuxt-link>

              <v-card-title class="pa-0 ma-0  adj-title">
                <h2 color="dark" class="title1 fs-1 line-clamp-2 ">
                  <nuxt-link
                    target="_blank"
                    class="nuxtlink"
                    :to="{
                      path: '/post/' + item.slug
                    }"
                  >
                    {{ item.title
                    }}<v-icon small color="blue"
                      >mdi-arrow-top-right-thick</v-icon
                    >
                  </nuxt-link>
                </h2>
              </v-card-title>
              <v-card-text class="pa-0 ma-0">
                <v-chip-group
                  v-model="selection"
                  active-class="deep-purple accent-4 white--text"
                  column
                >
                  <v-chip
                    :to="`/blog/tags/${itm}`"
                    v-for="(itm, index) in item.tags"
                    :key="index"
                    color="blue"
                    class="white--text"
                    >{{ itm }}
                  </v-chip>
                </v-chip-group>

                <v-avatar
                  size="37"
                  v-if="item.profile_picture != null"
                  class="d-inline-flex mt-3"
                >
                  <img :src="item.profile_picture" alt="" />
                </v-avatar>

                <v-avatar
                  v-else
                  color="blue"
                  size="37"
                  class=" white--text d-inline-flex  mt-3"
                >
                  {{ item.name.charAt(0).toUpperCase() }}
                </v-avatar>

                <v-card flat class="d-inline-flex d-flex flex-column ">
                  <v-card flat>{{ item.name }}</v-card>
                  <v-card flat>{{ item.human_date }}</v-card>
                </v-card>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>

    <v-container v-if="loader">
      <v-row>
        <v-col class=" ma-0 pa-0 pt-2">
          <v-skeleton-loader
            elevation="2"
            outlined
            shaped
            tile
            type="card"
          ></v-skeleton-loader>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    content: [],
    selection: 0,
    quote: '',
    author: '',
    loader: false
  }),
  async fetch() {},

  async mounted() {
    this.loader = true
    await this.$axios.$get('/sanctum/csrf-cookie')
    const res = await this.$axios.$get(`api/post/item`)
    this.blogs_load = false
    this.content = res.data
    this.loader = false
  },
  computed: {},
  methods: {}
}
</script>
