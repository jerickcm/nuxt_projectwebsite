<template>
  <v-container fluid v-if="load_component == false">
    <v-row>
      <v-col class=" mb-0 pb-0">
        <hr color="green" class="hr-green" />
      </v-col>
    </v-row>
    <v-row>
      <v-col class="ma-0 mt-0 pt-0">
        <h2 color="green" class="green--text ma-0 mt-0 pt-0 ">
          Topics
        </h2>
      </v-col>
    </v-row>
    <!-- Nuxt -->
    <v-row
      v-for="(i, ind) in Math.ceil(nuxt.length / 5)"
      :key="ind + 10"
      class="mt-2 pt-2 hidden-sm-and-down"
    >
      <!--  -->
      <v-hover v-slot="{ hover }" open-delay="200">
        <v-card
          :elevation="hover ? 16 : 2"
          :class="{ 'on-hover': hover }"
          class="ml-2 d-flex align-center flex-column "
          color="green"
          :height="height"
          width="5%"
        >
          <label class="justify-center pa- white--text ">Nuxt</label><br />
          <div>
            <v-img
              class="justify-center"
              src="/icons/nuxt-js.svg"
              width="25px"
            ></v-img>
          </div>

          <label class="justify-center pa-2 mt-auto">
            <nuxt-link
              class="white--text nuxtlink"
              target="_blank"
              :to="{
                path: 'blog/tags/nuxt'
              }"
              >More<v-icon small color="white"
                >mdi-arrow-top-right-thick</v-icon
              >
            </nuxt-link>
          </label>
        </v-card>
      </v-hover>
      <v-sheet class="pa-0 ma-0" max-width="93%">
        <v-slide-group multiple show-arrows class="pa-0 ma-0">
          <v-slide-item
            class="pa-0 ma-0"
            v-for="(item, indx) in nuxt.slice((i - 1) * 5, i * 5)"
            :key="indx"
          >
            <v-hover v-slot="{ hover }" open-delay="200">
              <v-card
                :elevation="hover ? 16 : 2"
                :class="{ 'on-hover': hover }"
                height="200px"
                width="450px"
                class="mr-1 ml-1"
              >
                <v-img
                  contain
                  v-if="item.image != null"
                  :src="item.image"
                  class="align-end"
                  aspect-ratio="1"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  :height="height"
                  width="100%"
                >
                  <nuxt-link
                    class="nuxtlink"
                    target="_blank"
                    :to="{
                      path: 'blog/' + item.slug
                    }"
                  >
                    <v-card-title
                      color="blue"
                      class="fs-1 white--text pa-0 ma-0 pl-1"
                    >
                      {{ item.title
                      }}<v-icon small color="white"
                        >mdi-arrow-top-right-thick</v-icon
                      >
                    </v-card-title>
                  </nuxt-link>
                </v-img>

                <v-img
                  v-else
                  contain
                  width="100%"
                  class="white--text align-end"
                  :height="height"
                  aspect-ratio="1"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  src="/images/default.jpg"
                >
                  <nuxt-link
                    class="nuxtlink"
                    target="_blank"
                    :to="{
                      path: 'blog/' + item.slug
                    }"
                  >
                    <v-card-title class="fs-1 white--text pa-0 ma-0 pl-1"
                      >{{ item.title
                      }}<v-icon small color="white"
                        >mdi-arrow-top-right-thick</v-icon
                      ></v-card-title
                    >
                  </nuxt-link>
                </v-img>
              </v-card>
            </v-hover>
          </v-slide-item>
        </v-slide-group></v-sheet
      >
    </v-row>

    <v-row
      class="hidden-md-and-up"
      v-for="(i, ind) in Math.ceil(nuxt.length / 5)"
      :key="ind"
    >
      <v-col xs="12" sm="12" md="12" lg="4" xl="4" cols="12">
        <v-hover v-slot="{ hover }" open-delay="200">
          <v-card
            :elevation="hover ? 16 : 2"
            :class="{ 'on-hover': hover }"
            color="green"
            class="d-flex align-center flex-column"
          >
            <label class="white--text pt-2 ma-1">Nuxt</label><br />
            <v-img src="/icons/nuxt-js.svg" width="25px"></v-img>
            <label class="justify-center pa-2 mt-auto">
              <nuxt-link
                class="white--text nuxtlink"
                target="_blank"
                :to="{
                  path: 'blog/tags/nuxt'
                }"
                >More<v-icon small color="white"
                  >mdi-arrow-top-right-thick</v-icon
                >
              </nuxt-link>
            </label>
          </v-card>
        </v-hover>
      </v-col>

      <v-col
        xs="12"
        sm="12"
        md="12"
        lg="4"
        xl="4"
        cols="12"
        v-for="(item, indx) in nuxt.slice((i - 1) * 5, i * 5)"
        :key="indx"
      >
        <v-card :key="indx" class="mr-1 ml-1">
          <v-img
            contain
            v-if="item.image != null"
            :src="item.image"
            class="align-end"
            aspect-ratio="2.5"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          >
            <nuxt-link
              class="nuxtlink"
              target="_blank"
              :to="{
                path: 'blog/' + item.slug
              }"
            >
              <v-card-title color="blue" class="fs-1 white--text pa-0 ma-0 pl-1"
                >{{ item.title
                }}<v-icon small color="white"
                  >mdi-arrow-top-right-thick</v-icon
                ></v-card-title
              >
            </nuxt-link>
          </v-img>
          <v-img
            contain
            v-else
            class="white--text align-end"
            aspect-ratio="2.3"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            src="/images/default.jpg"
          >
            <nuxt-link
              class="nuxtlink"
              target="_blank"
              :to="{
                path: 'blog/' + item.slug
              }"
            >
              <v-card-title class="fs-1 white--text pa-0 ma-0 pl-1"
                >{{ item.title
                }}<v-icon small color="white"
                  >mdi-arrow-top-right-thick</v-icon
                ></v-card-title
              >
            </nuxt-link>
          </v-img>
        </v-card>
      </v-col>
    </v-row>

    <!-- Nuxt -->
    <!-- Laravel -->
    <v-row
      v-if="load_laravel == false"
      v-for="(i, ind) in Math.ceil(laravel.length / 5)"
      :key="ind + 30"
      class="mt-4 pt-4 hidden-sm-and-down"
    >
      <v-hover v-slot="{ hover }" open-delay="200">
        <v-card
          :elevation="hover ? 16 : 2"
          :class="{ 'on-hover': hover }"
          class="ml-2 d-flex align-center flex-column"
          color="orange lighten-2"
          :height="height"
          width="5%"
        >
          <label class="justify-center pa- white--text ">Laravel</label>
          <br />
          <div>
            <v-img
              class="justify-center"
              src="/icons/laravel.svg"
              width="25px"
            ></v-img
            ><br />
          </div>
          <label class="justify-center pa-2 mt-auto">
            <nuxt-link
              class="white--text nuxtlink"
              target="_blank"
              :to="{
                path: 'blog/tags/Laravel'
              }"
              >More<v-icon small color="white"
                >mdi-arrow-top-right-thick</v-icon
              >
            </nuxt-link>
          </label>
        </v-card>
      </v-hover>
      <v-sheet class="pa-0 ma-0" max-width="93%">
        <v-slide-group multiple show-arrows class="pa-0 ma-0">
          <v-slide-item
            class="pa-0 ma-0"
            v-for="(item, indx) in laravel.slice((i - 1) * 5, i * 5)"
            :key="indx"
          >
            <v-hover v-slot="{ hover }" open-delay="200">
              <v-card
                :elevation="hover ? 16 : 2"
                :class="{ 'on-hover': hover }"
                height="200px"
                width="450px"
                class="mr-1 ml-1"
              >
                <v-img
                  contain
                  v-if="item.image != null"
                  :src="item.image"
                  class="align-end"
                  aspect-ratio="1"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  :height="height"
                  width="100%"
                >
                  <nuxt-link
                    class="nuxtlink"
                    target="_blank"
                    :to="{
                      path: 'blog/' + item.slug
                    }"
                  >
                    <v-card-title
                      color="blue"
                      class="fs-1 white--text pa-0 ma-0 pl-1"
                    >
                      {{ item.title
                      }}<v-icon small color="white"
                        >mdi-arrow-top-right-thick</v-icon
                      ></v-card-title
                    >
                  </nuxt-link>
                </v-img>

                <v-img
                  v-else
                  contain
                  width="100%"
                  class="white--text align-end"
                  :height="height"
                  aspect-ratio="1"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  src="/images/default.jpg"
                >
                  <nuxt-link
                    class="nuxtlink"
                    target="_blank"
                    :to="{
                      path: 'blog/' + item.slug
                    }"
                  >
                    <v-card-title class="fs-1 white--text pa-0 ma-0 pl-1">
                      {{ item.title
                      }}<v-icon small color="white"
                        >mdi-arrow-top-right-thick</v-icon
                      ></v-card-title
                    >
                  </nuxt-link>
                </v-img>
              </v-card>
            </v-hover>
          </v-slide-item>
        </v-slide-group></v-sheet
      >
    </v-row>

    <v-row
      v-if="load_laravel == false"
      class="hidden-md-and-up"
      v-for="(i, ind) in Math.ceil(laravel.length / 5)"
      :key="ind + 40"
    >
      <v-col xs="12" sm="12" md="12" lg="4" xl="4" cols="12">
        <v-hover v-slot="{ hover }" open-delay="200">
          <v-card
            :elevation="hover ? 16 : 2"
            :class="{ 'on-hover': hover }"
            color="orange lighten-2"
            class="d-flex align-center flex-column"
          >
            <label class="white--text pt-2 ma-1">Laravel</label>
            <br />
            <v-img src="/icons/laravel.svg" width="25px"></v-img>
            <label class="justify-center pa-2 mt-auto">
              <nuxt-link
                class="white--text nuxtlink"
                target="_blank"
                :to="{
                  path: 'blog/tags/Laravel'
                }"
                >More<v-icon small color="white"
                  >mdi-arrow-top-right-thick</v-icon
                >
              </nuxt-link>
            </label>
          </v-card>
        </v-hover>
      </v-col>

      <v-col
        xs="12"
        sm="12"
        md="12"
        lg="4"
        xl="4"
        cols="12"
        v-for="(item, indx) in laravel.slice((i - 1) * 5, i * 5)"
        :key="indx"
      >
        <v-hover v-slot="{ hover }" open-delay="200">
          <v-card
            :key="indx"
            class="mr-1 ml-1"
            :elevation="hover ? 16 : 2"
            :class="{ 'on-hover': hover }"
          >
            <v-img
              contain
              v-if="item.image != null"
              :src="item.image"
              class="align-end"
              aspect-ratio="2.5"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            >
              <nuxt-link
                class="nuxtlink"
                target="_blank"
                :to="{
                  path: 'blog/' + item.slug
                }"
              >
                <v-card-title
                  color="blue"
                  class="fs-1 white--text pa-0 ma-0 pl-1"
                >
                  {{ item.title
                  }}<v-icon small color="white"
                    >mdi-arrow-top-right-thick</v-icon
                  ></v-card-title
                >
              </nuxt-link>
            </v-img>
            <v-img
              contain
              v-else
              class="white--text align-end"
              aspect-ratio="2.3"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              src="/images/default.jpg"
            >
              <nuxt-link
                class="nuxtlink"
                target="_blank"
                :to="{
                  path: 'blog/' + item.slug
                }"
              >
                <v-card-title class="fs-1 white--text pa-0 ma-0 pl-1">
                  {{ item.title
                  }}<v-icon small color="white"
                    >mdi-arrow-top-right-thick</v-icon
                  ></v-card-title
                >
              </nuxt-link>
            </v-img>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
    <!-- Laravel -->
    <!-- Vue -->
    <v-row
      v-if="load_vue == false"
      v-for="(i, ind) in Math.ceil(vue.length / 5)"
      :key="ind + 30"
      class="mt-4 pt-4 hidden-sm-and-down"
    >
      <v-hover v-slot="{ hover }" open-delay="200">
        <v-card
          :elevation="hover ? 16 : 2"
          :class="{ 'on-hover': hover }"
          class="ml-2 d-flex align-center flex-column"
          color="green"
          :height="height"
          width="5%"
        >
          <label class="justify-center pa- white--text ">Vue</label><br />
          <div>
            <v-img
              class="justify-center"
              src="/icons/vue-js.svg"
              width="25px"
            ></v-img>
          </div>
          <label class="justify-center pa-2 mt-auto">
            <nuxt-link
              class="white--text nuxtlink"
              target="_blank"
              :to="{
                path: 'blog/tags/vue3'
              }"
              >More<v-icon small color="white"
                >mdi-arrow-top-right-thick</v-icon
              >
            </nuxt-link>
          </label>
        </v-card>
      </v-hover>
      <v-sheet class="pa-0 ma-0" max-width="93%">
        <v-slide-group multiple show-arrows class="pa-0 ma-0">
          <v-slide-item
            class="pa-0 ma-0"
            v-for="(item, indx) in vue.slice((i - 1) * 5, i * 5)"
            :key="indx"
          >
            <v-hover v-slot="{ hover }" open-delay="200">
              <v-card
                :elevation="hover ? 16 : 2"
                :class="{ 'on-hover': hover }"
                height="200px"
                width="450px"
                class="mr-1 ml-1"
              >
                <v-img
                  contain
                  v-if="item.image != null"
                  :src="item.image"
                  class="align-end"
                  aspect-ratio="1"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  :height="height"
                  width="100%"
                >
                  <nuxt-link
                    class="nuxtlink"
                    target="_blank"
                    :to="{
                      path: 'blog/' + item.slug
                    }"
                  >
                    <v-card-title
                      color="blue"
                      class="fs-1 white--text pa-0 ma-0 pl-1"
                    >
                      {{ item.title
                      }}<v-icon small color="white"
                        >mdi-arrow-top-right-thick</v-icon
                      ></v-card-title
                    >
                  </nuxt-link>
                </v-img>

                <v-img
                  v-else
                  contain
                  width="100%"
                  class="white--text align-end"
                  :height="height"
                  aspect-ratio="1"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  src="/images/default.jpg"
                >
                  <nuxt-link
                    class="nuxtlink"
                    target="_blank"
                    :to="{
                      path: 'blog/' + item.slug
                    }"
                  >
                    <v-card-title class="fs-1 white--text pa-0 ma-0 pl-1">
                      {{ item.title
                      }}<v-icon small color="white"
                        >mdi-arrow-top-right-thick</v-icon
                      ></v-card-title
                    >
                  </nuxt-link>
                </v-img>
              </v-card>
            </v-hover>
          </v-slide-item>
        </v-slide-group></v-sheet
      >
    </v-row>

    <v-row
      v-if="load_vue == false"
      class="hidden-md-and-up"
      v-for="(i, ind) in Math.ceil(vue.length / 5)"
      :key="ind + 40"
    >
      <v-col xs="12" sm="12" md="12" lg="4" xl="4" cols="12">
        <v-hover v-slot="{ hover }" open-delay="200">
          <v-card
            :elevation="hover ? 16 : 2"
            :class="{ 'on-hover': hover }"
            color="green"
            class="d-flex align-center flex-column"
          >
            <label class="white--text pt-2 ma-1">Vue</label><br />
            <v-img src="/icons/vue-js.svg" width="25px"></v-img>
            <label class="justify-center pa-2 mt-auto">
              <nuxt-link
                class="white--text nuxtlink"
                target="_blank"
                :to="{
                  path: 'blog/tags/vue3'
                }"
                >More<v-icon small color="white"
                  >mdi-arrow-top-right-thick</v-icon
                >
              </nuxt-link>
            </label>
          </v-card>
        </v-hover>
      </v-col>

      <v-col
        xs="12"
        sm="12"
        md="12"
        lg="4"
        xl="4"
        cols="12"
        v-for="(item, indx) in vue.slice((i - 1) * 5, i * 5)"
        :key="indx"
      >
        <v-card :key="indx" class="mr-1 ml-1">
          <v-img
            contain
            v-if="item.image != null"
            :src="item.image"
            class="align-end"
            aspect-ratio="2.5"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          >
            <nuxt-link
              class="nuxtlink"
              target="_blank"
              :to="{
                path: 'blog/' + item.slug
              }"
            >
              <v-card-title
                color="blue"
                class="fs-1 white--text pa-0 ma-0 pl-1"
              >
                {{ item.title
                }}<v-icon small color="white"
                  >mdi-arrow-top-right-thick</v-icon
                ></v-card-title
              >
            </nuxt-link>
          </v-img>
          <v-img
            contain
            v-else
            class="white--text align-end"
            aspect-ratio="2.3"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            src="/images/default.jpg"
          >
            <nuxt-link
              class="nuxtlink"
              target="_blank"
              :to="{
                path: 'blog/' + item.slug
              }"
            >
              <v-card-title class="fs-1 white--text pa-0 ma-0 pl-1">
                {{ item.title
                }}<v-icon small color="white"
                  >mdi-arrow-top-right-thick</v-icon
                ></v-card-title
              >
            </nuxt-link>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
    <!-- Vue -->
  </v-container>
</template>
<script>
export default {
  data: () => ({
    load_component: true,
    nuxt: [],
    laravel: [],
    vue: [],
    load_nuxt: false,
    load_laravel: false,
    load_vue: false,
    height: '200px'
  }),
  async fetch() {
    this.load_component = true
    this.load_nuxt = true
    await this.$axios.$get('/sanctum/csrf-cookie')
    const nuxt = await this.$axios.$get(`api/blog/page/1/item/5/tags/nuxt`)
    this.load_nuxt = false
    this.nuxt = nuxt.data

    this.load_laravel = true
    await this.$axios.$get('/sanctum/csrf-cookie')
    const laravel = await this.$axios.$get(
      `api/blog/page/1/item/5/tags/Laravel`
    )
    this.load_laravel = false
    this.laravel = laravel.data

    this.load_vue = true
    await this.$axios.$get('/sanctum/csrf-cookie')
    const vue = await this.$axios.$get(`api/blog/page/1/item/5/tags/vue3`)
    this.load_vue = false
    this.vue = vue.data
    this.load_component = false
  }
}
</script>
<style scoped>
.nuxtlink {
  text-decoration: none !important;
}

.hr-green {
  border: 3px solid green;
}

.v-card {
  /* transition: opacity 0.4s ease-in-out; */
}

.v-card:not(.on-hover) {
  /* opacity: 0.6; */
}

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>
