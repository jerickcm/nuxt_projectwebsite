<template>
  <v-row class="mt-2 pt-2 hidden-sm-and-down">
    <v-col class="ml-0 pl-0  mb-0 pb-0">
      <v-sheet class="d-flex " v-if="loader == false">
        <v-hover
          v-slot="{ hover }"
          open-delay="200"
          class="ml-5 mr-3 d-flex align-center flex-column "
        >
          <v-card
            :elevation="hover ? 1 : 2"
            :class="{ 'on-hover': hover }"
            :color="color"
            :height="height"
            :width="slider_left"
            class="tempoup"
          >
            <label class="justify-center  white--text ">{{ title }}</label
            ><br />
            <div>
              <v-img
                class="justify-center"
                :src="`/icons/${image}`"
                width="25px"
              ></v-img>
            </div>

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

        <v-hover
          v-slot="{ hover }"
          open-delay="200"
          v-for="(item, indx) in data"
          :key="indx"
        >
          <v-card
            max-width="400"
            :elevation="hover ? 1 : 2"
            :class="{ 'on-hover': hover }"
            :height="height"
            :width="width"
            class="mx-auto mr-1 ml-1 tempoup"
          >
            <!-- width="100%" -->
            <!-- contain -->
            <v-img
              v-if="item.image != null"
              :src="item.image"
              class="align-end"
              aspect-ratio="1"
              gradient="to bottom, rgba(0,0,0,.0), rgba(0,0,0,.5)"
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
                  class="lh-1 fs-1 white--text pa-0 ma-0 pl-1 "
                >
                  {{ item.title
                  }}<v-icon small color="white"
                    >mdi-arrow-top-right-thick</v-icon
                  >
                </v-card-title>
              </nuxt-link>
            </v-img>
            <!-- width="100%" -->
            <!-- contain -->
            <v-img
              v-else
              class="white--text align-end"
              :height="height"
              aspect-ratio="1"
              gradient="to bottom, rgba(0,0,0,.0), rgba(0,0,0,.5)"
              src="/images/default.jpg"
            >
              <nuxt-link
                class="nuxtlink"
                target="_blank"
                :to="{
                  path: 'blog/' + item.slug
                }"
              >
                <v-card-title class="lh-1 fs-1 white--text pa-0 ma-0 pl-1"
                  >{{ item.title
                  }}<v-icon small color="white"
                    >mdi-arrow-top-right-thick</v-icon
                  ></v-card-title
                >
              </nuxt-link>
            </v-img>
          </v-card>
        </v-hover>
      </v-sheet>
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
    'color',
    'title',
    'loader'
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
.tempoup {
  transition: transform 250ms;
}

.tempoup:hover {
  transform: translateY(-10px);
}
</style>
