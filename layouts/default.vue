<template>
  <v-app blue>
    <v-app id="inspire">
      <v-app-bar app class="grey lighten-4" fixed>
        <v-btn to="/" depressed color="primary">
          <v-icon color="white lighten-2">
            mdi-domain
          </v-icon>
          - Project Website

          <v-icon color="white lighten-2">
            sign-out
          </v-icon>
        </v-btn>
        <v-spacer></v-spacer>

        <v-toolbar-items
          v-if="$auth.loggedIn && $auth.user['is_admin']"
          class="hidden-sm-and-down mr-10"
        >
          <v-btn depressed color="primary" to="/admin" class="blue--text white"
            >Admin
          </v-btn>
          <v-btn depressed color="primary" to="/users">Users </v-btn>
        </v-toolbar-items>

        <v-toolbar-items class="hidden-sm-and-down mr-10">
          <v-btn depressed color="primary" to="/news">News </v-btn>
          <v-btn depressed color="primary" to="/posts">Posts </v-btn>

          <v-btn v-if="$auth.loggedIn" depressed color="green" to="/dashboard">
            [ {{ $auth.user.name }} -Dashboard ]
          </v-btn>

          <v-btn v-if="!$auth.loggedIn" depressed color="primary" to="/login">
            Login
          </v-btn>
          <v-btn
            v-if="!$auth.loggedIn"
            depressed
            color="primary"
            to="/register"
          >
            Register
          </v-btn>
          <v-btn
            v-if="$auth.loggedIn"
            depressed
            color="primary"
            @click.prevent="logout()"
            >Logout

            <v-icon>
              sign-out-alt
            </v-icon>
          </v-btn>
        </v-toolbar-items>
        <v-sheet color="primary" outlined class="hidden-md-and-up">
          <v-menu>
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark v-bind="attrs" v-on="on">
                Menu
              </v-btn>
            </template>
            <v-list>
              <v-list-item v-if="$auth.loggedIn" to="/dashboard">
                <v-list-item-title>Dashboard</v-list-item-title>
              </v-list-item>

              <v-list-item v-if="!$auth.loggedIn" to="/login">
                <v-list-item-title depressed color="primary"
                  >Login</v-list-item-title
                >
              </v-list-item>
              <v-list-item v-if="!$auth.loggedIn" to="/register">
                <v-list-item-title depressed color="primary">
                  Register
                </v-list-item-title>
              </v-list-item>
              <v-list-item v-if="$auth.loggedIn" @click.prevent="logout()">
                <v-list-item-title>
                  Logout
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-sheet>
      </v-app-bar>

      <v-main>
        <v-container fluid class="pa-0">
          <!-- :aspect-ratio="16 / 9" -->
          <!-- <v-responsive > -->
          <nuxt />
          <!-- </v-responsive> -->
        </v-container>
      </v-main>
    </v-app>

    <v-footer :absolute="!fixed" app class="white--text grey lighten-4">
      <span>&copy; May 2021 - {{ new Date().getFullYear() }}</span>
      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down mr-10">
        <v-btn depressed color="blue darken-3" to="/about" class="white--text">
          About Us
        </v-btn>
        <v-btn
          depressed
          color="blue darken-3"
          to="/contact-us"
          class="white--text"
        >
          Contact Us
        </v-btn>
      </v-toolbar-items>
    </v-footer>
  </v-app>
</template>

<script>
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

export default {
  loading: {
    color: 'blue',
    height: '20px'
  },
  data: () => ({
    myitems: [
      // { title: "Logout" , link: "/logout"},
      { title: 'Dashboard', link: '/dashboard' }
    ],
    menu: [{ icon: 'Dashboard', title: 'Dashboard' }],
    top_nav: [
      { label: 'Main', link: '/' },
      { label: 'Dashboard', link: 'dashboard' },
      { label: 'Login', link: 'login' },
      { label: 'Register', link: 'register' },
      { label: 'about', link: 'about' },
      { label: 'contact', link: 'contact' }
    ],
    value: 'recent',
    clipped: false,
    drawer: false,
    fixed: false,
    items: [
      {
        icon: 'mdi-apps',
        title: 'Welcome',
        to: '/'
      },
      // {
      //   icon: 'mdi-chart-bubble',
      //   title: 'Inspire',
      //   to: '/inspire'
      // },
      {
        icon: 'mdi-chart-bubble',
        title: 'Login',
        to: '/login'
      }
    ],
    miniVariant: false,
    right: true,
    rightDrawer: false,
    title: 'Nuxt Laravel Project'
  }),

  computed: {
    //   profile: 'session/GET_PROFILE',
    // }),
  },

  methods: {
    menuItems() {
      return this.menu
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
    }
  },
  async created() {
    try {
      // if ($auth.loggedIn) {
      //   await this.$axios.$get('/sanctum/csrf-cookie').then(response => {})
      //   try {
      //     this.$axios
      //       .$get('api/user')
      //       .then(res => {
      //         this.$auth.$storage.setState('admin', res['is_admin'])
      //         let admin = this.$auth.$storage.getState('admin')
      //         this.is_admin = admin
      //       })
      //       .catch(error => {})
      //       .finally(() => {})
      //   } catch (error) {
      //     console.log('error')
      //   }
      // }
    } catch (error) {
      console.log('error')
    }
  }
}
</script>
<style scoped></style>
