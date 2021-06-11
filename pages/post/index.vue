<template>
  <v-container fluid class="white">
    <!-- <v-row class=""> Featured Post </v-row> -->
    <v-row class="">
      <!-- <v-col lg="2" class="" min-height="450vh"> </v-col> -->
      <v-col mg="12" lg="10" class="" min-height="450vh">
        <PostCard />
      </v-col>
      <!-- <v-col lg="2" class="" min-height="450vh">
        <v-sheet min-height="450vh" class="grey lighten-5">
          <v-card class="pa-1 ma-1">
            <v-card-title>Blogs Coming Soon</v-card-title>
            <v-card-text></v-card-text>
          </v-card>
        </v-sheet>
      </v-col> -->
    </v-row>
  </v-container>
</template>

<script>
// import { greetMixins } from '~/mixins/greeting.js'

export default {
  head: () => ({
    title: 'Post Articles',
    meta:[
      { hid: 'description', name: 'Profile', content: 'This is the the posts' }
    ]
  }),

  data: () => ({
    loading: false
  }),
  mounted() {},
  inject: {
    theme: {
      default: { isDark: false }
    }
  },
  components: {},
  watch: {},
  methods: {}
}
</script>
<style scoped>
ul.clean {
  list-style: none !important;
  list-style-type: none !important;
}
</style>
