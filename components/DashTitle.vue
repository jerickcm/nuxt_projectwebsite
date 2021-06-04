<template>
  <v-card class="pa-2 ma-2">
    <v-card-title >
      <v-btn v-bind="$attrs">
      <h1  class="black--text">{{ Dashboard }}</h1>
      </v-btn>
      </v-card-title

    >
  </v-card>
</template>
<script>
export default {
  inheritAttrs:false, // dont make parent v-card inherit place location of inheritance
  props: ["Dashboard", "Redirect"]
};
</script>
