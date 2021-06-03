<template>
  <v-container fluid class="ma-0 pa-0">
    <!-- <v-parallax class="ma-0 pa-0" height="900" src="/images/posts.jpg"> -->
    <v-row v-for="(item, index) in posts" :key="index">
      <v-spacer></v-spacer>
      <v-col sm="12" lg="6">
        <v-card elevation="2" outlined shaped tile class=" pa-2 ma-2">
          <v-img
            height="250"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          ></v-img>
          <v-card-title>
            <nuxt-link
              :to="{
                path: 'posts_view',
                query: { slug: item.slug }
              }"
              >Title : {{ item.title }} </nuxt-link
            >
          </v-card-title>
          <v-card-text class="">
            <span>Author: {{ item.name }} </span><br />
            <span>Date : {{ item.human_date }}</span>
          </v-card-text>
        </v-card>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>

    <!-- </v-parallax> -->
  </v-container>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    posts: []
  }),
  mounted() {
    console.log("mounted");
    this.getposts();
  },
  components: {},
  watch: {},
  methods: {
    getposts() {
      let payload = new FormData();
      payload.append("page", 0);
      try {
        this.$axios
          .$post("api/post/list", payload)
          .then(res => {
            var data = [];
            for (const [key, value] of Object.entries(res.data)) {
              data.push({
                name: value.name,
                id: value.id,
                slug: value.slug,
                title: value.title,
                content: value.content,
                created_at: value.created,
                human_date: value.human_date
              });
            }
            this.posts = data;
          })
          .catch(error => {})
          .finally(() => {});
      } catch (error) {
        console.log("error");
      }
    }
  },
  async created() {
    console.log(this.$route.query.edit);
    await this.$axios.$get("/sanctum/csrf-cookie").then(response => {});
  }
};
</script>
<style scoped>
ul.clean {
  list-style: none !important;
  list-style-type: none !important;
}
</style>
