<template>
  <v-container fluid class="white">
    <v-row class="">
       <v-col md="12" lg="12" class="">
        <BlogCard />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  middleware: 'auth',
  auth: false,
  head: () => ({
    title: 'Blog',
    meta: [{ hid: 'Blog', name: 'Blog', content: 'Blog Article Page' }]
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
