<template>
  <v-app dark>
    <v-app-bar fixed app>
      <v-sheet
        class="hidden-md-and-up font-kalamreg hand"
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon color="green" x-large>mdi-message-arrow-left</v-icon> Menu
      </v-sheet>

      <v-spacer />

      <div class="hidden-sm-and-down">
        <v-icon color="blue" @click.stop="rightDrawer = !rightDrawer"
          >mdi-code-json</v-icon
        >

        <v-btn plain text tile class="blue--text pa-1 ma-1 mr-10" to="/">
          <v-img src="/projectwebsite/PW.png" width="4rem"></v-img>
        </v-btn>
        <v-btn
          v-for="(item, i) in navlist"
          :key="i"
          :to="item.link"
          plain
          text
          tile
          rounded
          class=" pa-1 ma-1"
        >
          <v-icon>{{ item.icons }}</v-icon> {{ item.label }}
        </v-btn>
      </div>
      <v-spacer />
      <div class="hidden-sm-and-down">
        <v-btn
          v-if="$auth.user && $auth.loggedIn && $auth.user['is_admin'] == '1'"
          plain
          text
          tile
          rounded
          class=" pa-1 ma-1"
          to="/admin"
        >
          <v-icon>mdi-account-tie</v-icon>
          Admin</v-btn
        >

        <v-btn
          v-if="$auth.loggedIn"
          plain
          text
          tile
          rounded
          class=" pa-1 ma-1"
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
          class=" pa-1 ma-1"
        >
          <v-icon>mdi-logout</v-icon>
          Logout</v-btn
        >

        <v-btn
          v-if="!$auth.loggedIn"
          @click.prevent="dialog_login = true"
          plain
          tile
          rounded
          class=" pa-1 ma-1"
        >
          <v-icon>mdi-logout</v-icon>
          Login</v-btn
        >
      </div>
      <v-spacer />
    </v-app-bar>

    <!--
       -->
    <v-main>
      <nuxt />
      <!-- :absolute="!fixed" -->
    </v-main>

    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <Nav :dialog_login="dialog_login" @update-login="updateLogin" />
      </v-list>
    </v-navigation-drawer>
    <!-- -->
    <!-- -->

    <!-- -->
    <!-- padless -->
    <v-footer padless>
      <v-card color="cstmblue" flat tile class=" text-center" width="100%">
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px" color="light">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>
        <v-card-text>
          <v-btn
            v-for="(item, i) in footerlist"
            :to="item.link"
            :key="i"
            plain
            text
            tile
            rounded
            class="ma-2"
            ><v-icon>{{ item.icon }}</v-icon
            >&zwnj;&zwnj; {{ item.label }}
          </v-btn>
        </v-card-text>

        <v-card-text class="pt-0">
          <v-tooltip v-if="!$vuetify.theme.dark" bottom>
            <template v-slot:activator="{ on }">
              <v-btn v-on="on" color="info" small fab @click="darkMode">
                <v-icon class="mr-1">mdi-moon-waxing-crescent</v-icon>
              </v-btn>
            </template>
            <span>Dark Mode On</span>
          </v-tooltip>

          <v-tooltip v-else bottom>
            <template v-slot:activator="{ on }">
              <v-btn v-on="on" color="info" small fab @click="darkMode">
                <v-icon color="yellow">mdi-white-balance-sunny</v-icon>
              </v-btn>
            </template>
            <span>Dark Mode Off</span>
          </v-tooltip>
        </v-card-text>
        <v-card-text class="d-flex justify-center mb-6">
          <div class="ma-2 ">
            <label for="" class="mb-5 fs-0-6">DNS by:</label>
            <a href="https://domains.google/" class="pt-5 mt-5">
              <v-img style="width:99px" src="/images/google domain.svg"></v-img>
            </a>
          </div>

          <div class="ma-2">
            <label for="" class=" fs-0-6">Secured by:</label>
            <a href="https://letsencrypt.org/">
              <v-img
                style="width:99px"
                src="/images/letsencrypt-logo-horizontal.svg"
              ></v-img>
            </a>
          </div>
        </v-card-text>
        <v-card-text class=" pt-0">
          All rights reserved.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="">
          May 2021 - Present
          {{ new Date().getFullYear() }} —
          <strong>Inhinyeru.com</strong>
        </v-card-text>
      </v-card>
    </v-footer>

    <!-- <v-footer
      app
      :absolute="!fixed"
      color="footer"
      :class="{
        'h-small': $vuetify.breakpoint.smAndDown,
        'h-big': $vuetify.breakpoint.mdAndUp
      }"
    >
      <FooterNav />
    </v-footer> -->
  </v-app>
</template>

<script>
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { greetMixins } from '~/mixins/greeting.js'
import { navlist } from '~/mixins/navlist.js'
import { nav_footer } from '~/mixins/nav_footer.js'
export default {
  head: () => ({
    titleTemplate: '%s | P.Website',
    meta: [{ hid: 'description', name: 'description', content: 'Content' }]
  }),
  mixins: [greetMixins, navlist, nav_footer],
  data: () => ({
    icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram'],
    dialog_login: false,
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
    darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    },

    updateLogin(value) {
      this.dialog_login = value
    },
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
.f-big {
  margin-bottom: 0vh;
}
.f-small {
  margin-bottom: 600vh;
}

.h-big {
  height: 20vh;
}
.h-small {
  height: 600vh;
}

.padb-35 {
  padding-bottom: 150vh;
  margin-bottom: 10vh;
}

.padb-30 {
  margin-bottom: 35vh;
  margin-bottom: 10vh;
}
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

.font-Bonida {
  font-family: 'Bonida', sans-serif;
}
.hand {
  cursor: pointer;
}
</style>
