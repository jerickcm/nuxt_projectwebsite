<template>
  <v-container fluid class="grey ligthen-3 pa-0 ma-0" min-height="">
    <v-sheet class="blue ligthen-3 pa-5 pt-10 pb-10" min-height="">
      <v-card>
        <v-dialog
          persistent
          v-model="dialog"
          fullscreen
          hide-overlay
          transition="dialog-bottom-transition"
          scrollable
        >
          <v-card tile>
            <v-toolbar flat dark color="primary" max-height="50vh">
              <v-btn icon dark @click="dialog = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <v-toolbar-title>Settings</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-toolbar-items>
                <v-btn dark text @click="SaveEdited"> Save </v-btn>
              </v-toolbar-items>
            </v-toolbar>
            <v-card-text>
              <v-row>
                <v-col>
                  <v-text-field v-model="form_name" label="Name"></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="form_username"
                    label="Username"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="form_email"
                    label="Email"
                    readonly
                    disabled
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-select
                    v-model="form_is_admin"
                    :items="publishselection"
                    item-value="value"
                    item-text="text"
                    label="Is admin"
                  />
                </v-col>
              </v-row>
            </v-card-text>

            <div style="flex: 1 1 auto"></div>
          </v-card>
        </v-dialog>

        <v-card-title>
          Users Table
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
          <v-btn class="mr-1" color="info" to="/admin/users/logs">Logs</v-btn>

          <v-btn class="mr-1" color="primary" to="/admin/users/create"
            >Create</v-btn
          >
          <v-btn @click="download" color="info">Download</v-btn>
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
          <template v-slot:item.id="{ item }">
            <v-icon small class="mr-2" @click="editItem(item)">
              mdi-pencil
            </v-icon>
            <v-icon small @click="deleteItem(item)">
              mdi-delete
            </v-icon>
          </template>
        </v-data-table>
      </v-card>
    </v-sheet>
  </v-container>
</template>
<script>
import { admin } from '~/mixins/admin_pages.js'
import juice from 'juice'
import ckeditor5const from '~/mixins/ckeditor5const'
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
      { text: 'Name', value: 'name' },

      { text: 'Email', value: 'email' },
      { text: 'Username', value: 'username' },
      { text: 'Admin', value: 'is_admin' },
      { text: 'Date / Time', value: 'created_at' },
      { text: 'Action', value: 'id', sortable: false }
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
    'ckeditor-nuxt': () =>
      import('@engrjerickcmangalus/ckeditor-nuxt-custom-build-simpleuploader')
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
    download() {
      const url = this.url + '/export1'
      window.location.href = url
    },
    handleFileUpload(e) {
      const file = this.$refs.file.files[0]
      this.image_preview = URL.createObjectURL(file)
      try {
        this.image_name = this.$refs.file.files[0].name
        this.form_image = this.$refs.file.files[0]
      } catch (err) {
        console.log(err)
      }
    },
    remove_image() {
      this.$refs.file.value = null
      this.image_name = ''
      this.image = ''
      this.image_preview = ''
      this.form_image = ''
      return false
    },
    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete() {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
    editItem(item) {
      this.form_username = this.tabledata[this.tabledata.indexOf(item)].username
      this.form_name = this.tabledata[this.tabledata.indexOf(item)].name
      this.form_email = this.tabledata[this.tabledata.indexOf(item)].email
      this.form_is_admin = this.tabledata[this.tabledata.indexOf(item)].is_admin

      this.editedIndex = this.tabledata.indexOf(item)
      this.dialog = true
    },

    deleteItem(item) {
      this.editedIndex = this.tabledata.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },
    async SaveEdited() {
      await this.$axios.$get('/sanctum/csrf-cookie').then(response => {})
      NProgress.start()

      let payload = new FormData()

      payload.append('user_id', this.tabledata[this.editedIndex].id)
      payload.append('name', this.form_name)
      payload.append('username', this.form_username)
      payload.append('is_admin', this.form_is_admin)

      try {
        this.$axios
          .$post('admin/users/update', payload, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
          .then(res => {
            this.tabledata[this.editedIndex].name = this.form_name
            this.tabledata[this.editedIndex].username = this.form_username
            this.tabledata[this.editedIndex].is_admin = this.form_is_admin

            this.dialog = false

            NProgress.done()
          })
          .catch(error => {
            NProgress.done()
          })
          .finally(() => {})
      } catch (error) {}
    },
    async deleteItemConfirm() {
      await this.$axios.$get('/sanctum/csrf-cookie').then(response => {})
      let payload = new FormData()
      payload.append('user_id', this.tabledata[this.editedIndex].id)
      try {
        this.$axios
          .$post('admin/users/delete', payload)
          .then(res => {})
          .catch(error => {})
          .finally(() => {})
      } catch (error) {}
      this.tabledata.splice(this.editedIndex, 1)
      this.closeDelete()
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
        .$post('admin/users/datatable', payload)
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
              username: value.username,
              email: value.email,
              id: value.id,
              is_admin_text: value.is_admin ? 'True' : 'False',
              is_admin: value.is_admin,
              created_at: value.human_date
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
