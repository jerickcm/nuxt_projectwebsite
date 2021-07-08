<template>
  <v-app dark>
    <v-container>
      <v-row>
        <v-col>
          <v-card>
            <v-img
              width="100%"
              height="100vh"
              src="/images/error.jpg"
              class="align-top"
            >
              <v-sheet
                class="mt-5 mb-5 text-center col-md-6 offset-md-3  col-sm-6 offset-sm-3"
                cols="12"
              >
                <h2>
                  ERROR PAGE
                </h2>
              </v-sheet>

              <v-sheet
                class="align-center text-center col-md-6 offset-md-3  col-sm-6 offset-sm-3"
                cols="12"
              >
                <h1 v-if="error.statusCode === 404">
                  {{ pageNotFound }} Error :{{ error.statusCode }}
                </h1>
                <h1 v-else>Error: {{ error.statusCode }}</h1>
                <NuxtLink to="/">
                  Home page
                </NuxtLink>
              </v-sheet>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
