<template>
  <v-sheet>
    <h2 class="ml-3 mb-2">Quote</h2>
    <v-container>
      <v-row>
        <v-col class="ma-0 pa-0" cols="12">
          <v-hover v-slot="{ hover }" open-delay="200">
            <v-card :elevation="hover ? 16 : 2" :class="{ 'on-hover': hover }">
              <v-card-text>
                <p>{{ quote }} - {{ author }}</p>
              </v-card-text>
              <v-skeleton-loader type="article, actions" v-if="loader">
              </v-skeleton-loader>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    quote: '',
    author: '',
    loader: false
  }),
  async fetch() {
    this.loader = true
    await this.$axios.$get('/sanctum/csrf-cookie')
    const res = await this.$axios.$get(`api/quotes/item`)
    this.quote = res.data['message']
    this.author = res.data['author']
    this.loader = false
  },

  async mounted() {},
  computed: {},
  methods: {}
}
</script>
