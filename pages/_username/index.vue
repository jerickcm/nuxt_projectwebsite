<template>
  <div>
    <h1>Event # {{ id }}</h1>
    <v-container>
      <v-row v-for="(item, index) in rowCount" :key="data.id">
        <v-col v-for="(item, index) in numberOfColumns" :key="data.id">
          AA
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row color="blue" v-for="(i, ind) in Math.ceil(datum.length / 4)" :key="ind">
        <v-col color="red" lg="3"
          v-for="(item, indx) in datum.slice((i - 1) * 4, i * 4)"
          :key="indx"
        >
          <v-card>
            {{ item.name }}
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  auth: false,
  head() {
    return {
      title: 'World Reminders ' + this.id,
      meta: [
        {
          hid: 'World Reminders',
          name: 'World Reminders',
          content: 'World Reminders',
        },
      ],
    }
  },
  data: () => ({
    datum: [
      { name: 'test1' },
      { name: 'test2' },
      { name: 'test3' },
      { name: 'test4' },
      { name: 'test5' },
      { name: 'test6' },
      { name: 'test7' },
      // { name: 'test78' },
    ],
    data: [1, 2, 3, 4, 5, 6], //sample data
    numberOfColumns: 4,
    loading: false,
  }),
  async created() {
    console.log(Math.ceil(this.datum.length / 4))

    console.log(this.datum.slice((i - 1) * 4, i * 4))


  },
  computed: {
    id() {
      return this.$route.params.username
    },
    rowCount: function () {
      return Math.floor((this.data.length - 1) / this.numberOfColumns) + 1
    },
  },
  methods: {
    layoutCount: function (rows, columns) {
      return (rows - 1) * this.numberOfColumns + columns
    },
  },
  mounted() {},
  components: {},
  watch: {},
}
</script>
