<template>
  <v-row class="hidden-md-and-up">
    <v-col xs="12" sm="12" md="12" lg="4" xl="4" cols="12">
      <v-hover v-slot="{ hover }" open-delay="200">
        <v-card
          :elevation="hover ? 16 : 2"
          :class="{ 'on-hover': hover }"
          :color="color"
          class="d-flex align-center flex-column"
        >
          <label class="white--text pt-2 ma-1">Nuxt</label><br />
          <v-img :src="`/icons/${image}`" width="25px"></v-img>
          <label class="justify-center pa-2 mt-auto">
            <nuxt-link
              class="white--text nuxtlink"
              target="_blank"
              :to="{
                path: 'blog/tags/' + tag
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
      v-for="(item, indx) in data"
      :key="indx"
    >
      <v-card class="mr-1 ml-1 cover">
        <v-img
          contain
          v-if="item.image != null"
          :src="item.image"
          class="align-end"
          aspect-ratio="2.5"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,255,0,.3)"
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
          v-else
          class="white--text align-end"
          aspect-ratio="2.3"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,255,0,.3)"
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
</template>
<script>
export default {
  props: [
    'data',
    'height',
    'width',
    'slider_right',
    'slider_left',
    'image',
    'tag',
    'color'
  ]
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
