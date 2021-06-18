<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Profile Username : {{ username }}</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
          <v-image :src="profile['details'].cover_photo"></v-image>
          <v-image :src="profile['details'].profile_picture"></v-image>
          <v-card-text>
            <span>Name: {{ profile.name }}</span
            ><br />
            <span>Username: {{ username }}</span
            ><br />
            <span>Email: {{ profile.email }}</span
            ><br />
            <span> Address No: {{ profile['details'].house_number }} </span>
            <br />
            <span> Address street: {{ profile['details'].street }} </span>
            <br />
            <span> Address City: {{ profile['details'].city }} </span>
            <br />
            <span> Address province: {{ profile['details'].province }} </span>
            <br />
            <span> Address country: {{ profile['details'].country }} </span>
            <br />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  auth: false,
  head() {
    return {
      title: 'Profile ' + this.username,
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
    return { profile: response.user }
  },
  computed: {
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
