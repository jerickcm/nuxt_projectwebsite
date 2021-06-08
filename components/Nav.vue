<template>
  <v-list>
    <v-list-item to="/">
      <v-list-item-action>
        <v-icon color="blue">mdi-code-json</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title class="blue--text">
          Project Website
          <v-icon color="blue">mdi-laptop</v-icon></v-list-item-title
        >
      </v-list-item-content>
    </v-list-item>

    <v-list-item
      to="/dashboard"
      v-for="(item, i) in navlist"
      :key="i"
      :to="item.link"
    >
      <v-list-item-action>
        <v-icon> {{ item.icons }}</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title> {{ item.label }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-list-item to="/dashboard" v-if="$auth.loggedIn">
      <v-list-item-action>
        <v-icon> mdi-page-layout-footer </v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title> Dashboard</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-list-item v-if="$auth.loggedIn" @click.prevent="logout()">
      <v-list-item-action>
        <v-icon> mdi-page-layout-footer </v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title> Logout</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-list-item router exact @click.stop="fixed = !fixed">
      <v-list-item-action>
        <v-icon> mdi-page-layout-footer </v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title> Show/Hide Footer</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>
<script>
export default {
  data: () => ({
    fixed: false,
    navlist: [
      {
        icons: 'mdi-newspaper-variant-multiple-outline',
        label: 'NEWS',
        link: '/news'
      },
      {
        icons: 'mdi-post-outline',
        label: 'POST',
        link: '/posts'
      },
      {
        icons: 'mdi-blogger',
        label: 'BLOG',
        link: '/blog'
      },
      {
        icons: 'mdi-cloud-check-outline',
        label: 'TECHNOLOGY',
        link: '/TUTORIALS'
      }
    ]
  })
}
</script>
