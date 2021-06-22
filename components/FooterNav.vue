<template>
  <v-container>
    <v-row>
      <v-col>
        <div 
          class="pa-1 ma-1"
          :class="{
            'd-none': $vuetify.breakpoint.smAndDown,
            '': $vuetify.breakpoint.mdAndUp,
          }"
        >
          <label for="" class=" fs-0-6">DNS by:</label>
          <a href="https://domains.google/">
            <v-img width="90px" src="/images/google domain.svg"></v-img>
          </a>
        </div>
      </v-col>
      <v-col>
        <v-btn plain text tile rounded class="">
          &copy; {{ new Date().getFullYear() }}
        </v-btn>
      </v-col>
      <v-col v-for="(item, i) in footerlist" :key="i">
        <v-btn
          :to="item.link"
               plain
          text
          tile
          rounded
          class=""
          ><v-icon>{{ item.icon }}</v-icon
          >&zwnj;&zwnj; {{ item.label }}</v-btn
        >
      </v-col>
      <v-col>
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

      </v-col>
      <v-col >
        <div
          class=" pa-1 ma-1"
          :class="{
            'd-none': $vuetify.breakpoint.smAndDown,
            '': $vuetify.breakpoint.mdAndUp,
          }"
        >
          <label for="" class=" fs-0-6">Secured by:</label>
          <a href="https://letsencrypt.org/">
            <v-img
              width="90px"
              src="/images/letsencrypt-logo-horizontal.svg"
            ></v-img>
          </a>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { nav_footer } from '~/mixins/nav_footer.js'
export default {
  mixins: [nav_footer],
  data: () => ({}),
  computed: {},
  methods: {
      darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    }
  },
}
</script>
