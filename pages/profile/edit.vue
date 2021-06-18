<template>
  <div>
    <v-container>
      <v-row align="center">
        <v-col lg="12">
          <v-card class="  pa-4 ma-4">
            <input
              type="file"
              id="file"
              ref="file"
              v-on:change="handleFileUpload()"
            />
            <v-card>
              <v-img v-if="image_preview" :src="image_preview"></v-img>
              <div v-else>
                <v-img v-if="form_image" :src="form_image"></v-img>
              </div>
            </v-card>

            <v-text-field v-model="profile.name" label="Name"></v-text-field>
            <span class="font-Bonida">{{ alibataname }}</span>

            <v-text-field
              v-model="profile['details'].username"
              label="Username"
            ></v-text-field>
            <v-text-field
              v-model="profile['details'].house_number"
              label="House number"
            ></v-text-field>
            <v-text-field
              v-model="profile['details'].city"
              label="City"
            ></v-text-field>
            <v-text-field
              v-model="profile['details'].street"
              label="Street"
            ></v-text-field>
            <v-text-field
              v-model="profile['details'].province"
              label="Province"
            ></v-text-field>
            <v-text-field
              v-model="profile['details'].country"
              label="Country"
            ></v-text-field>

            <v-btn color="primary" @click="Update_Profile"> Save </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { usernames } from '~/mixins/reservedusernames.js'
export default {
  mixins: [usernames],
  data() {
    return {
      profile: '',
      posts: {
        content: [],
        image: '',
        date: '',
        author: ''
      },
      title: '',
      pageload: true,

      image: '',
      image_preview: '',
      image_name: '',
      form_image: ''
    }
  },
  head() {
    return {
      title: 'Profile :' + this.profile.name,
      meta: [
        {
          hid: 'Profile',
          name: 'Profile',
          content: 'Profile' + this.profile.name
        }
      ]
    }
  },
  mounted() {
    console.log('mounted')
  },
  async asyncData({ $axios, error, params, $auth }) {
    await $axios.$get('/sanctum/csrf-cookie')
    let response = await $axios.$get(
      `api/user_details/${$auth.state['user'].email}`
    )
    return { profile: response.user }
  },
  computed: {
    email() {
      return this.$auth.state['user'].email
    },

    alibataname() {
      return this.profile.name
    }
  },
  async created() {},
  middleware: 'auth',
  components: {},
  watch: {},
  methods: {
    handleFileUpload(e) {
      const file = this.$refs.file.files[0]
      this.image_preview = URL.createObjectURL(file)
      try {
        this.image_name = this.$refs.file.files[0].name
        this.form_image = this.$refs.file.files[0]
      } catch (err) {
        console.log(err)
      }
    },
    async Update_Profile() {
      var reservedvalues = this.reservedval
      if (reservedvalues.includes(this.profile['details'].username)) {
        this.$toast.error(
          `username "` + this.profile['details'].username + `" is reserved`
        )
      } else {
        let payload = new FormData()
        payload.append('username', this.profile['details'].username)

        try {
          this.$axios
            .$post(`api/user_details/update/${this.profile.id}`, payload, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            })
            .then(res => {})
            .catch(error => {})
            .finally(() => {})
        } catch (error) {}
      }
    }
  }
}
</script>

<style scoped></style>
