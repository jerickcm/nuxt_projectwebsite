<template>
  <v-container fluid class="grey ligthen-3 pa-0 ma-0" min-height="800vh">
    <v-sheet class="blue ligthen-3 pa-5 pt-10 pb-10" min-height="200vh">
      <DashTitle Dashboard="Dashboard" to="/dashboard"> </DashTitle>

      <Dashboard>
        <h2 slot="menu_name">POST MENU</h2>
        <v-btn to="admin/post/create" slot="create_menu" class="green white--text"
          >Create Post</v-btn
        >
        <v-btn to="admin/post/manage" slot="view_menu" class="blue white--text"
          >Manage Post</v-btn
        >
      </Dashboard>
      <Dashboard>
        <h2 slot="menu_name">BLOG MENU</h2>
        <v-btn to="admin/blog/create" slot="create_menu" class="green white--text"
          >Create BLOG</v-btn
        >
        <v-btn to="admin/blog/manage" slot="view_menu" class="blue white--text"
          >Manage BLOG</v-btn
        >
      </Dashboard>
      <Dashboard>
        <h2 slot="menu_name">NEWS MENU</h2>
        <v-btn to="admin/news/create" slot="create_menu" class="green white--text"
          >Create NEWS</v-btn
        >
        <v-btn to="admin/news/manage" slot="view_menu" class="blue white--text"
          >Manage NEWS</v-btn
        >
      </Dashboard>

      <Dashboard>
        <h2 slot="menu_name">QUOTES MENU</h2>
        <v-btn to="admin/quotes/create" slot="create_menu" class="green white--text"
          >Create QUOTES</v-btn
        >
        <v-btn to="admin/quotes/manage" slot="view_menu" class="blue white--text"
          >Manage QUOTES</v-btn
        >
      </Dashboard>

      <Dashboard>
        <h2 slot="menu_name">World Reminders MENU</h2>
        <v-btn
          to="admin/world-reminders/create"
          slot="create_menu"
          class="green white--text"
          >Create World Reminders</v-btn
        >
        <v-btn
          to="admin/world-reminders/manage"
          slot="view_menu"
          class="blue white--text"
          >Manage World Reminders</v-btn
        >
      </Dashboard>
    </v-sheet>
  </v-container>
</template>
<script>
import { admin } from '~/mixins/admin_pages.js'
export default {
  mixins: [admin],
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
    if (this.$auth.state['strategy'] == 'google') {
      await this.$axios.$get('/sanctum/csrf-cookie')

      let payload = new FormData()
      payload.append('email', this.$auth.state['user'].email)
      payload.append('name', this.$auth.state['user'].name)

      let response = await this.$axios.$post(`api/validate/account`, payload)

      return { profile: response.data }
    }
  },
//  async fetch() {
//     // async fetch() {
//     await this.$axios.$get('/sanctum/csrf-cookie')

//     if (this.$auth.state['strategy'] == 'laravelSanctum') {
//     } else {
//       let payload = new FormData()
//       if (this.$auth.state['strategy'] == 'google') {
//         payload.append('email', this.$auth.state['user'].email)
//         payload.append('name', this.$auth.state['user'].name)
//         payload.append('id', this.$auth.state['user'].sub)
//         payload.append('social', this.$auth.state['strategy'])
//         payload.append('image', this.$auth.state['user'].picture)
//       } else if (this.$auth.state['strategy'] == 'github') {
//         payload.append('email', this.$auth.state['user'].email)
//         payload.append('name', this.$auth.state['user'].login)
//         payload.append('id', this.$auth.state['user'].id)
//         payload.append('image', this.$auth.state['user'].avatar_url)
//       } else if (this.$auth.state['strategy'] == 'facebook') {
//         payload.append('email', this.$auth.state['user'].email)
//         payload.append('name', this.$auth.state['user'].name)
//         payload.append('id', this.$auth.state['user'].id)
//         payload.append('social', this.$auth.state['strategy'])
//         payload.append('image', this.$auth.state['user'].picture['data']['url'])
//       }

//       let response = await this.$axios.$post(`api/validate/account`, payload)
//       let merged = { ...this.$auth.user, ...response.user }
//       console.log(response.user)
//       console.log(response.user['is_admin'])
//       this.$auth.setUser(merged)

//       this.$auth.$storage.setCookie(
//         'is_admin',
//         response.user['is_admin'],
//         false
//       )
//       console.log(this.$auth.$storage.getCookie('is_admin'))
//       return { profile: response.data }
//     }
//   }
}
</script>
