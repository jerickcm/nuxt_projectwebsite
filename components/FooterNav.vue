<template>
  <v-container>
    <v-row>
      <v-col sm="12" lg="2">
        <v-btn plain text tile rounded class="black lighten-2 white--text">
          &copy; {{ new Date().getFullYear() }}
        </v-btn>
      </v-col>
      <v-col sm="12" lg="2" v-for="(item, i) in footerlist" :key="i">
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
    </v-row>
  </v-container>
</template>

<script>
import { nav_footer } from '~/mixins/nav_footer.js'
export default {
  mixins: [nav_footer],
  data: () => ({}),
  computed: {},
  methods: {}
}
</script>
