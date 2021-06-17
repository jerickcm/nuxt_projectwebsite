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
                    v-model="form_title"
                    label="Title"
                    @blur="$v.form_title.$touch()"
                    @input="$v.form_title.$touch()"
                  ></v-text-field>
                  <template v-if="$v.form_title.$error">
                    <div
                      v-if="!$v.form_title.required"
                      class="errorMessage red--text"
                    >
                      Title is required.
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

              <v-row>
                <v-col lg="4">
                  <input
                    type="file"
                    id="file"
                    ref="file"
                    v-on:change="handleFileUpload()"
                  />
                  <v-card>
                    <v-img v-if="image_preview" :src="image_preview"></v-img>
                    <div v-else>
                      <v-img v-if="form_image" :src="form_image"></v-img>
                    </div>
                  </v-card>

                  <label
                    v-if="this.image_preview != '' || this.form_image != ''"
                    onclick="return false"
                    v-on:click="remove_image()"
                    class="red--text"
                    >Remove</label
                  >
                </v-col>
                <v-spacer></v-spacer>
              </v-row>
              <v-row
                ><v-col class="">
                  <label for class="black--text">Content</label> <br />
                  <client-only placeholder="loading...">
                    <ckeditor-nuxt
                      :config="editorConfig"
                      v-model="form_content"
                      @blur="$v.form_content.$touch()"
                      @input="$v.form_content.$touch()"
                      :error-messages="contentErrors"
                      class=""
                      style="height: 300px"
                    />

                    <template v-if="$v.form_content.$error">
                      <div
                        v-if="!$v.form_content.required"
                        class="errorMessage red--text"
                      >
                        Content is required.
                      </div>
                    </template>
                  </client-only></v-col
                >
              </v-row>
            </v-card-text>

            <div style="flex: 1 1 auto"></div>
          </v-card>
        </v-dialog>

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
  middleware: 'auth',
  mixins: [validationMixin],

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

      { text: 'Title', value: 'title' },
      { text: 'Slug', value: 'slug' },
      { text: 'Publish', value: 'publish' },
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
    form_content: { required },
    form_title: { required },
    form_publish: { required }
  },
  async created() {
    this.timezone = timezone
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
      this.image_id = this.tabledata[this.tabledata.indexOf(item)].ckeditor_log
      this.form_title = this.tabledata[this.tabledata.indexOf(item)].title
      this.form_image = this.tabledata[this.tabledata.indexOf(item)].image
      this.form_content = this.tabledata[this.tabledata.indexOf(item)].content

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

      this.form_content = juice.inlineContent(
        this.form_content,
        ckeditor5const.styles
      )

      let payload = new FormData()

      payload.append('post_id', this.tabledata[this.editedIndex].id)
      payload.append('title', this.form_title)
      payload.append('content', this.form_content)
      payload.append('publish', this.form_publish)

      // if (this.form_image) {
      payload.append('image', this.form_image)
      // }

      try {
        this.$axios
          .$post('api/post/update', payload, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
          .then(res => {
            this.tabledata[this.editedIndex].title = this.form_title
            this.tabledata[this.editedIndex].content = this.form_content
            this.tabledata[this.editedIndex].publish =
              this.form_publish == 1 ? 'Draft' : 'Publish'

            this.tabledata[this.editedIndex].publishvalue = this.form_publish

            // if (this.form_image) {
            this.tabledata[this.editedIndex].image = res.image
            // }

            this.dialog = false
            this.form_publish = ''
            this.image_preview = ''

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
      let payload = new FormData()
      payload.append('post_id', this.tabledata[this.editedIndex].id)
      try {
        this.$axios
          .$post('api/post/delete', payload)
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
        .$post('api/post/datatable', payload)
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
              ckeditor_log: value.ckeditor_log
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
