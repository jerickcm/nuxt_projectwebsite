<template>
  <v-sheet class="ma-0 pa-0">
    <v-row class="ma-0 pa-0">
      <v-col>
        <h1>Blog</h1>
        <p>Relevent Personal Blogs about programming and events</p>
      </v-col>
    </v-row>
    <v-row v-for="(item, index) in content" :key="index" class="ma-0 pa-0">
      <v-col>
        <v-card elevation="2" outlined shaped tile class="pa-2 ma-0">

          <nuxt-link
            class="nuxtlink"
            :to="{
              path: '/blog/' + item.slug,
            }"
          >

              <v-img
               gradient="to top right, rgba(0,0,201,.1), rgba(0,0,72,.2)"
              contain :src="item.image"

              min-height="250"
              > </v-img>

          </nuxt-link>

          <v-card-title>
            <nuxt-link
              class="nuxtlink"
              :to="{
                path: '/blog/' + item.slug,
              }"
              > {{ item.title }}
            </nuxt-link>
          </v-card-title>
          <v-card-text class="">
            <v-chip-group
              v-model="selection"
              active-class="deep-purple accent-4 white--text"
              column>
                 <span  class="pt-3">Tags: &zwnj;&zwnj;</span> <v-chip :to="`/blog/tags/${itm}`"  v-for="(itm, index) in item.tags" :key="index" color="blue" class="white--text">{{itm}}</v-chip>
            </v-chip-group>


              <v-avatar size="37" v-if="item.profile_picture!=null"  class="d-inline-flex pa-2">
                <img :src="item.profile_picture"  alt=""  >
              </v-avatar>
               <v-card v-else
                class="d-inline-flex pa-2"
                flat
              >
                <p>  Author: </p>

              </v-card>
              <v-card
                class="d-inline-flex pa-2"
                flat
              >
                <p>  {{ item.name }} </p>

              </v-card>
               <v-card
                class="d-inline-flex pa-2"
                flat
              >

                <p>  {{ item.human_date }}</p >
              </v-card>

          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row
      class="ma-0 pa-0"
      v-if="loading"
      v-for="index in 10"
      :key="index + `b`"
    >
      <v-col

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
    </v-row>
    <v-row class="ma-0 pa-0" v-if="!(length == 10)">
      <v-col

      >
        <v-card elevation="2" outlined shaped tile class="pa-2 ma-0">
          <label for="" class="grey--text">Nothing Follows</label>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="ma-0 pa-0">
      <v-col>
        <v-card elevation="2" outlined shaped tile class="pa-2 ma-0">
          <v-btn
            class="white--text"
            @click="getnextarticle"
            :disabled="length == 10 ? false : true"
            :class="length == 10 ? 'green' : 'grey'"
          >
            Next Article
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-row>

  </v-sheet>
</template>

<script>
export default {

  props: ['content', 'length', 'loading'],
  data: () => ({
    selection:''
  }),
  async created() {},
  mounted() {},
  computed: {},
  methods: {
    getnextarticle() {
      this.$emit('next-article')
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
