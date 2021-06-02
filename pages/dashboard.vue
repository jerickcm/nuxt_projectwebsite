<template>
  <v-container fluid class="grey ligthen-3  pa-0 ma-0" min-height="800vh">
    <v-sheet class="blue ligthen-3 pa-5 pt-10 pb-10" min-height="200vh">

      <h1>Dashboard</h1>

      <v-btn to="post/create">Create Post</v-btn>
      <v-btn to="post/view">View Post</v-btn>


    </v-sheet>
  </v-container>
</template>
<script>
export default {
  middleware: "auth"
};
</script>
