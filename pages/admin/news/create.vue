<template>
  <v-container fluid class="grey ligthen-3 pa-0 ma-0" min-height="800vh">
    <v-sheet class="blue ligthen-3 pa-5 pt-10 pb-10" min-height="200vh">
      <form class="white pa-5" action="">
        <v-row
          ><v-col>
            <v-btn color="primary" depressed to="/dashboard"> BACK </v-btn>
          </v-col></v-row
        >
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
            </v-card>

            <label
              v-if="this.image_preview != ''"
              onclick="return false"
              v-on:click="remove_image()"
              class="red--text"
              >Remove</label
            >
          </v-col>
          <v-spacer></v-spacer>
        </v-row>
        <v-row
          ><v-col>
            <label for class="black--text">Content</label> <br />
            <client-only placeholder="loading...">
              <ckeditor-nuxt
                :config="editorConfig"
                v-model="form_content"
                @blur="$v.form_content.$touch()"
                @input="$v.form_content.$touch()"
                :error-messages="contentErrors"
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
        <v-row>
          <v-col>
            <v-btn class="ml-0" color="success" v-on:click="onSubmit()">
              <label class="white-font">Submit</label>
            </v-btn>
          </v-col>
        </v-row>
      </form>
    </v-sheet>
  </v-container>
</template>

<script>
import { admin } from '~/mixins/admin_pages.js'
import juice from 'juice'
import ckeditor5const from '~/mixins/ckeditor5const'
import Vue from 'vue'
import { Vuelidate, validationMixin } from 'vuelidate'
Vue.use(Vuelidate)
import { required } from 'vuelidate/lib/validators'

const dev = process.env.DEV_API
const prod = process.env.PROD_API
const url = process.env.NODE_ENV === 'development' ? dev : prod

var timezone = process.env.TIMEZONE

export default {

  head: () => ({
    title: 'Create News',
  }),
  mixins: [validationMixin,admin],
  data: () => ({
    image_id: '',
    url_backend: '',
    form_content: '',
    form_title: '',
    form_publish: '',
    token: null,
    publishselection: [
      {
        value: 1,
        text: 'Draft',
      },
      {
        value: 2,
        text: 'Publish',
      },
    ],
    image: '',
    image_preview: '',
    image_name: '',
  }),

  validations: {
    form_content: { required },
    form_title: { required },
    form_publish: { required },
  },
  components: {
    'ckeditor-nuxt': () =>
      import('@engrjerickcmangalus/ckeditor-nuxt-custom-build-simpleuploader'),
  },
  async created() {
    this.timezone = timezone
    this.image_id = 'news' + '-' + new Date().getTime()
    this.editorConfig = {
      simpleUpload: {
        uploadUrl: url + '/' + 'api/ckeditor',
        withCredentials: true,
        headers: {
          Accept: 'application/json',
          Timezone: this.timezone,
          identifier: this.image_id,
          'X-XSRF-TOKEN': this.$auth.$storage.getCookies()['XSRF-TOKEN'],
        },
      },
    }

    await this.$axios.$get('/sanctum/csrf-cookie')
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
    },
  },
  methods: {
    handleFileUpload(e) {
      const file = this.$refs.file.files[0]
      this.image_preview = URL.createObjectURL(file)
      try {
        this.image_name = this.$refs.file.files[0].name
        this.image = this.$refs.file.files[0]
      } catch (err) {
        console.log(err)
      }
    },
    remove_image() {
      this.$refs.file.value = null
      this.image_name = ''
      this.image = ''
      this.image_preview = ''

      return false
    },
    onSubmit() {
      if (this.form_title && this.form_content && this.form_publish) {
        this.$axios.$get('/sanctum/csrf-cookie')
        this.$toast.success('Sending')

        this.form_content = juice.inlineContent(
          this.form_content,
          ckeditor5const.styles
        )

        let payload = new FormData()
        payload.append('ckeditor_log', this.image_id)
        payload.append('publish', this.form_publish)
        payload.append('title', this.form_title)
        payload.append('content', this.form_content)
        payload.append('image', this.image)
        payload.append('image_name', this.image_name)
        this.$axios
          .post('/api/news/create', payload, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then((res) => {
            this.$toast.success('Done.')
            // redirect('/dashboard')
          })
          .catch((error) => {
            // this.$toast.success('Error.')
          })
          .finally(() => {})
      } else {
        this.$toast.error('Validation failed.')
      }
    },
  },
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
