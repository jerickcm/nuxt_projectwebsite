<template>
  <v-container fluid class="ma-0 pa-0">
    <v-parallax class="ma-0 pa-0" height="900" src="/images/bg1.jpeg">
      <v-row center>
        <v-col class="col-md-6 offset-md-3 pt-10" cols="12" sm="6">
          <!-- {{ errors }} -->
          <strong class="ma-2 pa-2 mt-10 pt-10 text-h6">Login : </strong>
          <v-card elevation="2" :loading="loading" tile class="ma-2 ">
            <v-alert prominent text type="error" :class="alert" id="alert">{{
              error_msg
            }}</v-alert>

            <form class="pa-2">
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
                :error-messages="passwordErrors"
                name="input-10-1"
                label="Password"
                hint="At least 6 characters"
                counter
                @input="$v.password.$touch()"
                @blur="$v.password.$touch()"
                @click:append="show1 = !show1"
              >
              </v-text-field>

              <v-btn
                class="mr-4 ma-2"
                @click.prevent="login"
                depressed
                color="primary"
              >
                Login
              </v-btn>
              <v-btn
                depressed
                color="primary"
                @click="clear"
                class="mr-4 ma-2 pa-2"
              >
                clear
              </v-btn>
              <v-btn
                class="mr-4 ma-2"
                @click.prevent="loginwithgoogle"
                depressed
                color="primary"
              >
                Login with &zwnj; &zwnj; <v-icon>mdi-google</v-icon> oogle
              </v-btn>
            </form>
          </v-card>
        </v-col>
      </v-row>
    </v-parallax>
  </v-container>
</template>

<script>
import Vue from 'vue'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { validationMixin, Vuelidate } from 'vuelidate'
import { required, email, minLength } from 'vuelidate/lib/validators'

Vue.use(Vuelidate)

export default {
  head: () => ({
    title: 'Login'
  }),
  data: () => ({
    alert: 'd-none',
    error_msg: '',
    loading: false,
    email: null,
    password: '',
    form: {
      email: '',
      password: ''
    },

    show1: false,
    rules: {
      required: value => !!value || 'Required.',
      min: v => v.length >= 6 || 'Min 6 characters'
    }
  }),
  loading: {
    color: 'blue',
    height: '20px'
  },

  mixins: [validationMixin],
  validations: {
    email: { required, email },
    password: { required, minLength: minLength(6) }
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 2000)
    })
  },

  computed: {
    emailErrors() {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },
    passwordErrors() {
      const passerrors = []
      if (!this.$v.password.$dirty) return passerrors
      !this.$v.email.required && passerrors.push('Password is required')
      return passerrors
    }
  },
  middleware: ['guest'],
  // auth: false,
  //  auth: 'guest',
  methods: {
    loginwithgoogle() {
      // this.$auth.loginWith('google')
      this.$auth
        .loginWith('google', { params: { prompt: 'select_account' } })
        .then(() => {
          console.log('Logged in!')
        })
    },
    clear() {
      this.form.email = ''
      this.form.password = ''
      this.email = ''
      this.password = ''
      this.select = null
      this.alert = 'd-none'
      this.error_msg = ''
      this.$v.$reset()
    },
    async login() {
      this.$v.email.$touch()
      this.$v.password.$touch()
      if (!this.$v.$invalid) {
        this.alert = 'd-none'
        this.loading = true
        // NProgress.configure({ parent: '#container' });
        NProgress.start()
        NProgress.configure({ showSpinner: false })
        this.form.email = this.email
        this.form.password = this.password
        await this.$axios.$get('/sanctum/csrf-cookie')
        try {
          this.$auth
            .loginWith('laravelSanctum', {
              data: {
                email: this.form.email,
                password: this.form.password
              }
            })
            .then(response => {
              console.log('Response is' + response)
              console.log(response)
              console.dir(response)
              this.loading = false

              NProgress.done()
            })
            .catch(error => {
              console.log(error)
              this.loading = false

              NProgress.done()
              console.log('err onRejected')

              this.alert = ''
              this.error_msg = error.response.data
            })

          // .then(function (response) {
          //    console.log("Response is" + response)
          //   }
          //   onResolved => {
          //     this.loading = false;

          //     NProgress.done();
          //     console.log("err onResolved");
          //   },
          //   onRejected => {
          //     this.loading = false;

          //     NProgress.done();
          //     console.log("err onRejected");

          //     this.alert = "";
          //     this.error_msg = error.response.data;
          //   }
          // );
        } catch (error) {
          this.alert = ''
          this.error_msg = error.response.data
          console.log(error.response.data)
          if (error.response.status === 422) console.log(error.response.data)
        }
      }
    }
  }
}
</script>
<style scoped></style>
