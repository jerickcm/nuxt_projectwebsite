<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Admin Page</h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  middleware: ['admin', 'auth'],
  layout: 'admin',
  data() {
    return {}
  }
}
</script>

<style></style>
