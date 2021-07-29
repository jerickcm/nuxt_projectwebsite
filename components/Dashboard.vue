<template>
  <v-card class="pa-2 ma-2">
    <v-card-title><slot name="menu_name"></slot></v-card-title>
    <v-card-text>
      <slot name="create_menu"></slot>
      <slot name="view_menu"></slot>
    </v-card-text>
  </v-card>
</template>

<script>
export default {}
</script>
