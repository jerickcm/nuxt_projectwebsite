<template>
  <!-- :class="{
      'h-small': $vuetify.breakpoint.smAndDown,
      'h-big': $vuetify.breakpoint.mdAndUp
    }" -->
  <v-container
    fluid
    :class="{
      'h-small': $vuetify.breakpoint.smAndDown,
      'h-big': $vuetify.breakpoint.mdAndUp
    }"
  >
    <v-row>
      <v-col xs="12" sm="12" md="12" lg="3" xl="3">
        <v-container>
          <v-row>
            <v-col xs="12" sm="12" md="12" lg="6" xl="6">
              <div class=" pa-1 ma-1 ">
                <label for="" class=" fs-0-6">DNS by:</label>
                <a href="https://domains.google/">
                  <v-img width="90px" src="/images/google domain.svg"></v-img>
                </a>
              </div>
            </v-col>
            <v-col
              xs="12"
              sm="12"
              md="12"
              lg="6"
              xl="6"
              class="text-xs-center text-center"
            >
              <v-btn plain text tile rounded>
                &copy; {{ new Date().getFullYear() }}
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-col xs="12" sm="12" md="12" lg="6" xl="6">
        <v-container>
          <v-row>
            <v-col
              class="text-xs-center text-center"
              xs="12"
              sm="12"
              md="12"
              lg="3"
              xl="3"
              width="20rem"
            >
              <v-btn
                v-for="(item, i) in footerlist"
                :to="item.link"
                plain
                text
                tile
                rounded
                class="ma-2"
                ><v-icon>{{ item.icon }}</v-icon
                >&zwnj;&zwnj; {{ item.label }}
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-col xs="12" sm="12" md="12" lg="3" xl="3">
        <v-container>
          <v-row>
            <v-col
              xs="12"
              sm="12"
              md="12"
              lg="6"
              xl="6"
              class="text-xs-center text-center"
            >
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
              </v-tooltip></v-col
            >
            <v-col xs="12" sm="12" md="12" lg="6" xl="6">
              <div class=" pa-1 ma-1 ">
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
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  mixins: [nav_footer],
  data: () => ({
    selectedItem: 1,
    items: [
      { text: 'Real-Time', icon: 'mdi-clock' },
      { text: 'Audience', icon: 'mdi-account' },
      { text: 'Conversions', icon: 'mdi-flag' }
    ]
  }),
  computed: {}
}
</script>
