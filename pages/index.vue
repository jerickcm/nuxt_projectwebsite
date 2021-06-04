<template>
  <v-container fluid class="ma-0 pa-0">
    <v-row min-height="100vh">
      <v-col sm="12" lg="9" class="grey lighten-4 ">
        <v-card
          min-height="200vh"
          class="grey lighten-5 pa-1 ma-1 pl-2 ml-2 mt-2 pt-2"
          >Index page</v-card
        >
      </v-col>
      <v-col sm="12" lg="3" class="grey lighten-4">
        <v-card
          min-height="200vh"
          class="grey lighten-5 pa-1 ma-1 pl-2 ml-2 mt-2 pt-2"
        >
          <!-- <PostCard /> -->
        </v-card>
      </v-col>
    </v-row>
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
  layout: 'default',
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
  data: () => ({
    clipped: false,
    drawer: false,
    fixed: false,
    items: [
      {
        icon: 'mdi-apps',
        title: 'Welcome',
        to: '/'
      },
      {
        icon: 'mdi-chart-bubble',
        title: 'Inspire',
        to: '/inspire'
      }
    ],
    miniVariant: false,
    right: true,
    rightDrawer: false,
    title: 'Vuetify.js',

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
  // middleware: ["guest"],
  // auth: false,
  //  auth: 'guest',
  methods: {
    async loginwithgoogle() {
      try {
        let res = await this.$auth.loginWith('google', {
          params: { prompt: 'select_account' }
        })
        // let res = await this.$auth.loginWith('google');
        console.log('login result: ' + res)
      } catch (err) {
        this.consoleLog('login error: ' + err)
      }
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
    login() {
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
