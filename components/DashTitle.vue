<template>
  <v-card class="pa-2 ma-2">
    <v-card-title :to="Redirect">
      <h1 class="black--text">{{ Dashboard }}</h1></v-card-title
    >
  </v-card>
</template>
<script>
export default {
  props: ["Dashboard", "Redirect"]
};
</script>
