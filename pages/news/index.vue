<template>
  <v-container fluid class="white">
    <v-row class="">
      <v-col mg="12" lg="10" class="" min-height="450vh">
        <NewsCard />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
  export default {
    head: () => ({
      title: 'News Articles',
      meta:[
      { hid: 'News', name: 'News', content: 'News Article Page' }
      ],
    }),

    data: () => ({
      loading: false
    }),
     async created() {
      // await this.$axios.$get('/sanctum/csrf-cookie')
     },
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
