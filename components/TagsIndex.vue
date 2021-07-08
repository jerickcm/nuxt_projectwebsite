<template>
  <v-container fluid>
    <v-row>
      <v-col class=" mb-0 pb-0">
        <hr color="brown" class="hr-brown" />
      </v-col>
    </v-row>
    <v-row>
      <v-col class="ma-0 mt-0 pt-0">
        <h2 color="brown" class="brown--text ma-0 mt-0 pt-0 ">
          Tags ({{ total_tags }})
        </h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card flat>
          <v-card-text>
            <v-chip-group
              column
              active-class="deep-purple accent-4 white--text"
            >
              <v-chip
                v-for="(itm, indx) in tags"
                :key="indx"
                :to="`/blog/tags/${itm.name}`"
                color="blue"
                class="white--text"
                >{{ itm.name }}</v-chip
              >
            </v-chip-group>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    tags: [],
    load_tags: false,
    total_tags: 0,
    height: '200px'
  }),
  async mounted() {
    this.load_tags = true
    await this.$axios.$get('/sanctum/csrf-cookie')
    const tags = await this.$axios.$get(`api/tags`)
    this.load_tags = false
    this.tags = tags.data
    this.total_tags = tags.total
  },
  async fetch() {}
}
</script>
<style scoped>
.nuxtlink {
  text-decoration: none !important;
}

.hr-brown {
  border: 3px solid brown;
}
</style>
