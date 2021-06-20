<template>
  <v-container fluid class="grey ligthen-3 pa-0 ma-0" min-height="800vh">
    <v-sheet class="blue ligthen-3 pa-5 pt-10 pb-10" min-height="200vh">
      <DashTitle Dashboard="Dashboard" to="/dashboard"> </DashTitle>

      <Dashboard>
        <h2 slot="menu_name">Profile MENU</h2>

        <v-btn to="/profile/edit" slot="view_menu" class="blue white--text"
          >Manage Profile</v-btn
        >
      </Dashboard>

      <!-- <Dashboard>
        <h2 slot="menu_name">POST MENU</h2>
        <v-btn to="post/create" slot="create_menu" class="green white--text"
          >Create Post</v-btn
        >
        <v-btn to="post/manage" slot="view_menu" class="blue white--text"
          >Manage Post</v-btn
        >
      </Dashboard>
      <Dashboard>
        <h2 slot="menu_name">BLOG MENU</h2>
        <v-btn to="blog/create" slot="create_menu" class="green white--text"
          >Create BLOG</v-btn
        >
        <v-btn to="blog/manage" slot="view_menu" class="blue white--text"
          >Manage BLOG</v-btn
        >
      </Dashboard>
      <Dashboard>
        <h2 slot="menu_name">NEWS MENU</h2>
        <v-btn to="news/create" slot="create_menu" class="green white--text"
          >Create NEWS</v-btn
        >
        <v-btn to="news/manage" slot="view_menu" class="blue white--text"
          >Manage NEWS</v-btn
        >
      </Dashboard>

      <Dashboard>
        <h2 slot="menu_name">QUOTES MENU</h2>
        <v-btn to="quotes/create" slot="create_menu" class="green white--text"
          >Create QUOTES</v-btn
        >
        <v-btn to="quotes/manage" slot="view_menu" class="blue white--text"
          >Manage QUOTES</v-btn
        >
      </Dashboard>

      <Dashboard>
        <h2 slot="menu_name">World Reminders MENU</h2>
        <v-btn
          to="world-reminders/create"
          slot="create_menu"
          class="green white--text"
          >Create World Reminders</v-btn
        >
        <v-btn
          to="world-reminders/manage"
          slot="view_menu"
          class="blue white--text"
          >Manage World Reminders</v-btn
        >
      </Dashboard> -->
    </v-sheet>
  </v-container>
</template>
<script>
export default {
  middleware: 'auth',
  head: () => ({
    title: 'Dashboard'
  }),
  data: () => ({}),
  async asyncData({ $axios, error, params, $auth }) {},
  computed: {
    email() {
      return this.$auth.state['user'].email
    }
  },
  async created() {
    await this.$axios.$get('/sanctum/csrf-cookie')

    if (this.$auth.state['strategy'] == 'laravelSanctum') {
    } else {
      let payload = new FormData()
      if (this.$auth.state['strategy'] == 'google') {
        payload.append('email', this.$auth.state['user'].email)
        payload.append('name', this.$auth.state['user'].name)
        payload.append('id', this.$auth.state['user'].sub)
        payload.append('social', this.$auth.state['strategy'])
      } else if (this.$auth.state['strategy'] == 'github') {
        payload.append('email', this.$auth.state['user'].email)
        payload.append('name', this.$auth.state['user'].login)
        payload.append('id', this.$auth.state['user'].id)
      } else if (this.$auth.state['strategy'] == 'facebook') {
        payload.append('email', this.$auth.state['user'].email)
        payload.append('name', this.$auth.state['user'].name)
        payload.append('id', this.$auth.state['user'].id)
        payload.append('social', this.$auth.state['strategy'])
      }

      let response = await this.$axios.$post(`api/validate/account`, payload)                
      let merged = { ...this.$auth.user,...response.user};                  
      this.$auth.setUser(merged)
      return { profile: response.data }
    }
  }
}
</script>
