<template>
  <v-container fluid class="tag-border">
    <v-row>
      <v-col class="ml-0 pl-0  mb-0 pb-0">
        <h2 color="blue" class="blue--text ma-0 mt-0 pt-0 ">
          Arithmetic Practice Tool
        </h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="pa-0 ">
        <v-card flat>
          <v-card-text class="pa-0 ma-0">
            <nuxt-link
              class="nuxtlink green--text"
              color="blue"
              to="/arithmetic/addition"
            >
              <ul>
                <li><h4 color="blue">Addition</h4></li>
              </ul>
            </nuxt-link>
            <nuxt-link
              class="nuxtlink green--text"
              color="blue"
              to="/arithmetic/subtraction"
            >
              <ul>
                <li><h4 color="blue">Subtraction</h4></li>
              </ul>
            </nuxt-link>
            <nuxt-link
              class="nuxtlink green--text"
              color="blue"
              to="/arithmetic/multiplication"
            >
              <ul>
                <li><h4 color="blue">Multiplication</h4></li>
              </ul>
            </nuxt-link>
            <nuxt-link
              class="nuxtlink green--text"
              color="blue"
              to="/arithmetic/division"
            >
              <ul>
                <li><h4 color="blue">Division</h4></li>
              </ul>
            </nuxt-link>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => ({}),
  async mounted() {},
  async fetch() {}
}
</script>
<style scoped>
.nuxtlink {
  text-decoration: none !important;
}
</style>
