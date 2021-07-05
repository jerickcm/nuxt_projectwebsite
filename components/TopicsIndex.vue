<template>
  <v-container fluid>
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
      <v-card
        class="ml-2 d-flex align-center flex-column"
        color="green"
        :height="height"
        width="5%"
      >
        <label class="justify-center pa- white--text ">Nuxt</label>
        <div>
          <v-img
            class="justify-center"
            src="/icons/nuxt-js.svg"
            width="25px"
          ></v-img>
        </div>
        <!-- style="text-decoration: none !important;" -->
        <label class="justify-center pa-2 mt-auto">
          <nuxt-link
            class="white--text nuxtlink"
            target="_blank"
            :to="{
              path: 'blog/tags/nuxt'
            }"
            >More
          </nuxt-link>
        </label>
      </v-card>
      <v-card
        width="18%"
        v-for="(item, indx) in nuxt.slice((i - 1) * 5, i * 5)"
        :key="indx"
        class="mr-1 ml-1"
      >
        <v-img
          contain
          v-if="item.image != null"
          :src="item.image"
          class="align-end"
          aspect-ratio="2.5"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          :height="height"
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
              >{{ item.title }}</v-card-title
            >
          </nuxt-link>
        </v-img>

        <v-img
          v-else
          contain
          class="white--text align-end"
          :height="height"
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
            <v-card-title
              class="fs-1 white--text pa-0 ma-0 pl-1"
              v-text="item.title"
            ></v-card-title>
          </nuxt-link>
        </v-img>
      </v-card>
    </v-row>

    <v-row
      class="hidden-md-and-up"
      v-for="(i, ind) in Math.ceil(nuxt.length / 5)"
      :key="ind"
    >
      <v-col xs="12" sm="12" md="12" lg="4" xl="4" cols="12">
        <v-card color="green" class="d-flex align-center flex-column">
          <label class="white--text pt-2 ma-1">Nuxt</label>
          <v-img src="/icons/nuxt-js.svg" width="25px"></v-img>
          <label class="justify-center pa-2 mt-auto">
            <nuxt-link
              class="white--text nuxtlink"
              target="_blank"
              :to="{
                path: 'blog/tags/nuxt'
              }"
              >More
            </nuxt-link>
          </label>
        </v-card>
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
            :height="height"
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
                v-text="item.title"
              ></v-card-title>
            </nuxt-link>
          </v-img>
          <v-img
            contain
            v-else
            class="white--text align-end"
            :height="height"
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
              <v-card-title
                class="fs-1 white--text pa-0 ma-0 pl-1"
                v-text="item.title"
              ></v-card-title>
            </nuxt-link>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
    <!-- Nuxt -->
    <!-- Laravel -->
    <v-row
      v-for="(i, ind) in Math.ceil(laravel.length / 5)"
      :key="ind + 30"
      class="mt-4 pt-4 hidden-sm-and-down"
    >
      <v-card
        class="ml-2 d-flex align-center flex-column"
        color="orange lighten-2"
        :height="height"
        width="5%"
      >
        <label class="justify-center pa- white--text ">Laravel</label>
        <div>
          <v-img
            class="justify-center"
            src="/icons/laravel.svg"
            width="25px"
          ></v-img>
        </div>
        <label class="justify-center pa-2 mt-auto">
          <nuxt-link
            class="white--text nuxtlink"
            target="_blank"
            :to="{
              path: 'blog/tags/Laravel'
            }"
            >More
          </nuxt-link>
        </label>
      </v-card>
      <v-card
        width="18%"
        v-for="(item, indx) in laravel.slice((i - 1) * 5, i * 5)"
        :key="indx"
        class="mr-1 ml-1"
      >
        <v-img
          contain
          v-if="item.image != null"
          :src="item.image"
          class="align-end"
          aspect-ratio="2.5"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          :height="height"
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
              >{{ item.title }}</v-card-title
            >
          </nuxt-link>
        </v-img>

        <v-img
          v-else
          contain
          class="white--text align-end"
          :height="height"
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
            <v-card-title
              class="fs-1 white--text pa-0 ma-0 pl-1"
              v-text="item.title"
            ></v-card-title>
          </nuxt-link>
        </v-img>
      </v-card>
    </v-row>

    <v-row
      class="hidden-md-and-up"
      v-for="(i, ind) in Math.ceil(laravel.length / 5)"
      :key="ind + 40"
    >
      <v-col xs="12" sm="12" md="12" lg="4" xl="4" cols="12">
        <v-card
          color="orange lighten-2"
          class="d-flex align-center flex-column"
        >
          <label class="white--text pt-2 ma-1">Laravel</label>
          <v-img src="/icons/laravel.svg" width="25px"></v-img>
          <label class="justify-center pa-2 mt-auto">
            <nuxt-link
              class="white--text nuxtlink"
              target="_blank"
              :to="{
                path: 'blog/tags/Laravel'
              }"
              >More
            </nuxt-link>
          </label>
        </v-card>
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
        <v-card :key="indx" class="mr-1 ml-1">
          <v-img
            contain
            v-if="item.image != null"
            :src="item.image"
            class="align-end"
            aspect-ratio="2.5"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            :height="height"
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
                v-text="item.title"
              ></v-card-title>
            </nuxt-link>
          </v-img>
          <v-img
            contain
            v-else
            class="white--text align-end"
            :height="height"
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
              <v-card-title
                class="fs-1 white--text pa-0 ma-0 pl-1"
                v-text="item.title"
              ></v-card-title>
            </nuxt-link>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
    <!-- Laravel -->
    <!-- Vue -->
    <v-row
      v-for="(i, ind) in Math.ceil(vue.length / 5)"
      :key="ind + 30"
      class="mt-4 pt-4 hidden-sm-and-down"
    >
      <v-card
        class="ml-2 d-flex align-center flex-column"
        color="green"
        :height="height"
        width="5%"
      >
        <label class="justify-center pa- white--text ">Vue</label>
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
            >More
          </nuxt-link>
        </label>
      </v-card>
      <v-card
        width="18%"
        v-for="(item, indx) in vue.slice((i - 1) * 5, i * 5)"
        :key="indx"
        class="mr-1 ml-1"
      >
        <v-img
          contain
          v-if="item.image != null"
          :src="item.image"
          class="align-end"
          aspect-ratio="2.5"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          :height="height"
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
              >{{ item.title }}</v-card-title
            >
          </nuxt-link>
        </v-img>

        <v-img
          contain
          v-else
          class="white--text align-end"
          :height="height"
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
            <v-card-title
              class="fs-1 white--text pa-0 ma-0 pl-1"
              v-text="item.title"
            ></v-card-title>
          </nuxt-link>
        </v-img>
      </v-card>
    </v-row>

    <v-row
      class="hidden-md-and-up"
      v-for="(i, ind) in Math.ceil(vue.length / 5)"
      :key="ind + 40"
    >
      <v-col xs="12" sm="12" md="12" lg="4" xl="4" cols="12">
        <v-card color="green" class="d-flex align-center flex-column">
          <label class="white--text pt-2 ma-1">Vue</label>
          <v-img src="/icons/vue-js.svg" width="25px"></v-img>
          <label class="justify-center pa-2 mt-auto">
            <nuxt-link
              class="white--text nuxtlink"
              target="_blank"
              :to="{
                path: 'blog/tags/vue3'
              }"
              >More
            </nuxt-link>
          </label>
        </v-card>
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
            :height="height"
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
                v-text="item.title"
              ></v-card-title>
            </nuxt-link>
          </v-img>
          <v-img
            contain
            v-else
            class="white--text align-end"
            :height="height"
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
              <v-card-title
                class="fs-1 white--text pa-0 ma-0 pl-1"
                v-text="item.title"
              ></v-card-title>
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
    nuxt: [],
    laravel: [],
    vue: [],
    height: '140px'
  }),
  async fetch() {
    await this.$axios.$get('/sanctum/csrf-cookie')
    const nuxt = await this.$axios.$get(`api/blog/page/1/item/5/tags/nuxt`)
    this.nuxt = nuxt.data

    await this.$axios.$get('/sanctum/csrf-cookie')
    const laravel = await this.$axios.$get(
      `api/blog/page/1/item/5/tags/Laravel`
    )
    this.laravel = laravel.data

    await this.$axios.$get('/sanctum/csrf-cookie')
    const vue = await this.$axios.$get(`api/blog/page/1/item/5/tags/vue3`)
    this.vue = vue.data
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
</style>
