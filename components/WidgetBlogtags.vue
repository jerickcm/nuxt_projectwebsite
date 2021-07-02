<template>
  <v-sheet>
    <v-container v-if="!loader">
      <v-row>
        <v-col>
          <h2 class="ml-3 mb-2">Related Blogs</h2>
        </v-col></v-row
      >
      <v-row>
        <v-col
          xs="12"
          sm="12"
          md="12"
          lg="4"
          xl="4"
          v-for="(item, indx) in content"
          :key="indx"
        >
          <v-card elevation="2" outlined shaped tile class="pa-2 ma-0">
            <nuxt-link
              class="nuxtlink"
              target="_blank"
              :to="{
                path: 'blog/' + item.slug,
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
                    path: 'blog/' + item.slug,
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
              <v-avatar
                v-if="item.profile_picture != null"
                class="d-inline-flex pa-2"
              >
                <img :src="item.profile_picture" alt="" />
              </v-avatar>
              <v-card v-else class="d-inline-flex pa-2" flat>
                <p>Author:</p>
              </v-card>
              <v-card class="d-inline-flex pa-2" flat>
                <p>{{ item.name }}</p>
              </v-card>
              <v-card class="d-inline-flex pa-2" flat>
                <p>{{ item.human_date }}</p>
              </v-card>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-container v-if="loader">
      <v-row v-for="(item, indx) in content" :key="indx">
        <v-col>
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
    loader: false,
  }),
  async fetch() {},
  async mounted() {
    this.loader = true
    await this.$axios.$get('/sanctum/csrf-cookie')
    const res = await this.$axios.$get(`api/blog/item/3`)
    this.content = res.data
    this.loader = false
  },
  computed: {},
  methods: {},
}
</script>
