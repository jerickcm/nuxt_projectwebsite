<template>
  <v-container class="mr-0 pr-0 tag-border">
    <v-row>
      <v-col
        xs="12"
        sm="12"
        md="12"
        lg="12"
        xl="12"
        cols="12"
        class="mb-0 pb-0 mt-0 pt-0"
      >
        <v-card flat class="ma-0 pa-0">
          <v-card-title class="mb-0 pb-0 ml-0 pl-0">
            <nuxt-link to="/blog">
              <h3 class="ma-0 mt-0 pt-0 blue--text text--darken-5">
                Related Blogs
              </h3>
            </nuxt-link>
          </v-card-title>

          <v-list flat class="ma-2 pa-2 pl-0 ml-0">
            <v-list-item-group mandatory>
              <v-hover
                v-slot="{ hover }"
                open-delay="200"
                v-for="(item, indx) in related_blog"
                :key="indx"
              >
                <v-list-item
                  class=" pa-1 ma-1 bleft rr"
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
                        style="white-space: pre-line!important;"
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
  props: ['related_blog']
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
.bleft {
  border-left: 0.3rem solid rgb(27, 5, 151);
}
.bleft:hover {
  border-left: 0.3rem solid black;
}
.rr {
  background-color: #add8e6;
}
.rr:hover {
  background-color: rgb(116, 192, 243);
}
</style>
