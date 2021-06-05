<template>
  <!--  -->
  <v-container fluid class="ma-0 pa-0">
    <v-row>
      <v-col sm="12" lg="8" class="grey lighten-4 ma-0 pr-0 pt-4 pb-4 pl-4">
        <v-sheet class="grey lighten-5 pa-1 ma-1" elevation="2">
          <v-card class="pa-2 ma-2" elevation="4" min-height="20vh">
            <v-progress-linear
              v-if="LoadingStatus"
              color="blue accent-5"
              indeterminate
              rounded
              height="6"
            ></v-progress-linear>

            <v-card-text
              v-if="!LoadingStatus"
              v-for="message in MessageOfTheDay"
              :key="message.author"
            >
              <p
                for=""
                class="font-kalamreg"
                :class="{
                  'fs-1.1': $vuetify.breakpoint.smAndDown,
                  'fs-1-2': $vuetify.breakpoint.mdAndUp,
                }"
              >
                " {{ message.message }} " - {{ message.author }}
              </p>
            </v-card-text>
          </v-card>

          <v-card
            class="blue lighten-3 pa-2 ma-2"
            elevation="4"
            min-height="30vh"
          >
          </v-card>

          <v-card class="white pa-2 ma-2" elevation="4" min-height="30vh">
            <div id="example-2">
              <button @click="show = !show">Toggle show</button>
              <transition name="bounce">
                <p v-if="show">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris facilisis enim libero, at lacinia diam fermentum id.
                  Pellentesque habitant morbi tristique senectus et netus.
                </p>
              </transition>
            </div>
          </v-card>
          <v-card class="grey pa-2 ma-2" elevation="4" min-height="30vh">
          </v-card>
          <v-card
            class="black lighten-3 pa-2 ma-2"
            elevation="4"
            min-height="30vh"
          >
          </v-card>
        </v-sheet>
      </v-col>
      <v-col sm="12" lg="4" class="grey lighten-4 ma-0 pr-4 pt-4 pb-4 pl-0">
        <v-sheet class="grey lighten-5 pa-1 ma-1" elevation="2">
          <v-card class="pa-2 ma-2" elevation="4" min-height="20vh"></v-card>

          <v-card
            class="blue lighten-3 pa-2 ma-2"
            elevation="4"
            min-height="30vh"
          >
          </v-card>

          <v-card class="white pa-2 ma-2" elevation="4" min-height="30vh">
          </v-card>
          <v-card class="grey pa-2 ma-2" elevation="4" min-height="30vh">
          </v-card>
          <v-card
            class="black lighten-3 pa-2 ma-2"
            elevation="4"
            min-height="30vh"
          >
          </v-card>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { greetMixins } from '~/mixins/greeting.js'
import { mapGetters, mapActions } from 'vuex'

export default {
  data: () => ({
    show: true,
    title: '',
  }),

  layout: 'default',
  mixins: [greetMixins],
  methods: {
    ...mapActions('messageoftheday', ['fetchQuote']),
  },
  computed: {
    // LoadingStatus2(){
    //   return this.$store.state.messageoftheday.LoadingStatus
    // },
    ...mapGetters('messageoftheday', ['MessageOfTheDay', 'LoadingStatus']),
  },
  async created() {},
  mounted() {
    this.fetchQuote()
  },
}
</script>
<style scoped>
.font-lulu {
  font-family: 'Lulu', sans-serif;
}
.font-halimun {
  font-family: 'Halimun', sans-serif;
}
.font-kalamreg {
  font-family: 'Kalam-Regular', sans-serif;
  line-height: 1.2;
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
