<template>
  <v-container fluid class="ma-0 pa-0">
    <v-parallax class="ma-0 pa-0" height="900" src="/images/dash.jpg">
      <div>Dashboard</div>
    </v-parallax>
  </v-container>
</template>
<script>
export default {
  middleware: "auth"
};
</script>
