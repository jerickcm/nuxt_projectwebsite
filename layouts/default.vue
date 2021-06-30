<template>
  <v-app dark>
    <v-app-bar fixed app>
      <div
        plain
        text
        class="hidden-md-and-up font-kalamreg hand"
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon color="green" x-large>mdi-message-arrow-left</v-icon> Menu
      </div>
      <v-spacer />
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
          class="pa-1 ma-1"
        >
          <v-icon>{{ item.icons }}</v-icon> {{ item.label }}
        </v-btn>
      </div>
      <v-spacer />
      <v-spacer />
      <div class="pt-6">
        <!-- <v-text-field label="Search" placeholder="Input Search"></v-text-field> -->
      </div>
      <v-spacer />

      <div class="hidden-sm-and-down">
        <v-btn
          plain
          text
          tile
          rounded
          class="pa-1 ma-1"
          @click.prevent="searchme"
        >
          <v-icon v-if="search == false">mdi-magnify-plus</v-icon>
          <v-icon v-else>mdi-magnify-minus</v-icon>

          Search</v-btn
        >

        <v-btn
          v-if="$auth.user && $auth.loggedIn && $auth.user['is_admin'] == '1'"
          plain
          text
          tile
          rounded
          class="pa-1 ma-1"
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
          class="pa-1 ma-1"
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
          class="pa-1 ma-1"
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
          class="pa-1 ma-1"
        >
          <v-icon>mdi-logout</v-icon>
          Login</v-btn
        >
      </div>
      <v-spacer />
      <v-spacer />
    </v-app-bar>

    <v-main>
      <Search v-if="search" />
      <nuxt />
    </v-main>

    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <Nav
          :dialog_login="dialog_login"
          :search="search"
          @update-login="updateLogin"
          @update-search="updateSearch"
        />
      </v-list>
    </v-navigation-drawer>

    <FooterNav />
  </v-app>
</template>

<script>
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { greetMixins } from '~/mixins/greeting.js'
import { navlist } from '~/mixins/navlist.js'

export default {
  head: () => ({
    titleTemplate: '%s | Project Website',
    meta: [{ hid: 'description', name: 'description', content: 'Content' }]
  }),
  mixins: [greetMixins, navlist],
  data: () => ({
    search: false,
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
    searchme() {
      this.search = !this.search
    },
    updateSearch() {
      this.search = !this.search
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
.ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
