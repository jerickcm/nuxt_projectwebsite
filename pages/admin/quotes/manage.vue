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
                  <v-text-field
                    v-model="form_message"
                    label="Quote"
                    @blur="$v.form_message.$touch()"
                    @input="$v.form_message.$touch()"
                  ></v-text-field>
                  <template v-if="$v.form_message.$error">
                    <div
                      v-if="!$v.form_message.required"
                      class="errorMessage red--text"
                    >
                      Quote is required.
                    </div>
                  </template>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-text-field
                    v-model="form_author"
                    label="Author"
                    @blur="$v.form_author.$touch()"
                    @input="$v.form_author.$touch()"
                  ></v-text-field>
                  <template v-if="$v.form_author.$error">
                    <div
                      v-if="!$v.form_author.required"
                      class="errorMessage red--text"
                    >
                      Author is required.
                    </div>
                  </template>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-select
                    v-model="form_publish"
                    :items="publishselection"
                    item-value="value"
                    item-text="text"
                    label="Publish"
                    @blur="$v.form_publish.$touch()"
                  />
                  <template v-if="$v.form_publish.$error">
                    <p
                      v-if="!$v.form_publish.required"
                      class="errorMessage red--text"
                    >
                      Select Publish is required.
                    </p>
                  </template></v-col
                >
              </v-row>
            </v-card-text>

            <div style="flex: 1 1 auto"></div>
          </v-card>
        </v-dialog>

        <v-card-title>
          Quotes Table
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
          <v-btn color="primary" to="/admin/quotes/create">Create</v-btn>
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
          <template v-slot:item.publish="{ item }">
            {{ item.publish }}
          </template>
          <template v-slot:item.created_at="{ item }">
            {{ item.created_at }}
          </template>
          <template v-slot:item.id="{ item }">
            <v-icon small class="mr-2" @click="editItem(item)">
              mdi-pencil
            </v-icon>
            <v-icon small @click="deleteItem(item)">
              <!-- v-bind="attrs" v-on="on" -->
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
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

export default {
  middleware: 'auth',
  mixins: [validationMixin, admin],

  head: () => ({
    title: 'Post Datatable'
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
      { text: 'Quotes', value: 'message' },
      { text: 'Author', value: 'author' },
      { text: 'Publish', value: 'publish' },
      { text: 'Date / Time', value: 'created_at' },
      { text: 'Action', value: 'id', sortable: false }
    ],
    form_content: '',
    form_title: '',
    form_author: '',
    form_message: '',
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
        value: 1,
        text: 'Draft'
      },
      {
        value: 2,
        text: 'Publish'
      }
    ],
    form_image: '',

    image: '',
    image_preview: '',
    image_name: ''
  }),
  validations: {
    form_author: { required },
    form_message: { required },
    form_publish: { required }
  },
  async created() {},
  components: {},
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
      this.form_title = this.tabledata[this.tabledata.indexOf(item)].title
      this.form_image = this.tabledata[this.tabledata.indexOf(item)].image
      this.form_message = this.tabledata[this.tabledata.indexOf(item)].message
      this.form_author = this.tabledata[this.tabledata.indexOf(item)].author

      this.form_publish = this.tabledata[
        this.tabledata.indexOf(item)
      ].publishvalue
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
      let table_id = this.tabledata[this.editedIndex].id

      payload.append('post_id', this.tabledata[this.editedIndex].id)

      payload.append('message', this.form_message)
      payload.append('author', this.form_author)
      payload.append('publish', this.form_publish)

      try {
        this.$axios
          // .$post('api/post/update', payload, {
          .$post(`api/quotes/update/${table_id}`, payload, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
          .then(res => {
            this.tabledata[this.editedIndex].message = this.form_message
            this.tabledata[this.editedIndex].author = this.form_message
            this.tabledata[this.editedIndex].publish =
              this.form_publish == 1 ? 'Draft' : 'Publish'

            this.tabledata[this.editedIndex].publishvalue = this.form_publish

            this.dialog = false
            this.form_publish = ''

            NProgress.done()
          })
          .catch(error => {
            this.form_publish = ''
            NProgress.done()
          })
          .finally(() => {})
      } catch (error) {}
    },
    async deleteItemConfirm() {
      await this.$axios.$get('/sanctum/csrf-cookie').then(response => {})
      let table_id = this.tabledata[this.editedIndex].id
      try {
        this.$axios
          .$delete(`api/quotes/delete/${table_id}`)
          .then(res => {})
          .catch(error => {})
          .finally(() => {})
      } catch (error) {}
      this.tabledata.splice(this.editedIndex, 1)
      this.closeDelete()
    },
    async getDataFromApi() {
      this.loading = true
      const { sortBy, sortDesc, page, itemsPerPage } = this.options

      let payload = new FormData()
      payload.append('sortDesc', sortDesc)
      payload.append('sortBy', sortBy)
      payload.append('page', page)
      payload.append('itemsPerPage', itemsPerPage)
      payload.append('search', this.search)

      await this.$axios.$get('/sanctum/csrf-cookie').then(response => {})
      this.$axios
        .$post('api/quotes/datatable', payload)
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
              id: value.id,
              slug: value.slug,
              title: value.title,
              content: value.content,
              publish: value.publish == 1 ? 'Draft' : 'Publish',
              publishvalue: value.publish,
              image: value.image,
              created_at: value.human_date,
              message: value.message,
              author: value.author
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
