<template>
  <v-container fluid class="grey ligthen-3  pa-0 ma-0" min-height="800vh">
    <v-sheet class="blue ligthen-3 pa-5 pt-10 pb-10" min-height="200vh">
      <v-card>
        <v-card-title>
          Post Table
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
            @change="getDataFromApi"
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="tabledata"
          :options.sync="options"
          :server-items-length="tabledata_total"
          :loading="loading"
          :search="search"
          class="elevation-1"
        ></v-data-table>
      </v-card>
    </v-sheet>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      search: "",
      tabledata: [],
      tabledata_total: 0,
      loading: true,
      options: {},
      headers: [
        {
          text: "No",
          align: "start",
          sortable: false,
          value: "no"
        },
        { text: "Name", value: "name" },
        { text: "Title", value: "title" },
        { text: "Slug", value: "slug" },
        { text: "Action", value: "id", sortable: false }
      ]
    };
  },
  watch: {
    options: {
      handler() {
        this.getDataFromApi();
      },
      deep: true
    }
  },
  mounted() {
    this.getDataFromApi();
  },
  methods: {
    getDataFromApi() {
      this.loading = true;
      const { sortBy, sortDesc, page, itemsPerPage } = this.options;

      let payload = new FormData();
      payload.append("sortDesc", sortDesc);
      payload.append("sortBy", sortBy);
      payload.append("page", page);
      payload.append("itemsPerPage", itemsPerPage);
      payload.append("search", this.search);

      this.$axios.$get("/sanctum/csrf-cookie").then(response => {});
      this.$axios
        .$post("api/post/datatable", payload)
        .then(res => {
          var data = [];
          var rowcount = 1;
          if (page == 1) {
            rowcount = 1;
          } else {
            rowcount = (page - 1) * itemsPerPage + 1;
          }

          for (const [key, value] of Object.entries(res.data)) {
            data.push({
              no: rowcount,
              name: value.name,
              id: value.id,
              slug: value.slug,
              title: value.title,
              id: value.id
            });
            rowcount++;
          }
          this.tabledata = data;
          this.tabledata_total = res.total;
          this.loading = false;

          this.loading = false;
        })
        .catch(error => {})
        .finally(() => {});
    }
  }
};
</script>
<style scoped>
ul.clean {
  list-style: none !important;
  list-style-type: none !important;
}
</style>
