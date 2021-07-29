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
          >mdi-page-next-outline</v-icon
        >
        <v-btn plain text tile class="blue--text pa-1 ma-1 mr-10" to="/">
          <v-img src="/inhinyeru.jpg" width="4rem"></v-img>
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

        <v-menu open-on-hover top offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon color="blue">mdi-chevron-down</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              v-for="(item, index) in more"
              :key="index"
              :to="item.link"
            >
              <v-list-item-action>
                <v-icon>{{ item.icon }} </v-icon>
              </v-list-item-action>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <v-spacer />
      <v-spacer />

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
      <v-container class="fix">
        <Search v-if="search" />
      </v-container>
      <v-card class="d-none">
        <a href="https://www.sparktraffic.com/?ref=1040051">Traffic Bot</a>
      </v-card>

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
const dev = process.env.DEV_API
const prod = process.env.PROD_API
const api = process.env.NODE_ENV === 'development' ? dev : prod

const dev_front = process.env.DEV_FRONT
const prod_front = process.env.PROD_FRONT
const front = process.env.NODE_ENV === 'development' ? dev_front : prod_front

const dev_fb_id = process.env.DEV_FB
const prod_fb_id = process.env.PROD_FB
const fb_id = process.env.NODE_ENV === 'development' ? dev_fb_id : prod_fb_id

export default {
  head() {
    return {
      titleTemplate: '%s | Inhinyeru.com',
      meta: [
        { hid: 'description', name: 'description', content: 'Content' },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.description
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.image
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: this.title
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.description
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.image
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: this.image
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: this.title
        },
        { hid: 'fb:app_id', name: 'fb:app_id', content: fb_id },
        {
          hid: 'twitter:site',
          name: 'twitter:site',
          content: 'https://twitter.com/InhinyeruC'
        }
      ]
    }
  },
  mixins: [greetMixins, navlist],
  data() {
    return {
      title: 'Inhinyeru.com',
      front: '',
      description:
        'This website features are latest code fixes, tutorials and reviews, news about technology and programming also includes programming quotes and world event anniversaries. May also include personal blogs and top 10 - 100 reviews of the authors favorite things and current researches.',
      // image: this.front + '/images/default.jpg',
      image: 'https://www.inhinyeru.com/images/default.jpg',
      more: [
        // { title: 'ABOUT', link: '/about', icon: 'mdi-information-variant' },
        // {
        //   title: 'CONTACT US',
        //   link: '/contact-us',
        //   icon: 'mdi-human-greeting-proximity'
        // },
        {
          title: 'PRIVACY POLICY',
          link: '/privacy-policy',
          icon: 'mdi-account-key'
        },
        {
          title: 'Terms of Service',
          link: '/terms-of-service',
          icon: 'mdi-card-account-details'
        }
      ],
      search: false,
      dialog_login: false,
      myitems: [{ title: 'Dashboard', link: '/dashboard' }],
      menu: [{ icon: 'Dashboard', title: 'Dashboard' }],
      top_nav: [
        { label: 'Main', link: '/' },
        { label: 'Dashboard', link: 'dashboard' },
        { label: 'Login', link: 'login' },
        { label: 'Register', link: 'register' },
        { label: 'about', link: 'about' }
        // { label: 'contact', link: 'contact' }
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
    }
  },
  async mounted() {
    this.front = front
  },
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

.font-roboto {
  font-family: 'Roboto', sans-serif;
}
.font-ptsans {
  font-family: 'Ptsans', sans-serif;
}

.hand {
  cursor: pointer;
}
.ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.lh-1 {
  line-height: 1;
}
.tempoup {
  transition: transform 250ms;
}

.tempoup:hover {
  transform: translateY(-10px);
}
.nuxtlink {
  text-decoration: none;
}

.v-application a {
  color: blue;
}
/* .fix {
  position: fixed;
  left: 50%;
  top: 400;
  margin-left: -45vh;
  width: '90vh';

} */
.fix {
  z-index: 2;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
}
</style>
