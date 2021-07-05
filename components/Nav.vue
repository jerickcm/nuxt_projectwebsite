<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-dialog v-model="dialog_login" persistent max-width="500">
          <template v-slot:activator="{ on, attrs }">
            <!-- <v-btn color="primary" dark v-bind="attrs" v-on="on"> </v-btn> -->
          </template>
          <v-card>
            <v-btn color="green darken-1" text @click.prevent="updateLogin">
              <v-icon>mdi-close</v-icon>
            </v-btn>

            <v-container>
              <v-row>
                <v-col class="text-center">
                  <v-btn
                    class="white--text pa-4"
                    @click.prevent="loginwithgoogle"
                    depressed
                    color="primary"
                    min-width="15rem"
                  >
                    Login with &zwnj; &zwnj; <v-icon>mdi-google</v-icon> oogle
                  </v-btn></v-col
                >
              </v-row>
              <v-row>
                <v-col class="text-center">
                  <v-btn
                    class="white--text pa-2"
                    @click.prevent="loginwithgithub"
                    depressed
                    color="grey"
                    min-width="15rem"
                  >
                    Login with &zwnj; &zwnj;
                    <v-icon>mdi-github</v-icon> Github
                  </v-btn>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="text-center">
                  <v-btn
                    class="white--text pa-2"
                    @click.prevent="loginwithfacebook"
                    depressed
                    color="blue"
                    min-width="15rem"
                  >
                    Login with &zwnj; &zwnj;<v-icon>mdi-facebook</v-icon>
                    acebook
                  </v-btn></v-col
                >
              </v-row>
            </v-container>

            <form class="pa-2">
              <v-text-field
                class="ma-2 pa-2"
                v-model="email"
                label="E-mail"
                required
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
                min-width="13rem"
              >
                Login
              </v-btn>

              <v-btn
                depressed
                color="primary"
                @click="clear"
                class="mr-4 ma-2 pa-2"
                min-width="13rem"
              >
                clear
              </v-btn>
            </form>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
    <!-- <v-row>
      <v-col class="pa-2 ma-2 ml-5">
        <v-avatar :size="50" class="text-center black">
          <v-img class="text-center" src="/images/cartoon-darken.jpg"></v-img>
        </v-avatar>
      </v-col>
    </v-row> -->
    <v-row>
      <v-col>
        <v-list>
          <v-list-item @click.prevent="searchme">
            <v-list-item-action>
              <v-icon v-if="search == false">mdi-magnify-plus</v-icon>
              <v-icon v-else>mdi-magnify-minus</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title> SEARCH</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item
            v-if="$auth.user && $auth.loggedIn && $auth.user['is_admin'] == '1'"
            to="/admin"
          >
            <v-list-item-action>
              <v-icon>mdi-account-tie</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title> ADMIN</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item to="/">
            <v-list-item-action>
              <v-icon>mdi-laptop</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="blue--text">
                Homepage
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item v-for="(item, i) in navlist" :key="i" :to="item.link">
            <v-list-item-action>
              <v-icon> {{ item.icons }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title> {{ item.label }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item v-if="!$auth.loggedIn" @click.prevent="openLogin">
            <v-list-item-action>
              <v-icon>mdi-login-variant</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                LOGIN
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item to="/dashboard" v-if="$auth.loggedIn">
            <v-list-item-action>
              <v-icon>mdi-monitor-dashboard</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title> DASHBOARD</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item to="/about">
            <v-list-item-action>
              <v-icon>mdi-information-variant</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title> ABOUT</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <!-- <v-list-item to="/contact-us">
            <v-list-item-action>
              <v-icon>mdi-human-greeting-proximity </v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title> CONTACT US</v-list-item-title>
            </v-list-item-content>
          </v-list-item> -->

          <v-list-item to="/privacy-policy'">
            <v-list-item-action>
              <v-icon>mdi-account-key </v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title> PRIVACY POLICY</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item to="/terms-of-service">
            <v-list-item-action>
              <v-icon>mdi-card-account-details </v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title> TERMS OF SERVICES</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item v-if="$auth.loggedIn" @click.prevent="logout()">
            <v-list-item-action>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                Logout
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
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
import { navlist } from '~/mixins/navlist.js'
export default {
  props: ['dialog_login', 'search'],
  mixins: [navlist, validationMixin],
  validations: {
    email: { required, email },
    password: { required, minLength: minLength(6) }
  },
  data: () => ({
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
    // fixed: false,
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
  methods: {
    searchme() {
      this.$emit('update-search', true)
    },
    openLogin() {
      this.dialog_login = true
      this.$emit('update-login', true)
    },
    updateLogin() {
      this.dialog_login = false
      this.$emit('update-login', false)
    },
    loginwithfacebook() {
      this.$auth.loginWith('facebook')
    },
    loginwithgoogle() {
      // this.$auth.loginWith('google')
      this.$auth
        .loginWith('google', { params: { prompt: 'select_account' } })
        .then(() => {
          console.log('Logged in!')
        })
    },
    loginwithgithub() {
      // this.$auth.loginWith('google')
      this.$auth.loginWith('github')
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
    async logout() {
      NProgress.start()
      try {
        NProgress.inc()
        await this.$auth.logout()
        NProgress.done()
      } catch (error) {
        NProgress.done()
        console.log(error)
      }
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
              this.$router.push({ name: 'dashboard' })
              NProgress.done()
              this.dialog_login = false
              this.$emit('update-login', false)
            })
            .catch(error => {
              this.dialog_login = false
              this.$emit('update-login', false)
              console.log(error)
              this.loading = false

              NProgress.done()
              console.log('err onRejected')

              this.alert = ''
              this.error_msg = error.response.data
            })
        } catch (error) {
          this.dialog_login = false
          this.$emit('update-login', false)
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
