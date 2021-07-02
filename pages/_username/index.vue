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
          <v-img
            v-if="profile['details'].cover_photo"
            :src="profile['details'].cover_photo"
          ></v-img>
          <v-img
            v-if="profile['details'].profile_picture"
            :src="profile['details'].profile_picture"
          ></v-img>
          <v-card-text>
            <span class="fs-1-5">{{ profile.name }}</span
            ><br />
            <span class="fs-1-5">
              <span class="font-Bonida">{{ allibataname }}</span></span
            ><br />

            <span v-if="username">Username: {{ username }}</span
            ><br />
            <span v-if="profile.email">Email: {{ profile.email }}</span
            ><br />
            <span v-if="profile['details'].house_number">
              Address No: {{ profile['details'].house_number }}
            </span>
            <br />
            <span v-if="profile['details'].street">
              Address street: {{ profile['details'].street }}
            </span>
            <br />
            <span v-if="profile['details'].city">
              Address City: {{ profile['details'].city }}
            </span>
            <br />
            <span v-if="profile['details'].province">
              Address province: {{ profile['details'].province }}
            </span>
            <br />
            <span v-if="profile['details'].country">
              Address country: {{ profile['details'].country }}
            </span>
            <br />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <WidgetBlogtags />
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
    return {
      loading: false,
      profile: [],
      pp: 'test'
    }
  },
  async watch() {},
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
    },
    allibataname() {
      return this.profile.name
    }
  },
  methods: {},
  mounted() {},
  components: {},
  watch: {}
}
</script>
