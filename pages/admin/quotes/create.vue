<template>
  <v-container fluid class="grey ligthen-3 pa-0 ma-0" min-height="800vh">
    <v-sheet class="blue ligthen-3 pa-5 pt-10 pb-10" min-height="200vh">
      <form class="white pa-5" action="">
        <v-row
          ><v-col>
            <!-- <v-btn color="primary" depressed to="/dashboard"> BACK </v-btn> -->
            <v-btn color="primary" depressed to="/admin/quotes/manage">
              BACK
            </v-btn>
          </v-col></v-row
        >
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
    title: 'Create News'
  }),

  mixins: [validationMixin, admin],
  data: () => ({
    form_message: '',
    form_author: '',
    form_publish: '',
    token: null,
    publishselection: [
      {
        value: 1,
        text: 'Draft'
      },
      {
        value: 2,
        text: 'Publish'
      }
    ]
  }),

  validations: {
    form_message: { required },
    form_author: { required },
    form_publish: { required }
  },
  components: {},
  async created() {},
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
  methods: {
    async onSubmit() {
      if (this.form_author && this.form_message && this.form_publish) {
        await this.$axios.$get('/sanctum/csrf-cookie')
        this.$toast.success('Sending')
        let payload = new FormData()

        payload.append('publish', this.form_publish)
        payload.append('message', this.form_message)
        payload.append('author', this.form_author)

        this.$axios
          .post('/api/quotes/create', payload, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
          .then(res => {
            this.$toast.success('Done.')
            // redirect('/dashboard')
          })
          .catch(error => {
            // this.$toast.success('Error.')
          })
          .finally(() => {})
      } else {
        this.$toast.error('Validation failed.')
      }
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
