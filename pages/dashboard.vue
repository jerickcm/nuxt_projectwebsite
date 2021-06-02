<template>
  <v-container fluid class="grey ligthen-3  pa-0 ma-0" min-height="800vh">
    <v-sheet class="blue ligthen-3 pa-5 pt-10 pb-10" min-height="200vh">
      <v-card class="pa-2 ma-2">
        <v-card-title> <h1 class="black--text">Dashboard</h1></v-card-title>
      </v-card>
      <v-card class="pa-2 ma-2">
        <v-card-title><h2>POST MENU</h2></v-card-title>
        <v-card-text>
          <v-btn to="post/create" class="green white--text">Create Post</v-btn>
          <v-btn to="post/view" class="blue white--text">View Post</v-btn>
        </v-card-text>
      </v-card>
      <v-card class="pa-2 ma-2">
        <v-card-title> <h2>NEWS MENU</h2></v-card-title>
        <v-card-text>
          <v-btn to="dash/create" class="green white--text">Create News</v-btn>
          <v-btn to="dash/view" class="blue white--text">View News</v-btn>
        </v-card-text>
      </v-card>
    </v-sheet>
  </v-container>
</template>
<script>
export default {
  middleware: "auth"
};
</script>
