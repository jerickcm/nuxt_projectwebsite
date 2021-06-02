<template>
  <v-container fluid class="grey ligthen-3 pa-0 ma-0" min-height="800vh">
    <v-sheet class="blue ligthen-3 pa-5 pt-10 pb-10" min-height="200vh">
      <form class="white pa-5" action="">
        <v-row
          ><v-col>
            <v-btn color="primary" depressed> POST </v-btn>
          </v-col></v-row
        >
        <v-row>
          <v-col>
            <v-text-field v-model="form_title" label="Title"></v-text-field>
          </v-col>
        </v-row>

        <v-row
          ><v-col>
            <label for class="black--text">Content</label> <br />
            <client-only placeholder="loading...">
              <form action="">
                <ckeditor-nuxt :config="editorConfig" v-model="form_content" />
              </form> </client-only
          ></v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn class="ml-0" color="success" v-on:click="onSubmit()">
              <label class="white-font">Submit</label>
            </v-btn>
          </v-col>
        </v-row>
      </form>
    </v-sheet>
  </v-container>
</template>

<script>
var url = process.env.BASE_URL_AXIOS;
var timezone = process.env.TIMEZONE;
console.log(url);
export default {
  middleware: "auth",

  data() {
    return {
      url: null,
      form_content: "",
      form_title: "",
      token: null,
    };
  },
  components: {
    "ckeditor-nuxt": () =>
      import("@engrjerickcmangalus/ckeditor-nuxt-custom-build-simpleuploader"),
  },
  async created() {
    this.$axios.$get("/sanctum/csrf-cookie").then((response) => {});
    this.url = url;
    this.timezone = timezone;
    this.editorConfig = {
      simpleUpload: {
        uploadUrl: "http://back.api.test:3001/api/ckeditor",
        withCredentials: true,
        headers: {
          Accept: "application/json",
          Timezone: this.timezone,
            // Authorization:"Bearer " + this.$auth.$storage.getCookies()["XSRF-TOKEN"],
            "X-XSRF-TOKEN": this.$auth.$storage.getCookies()["XSRF-TOKEN"],
            // "XSRF-TOKEN": this.$auth.$storage.getCookies()["XSRF-TOKEN"],
            // "CSRF-TOKEN": this.$auth.$storage.getCookies()["XSRF-TOKEN"],
        },
      },
    };
  },
  computed: {},
  methods: {
    onSubmit() {
      console.log(this.$auth.user);
      console.log(this.$store.state.auth.loggedIn);
      console.log(this.$auth.$storage.getCookies());

      var test = this.$auth.$storage.getCookies();
      console.log("test");
      // console.log(test.__gads);
      console.log(test["XSRF-TOKEN"]);
      // for (let key in test) {
      //   console.log(key, test[key]);
      // }
      // console.log(this.$auth.strategy.refreshToken.get());
      // Access using $auth
      // this.$auth.loggedIn

      // Access using vuex

      if (this.form_title && this.form_content) {
        // this.$axios.$get("/sanctum/csrf-cookie").then(response => {});
        let payload = new FormData();

        payload.append("title", this.form_title);
        payload.append("content", this.form_content);
        this.$axios
          .post("/api/create-post", payload, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((res) => {})
          .catch((error) => {})
          .finally(() => {});
      }
    },
  },
};
</script>
<style scoped>
ul.clean {
  list-style: none !important;
  list-style-type: none !important;
}
</style>
