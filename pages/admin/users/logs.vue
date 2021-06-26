<template>
  <v-container fluid class="grey ligthen-3 pa-0 ma-0" min-height="">
    <v-sheet class="blue ligthen-3 pa-5 pt-10 pb-10" min-height="">
      <v-card>
        <v-card-title>
          Users Table Logs
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>

          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
            @change="getDataFromApi"
          ></v-text-field>
          <v-spacer></v-spacer>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="tabledata"
          :options.sync="options"
          :server-items-length="tabledata_total"
          :loading="loading"
          class="elevation-1"
          :footer-props="{
            'items-per-page-options': [5, 10, 20, 30, 40, 50]
          }"
        >
          <template v-slot:top>
            <v-dialog v-model="dialogDelete" max-width="500px">
              <v-card>
                <v-card-title class="text-h5"
                  >Are you sure you want to delete this item?</v-card-title
                >
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="closeDelete"
                    >Cancel</v-btn
                  >
                  <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                    >OK</v-btn
                  >
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </template>

          <template v-slot:header.id="{ header }">
            {{ header.text.toUpperCase() }}
          </template>
          <template v-slot:header.name="{ header }">
            {{ header.text.toUpperCase() }}
          </template>

          <template v-slot:item.created_at="{ item }">
            {{ item.created_at }}
          </template>
        </v-data-table>
      </v-card>
    </v-sheet>
  </v-container>
</template>
<script>
import { admin } from '~/mixins/admin_pages.js'
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

var timezone = process.env.TIMEZONE
const dev = process.env.DEV_API
const prod = process.env.PROD_API
const url = process.env.NODE_ENV === 'development' ? dev : prod

var timezone = process.env.TIMEZONE
export default {
  mixins: [validationMixin, admin],

  head: () => ({
    title: 'Users Datatable'
  }),

  data: () => ({
    headers: [
      {
        text: 'No',
        align: 'start',
        sortable: false,
        value: 'no'
      },
      { text: 'Admin', value: 'name' },
      { text: 'Type', value: 'type' },
      { text: 'Logs', value: 'description' },
      { text: 'Date / Time', value: 'created_at' }
    ],
    form_content: '',
    form_title: '',
    form_publish: '',
    dialog: false,
    dialogDelete: false,
    deletedialog: false,
    editedIndex: -1,
    search: '',
    tabledata: [],
    tabledata_total: 0,
    loading: true,
    options: {},

    publishselection: [
      {
        value: 0,
        text: 'No'
      },
      {
        value: 1,
        text: 'Yes'
      }
    ],
    form_image: '',

    image: '',
    image_preview: '',
    image_name: '',

    form_username: '',
    form_name: '',
    form_email: '',
    form_is_admin: ''
  }),
  validations: {
    form_content: { required },
    form_title: { required },
    form_publish: { required }
  },
  async created() {
    this.timezone = timezone
    this.url = url
    this.editorConfig = {
      simpleUpload: {
        uploadUrl: url + '/' + 'api/ckeditor',
        withCredentials: true,
        headers: {
          Accept: 'application/json',
          identifier: this.image_id,
          Timezone: this.timezone,
          'X-XSRF-TOKEN': this.$auth.$storage.getCookies()['XSRF-TOKEN']
        }
      }
    }
  },
  components: {
    'ckeditor-nuxt': () => import('@coderzero8/ck5-nuxt')
  },
  computed: {
    titleErrors() {
      const errors = []
      if (!this.$v.form_title.$dirty) return errors
      !this.$v.form_title.required && errors.push('Title is required.')
      return errors
    },
    contentErrors() {
      const errors = []
      if (!this.$v.form_content.$dirty) return errors
      !this.$v.form_content.required && errors.push('Content is required.')
      return errors
    }
  },
  watch: {
    options: {
      handler() {
        this.getDataFromApi()
      },
      deep: true
    },
    dialog(val) {
      val || this.close()
    },
    dialogDelete(val) {
      val || this.closeDelete()
    }
  },
  mounted() {
    this.getDataFromApi()
  },
  methods: {
    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    async getDataFromApi() {
      await this.$axios.$get('/sanctum/csrf-cookie').then(response => {})
      this.loading = true
      const { sortBy, sortDesc, page, itemsPerPage } = this.options

      let payload = new FormData()
      payload.append('sortDesc', sortDesc)
      payload.append('sortBy', sortBy)
      payload.append('page', page)
      payload.append('itemsPerPage', itemsPerPage)
      payload.append('search', this.search)

      this.$axios.$get('/sanctum/csrf-cookie').then(response => {})
      this.$axios
        .$post('admin/users/datatable_logs', payload)
        .then(res => {
          var data = []
          var rowcount = 1

          if (page == 1) {
            rowcount = 1
          } else {
            rowcount = (page - 1) * itemsPerPage + 1
          }

          for (const [key, value] of Object.entries(res.data)) {
            data.push({
              no: rowcount,
              name: value.name,
              email: value.email,
              description: value.description,
              created_at: value.human_date,
              type: value.type_desc
            })
            rowcount++
          }

          this.tabledata = data
          this.tabledata_total = res.total
          this.loading = false
        })
        .catch(error => {
          this.loading = false
        })
        .finally(() => {
          this.loading = false
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
.ck-editor__editable {
  height: 350px;
}
.ck.ck-content.ck-editor__editable {
  height: 350px;
}
.ck.ck-content.ck-editor__editable.ck-rounded-corners.ck-editor__editable_inline {
  height: 350px;
}
.ck.ck-content.ck-editor__editable_inline {
  height: 350px;
}
</style>
