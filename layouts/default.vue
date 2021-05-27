<template>
  <v-app blue>
    <v-app id="inspire">
      <v-app-bar app color="blue darken-3" fixed>
        <v-btn to="/" depressed color="primary">
          <v-icon color="white lighten-2">
            mdi-domain
          </v-icon>
          <!-- <v-toolbar-title class="white--text"> -->
          - Project Websites

          <!-- </v-toolbar-title> -->
          <v-icon color="white lighten-2">
            sign-out
          </v-icon>
        </v-btn>

        <v-spacer></v-spacer>

        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn depressed color="primary" to="/news">News </v-btn>
          <v-btn depressed color="primary" to="/posts">Posts </v-btn>

          <v-btn
            v-if="$auth.loggedIn"
            depressed
            color="green"
            to="/dashboard"
          >
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
          <v-responsive :aspect-ratio="16 / 9">
            <nuxt />
          </v-responsive>
        </v-container>
      </v-main>
    </v-app>
<!-- color="grey" -->
    <v-footer :absolute="!fixed" app  class="white--text" color="green lighten-1">
      <span>&copy; {{ new Date().getFullYear() }}</span>
      <v-spacer></v-spacer>
      <v-btn depressed color="primary" to="/about">
        About Us
      </v-btn>
      &nbsp; &nbsp; &nbsp; &nbsp;

      <v-btn depressed color="primary" to="/contact-us">
        Contact Us
      </v-btn>
    </v-footer>
  </v-app>
</template>

<script>
import NProgress from "nprogress";
import "nprogress/nprogress.css";

export default {
  loading: {
    color: "blue",
    height: "20px"
  },
  data: () => ({

    myitems: [
      // { title: "Logout" , link: "/logout"},
      { title: "Dashboard", link: "/dashboard" }
    ],
    menu: [{ icon: "Dashboard", title: "Dashboard" }],
    top_nav: [
      { label: "Main", link: "/" },
      { label: "Dashboard", link: "dashboard" },
      { label: "Login", link: "login" },
      { label: "Register", link: "register" },
      { label: "about", link: "about" },
      { label: "contact", link: "contact" }
    ],
    value: "recent",
    clipped: false,
    drawer: false,
    fixed: false,
    items: [
      {
        icon: "mdi-apps",
        title: "Welcome",
        to: "/"
      },
      // {
      //   icon: 'mdi-chart-bubble',
      //   title: 'Inspire',
      //   to: '/inspire'
      // },
      {
        icon: "mdi-chart-bubble",
        title: "Login",
        to: "/login"
      }
    ],
    miniVariant: false,
    right: true,
    rightDrawer: false,
    title: "Nuxt Laravel Project"
  }),
   computed: {

  },
  methods: {
    menuItems() {
      return this.menu;
    },

    async logout() {
      NProgress.start();
      try {
        NProgress.inc();
        await this.$auth.logout();
      } catch (error) {
        console.log(error);
      }
      NProgress.done();
    }
  }
};
</script>
<style scoped>

</style>
