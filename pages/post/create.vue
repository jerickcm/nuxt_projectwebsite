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
            <v-text-field
              v-model="form_title"
              label="Title"
              @blur="$v.form_title.$touch()"
              @input="$v.form_title.$touch()"
            ></v-text-field>
            <template v-if="$v.form_title.$error">
              <div
                v-if="!$v.form_title.required"
                class="errorMessage red--text"
              >
                Title is required.
              </div>
            </template>
          </v-col>
        </v-row>

        <v-row
          ><v-col>
            <label for class="black--text">Content</label> <br />
            <client-only placeholder="loading...">
              <ckeditor-nuxt
                :config="editorConfig"
                v-model="form_content"
                @blur="$v.form_content.$touch()"
                @input="$v.form_content.$touch()"
                :error-messages="contentErrors"
              />

              <template v-if="$v.form_content.$error">
                <div
                  v-if="!$v.form_content.required"
                  class="errorMessage red--text"
                >
                  Content is required.
                </div>
              </template>
            </client-only></v-col
          >
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
import Vue from "vue";
import { Vuelidate, validationMixin } from "vuelidate";

import {
  required,
  maxLength,
  email,
  minLength
} from "vuelidate/lib/validators";

var url = process.env.BASE_URL_AXIOS;
var timezone = process.env.TIMEZONE;

export default {
  middleware: "auth",
  mixins: [validationMixin],
  data() {
    return {
      url: null,
      form_content: "",
      form_title: "",
      token: null
    };
  },

  validations: {
    form_content: { required },
    form_title: { required }
  },
  components: {
    "ckeditor-nuxt": () =>
      import("@engrjerickcmangalus/ckeditor-nuxt-custom-build-simpleuploader")
  },
  async created() {
    this.$axios.$get("/sanctum/csrf-cookie").then(response => {});
    this.url = url;
    this.timezone = timezone;
    this.editorConfig = {
      simpleUpload: {
        uploadUrl: "http://back.api.test:3001/api/ckeditor",
        withCredentials: true,
        headers: {
          Accept: "application/json",
          Timezone: this.timezone,
          "X-XSRF-TOKEN": this.$auth.$storage.getCookies()["XSRF-TOKEN"]
        }
      }
    };
  },
  computed: {
    titleErrors() {
      const errors = [];
      if (!this.$v.form_title.$dirty) return errors;
      !this.$v.form_title.required && errors.push("Title is required.");
      return errors;
    },
    contentErrors() {
      const errors = [];
      if (!this.$v.form_content.$dirty) return errors;
      !this.$v.form_content.required && errors.push("Content is required.");
      return errors;
    }
  },
  methods: {
    onSubmit() {
      if (this.form_title && this.form_content) {
        let payload = new FormData();

        payload.append("title", this.form_title);
        payload.append("content", this.form_content);
        this.$axios
          .post("/api/create-post", payload, {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          })
          .then(res => {})
          .catch(error => {})
          .finally(() => {});
      }
    }
  }
};
</script>
<style scoped>
ul.clean {
  list-style: none !important;
  list-style-type: none !important;
}
</style>
