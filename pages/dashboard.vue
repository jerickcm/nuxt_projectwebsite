<template>
  <v-container fluid class="grey ligthen-3  pa-0 ma-0" min-height="800vh">
    <v-sheet class="blue ligthen-3 pa-5 pt-10 pb-10" min-height="200vh">
      <DashTitle Dashboard="Dashboard" to="/dashboard"> </DashTitle>
      <Dashboard>
        <h2 slot="menu_name">POST MENU</h2>
        <v-btn to="post/create" slot="create_menu" class="green white--text"
          >Create Post</v-btn
        >
        <v-btn to="post/view" slot="view_menu" class="blue white--text"
          >View Post</v-btn
        >
      </Dashboard>

      <Dashboard>
        <h2 slot="menu_name">NEWS MENU</h2>
        <v-btn to="dash/create" slot="create_menu" class="green white--text"
          >Create News</v-btn
        >
        <v-btn to="dash/view" slot="view_menu" class="blue white--text"
          >View News</v-btn
        >
      </Dashboard>
    </v-sheet>
  </v-container>
</template>
<script>
export default {
  data() {
    return {}
  },
  middleware: 'auth',
  async created() {}
}
</script>
