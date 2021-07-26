<template>
  <v-container fluid class="tag-border">
    <v-row>
      <v-col class="ml-0 pl-0  mb-0 pb-0">
        <nuxt-link to="/blog">
          <h2 class="ma-0 mt-0 pt-0 blue--text text--darken-5">
            {{ title }}
          </h2>
        </nuxt-link>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="ml-0 pl-0 mt-0 pt-0">
        <v-card flat class="mx-auto" max-width="400">
          <v-list flat>
            <v-list-item-group mandatory>
              <v-hover
                v-slot="{ hover }"
                open-delay="200"
                v-for="(item, indx) in blogs_in_random"
                :key="indx"
              >
                <v-list-item
                  class=" pa-1 ma-1 cover back"
                  :class="hover ? '' : ''"
                >
                  <!-- two-line -->
                  <v-list-item-content
                    dark
                    :elevation="hover ? 1 : 2"
                    :class="{ 'on-hover': hover }"
                    :link="item.slug"
                  >
                    <nuxt-link
                      :class="hover ? 'white--text' : 'black--text'"
                      style="text-decoration:none"
                      :to="{
                        path: '/blog/' + item.slug
                      }"
                    >
                      <!-- v-text="" -->
                      <v-list-item-title
                        class="font-ptsans"
                        style="    white-space: pre-line!important;"
                      >
                        <span>{{ item['title'] }} </span></v-list-item-title
                      >
                    </nuxt-link>
                  </v-list-item-content>
                </v-list-item>
              </v-hover>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  props: ['blogs_in_random', 'title'],
  data: () => ({ model: 11 }),
  async mounted() {}
}
</script>
<style scoped>
.dont-break-out {
  /* These are technically the same, but use both */
  overflow-wrap: break-word;
  word-wrap: break-word;

  -ms-word-break: break-all;
  /* This is the dangerous one in WebKit, as it breaks things wherever */
  word-break: break-all;
  /* Instead use this non-standard one: */
  word-break: break-word;

  /* Adds a hyphen where the word breaks, if supported (No Blink) */
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
}
.font-lulu {
  font-family: 'Lulu', sans-serif;
}
.font-halimun {
  font-family: 'Halimun', sans-serif;
}

.font-barlowreg {
  font-family: 'Barlow-Regular', sans-serif;
}

.title1 {
  text-decoration: none;
}
.v-application a {
  color: rgb(66, 77, 238);
  text-decoration: none;
}

.adj-title {
  min-height: 2rem;
  line-height: 1rem;
  margin: 0px;
  padding: 0px;
}

.hr-blue {
  border: 3px solid blue;
}
.hr-red {
  border: 3px solid red;
}
.hr-orange {
  border: 3px solid orange;
}
.hr-black {
  border: 3px solid black;
}
/* .tag-border {
  border-right: 0.4rem solid orange;
  border-top: 0.4rem solid orange;
} */
.tempoup {
  transition: transform 250ms;
}

.tempoup:hover {
  transform: translateY(-10px);
}
.cover {
  border-left: 0.3rem solid green;
}
.cover:hover {
  border-left: 0.3rem solid black;
}
.back {
  background-color: #add8e6;
}
.back:hover {
  background-color: green;
}
</style>
