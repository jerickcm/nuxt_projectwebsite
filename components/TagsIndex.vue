<template>
  <v-container fluid class="tag-border">
    <v-row>
      <v-col class="ma-0 mt-0 pt-0">
        <h2 color="brown" class="brown--text ma-0 mt-0 pt-0 ">
          Tags <span v-if="total_tags"> ({{ total_tags }})</span>
        </h2>
      </v-col>
    </v-row>

    <v-row v-if="load_tags == false">
      <v-col class="pa-0 ">
        <v-progress-linear
          v-if="load_tags"
          color="blue accent-5"
          indeterminate
          rounded
          height="6"
        ></v-progress-linear>
        <v-card flat>
          <v-card-text class="pa-0 ma-0">
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
  props: ['tags', 'load_tags', 'total_tags'],
  data: () => ({}),
  async mounted() {},
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
/* .tag-border {
  border-right: 0.4rem solid brown;
  border-top: 0.4rem solid brown;
} */
</style>
