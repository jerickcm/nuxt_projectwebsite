<template>
  <v-container fluid class="ma-0 pa-0">
    <v-parallax class="ma-0 pa-0" height="900" src="/images/news.jpg">
      <v-btn color="primary" depressed>
        News
      </v-btn>
    </v-parallax>
  </v-container>
</template>

<script>
export default {
  auth: false,

  data() {
    return {
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4"
      ],
      slides: ["First"] //, "Second", "Third", "Fourth", "Fifth"
    };
  },
  computed: {}
};
</script>
<style scoped>
ul.clean {
  list-style: none !important;
  list-style-type: none !important;
}
</style>
