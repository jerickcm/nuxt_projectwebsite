<template>
  <v-sheet>
    <v-row v-for="(item, index) in posts" :key="index" class="ma-0 pa-0">
      <v-col sm="12" lg="12">
        <v-card elevation="2" outlined shaped tile class="pa-2 ma-2">
          <v-img height="250" :src="item.image">
            <v-card-title class="white--text transparent">
              Article No: {{ item.increment }}
            </v-card-title>
          </v-img>
          <v-card-title>
            <nuxt-link
              :to="{
                path: 'posts_view',
                query: { slug: item.slug },
              }"
              >Title : {{ item.title }}
            </nuxt-link>
          </v-card-title>
          <v-card-text class="">
            <span>Author: {{ item.name }} </span><br />
            <span>Date : {{ item.human_date }}</span
            ><br />
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
          class="pa-2 ma-2"
          type="card"
        ></v-skeleton-loader>
      </v-col>
    </v-row>
    <v-row class="ma-2 pa-2" :class="no_more_post">
      <v-col sm="12" lg="12" class="text-center text-lg-center">
        <v-card elevation="2" outlined shaped tile class="pa-2 ma-2">
          Nothing Follows
        </v-card>
      </v-col>
    </v-row>
    <v-row class="ma-0 pa-0" >
      <v-col sm="12" lg="12">
        <v-card elevation="2" class="pa-2 ma-2">
          <v-btn
            class="white--text"
            @click="getposts"
            :disabled="disable_next"
            :class="disable_color" >
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
    no_more_post: "d-none",
    loadcard: "",
    loading: false,
    posts: [],
    page: 1,
    data: [],
    increment: 0,
    disable_next: false,
    disable_color: "green",
  }),
  async created() {
    await this.$axios.$get("/sanctum/csrf-cookie").then((response) => {});
  },
  mounted() {
    this.getposts();
  },
  methods: {
    requestnextposts() {
      console.log("nxt post");
    },
    getposts() {
      console.log("HELLO");
      NProgress.start();
      let payload = new FormData();

      payload.append("page", this.page);
      NProgress.inc();
      try {
        this.$axios
          .$post("api/post/list", payload)
          .then((res) => {
            if (res.data.length == 0) {
              this.no_more_post = "";
              this.disable_next = true;
              this.disable_color = "grey";
            } else {
              this.disable_next = false;
              this.disable_color = "green";
            }

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
                image: value.image,
                increment: this.increment,
              });
            }
            this.posts = this.data;
            NProgress.done();
            this.loadcard = "d-none";
            this.page = this.page + 1;
          })
          .catch((error) => {
            NProgress.done();
            this.loadcard = "d-none";
          })
          .finally(() => {});
      } catch (error) {
        console.log("error");
      }
    },
  },
};
</script>
<style scoped>
 .blue-trans{
   background-color: blue;
   opacity: .5;
 }
 .transparent {
   background-color:green!important;
   opacity: 0.2;
   border-color: transparent!important;
 }
</style>
