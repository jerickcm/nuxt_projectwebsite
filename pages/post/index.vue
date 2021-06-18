<template>
  <v-container fluid class="white">
    <v-row class="">
      <v-col md="12" lg="12" class="">
        <PostCard />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  middleware: 'auth',
  auth: false,
  head: () => ({
    title: 'Post',
    meta: [{ hid: 'Posts', name: 'Posts', content: 'Post Article Page' }],

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
