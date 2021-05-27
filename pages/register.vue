<template>
  <v-container fluid class="ma-0 pa-0">
    <v-parallax height="1500" src="/images/register.jpg">
      <v-row center>
        <v-col class="col-md-6 offset-md-3  pt-10" cols="12" sm="6">
          <strong class="ma-2 pa-2 mt-10 pt-10 text-h6">Registration : </strong>
          <v-card elevation="2" :loading="loading" tile class="ma-2">
            <!-- dismissible -->
            <v-alert prominent text type="error" :class="alert" id="alert">{{
              error_msg
            }}</v-alert>

            <form class="pa-2">
              <v-text-field
                class="ma-2 pa-2"
                v-model="name"
                :error-messages="nameErrors"
                :counter="25"
                label="Name"
                required
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
              ></v-text-field>

              <v-text-field
                class="ma-2 pa-2"
                v-model="email"
                :error-messages="emailErrors"
                label="E-mail"
                required
                @input="$v.email.$touch()"
                @blur="$v.email.$touch()"
              ></v-text-field>

              <v-text-field
                class="ma-2 pa-2"
                v-model="password"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min]"
                :type="show1 ? 'text' : 'password'"
                name="input-10-1"
                label="Password"
                hint="At least 6 characters"
                counter
                :error-messages="passwordErrors"
                @input="$v.password.$touch()"
                @blur="$v.password.$touch()"
                @click:append="show1 = !show1"
              >
              </v-text-field>

              <v-btn
                depressed
                color="primary"
                class="mr-4 ma-2 pa-2"
                @click="register"
              >
                Register
              </v-btn>
              <v-btn
                depressed
                color="primary"
                @click="clear"
                class="mr-4 ma-2 pa-2"
              >
                clear
              </v-btn>
            </form>
          </v-card>
        </v-col>
      </v-row>
    </v-parallax>
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

import NProgress from "nprogress";
import "nprogress/nprogress.css";

Vue.use(Vuelidate);

export default {
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(25) },
    email: { required, email },
    password: { required, minLength: minLength(6) }
  },

  data: () => ({
    alert: "d-none",
    error_msg: "",
    loading: false,
    form: {
      name: "",
      email: "",
      password: ""
    },
    name: "",
    email: "",
    password: "",
    show1: false,
    rules: {
      required: value => !!value || "Required.",
      min: v => v.length >= 6 || "Min 6 characters",
      emailMatch: () => `The email and password you entered don't match`
    }
  }),

  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Name must be at most 10 characters long");
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
    passwordErrors() {
      const passerrors = [];
      if (!this.$v.password.$dirty) return passerrors;
      !this.$v.password.required && passerrors.push("Password is required");
      return passerrors;
    }
  },

  methods: {
    async register() {
      // this.$v.email.$touch();
      // this.$v.password.$touch();
      // this.$v.name.$touch();
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.alert = "d-none";
        this.loading = true;

        this.form.email = this.email;
        this.form.password = this.password;
        this.form.name = this.name;
        try {
          await this.$axios.$get("/sanctum/csrf-cookie").then(response => {});
        } catch (error) {
          if (error.response.status === 422) console.log(error.response.data);
        }
        try {
          await this.$axios.$post("api/register", this.form);
        } catch (error) {
          this.alert = "";
          this.error_msg = error.response.data;
          if (error.response.status === 422) {
            console.log(error.response.data);
          }
        }
        this.loading = false;
      }
    },
    clear() {
      this.$v.$reset();
      this.form.name = "";
      this.form.email = "";
      this.form.password = "";

      this.name = "";
      this.email = "";
      this.password = "";
      this.select = null;
      this.alert = "d-none";
       this.error_msg ="";
      this.$v.$reset();
    }
  }
};
</script>
