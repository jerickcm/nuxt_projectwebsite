<template>
  <v-sheet class="ma-0 pa-0">
    <v-row class="ma-0 pa-0">
      <v-col xs="12" sm="12" md="8" lg="8" xl="8">
        <h1>Quotes</h1>
        <p>Memorable quotes from technology and science dicipline</p>
      </v-col>
    </v-row>

    <v-row class="ma-0 pa-0">
      <v-col class="">
        <v-container>
          <v-row
            color="blue"
            v-for="(i, ind) in Math.ceil(content.length / 3)"
            :key="ind"
          >
            <v-col
              xs="12"
              sm="12"
              md="6"
              lg="4"
              xl="4"
              v-for="(item, indx) in content.slice((i - 1) * 3, i * 3)"
              :key="indx"
            >
              <v-card min-height="30vh" class=" pa-4">
                <p>{{ item.message }} - {{ item.author }}</p>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col lg="12">
              <v-card class=" pa-4 text-center">
                <label
                  for=""
                  class="grey--text pa-4 ma-2"
                  v-if="!(length == 10)"
                  >Nothing Follows</label
                ><br />

                <v-btn
                  class="white--text pa-4 ma-2"
                  @click="getnextarticle"
                  :disabled="length == 10 ? false : true"
                  :class="length == 10 ? 'green' : 'grey'"
                >
                  Next Article
                </v-btn>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-sheet>
</template>
<script>
export default {
  props: ['content', 'length', 'loading'],
  data: () => ({}),
  async created() {},
  mounted() {},
  computed: {},
  methods: {
    getnextarticle() {
      this.$emit('next-article')
    }
  }
}
</script>
<style scoped>
.transparent {
  background-color: blue !important;
  opacity: 0.25;
  border-color: transparent !important;
}
.nuxtlink {
  text-decoration: none;
}
</style>
