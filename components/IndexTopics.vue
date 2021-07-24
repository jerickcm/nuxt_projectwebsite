<template>
  <v-container fluid class="tag-border">
    <v-row>
      <v-col class="ma-0 mt-0 pt-0">
        <h2 class="ma-0 mt-0 pt-0 green--text text--darken-5">
          Featured Topics
        </h2>
      </v-col>
    </v-row>
    <v-row v-if="load_nuxt">
      <v-col class="ma-0 mt-0 pt-0">
        <v-progress-linear
          color="blue accent-5"
          indeterminate
          rounded
          height="6"
        ></v-progress-linear>
      </v-col>
    </v-row>
    <Topic
      v-if="show_nuxt"
      :loader="load_nuxt"
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
    <v-row v-if="load_laravel">
      <v-col class="ma-0 mt-0 pt-0">
        <v-progress-linear
          color="blue accent-5"
          indeterminate
          rounded
          height="6"
        ></v-progress-linear>
      </v-col>
    </v-row>
    <Topic
      v-if="show_laravel"
      :loader="load_laravel"
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
    <v-row v-if="load_vue">
      <v-col class="ma-0 mt-0 pt-0">
        <v-progress-linear
          color="blue accent-5"
          indeterminate
          rounded
          height="6"
        ></v-progress-linear>
      </v-col>
    </v-row>
    <Topic
      v-if="show_vue"
      :loader="load_vue"
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
  props: [
    'nuxt',
    'laravel',
    'vue',
    'load_nuxt',
    'load_laravel',
    'load_vue',

    'show_nuxt',
    'show_laravel',
    'show_vue'
  ],
  data: () => ({
    height: '17vh',
    width: '100vh',
    slider_right: '90%',
    slider_left: '9%',
    load_component: true
  }),

  async mounted() {}
}
</script>
<style scoped>
.nuxtlink {
  text-decoration: none !important;
}

.hr-green {
  border: 3px solid green;
}

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}

.cover {
  object-fit: cover;
}
/* .tag-border {
  border-right: 0.4rem solid green;
  border-top: 0.4rem solid green;
} */
</style>
