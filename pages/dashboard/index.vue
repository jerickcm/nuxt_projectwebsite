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

      <Dashboard>
        <h2 slot="menu_name">BLOG MENU</h2>
        <v-btn to="/blog/create" slot="create_menu" class="green white--text"
          >Create BLOG</v-btn
        >
        <v-btn to="/blog/manage" slot="view_menu" class="blue white--text"
          >Manage BLOG</v-btn
        >
      </Dashboard>
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
        payload.append('image', this.$auth.state['user'].picture)
      } else if (this.$auth.state['strategy'] == 'github') {
        payload.append('email', this.$auth.state['user'].email)
        payload.append('name', this.$auth.state['user'].login)
        payload.append('id', this.$auth.state['user'].id)
        payload.append('image', this.$auth.state['user'].avatar_url)
      } else if (this.$auth.state['strategy'] == 'facebook') {
        payload.append('email', this.$auth.state['user'].email)
        payload.append('name', this.$auth.state['user'].name)
        payload.append('id', this.$auth.state['user'].id)
        payload.append('social', this.$auth.state['strategy'])
        payload.append('image', this.$auth.state['user'].picture['data']['url'])
      }

      let response = await this.$axios.$post(`api/validate/account`, payload)
      let merged = { ...this.$auth.user, ...response.user }
      console.log(response.user)
      console.log(response.user['is_admin'])
      this.$auth.setUser(merged)

      this.$auth.$storage.setCookie(
        'is_admin',
        response.user['is_admin'],
        false
      )
      console.log(this.$auth.$storage.getCookie('is_admin'))
      return { profile: response.data }
    }
  }
}
</script>
