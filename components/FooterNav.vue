<template>
  <v-container>
    <v-row>
      <v-col>
        <v-sheet
          class="black pa-1 ma-1"
          :class="{
            'd-none': $vuetify.breakpoint.smAndDown,
            '': $vuetify.breakpoint.mdAndUp,
          }"
        >
          <label for="" class="grey--text fs-0-6">DNS by:</label>
          <a href="https://domains.google/">
            <v-img width="90px" src="/images/google domain.svg"></v-img>
          </a>
        </v-sheet>
      </v-col>
      <v-col>
        <v-btn plain text tile rounded class="black lighten-2 white--text">
          &copy; {{ new Date().getFullYear() }}
        </v-btn>
      </v-col>
      <v-col v-for="(item, i) in footerlist" :key="i">
        <v-btn
          :to="item.link"
          text
          tile
          rounded
          class="black lighten-2 white--text"
          ><v-icon>{{ item.icon }}</v-icon
          >&zwnj;&zwnj; {{ item.label }}</v-btn
        >
      </v-col>
      <v-col align="right">
        <v-sheet
          class="black pa-1 ma-1"
          :class="{
            'd-none': $vuetify.breakpoint.smAndDown,
            '': $vuetify.breakpoint.mdAndUp,
          }"
        >
          <label for="" class="grey--text fs-0-6">Secured by:</label>
          <a href="https://letsencrypt.org/">
            <v-img
              width="90px"
              src="/images/letsencrypt-logo-horizontal.svg"
            ></v-img>
          </a>
        </v-sheet>
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
  methods: {},
}
</script>
