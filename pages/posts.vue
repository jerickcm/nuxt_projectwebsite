<template>
  <v-container fluid class="ma-0 pa-0">
    <v-parallax class="ma-0 pa-0" height="900" src="/images/posts.jpg">
      <v-btn color="primary" depressed>
        Posts
      </v-btn>
    </v-parallax>
  </v-container>
</template>

<script>
// const axios = require("axios");
// const config = {
//   headers: {
//     Accept: "application/json"
//   }
// };

const config = {
  headers: {
    Accept: "application/json"
  }
};

export default {
  // auth: false,
  data: () => ({
    loading: false
  }),
  components: {},
  watch: {},
  async created() {
    await this.$axios.$get("/sanctum/csrf-cookie").then(response => {});
    await this.$axios.$post("api/post", this.form);
    await this.$axios.$post("api/post/get", this.form);
    // try {
    //   const response = await axios.get(url + "/api/post", config);
    // } catch (error) {
    //   this.progressBar = false;
    // }
  }
};
</script>
<style scoped>
ul.clean {
  list-style: none !important;
  list-style-type: none !important;
}
</style>
