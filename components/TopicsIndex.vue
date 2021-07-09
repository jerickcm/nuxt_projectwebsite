<template>
  <v-container fluid v-if="load_component == false">
    <v-row>
      <v-col class=" mb-0 pb-0">
        <hr color="green" class="hr-green" />
      </v-col>
    </v-row>

    <v-row>
      <v-col class="ma-0 mt-0 pt-0">
        <h2 class="ma-0 mt-0 pt-0 green--text text--darken-5">
          Featured Topics
        </h2>
      </v-col>
    </v-row>

    <Topic
      :data="nuxt"
      :height="height"
      :width="width"
      :slider_right="slider_right"
      :slider_left="slider_left"
      image="nuxt-js.svg"
      tag="nuxt"
      color="green"
      title="Nuxt"
    />

    <Topic
      :data="laravel"
      :height="height"
      :width="width"
      :slider_right="slider_right"
      :slider_left="slider_left"
      image="laravel.svg"
      tag="Laravel"
      color="orange"
      title="Laravel"
    />

    <Topic
      :data="vue"
      :height="height"
      :width="width"
      :slider_right="slider_right"
      :slider_left="slider_left"
      image="vue-js.svg"
      tag="vue3"
      color="green"
      title="Vue"
    />

    <TopicM
      :data="nuxt"
      :height="height"
      :width="width"
      :slider_right="slider_right"
      :slider_left="slider_left"
      image="nuxt-js.svg"
      tag="nuxt"
      color="green"
    />

    <TopicM
      :data="laravel"
      :height="height"
      :width="width"
      :slider_right="slider_right"
      :slider_left="slider_left"
      image="laravel.svg"
      tag="Laravel"
      color="orange"
    />

    <TopicM
      :data="vue"
      :height="height"
      :width="width"
      :slider_right="slider_right"
      :slider_left="slider_left"
      image="vue-js.svg"
      tag="vue3"
      color="green"
    />
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
    height: '17vh',
    width: '100vh',
    slider_right: '90%',
    slider_left: '9%'
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

.cover {
  object-fit: cover;
}
</style>
