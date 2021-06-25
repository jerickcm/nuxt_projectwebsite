<template>
   <v-footer  padless>
      <v-card color="dark"  flat tile class=" text-center" width="100%">
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px" class="white--text">
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
            <label for="" class="white--text mb-5 fs-0-6">DNS by:</label>
            <a href="https://domains.google/" class="pt-5 mt-5">
              <v-img style="width:99px" src="/images/google domain.svg"></v-img>
            </a>
          </div>

          <div class="ma-2">
            <label for="" class="white--text fs-0-6">Secured by:</label>
            <a href="https://letsencrypt.org/">
              <v-img
                style="width:99px"
                src="/images/letsencrypt-logo-horizontal.svg"
              ></v-img>
            </a>
          </div>
        </v-card-text>
        <v-card-text  class="pt-0 white--text">
          All rights reserved.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="pt-0 white--text">
          May 2021 - Present
          {{ new Date().getFullYear() }} —
          <strong>Inhinyeru.com</strong>
        </v-card-text>
      </v-card>
    </v-footer>
</template>

<script>
import { nav_footer } from '~/mixins/nav_footer.js'
export default {
  mixins: [nav_footer],
  data: () => ({
    icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram'],
    selectedItem: 1,
    items: [
      { text: 'Real-Time', icon: 'mdi-clock' },
      { text: 'Audience', icon: 'mdi-account' },
      { text: 'Conversions', icon: 'mdi-flag' }
    ]
  }),
  computed: {},
  methods: {
    darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    },
  }
}
</script>
