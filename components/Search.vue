<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card elevation="2" outlined shaped tile>
          <v-card-text>
            <v-autocomplete
              v-model="model"
              :items="items"
              :loading="isLoading"
              :search-input.sync="search"
              color="blue"
              hide-no-data
              hide-selected
              item-text="title"
              item-value="API"
              label="Search"
              placeholder="Start typing to Search"
              prepend-icon="mdi-credit-card-search"
              return-object
            >
              <template v-slot:selection="data">
                <!-- <v-avatar left>
                  <v-img :src="data.item.image"></v-img>
                </v-avatar> -->
                {{ data.item.title }}
              </template>

              <template v-slot:item="data">
                <template v-if="typeof data.item !== 'object'">
                  <v-list-item-content v-text="data.item"></v-list-item-content>
                </template>
                <template v-else>
                  <v-list-item-avatar v-if="data.item.user">
                    <v-img :src="data.item.image" />
                  </v-list-item-avatar>
                  <v-list-item-avatar tile v-else>
                    <v-img :src="data.item.image" />
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title
                      v-html="data.item.title"
                    ></v-list-item-title>
                  </v-list-item-content>
                </template>
              </template>
            </v-autocomplete>
          </v-card-text>
          <v-divider></v-divider>
          <v-expand-transition>
            <v-list v-if="model">
              <v-list-item>
                <p>Page :</p>
              </v-list-item>
              <v-list-item v-if="model.image">
                <v-img
                  contain
                  gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
                  aspect-ratio="1.4"
                  :alt="model.title"
                  color="grey"
                  :src="model.image"
                  max-height="200"
                  max-width="450"
                ></v-img>
              </v-list-item>
              <v-list-item>
                <v-icon v-if="model.icon">{{ model.icon }}</v-icon
                >&zwnj;&zwnj; &zwnj;&zwnj;
                <h2>
                  <nuxt-link
                    color="blue"
                    class="nostyle blue--text"
                    target="_blank"
                    :to="{
                      path: model.page + model.slug
                    }"
                  >
                    {{ model.title }}
                  </nuxt-link>
                </h2>
              </v-list-item>
            </v-list>
          </v-expand-transition>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn :disabled="!model" color="primary" @click="model = null">
              Clear
              <v-icon right color="white">
                mdi-close-circle
              </v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
const dev = process.env.DEV_API
const prod = process.env.PROD_API
const api = process.env.NODE_ENV === 'development' ? dev : prod

export default {
  data: () => ({
    DescriptionLimit: 60,
    entries: [],
    isLoading: false,
    model: null,
    search: null
  }),

  computed: {
    fields() {
      if (!this.model) return []

      return Object.keys(this.model).map(key => {
        return {
          key,
          value: this.model[key] || 'n/a'
        }
      })
    },
    items() {
      return this.entries.map(entry => {
        const title = entry.title

        return Object.assign({}, entry, { title })
      })
    }
  },
  mounted() {
    console.log(this.$route.query.s)
  },
  watch: {
    async search(val) {
      // Items have already been loaded
      if (this.items.length > 0) return

      // Items have already been requested
      if (this.isLoading) return

      this.isLoading = true

      await this.$axios.$get('/sanctum/csrf-cookie')

      fetch(api + '/api/search')
        .then(res => res.json())
        .then(res => {
          const { count, entries } = res
          this.count = count
          this.entries = entries
        })
        .catch(err => {
          console.log(err)
        })
        .finally(() => (this.isLoading = false))
    }
  }
}
</script>
<style scoped>
.nostyle {
  text-decoration: none !important;
}
</style>
