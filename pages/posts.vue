<template>
  <v-container fluid class=" white">
    <v-row class="">
      <v-col lg="3" class="grey lighten-3" min-height="450vh">
        <v-sheet min-height="450vh" class="grey lighten-5">
          <h2 class="pa-1 ma-1">News Post Coming Soon</h2>
        </v-sheet>
      </v-col>
      <v-col lg="6" class="grey lighten-3" min-height="450vh">
        <PostCard />
      </v-col>
      <v-col lg="3" class="grey lighten-3" min-height="450vh">
        <v-sheet min-height="450vh" class="grey lighten-5">
          <h2 class="pa-1 ma-1">Blogs Coming Soon</h2>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import PostCard from "@/components/PostCard";
export default {
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
