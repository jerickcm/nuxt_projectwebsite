<template>
  <v-app dark>

    <!-- <v-navigation-drawer class="hidden-md-and-up d-none"
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>

        <v-list-item router exact @click.stop="fixed = !fixed">
          <v-list-item-action>
            <v-icon>
              mdi-page-layout-footer
            </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title> Show/Hide Footer</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item router exact @click.stop="miniVariant = !miniVariant">
          <v-list-item-action>
            <v-icon
              >mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon
            >
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title> Toogle Left Sidebar</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->

    <v-app-bar :clipped-left="clipped" fixed app class="white">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"  class="hidden-md-and-up" />

      <!-- <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn> -->
      <v-spacer />
      <div class="hidden-sm-and-down ">


        <v-btn to="/" plain text tile class="white pa-1 ma-1 mr-10"
          > <v-icon>mdi-code-json</v-icon> - Project Website  <v-icon>mdi-laptop</v-icon></v-btn
        >
        <v-btn to="/news" plain text tile rounded class="white pa-1 ma-1"
          ><v-icon>mdi-newspaper-variant-multiple-outline</v-icon> - NEWS</v-btn
        >
        <v-btn to="/posts" plain text tile rounded class="white pa-1 ma-1"
          ><v-icon>mdi-post-outline</v-icon> POST</v-btn
        >
        <v-btn to="/blog" plain text tile rounded class="white pa-1 ma-1"
          ><v-icon>mdi-blogger</v-icon>BLOG</v-btn
        >
        <v-btn to="/technology" plain text tile rounded class="white pa-1 ma-1"
          ><v-icon>mdi-cloud-check-outline</v-icon> TECHNOLOGY</v-btn
        >
        <v-btn to="/tutorials" plain text tile rounded class="white pa-1 ma-1"
          ><v-icon>mdi-cast-education</v-icon> TUTORIALS</v-btn
        >
      </div>

      <v-spacer />
      <div class="hidden-sm-and-down ">
        <v-btn
          v-if="!$auth.loggedIn"
          to="/login"
          plain
          text
          tile
          rounded
          class="white pa-1 ma-1"
          ><v-icon>mdi-login-variant</v-icon>Login</v-btn
        >
        <v-btn
          v-if="!$auth.loggedIn"
          to="/register"
          plain
          text
          tile
          rounded
          class="white pa-1 ma-1"
          ><v-icon>mdi-account-plus-outline </v-icon> - Register</v-btn
        >

        <v-btn
          v-if="$auth.loggedIn"
          plain
          text
          tile
          rounded
          class="white pa-1 ma-1"
          @click.stop="rightDrawer = !rightDrawer"
        >
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
          Logout</v-btn
        >
      </div>
      <v-spacer />
      <v-btn icon class="hidden-md-and-up">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container fluid class="pa-0">
        <nuxt />
      </v-container>
    </v-main>

    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item to="/dashboard">
          <v-list-item-action>
            <v-icon>
              mdi-page-layout-footer
            </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title> Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item v-if="$auth.loggedIn" @click.prevent="logout()">
          <v-list-item-action>
            <v-icon>
              mdi-page-layout-footer
            </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title> Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <!-- <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item> -->
      </v-list>
    </v-navigation-drawer>

    <v-footer :absolute="!fixed" app class="black lighten-4">
      <!-- min-height="10vh" -->
      <v-spacer></v-spacer>
      <div class="hidden-sm-and-down ">
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
          ><v-icon>mdi-information-variant</v-icon>  ABOUT</v-btn
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

export default {
  data: () => ({
    loading: {
      color: 'blue',
      height: '20px'
    },
    rightDrawer: false,
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
    drawer: true,
    fixed: false,
    items: [
      {
        icon: 'mdi-home-import-outline',
        title: 'Home',
        to: '/'
      }
    ],
    miniVariant: false,
    right: true,
    rightDrawer: false,
    title: 'Project Website'
  }),

  computed: {},

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
  async created() {}
}
</script>
<style scoped>
.transparent {
  opacity: 0.25;
  border-color: transparent !important;
}
</style>
