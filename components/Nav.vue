<template>
  <v-container fluid>
   <v-row>
      <v-col class="pa-2 ma-2 ml-5">

        <v-avatar :size="50" class="text-center black">
          <v-img class="text-center" src="/images/cartoon-darken.jpg"></v-img>
        </v-avatar>

      </v-col>
    </v-row>
    <v-row>
      <v-col>
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

          <!--
          <v-list-item to="/login" v-if="!$auth.loggedIn">
            <v-list-item-action>
              <v-icon>mdi-login-variant</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title> Login</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        -->

          <v-list-item to="/dashboard" v-if="$auth.loggedIn">
            <v-list-item-action>
              <v-icon>mdi-monitor-dashboard</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title> Dashboard</v-list-item-title>
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

          <v-list-item to="/about">
            <v-list-item-action>
              <v-icon>mdi-information-variant</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title> About</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item to="/contact-us">
            <v-list-item-action>
              <v-icon>mdi-human-greeting-proximity </v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title> Contact Us</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>


  </v-container>

</template>


<script>

import { navlist } from '~/mixins/navlist.js'
export default {
  mixins: [navlist],
  data: () => ({
    // fixed: false,
  })
}
</script>
