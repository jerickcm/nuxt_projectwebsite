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
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="desserts"
          :options.sync="options"
          :server-items-length="totalDesserts"
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
      totalDesserts: 0,
      desserts: [],
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
        { text: "Action", value: "", sortable: false }
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
          var rowcount =1;
          if (page == 1) {
            rowcount = 1;
          }else{
            rowcount =((page-1)*itemsPerPage) +1;

          }
console.log(rowcount);

          for (const [key, value] of Object.entries(res.data)) {
            data.push({
              no: rowcount,
              name: value.name,
              id: value.id,
              slug: value.slug,
              title: value.title
            });
            rowcount++;
          }
          this.desserts = data;
          this.totalDesserts = res.total;
          this.loading = false;
          console.log(data);
           this.loading = false;
        })
        .catch(error => {})
        .finally(() => {});

      // this.loading = false;
      // this.fakeApiCall().then(data => {
      //   console.log(data);
      //   this.desserts = data.items;
      //   this.totalDesserts = data.total;
      //   this.loading = false;
      // });
    },
    /**
     * In a real application this would be a call to fetch() or axios.get()
     */
    fakeApiCall() {
      return new Promise((resolve, reject) => {
        console.log(this.options);
        const { sortBy, sortDesc, page, itemsPerPage } = this.options;

        let items = this.getDesserts();
        const total = items.length;

        if (sortBy.length === 1 && sortDesc.length === 1) {
          items = items.sort((a, b) => {
            const sortA = a[sortBy[0]];
            const sortB = b[sortBy[0]];

            if (sortDesc[0]) {
              if (sortA < sortB) return 1;
              if (sortA > sortB) return -1;
              return 0;
            } else {
              if (sortA < sortB) return -1;
              if (sortA > sortB) return 1;
              return 0;
            }
          });
        }

        if (itemsPerPage > 0) {
          items = items.slice((page - 1) * itemsPerPage, page * itemsPerPage);
        }

        setTimeout(() => {
          resolve({
            items,
            total
          });
        }, 1000);
      });
    },
    getDesserts() {
      return [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%"
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%"
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%"
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8%"
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: "16%"
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: "0%"
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: "2%"
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: "45%"
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: "22%"
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%"
        }
      ];
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
