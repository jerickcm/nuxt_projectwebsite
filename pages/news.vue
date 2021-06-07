<template>
  <v-container fluid class="ma-0 pa-0">
    <v-parallax class="ma-0 pa-0" height="900" src="/images/news.jpg">
      <v-container>
        <v-row align="center">
          <v-spacer />
          <v-col lg="2">
            <v-sheet class="blue white--text pa-2 ma-2">
              <v-btn class="mx-2" fab dark large color="green">
                <v-icon dark> mdi-android </v-icon>
              </v-btn>
              <label for="">Under Construction</label>
            </v-sheet>
          </v-col>
          <v-spacer />
        </v-row>
      </v-container>

      <!-- <v-btn color="primary" depressed>
        News
      </v-btn> -->
    </v-parallax>
  </v-container>
</template>

<script>
export default {
  auth: false,
  data() {
    return {
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],
      slides: ['First'], //, "Second", "Third", "Fourth", "Fifth"
    }
  },
  computed: {},
}
</script>
<style scoped>
ul.clean {
  list-style: none !important;
  list-style-type: none !important;
}
</style>
