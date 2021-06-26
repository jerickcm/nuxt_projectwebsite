<template>
  <v-sheet class="ma-0 pa-0">
    <v-row class="ma-0 pa-0">
      <v-col
        sm="12"
        md="8"
        lg="8"
        xl="8"
        class="mb-0 pb-0 col-md-8 col-lg-8 offset-md-2 offset-lg-2 offset-xl-2"
      >
        <h1>Blog</h1>
        <p>Relevent Personal Blogs about programming and events</p>
      </v-col>
    </v-row>
    <v-row v-for="(item, index) in content" :key="index" class="ma-0 pa-0">
      <v-col
        sm="12"
        md="8"
        lg="8"
        xl="8"
        class="mb-0 pb-0 col-md-8 col-lg-8 offset-md-2 offset-lg-2 offset-xl-2"
      >
        <v-card elevation="2" outlined shaped tile class="pa-2 ma-0">
          <nuxt-link
            class="nuxtlink"
            :to="{
              path: 'blog/' + item.slug,
            }"
          >
          <!-- v-if="item.image==''" -->
          <!-- v-if="item.image!=='{}'"  -->
              <v-img :src="item.image"

              height="250px"
              > </v-img>
            <!-- <v-img  v-else src="/images/NoImageAvailable.jpg"> </v-img> -->


          </nuxt-link>

          <v-card-title>
            <nuxt-link
              class="nuxtlink"
              :to="{
                path: 'blog/' + item.slug,
              }"
              > {{ item.title }}
            </nuxt-link>
          </v-card-title>
          <v-card-text class="">
            <v-chip-group
              v-model="selection"
              active-class="deep-purple accent-4 white--text"
              column

            >
                  <!-- :to="`/blogs/category/${itm}`" -->
                 <span class="pt-3">Tags: &zwnj;&zwnj;</span> <v-chip  v-for="(itm, index) in item.tags" :key="index" color="blue" class="white--text">{{itm}}</v-chip>
            </v-chip-group>
            <span>Author: {{ item.name }} </span><br />
            <span>Date : {{ item.human_date }}</span
            ><br />
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
        sm="12"
        md="8"
        lg="8"
        xl="8"
        class="mb-0 pb-0 col-md-8 col-lg-8 offset-md-2 offset-lg-2 offset-xl-2"
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
        sm="12"
        md="8"
        lg="8"
        xl="8"
        class="mb-0 pb-0 col-md-8 col-lg-8 offset-md-2 offset-lg-2 offset-xl-2"
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
        class="mb-0 pb-0 col-md-8 col-lg-8 offset-md-2 offset-lg-2 offset-xl-2"
      >
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
    <v-row class="ma-0 pa-0">
    <v-col
    sm="12"
    md="8"
    lg="8"
    xl="8"
    class="mb-0 pb-0 col-md-8 col-lg-8 offset-md-2 offset-lg-2 offset-xl-2"
    >
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    <script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
    <ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-3213536425475125"
     data-ad-slot="3715096457"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
    </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
export default {
  head: {

  },
  props: ['content', 'length', 'loading'],
  data: () => ({
    selection:''
  }),
  async created() {},
  mounted() {},
  computed: {},
  methods: {
    image_default(event){
       console.log('Image failed to load');
      // console.log('event')
      // event.target.src = "/images/NoImageAvailable.jpg";
    },
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
