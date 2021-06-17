<template>
  <div>
    <v-container>
      <v-row align="center">
        <v-col lg="12">
          <v-sheet class="blue white--text pa-2 ma-2">
            <v-btn class="mx-2" fab dark large color="green">
              <v-icon dark> Profile</v-icon>
            </v-btn>
            <label for=""></label>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data: () => ({
    posts: {
      content: [],
      image: '',
      date: '',
      author: ''
    },
    title: '',
    pageload: true
  }),
  head() {
    return {
      title: 'Post:' + this.title,
      meta: [
        {
          hid: 'Post',
          name: 'Post',
          content: 'Post' + this.title
        }
      ]
    }
  },
  mounted() {
    console.log('mounted')
  },
  async asyncData({ $axios, error, params }) {},
  async created() {
    await this.$axios.$get('/sanctum/csrf-cookie')

    let response = await this.$axios.$get(`api/user_details`)
    console.log(response.user['details'])
    // this.title = response.data[0].title
    // // NProgress.done()
    // this.pageload = false
    // this.slug = this.$route.query.slug
    // this.posts = response.data[0]
  },
  middleware: 'auth',
  components: {},
  watch: {},
  methods: {}
}
</script>

<style scoped></style>
