<template>
  <v-app dark>
    <v-app-bar fixed app class="white">

      <v-sheet color="white" class="hidden-md-and-up font-kalamreg " @click.stop="rightDrawer = !rightDrawer">
        <!-- <v-app-bar-nav-icon/> -->
        <!-- <label for="" class="font-lulu mt-1 pt-1">Menu</label> -->
        <!-- <v-icon x-large color="green">mdi-code-json</v-icon> -->

        <v-icon color="green" x-large >mdi-message-arrow-left</v-icon> Menu


      </v-sheet >

      <v-spacer />


      <div class="hidden-sm-and-down">


        <v-icon color="blue" @click.stop="rightDrawer = !rightDrawer"
          >mdi-code-json</v-icon
        >


        <v-btn plain text tile class="blue--text pa-1 ma-1 mr-10" to="/">
          -- Project Website
          <v-icon color="blue">mdi-laptop</v-icon></v-btn
        >

        <v-btn
            v-for="(item, i) in navlist"
            :key="i"
            :to="item.link"
            plain text tile rounded class="white pa-1 ma-1"
          >
          <v-icon>{{item.icons}}</v-icon> {{item.label}}
        </v-btn>

        <!-- <v-btn to="/posts" plain text tile rounded class="white pa-1 ma-1"
          ><v-icon>mdi-post-outline</v-icon> POST</v-btn
        > -->

        <!--
        <v-btn to="/blog" plain text tile rounded class="white pa-1 ma-1"
          ><v-icon>mdi-blogger</v-icon>BLOG</v-btn
        >
        <v-btn to="/technology" plain text tile rounded class="white pa-1 ma-1"
          ><v-icon>mdi-cloud-check-outline</v-icon> TECHNOLOGY</v-btn
        >
        <v-btn to="/tutorials" plain text tile rounded class="white pa-1 ma-1"
          ><v-icon>mdi-cast-education</v-icon> TUTORIALS
          </v-btn>
              -->
      </div>
      <v-spacer />
      <div class="hidden-sm-and-down">
        <!--
        <v-btn
          v-if="!$auth.loggedIn"
          to="/login"
          plain
          text
          tile
          rounded
          class="white pa-1 ma-1"
          ><v-icon>mdi-login-variant</v-icon>Login</v-btn>

        <v-btn
          v-if="!$auth.loggedIn"
          to="/register"
          plain
          text
          tile
          rounded
          class="white pa-1 ma-1"
          ><v-icon>mdi-account-plus-outline </v-icon> - Register</v-btn
        > -->

        <v-btn
          v-if="$auth.loggedIn"
          plain
          text
          tile
          rounded
          class="white pa-1 ma-1"
          to="/dashboard"
        >
          <v-icon>mdi-monitor-dashboard</v-icon>
          Dashboard</v-btn
        >
        <v-btn
          v-if="$auth.loggedIn"
          @click.prevent="logout()"
          plain
          text
          tile
          rounded
          class="white pa-1 ma-1"
        >
          <v-icon>mdi-logout</v-icon>
          Logout</v-btn
        >
      </div>
      <v-spacer />
    </v-app-bar>
    <v-main class="padding-bottom:20vh">
      <!-- <v-container fluid class="pa-0"> -->
        <nuxt />
      <!-- </v-container> -->
    </v-main>

    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <Nav />
      </v-list>
    </v-navigation-drawer>

    <v-footer
      :absolute="!fixed"
      app
      class="black lighten-4"
      style="margin-top:50vh"
    >
      <!-- min-height="15vh" -->
      <!-- min-height="10vh" -->
      <v-spacer></v-spacer>
      <!-- class="hidden-sm-and-down" -->
      <div>
        <v-btn
          plain
          text
          tile
          rounded
          class="black lighten-2 pa-1 ma-1 mr-10 white--text"
        >
          &copy; {{ new Date().getFullYear() }}
        </v-btn>

        <v-btn
          to="/about"
          plain
          text
          tile
          rounded
          class="black lighten-2 pa-1 ma-1 white--text"
          ><v-icon>mdi-information-variant</v-icon> ABOUT</v-btn
        >
        <v-btn
          to="/contact-us"
          plain
          text
          tile
          rounded
          class="black lighten-2 pa-1 ma-1 white--text"
          ><v-icon>mdi-human-greeting-proximity</v-icon>CONTACT US</v-btn
        >
      </div>
      <v-spacer></v-spacer>
    </v-footer>
  </v-app>
</template>

<script>
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { greetMixins } from '~/mixins/greeting.js'
import { navlist } from '~/mixins/navlist.js'
export default {
  head: () => ({
    titleTemplate: '%s - Project Website',
    meta:[
      { hid: 'description', name: 'description', content: 'Content' }
    ]
  }),
  mixins: [greetMixins,navlist],
  data: () => ({
    myitems: [{ title: 'Dashboard', link: '/dashboard' }],
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
    miniVariant: false,
    togglePaneValue: false,
    fixed: false,
    items: [
      {
        icon: 'mdi-home-import-outline',
        title: 'Home',
        to: '/'
      }
    ],

    right: false,
    left: true,
    leftDrawer: false,
    rightDrawer: false,
    title: 'Project Website'
  }),

  computed: {},

  methods: {
    togglePane() {
      if (this.togglePaneValue == '') {
        this.togglePaneValue = 'd-none'
      } else {
        this.togglePaneValue = ''
      }
    },
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
  async created() {}
}
</script>
<style>
.transparent {
  opacity: 0.25;
  border-color: transparent !important;
}
.fs-0-7 {
  font-size: 0.7rem;
}
.fs-0-6 {
  font-size: 0.6rem;
}
.fs-0-5 {
  font-size: 0.5rem;
}
.fs-1 {
  font-size: 1rem;
}
.fs-1-1 {
  font-size: 1.1rem;
}
.fs-1-2 {
  font-size: 1.2rem;
}
.fs-1-3 {
  font-size: 1.3rem;
}
.fs-1-4 {
  font-size: 1.4rem;
}
.fs-1-5 {
  font-size: 1.5rem;
}
.fs-1-8 {
  font-size: 1.8rem;
}
.fs-2 {
  font-size: 2rem;
}
.fs-3 {
  font-size: 3rem;
}
.fs-4 {
  font-size: 4rem;
}
.font-lulu {
  font-family: 'Lulu', sans-serif;
}
.font-halimun {
  font-family: 'Halimun', sans-serif;
}

.font-kalamreg {
  font-family: 'Kalam-Regular', sans-serif;
  line-height: 1.2;
}
.font-barlowreg {
  font-family: 'Barlow-Regular', sans-serif;
}
</style>
