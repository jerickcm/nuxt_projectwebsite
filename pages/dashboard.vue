<template>
  <v-container fluid class="grey ligthen-3  pa-0 ma-0" min-height="800vh">
    <v-sheet class="blue ligthen-3 pa-5 pt-10 pb-10" min-height="200vh">
      <v-card class="pa-2 ma-2">
        <h1 class="black--text">Dashboard</h1>
      </v-card>
      <v-card class="pa-2 ma-2">
        <h2>POST MENU</h2>
        <v-btn to="post/create" class="green">Create Post</v-btn>
        <v-btn to="post/view" class="blue">View Post</v-btn>
      </v-card>
      <v-card class="pa-2 ma-2">
        <h2>NEWS MENU</h2>
        <v-btn to="news/create" class="green">Create News</v-btn>
        <v-btn to="news/view" class="blue">View News</v-btn>
      </v-card>
    </v-sheet>
  </v-container>
</template>
<script>
export default {
  middleware: "auth"
};
</script>
