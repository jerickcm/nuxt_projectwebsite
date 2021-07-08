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
          <v-avatar width="37">
            <v-img
              v-if="profile['details'].profile_picture"
              :src="profile['details'].profile_picture"
            ></v-img>
          </v-avatar>
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
  // props: {
  //   error: {
  //     type: Object,
  //     default: null
  //   }
  // },
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
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
      loading: false,
      profile: []
    }
  },
  async watch() {},
  async asyncData({ $axios, error, params }) {
    try {
      await $axios.$get('/sanctum/csrf-cookie')
      let response = await $axios.$get(
        `api/user_details/username/${params.username}`
      )
      return { profile: response.user }
    } catch (error1) {
      // console.log(this.error.statusCode)
      error({ statusCode: 500, message: 'Page not found' })
    }
  },
  async afetch() {
    // await this.$axios.$get('/sanctum/csrf-cookie')
    // let response = await this.$axios.$get(
    //   `api/user_details/username/${this.$route.params.username}`
    // )
    // this.profile = response.user
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
  async mounted() {
    // return { profile: response.user }
  },
  components: {},
  watch: {}
}
</script>
