<template>
  <v-container fluid class="white">
    <v-row class="">
      <v-col md="12" lg="12" class="" min-height="450vh">
        <NewsCard />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  middleware: 'auth',
  auth: false,
  head: () => ({
    title: 'News',
    meta: [{ hid: 'News', name: 'News', content: 'News Article Page' }]
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
