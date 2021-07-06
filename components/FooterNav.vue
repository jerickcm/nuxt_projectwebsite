<template>
  <v-footer padless>
    <v-card color="dark" flat tile class=" text-center" width="100%">
      <v-card-text>
        <v-btn
          target="_blank"
          href="https://twitter.com/InhinyeruC"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px" class="white--text">
            mdi-twitter
          </v-icon>
          <v-icon small color="white">mdi-arrow-top-right-thick</v-icon>
        </v-btn>

        <v-btn
          target="_blank"
          href="https://www.facebook.com/inhinyeru"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px" class="white--text">
            mdi-facebook
          </v-icon>
          <v-icon small color="white">mdi-arrow-top-right-thick</v-icon>
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
          class="ma-2 white--text"
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
          <label for="" class="white--text mb-5 fs-0-6"
            >DNS by:<v-icon small color="white"
              >mdi-arrow-top-right-thick</v-icon
            ></label
          >
          <a href="https://domains.google/" class="pt-5 mt-5">
            <v-img style="width:99px" src="/images/google domain.svg"></v-img>
          </a>
        </div>

        <div class="ma-2">
          <label for="" class="white--text fs-0-6"
            >Secured by:<v-icon small color="white"
              >mdi-arrow-top-right-thick</v-icon
            ></label
          >
          <a href="https://letsencrypt.org/">
            <v-img
              style="width:99px"
              src="/images/letsencrypt-logo-horizontal.svg"
            ></v-img>
          </a>
        </div>
      </v-card-text>
      <v-card-text class="pt-0 white--text">
        All rights reserved.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="pt-0 white--text">
        May 2021 - Present
        {{ new Date().getFullYear() }} —
        <strong>Inhinyeru.com</strong>
      </v-card-text>

      <v-btn
        v-scroll="onScroll"
        v-show="gototop"
        fixed
        bottom
        right
        color="primary"
        @click="toTop"
      >
        <v-icon>mdi-arrow-up-bold-hexagon-outline</v-icon>
      </v-btn>
    </v-card>
  </v-footer>
</template>

<script>
import { nav_footer } from '~/mixins/nav_footer.js'
export default {
  mixins: [nav_footer],
  data: () => ({
    gototop: false,
    selectedItem: 1,
    items: [
      { text: 'Real-Time', icon: 'mdi-clock' },
      { text: 'Audience', icon: 'mdi-account' },
      { text: 'Conversions', icon: 'mdi-flag' }
    ]
  }),
  computed: {},
  methods: {
    onScroll(e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset || e.target.scrollTop || 0
      this.gototop = top > 20
    },
    toTop() {
      this.$vuetify.goTo(0)
    },
    darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    }
  }
}
</script>
