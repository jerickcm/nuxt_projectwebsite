<template>
  <v-container fluid class="ma-0 pa-0 grey lighten-3">
    <v-row>
      <v-col xs="12" sm="12" lg="12" md="12" class="ma-0 pa-0">
        <v-sheet class="black lighten-5" elevation="2" min-height="10vh">
          <v-container>
            <v-row class="pt-5">
              <v-col cols="12" sm="12" lg="9" class="text-center"
                ><label
                  class="font-lulu white--text"
                  :class="{
                    'fs-1.1': $vuetify.breakpoint.smAndDown,
                    'fs-3': $vuetify.breakpoint.mdAndUp
                  }"
                  >JERICK C. MANGALUS</label
                >
              </v-col>
              <v-col cols="12" sm="12" lg="3" class="text-center mt-7"
                ><label
                  class="text-right white--text"
                  :class="{
                    'fs-0-5': $vuetify.breakpoint.smAndDown,
                    'fs-1-0': $vuetify.breakpoint.mdAndUp
                  }"
                  >[ Technology R&D ]
                </label>
              </v-col>
            </v-row>

            <v-row>
              <!-- <v-spacer /> -->

              <v-col class="col-md-6 offset-md-3 text-center">
                <div class="hidden-sm-and-down text-center">
                  <v-btn
                    plain
                    text
                    tile
                    rounded
                    class="black pa-1 ma-1 white--text"
                    v-for="link in links"
                    :key="link.label"
                  >
                    {{ link.label }}
                  </v-btn>
                </div>
                <v-card class="mx-auto hidden-md-and-up d-none" tile>
                  <v-list dense>
                    <v-list-item-group v-model="selectedItem" color="primary">
                      <v-list-item v-for="(item, i) in links" :key="i">
                        <v-list-item-content>
                          <v-list-item-title
                            v-text="item.label"
                          ></v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list-item-group>
                  </v-list>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row>
      <v-col xs="12" sm="12" lg="12" class="ma-0 pa-0">
        <v-sheet class="grey lighten-5 pa-1 ma-1" elevation="2">
          <v-container class="">
            <v-row no-gutters class="mt-5">
              <v-col cols="12" sm="12" lg="12">
                <v-layout justify-center align-center>
                  <v-avatar
                    :size="150"
                    class="text-center black"
                    v-if="$vuetify.breakpoint.smAndDown"
                  >
                    <v-img
                      class="text-center"
                      src="/images/cartoon-darken.jpg"
                    ></v-img>
                  </v-avatar>

                  <v-avatar :size="350" class="text-center black" v-else>
                    <v-img
                      class="text-center"
                      src="/images/cartoon-darken.jpg"
                    ></v-img>
                  </v-avatar> </v-layout
              ></v-col>
            </v-row>
            <v-row no-gutters class="mt-5">
              <v-col
                cols="12"
                sm="12"
                lg="12"
                class="font-avenir fs-1-4 text-center"
              >
                <!-- The darkness in programming is when you fix it you're happy,
                when you can fix it long enough you are frustrated. -->
              </v-col>
            </v-row>
          </v-container>
        </v-sheet>
      </v-col>
    </v-row>

    <v-row>
      <v-col xs="12" sm="12" lg="12" class="ma-0 pa-0">
        <v-sheet class="grey lighten-1" elevation="2" min-height="30vh">
          <v-container class="">
            <v-row no-gutters>
              <v-col cols="12" sm="12" lg="12" class="pa-1 ma-1">
                <p
                  class="fs-1-1 text-justify white--text fs-1-8 font-barlowreg"
                >
                  The inspiration of this website build is to expand my
                  knowledge base , in web development. Secondly I am planning to
                  retain this website in a public server earning from ads. Maybe
                  in my free time I could just update it with my newly learned
                  tricks in web deveopment. This website is running in frontend
                  Vue in a nuxt framework and backend is Laravel8. The time this
                  site is being developed is in the new release of PHP version
                  8. Also docker is in my list of research I am actually
                  surprised with laravel response to api is very slow and that
                  is because i am using windows file system that later i
                  discovered you need to be inside the linux filesystem because
                  I was running the backend in a linux container image. This
                  project is using docker in local and docker also in Google
                  Cloud Platform that is my dev-ops application. I am using
                  Laravel sail to build the containers connecting backend and
                  frontend I used Laravel Santum together with Nuxt auth next
                  node plugin. Along development I am learning a lot I advise
                  aldo for developer to do this during work from home. By the
                  way developing this site is during the pandemic it started in
                  March 20, 2020 here in the Philippines and at present covid-19
                  is still a threat to peoples lives. Even though their is
                  already a vaccine the production seems to still inadequate.
                </p>
              </v-col>
            </v-row>
          </v-container>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row>
      <v-col xs="12" sm="12" lg="12" class="ma-0 pa-0">
        <v-sheet class="white lighten-5" elevation="2" min-height="10vh">
          <v-container class="">
            <v-row>
              <v-col cols="12" sm="12" lg="12">
                <v-progress-linear
                  v-if="LoadingStatus"
                  color="blue accent-5"
                  indeterminate
                  rounded
                  height="6"
                ></v-progress-linear>
                <div
                  v-if="!LoadingStatus"
                  v-for="message in MessageOfTheDay"
                  :key="message.author"
                >
                  <p
                    for=""
                    class="text-center mt-5"
                    :class="{
                      'fs-1.1': $vuetify.breakpoint.smAndDown,
                      'fs-1.5': $vuetify.breakpoint.mdAndUp
                    }"
                  >
                    " {{ message.message }} " - {{ message.author }}
                  </p>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  loading: {
    color: 'orange',
    height: '5px'
  },
  middleware: 'auth',
  auth: false,
  head: () => ({
    title: 'Profile ',
    meta: [{ hid: 'Profile', name: 'Profile', content: 'Profile' }]
  }),
  data: () => ({
    selectedItem: 0,
    show: true,
    title: '',
    model: 6,
    rounded: ['0', 'sm', 'md', 'lg', 'xl', 'pill', 'circle'],
    links: []
  }),
  layout: 'default',
  methods: {
    ...mapActions('messageoftheday', ['fetchQuote'])
  },
  computed: {
    ...mapGetters('messageoftheday', ['MessageOfTheDay', 'LoadingStatus'])
  },
  async created() {},
  async mounted() {
    await this.$axios.$get('/sanctum/csrf-cookie')
    try {
      this.fetchQuote()
    } catch (error) {
      console.log(error)
    }
  }

  // transition: {
  //   afterLeave(el) {
  //     console.log('afterLeave', el)
  //     this.$nextTick(() => {
  //       this.$nuxt.$loading.start()
  //       setTimeout(() => this.$nuxt.$loading.finish(), 5000)
  //     })
  //   }
  // }
}
</script>
<style scoped>
.font-lulu {
  font-family: 'Lulu', sans-serif;
}
.font-halimun {
  font-family: 'Halimun', sans-serif;
}
/* .font-kalamreg {
  font-family: 'Kalam-Regular', sans-serif;
  line-height: 1.2;
} */
.font-barlowreg {
  font-family: 'Barlow-Regular', sans-serif;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
