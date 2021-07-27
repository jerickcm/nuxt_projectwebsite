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
                {{ data.item.title }}
              </template>

              <template v-slot:item="data">
                <template v-if="typeof data.item !== 'object'">
                  <v-list-item-content v-text="data.item"></v-list-item-content>
                </template>
                <template v-else>
                  <v-list-item-avatar v-if="data.item.user">
                    <v-img
                      v-if="data.item.image != null"
                      :src="data.item.image"
                    >
                    </v-img>
                    <v-avatar v-else class="white--text" color="green">
                      {{ data.item.title.charAt(0).toUpperCase() }}
                    </v-avatar>
                  </v-list-item-avatar>
                  <v-list-item-avatar tile v-else-if="data.item.tag">
                    <v-avatar rounded class="white--text" color="blue">
                      {{ data.item.title.charAt(0).toUpperCase() }}
                    </v-avatar>
                  </v-list-item-avatar>
                  <v-list-item-avatar tile v-else>
                    <v-img
                      v-if="data.item.image != null"
                      :src="data.item.image"
                    />
                    <v-avatar tile v-else class="white--text" color="grey">
                      {{ data.item.title.charAt(0).toUpperCase() }}
                    </v-avatar>
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
              <v-list-item v-if="model.user">
                <v-card class="mx-auto" max-width="350" outlined>
                  <v-list-item three-line>
                    <v-list-item-content>
                      <div class="text-overline mb-4">
                        Profile
                      </div>
                      <v-list-item-title class="text-h5 mb-1">
                        {{ model.title }}
                      </v-list-item-title>
                      <v-list-item-subtitle>user profile</v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-avatar tile size="80">
                      <v-avatar v-if="model.image != null" width="37">
                        <v-img :src="model.image"></v-img>
                      </v-avatar>
                      <v-avatar v-else class="white--text" color="grey">
                        {{ model.title.charAt(0).toUpperCase() }}
                      </v-avatar>
                    </v-list-item-avatar>
                  </v-list-item>

                  <v-card-actions>
                    <v-btn outlined rounded text>
                      <nuxt-link
                        color="blue"
                        class="nostyle blue--text"
                        target="_blank"
                        :to="{
                          path: model.page + model.slug
                        }"
                      >
                        visit profile
                        <v-icon small color="blue"
                          >mdi-arrow-top-right-thick</v-icon
                        >
                      </nuxt-link>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-list-item>

              <v-list-item v-else-if="model.tag">
                <v-card class="mx-auto" max-width="350" outlined>
                  <v-list-item three-line>
                    <v-list-item-content>
                      <div class="text-overline mb-4">
                        Tag
                      </div>
                      <v-list-item-title class="text-h5 mb-1">
                        {{ model.slug }}
                      </v-list-item-title>
                      <v-list-item-subtitle
                        >Tagged Blog Article</v-list-item-subtitle
                      >
                    </v-list-item-content>

                    <v-list-item-avatar tile size="80">
                      <v-avatar class="white--text" color="grey">
                        {{ model.title.charAt(0).toUpperCase() }}
                      </v-avatar>
                    </v-list-item-avatar>
                  </v-list-item>

                  <v-card-actions>
                    <v-btn outlined rounded text>
                      <nuxt-link
                        color="blue"
                        class="nostyle blue--text"
                        target="_blank"
                        :to="{
                          path: model.page + model.slug
                        }"
                      >
                        visit tag
                        <v-icon small color="blue"
                          >mdi-arrow-top-right-thick</v-icon
                        >
                      </nuxt-link>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-list-item>

              <v-list-item v-else>
                <v-card class="mx-auto" max-width="344">
                  <v-img v-if="model.image != null" :src="model.image"></v-img>
                  <v-img v-else src="/images/default.jpg"></v-img>

                  <v-card-title class="fs-1">
                    <v-icon v-if="model.icon">{{ model.icon }}</v-icon>
                    <h2>
                      {{ model.title }}
                    </h2>
                  </v-card-title>

                  <v-card-subtitle> </v-card-subtitle>

                  <v-card-actions>
                    <v-btn outlined rounded text>
                      <nuxt-link
                        color="blue"
                        class="nostyle blue--text"
                        target="_blank"
                        :to="{
                          path: model.page + model.slug
                        }"
                      >
                        visit page
                        <v-icon small color="blue"
                          >mdi-arrow-top-right-thick</v-icon
                        >
                      </nuxt-link>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-list-item>
            </v-list>
          </v-expand-transition>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn :disabled="!model" color="cstmblue" @click="model = null">
              <label for="" color="cstmbluetext">Clear</label>
              <v-icon right color="cstmbluetext">
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
