<template>
  <v-container fluid class="grey ligthen-3  pa-0 ma-0" min-height="800vh">
    <v-sheet class="blue ligthen-3 pa-5 pt-10 pb-10" min-height="200vh">
      <v-card>
        <v-card-title>
          News Table
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
          :items="users"
          :pagination.sync="pagination"
          :server-items-length="totalUsers"
          :footer-props.items-per-page-options="rowsPerPageItems"
          :loading="loading"
        >
          <template v-slot:items="props">
            <tr>
              <td>
                <div class="d-flex">
                  <v-btn
                    :to="{ name: 'users.edit', params: { id: props.item.id } }"
                    >Edit</v-btn
                  >
                </div>
              </td>
              <td>{{ props.item.id }}</td>
              <td>{{ props.item.name }}</td>
              <td>{{ props.item.email }}</td>
            </tr>
          </template>
          <template v-slot:no-results>
            <v-alert :value="true" color="error" icon="warning">
              Your search for "{{ searchQuery }}" found no results.
            </v-alert>
          </template>
        </v-data-table>
      </v-card>
    </v-sheet>
  </v-container>
</template>
<script>
export default {
  middleware: 'auth',
  data() {
    return {
      draw: 1,
      users: [],
      searchQuery: '',
      loading: true,
      pagination: {
        descending: true,
        page: 1,
        rowsPerPage: 10,
        sortBy: 'id',
        totalItems: 0
      },
      totalUsers: 0,
      rowsPerPageItems: [10, 15, 20, 30, 40, 50],
      columns: {},
      headers: [
        {
          text: 'Actions',
          value: 'actions',
          sortable: false,
          searchable: false,
          width: '210px'
        },
        {
          text: 'ID',
          value: 'id',
          name: 'id',
          sortable: true,
          searchable: true,
          width: '40px'
        },
        {
          text: 'Name',
          value: 'name',
          name: 'name',
          sortable: true,
          searchable: true,
          width: '250px'
        },
        {
          text: 'Email',
          value: 'email',
          sortable: true,
          searchable: true,
          width: '80px'
        }
      ],
      cancelSource: null
    }
  },

  watch: {
    //watcher to watch for order/pagination and search criteria.
    //
    params: {
      handler() {
        this.getDataFromApi().then(data => {
          this.users = data.items
          this.totalUsers = data.total
        })
      },

      deep: true
    }
  },

  mounted() {
    //Based on our Headers we create query data for DataTables
    //I've added a new param "searchable" to let DataBales know that this column is not searchable
    //You can also set name as "table.column eg users.name" if you select from more then table to avoid "Ambitious column name error from SQL"

    for (var i = 0; i < this.headers.length; i++) {
      this.columns[i] = {
        data: this.headers[i].value,
        name:
          typeof this.headers[i].name != 'undefined'
            ? this.headers[i].name
            : this.headers[i].value,
        searchable: this.headers[i].searchable,
        orderable: this.headers[i].sortable,
        search: {
          value: '',
          regex: false
        }
      }
    }
  },

  //computed params to return pagination and search criteria
  computed: {
    params(nv) {
      return {
        ...this.pagination,
        query: this.searchQuery
      }
    }
  },

  methods: {
    cancelRequest() {
      //Axios cancelSource to stop current search if new value is entered
      if (this.cancelSource) {
        this.cancelSource.cancel('Start new search, stop active search')
      }
    },

    getDataFromApi() {
      //show loading of Vuetify Table
      this.loading = true

      return new Promise((resolve, reject) => {
        this.cancelRequest()

        this.cancelSource = axios.CancelToken.source()

        //copy current params to modify
        let params = this.params

        params.length = params.rowsPerPage //set how many records to fecth per page
        params.start =
          params.page == 1 ? 0 : params.rowsPerPage * (params.page - 1) //set offset
        params.search = {
          value: params.query,
          regex: false
        } //our search query

        params.draw = this.draw

        //sorting and default to column 1 (ID)
        if (params.sortBy) {
          params.order = {
            0: {
              column: _.findIndex(this.headers, {
                value: params.sortBy
              }),
              dir: params.descending ? 'desc' : 'asc'
            }
          }
        } else {
          params.order = {
            0: {
              column: 1,
              dir: 'desc'
            }
          }
        }

        params.columns = this.columns //set our previously created columns

        //fecth data
        //I used here jQuery $.param() helper, becuase axios submits data as JSON Payload, and we need for data or Query params
        //This can be changed
        this.$axios
          .get('/api/users?' + $.param(params), {
            cancelToken: this.cancelSource.token
          })
          .then(res => {
            this.draw++

            this.cancelSource = null

            let items = res.data.data
            let total = res.data.recordsFiltered

            resolve({
              items,
              total
            })
          })
          .catch(err => {
            if (axios.isCancel(err)) {
              console.log('Request canceled', err.message)
            } else {
              reject(err)
            }
          })
          .always(() => {
            this.loading = false
          })
      })
    }
  }
}
</script>
<style scoped>
ul.clean {
  list-style: none !important;
  list-style-type: none !important;
}
</style>
