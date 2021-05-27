<template>
  <v-container fluid class="pa-0 ma-0 ">
    <v-row class="">

      <v-col cols="12" sm="12" md="12" class="pa-0">
        <v-carousel
          cycle
          height="400"
          hide-delimiter-background
          show-arrows-on-hover
        >
          <template v-slot:prev="{ on, attrs }">
            <v-btn color="success" v-bind="attrs" v-on="on"
              >Previous slide</v-btn
            >
          </template>
          <template v-slot:next="{ on, attrs }">
            <v-btn color="info" v-bind="attrs" v-on="on">Next slide</v-btn>
          </template>
          <v-carousel-item v-for="(slide, i) in slides" :key="i">
            <v-sheet :color="colors[i]" height="100%">
              <v-row class="fill-height" align="center" justify="center">

                <v-img  src="/images/about.jpg"   > <v-sheet color="red lighten-2"  class="dark--text text-h1 ma-10 pa-10"><strong>About Us</strong></v-sheet> </v-img>
                <!-- <div class="display-3">{{ slide }} Slide</div> -->

              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
    <v-row fluid class="blue mt-0">
      <v-col justify="center" align="center" class="blue">
        <v-row justify="center" align="center" class="pt-4">
          <v-col justify="center" align="center">
            <h3>Our Services</h3>
          </v-col>
        </v-row>

        <v-row justify="center" align="center" class="lg-5">
          <v-col cols="8" sm="2">
            <ul class="clean">
              <li class="white--text">
                <b>Branding</b>
              </li>
              <li class="dark--text">
                &nbsp;
              </li>
              <li class="dark--text">
                Naming
              </li>
              <li class="dark--text">
                Brand Creation
              </li>
              <li class="dark--text">
                Logo Development
              </li>
              <li class="dark--text">
                &nbsp;
              </li>
              <li class="dark--text">
                &nbsp;
              </li>
            </ul>
          </v-col>
          <v-col>
            <ul class="clean">
              <li class="white--text">
                <strong>Digital</strong>
              </li>
              <li class="dark--text">
                &nbsp;
              </li>
              <li class="dark--text">
                Web Design & Development
              </li>
              <li class="dark--text">
                Application Development
              </li>
              <li class="dark--text">
                Mobile Application Development
              </li>
              <li class="dark--text">
                Content Management System
              </li>
              <li class="dark--text">
                &nbsp;
              </li>
            </ul>
          </v-col>
          <v-col>
            <ul class="clean">
              <li class="white--text">
                <strong>Print</strong>
              </li>
              <li class="dark--text">
                &nbsp;
              </li>
              <li class="dark--text">
                Package Design
              </li>
              <li class="dark--text">
                Brochures
              </li>
              <li class="dark--text">
                Posters
              </li>
              <li class="dark--text">
                &nbsp;
              </li>
              <li class="dark--text">
                &nbsp;
              </li>
            </ul>
          </v-col>
          <v-col>
            <ul class="clean">
              <li class="white--text">
                <strong>Strategy</strong>
              </li>
              <li class="dark--text">
                &nbsp;
              </li>
              <li class="dark--text">
                Brand Analysis
              </li>
              <li class="dark--text">
                Focus Group
              </li>
              <li class="dark--text">
                Web Analytics
              </li>
              <li class="dark--text">
                Search Engine Optimization
              </li>
              <li class="dark--text">
                &nbsp;
              </li>
            </ul>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row justify="center" align="center" class="lightgray">
      <v-col justify="center" align="center">
        <v-row justify="center" align="center">
          <v-col justify="center" align="center" class="pt-10">
            <h3>Some of our Clients</h3>
          </v-col>
        </v-row>
        <v-row justify="center" align="center">
          <v-col cols="8" sm="2">
            <v-img src="/images/jollibee.png" contain max-height="100"></v-img>
          </v-col>
          <v-col cols="8" sm="2">
            <v-img src="/images/cocacola.jpg" contain max-height="100"></v-img>
          </v-col>
          <v-col cols="8" sm="2">
            <v-img
              src="/images/starbucksiconiclogo.png"
              contain
              max-height="100"
            ></v-img>
          </v-col>
          <v-col cols="8" sm="2">
            <v-img src="/images/mcdo.png" contain max-height="100"></v-img>
          </v-col>
          <v-col cols="8" sm="2">
            <v-img src="/images/nike.png" contain max-height="100"></v-img>
          </v-col>
        </v-row>

        <v-row justify="center" align="center"> </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  auth: false,

  data() {
    return {
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4"
      ],
      slides: ["First"] //, "Second", "Third", "Fourth", "Fifth"
    };
  },
  computed: {}
};
</script>
<style scoped>
ul.clean {
  list-style: none !important;
  list-style-type: none !important;
}
</style>
