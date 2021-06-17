<template>
  <div>
    <h1>Profile # {{ id }}</h1>

    <v-container>
      <v-row> {{ profile }}</v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  auth: false,
  head() {
    return {
      title: 'Profile ' + this.id,
      meta: [
        {
          hid: 'Profile',
          name: 'Profile',
          content: 'Profile'
        }
      ]
    }
  },
  data() {
    loading: false
  },
  async asyncData({ $axios, error, params }) {
    await $axios.$get('/sanctum/csrf-cookie')
    let response = await $axios.$get(
      `api/user_details/username/${params.username}`
    )
    // console.log(response.user['details'])
    return { profile: response.user }
  },
  computed: {
    id() {
      return this.$route.params.username
    },
    username() {
      return this.$route.params.username
    }
  },
  methods: {},
  mounted() {},
  components: {},
  watch: {}
}
</script>
