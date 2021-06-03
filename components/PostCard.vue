<template>
  <v-sheet>
    <v-row v-for="(item, index) in posts" :key="index" class="ma-0 pa-0">
      <v-col sm="12" lg="12">
        <v-card elevation="2" outlined shaped tile class=" pa-2 ma-2">
          <v-img
            height="250"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          >
            <v-card-title class="white--text">
              Article No: {{ item.increment }}
            </v-card-title>
          </v-img>
          <v-card-title>
            <nuxt-link
              :to="{
                path: 'posts_view',
                query: { slug: item.slug }
              }"
              >Title : {{ item.title }}
            </nuxt-link>
          </v-card-title>
          <v-card-text class="">
            <span>Author: {{ item.name }} </span><br />
            <span>Date : {{ item.human_date }}</span
            ><br />
            <!-- <span>No : {{ item.increment }}</span> -->
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row
      class="ma-0 pa-0"
      :class="loadcard"
      v-for="index in 10"
      :key="index + `b`"
    >
      <v-col sm="12" lg="12">
        <v-skeleton-loader
          elevation="2"
          outlined
          shaped
          tile
          class=" pa-2 ma-2"
          type="card"
        ></v-skeleton-loader>
      </v-col>
    </v-row>
    <v-row class="ma-0 pa-0">
      <v-col sm="12" lg="12">
        <v-card elevation="2" class=" pa-2 ma-2 ">
          <!-- text-lg-center  -->
          <!-- outlined
          shaped
          tile -->
          <v-btn class="green white--text" @click="getposts">
            Next Post
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-sheet>
</template>
<script>
import NProgress from "nprogress";
import "nprogress/nprogress.css";

export default {
  data: () => ({
    loadcard: "",
    loading: false,
    posts: [],
    page: 1,
    data: [],
    increment: 0
  }),
  async created() {
    await this.$axios.$get("/sanctum/csrf-cookie").then(response => {});
  },
  mounted() {
    this.getposts();
  },
  methods: {
    requestnextposts() {
      console.log("nxt post");
    },
    getposts() {
      NProgress.start();
      let payload = new FormData();

      payload.append("page", this.page);
      NProgress.inc();
      try {
        this.$axios
          .$post("api/post/list", payload)
          .then(res => {
            // var data = [];
            for (const [key, value] of Object.entries(res.data)) {
              this.increment = this.increment + 1;
              this.data.push({
                name: value.name,
                id: value.id,
                slug: value.slug,
                title: value.title,
                content: value.content,
                created_at: value.created,
                human_date: value.human_date,
                increment: this.increment
              });
            }
            this.posts = this.data;
            NProgress.done();
            this.loadcard = "d-none";
            this.page = this.page + 1;
          })
          .catch(error => {
            NProgress.done();
            this.loadcard = "d-none";
          })
          .finally(() => {});
      } catch (error) {
        console.log("error");
      }
    }
  }
};
</script>
