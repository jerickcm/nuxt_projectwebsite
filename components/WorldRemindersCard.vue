<template>
  <v-sheet class="ma-0 pa-0">
    <v-row class="ma-0 pa-0">
      <v-col
        sm="12"
        md="8"
        lg="8"
        class="mb-0 pb-0 col-md-10 col-lg-10 offset-md-2 offset-lg-2"
      >
        <h1 class="fs-1-3">World Reminders</h1>
        <p>Anniversary of past events.</p>
      </v-col>
    </v-row>
    <v-row class="ma-0 pa-0">
      <v-col class="mb-0 pb-0 col-md-10 col-lg-10 offset-md-2 offset-lg-2">
        <v-container>
          <v-row
            color="blue"
            v-for="(i, ind) in Math.ceil(months.length / 6)"
            :key="ind"
          >
            <v-col
              color="red"
              md="2"
              lg="2"
              sm="2"
              xl="2"
              v-for="(item, indx) in months.slice((i - 1) * 6, i * 6)"
              :key="indx"
            >
              <v-btn
                width="6rem"
                class="ma-1 blue lighten-3 pa-1"
                :to="'/world-reminders/' + item.name"
                >{{ item.name }}</v-btn
              >
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
    <v-row v-for="(item, index) in content" :key="index" class="ma-0 pa-0">
      <v-col class="mb-0 pb-0 col-md-10 col-lg-10 offset-md-2 offset-lg-2">
        <div class="pt-2 mt-2">
          <hr />
          <div class="pt-2 mt-2">
            <p class="blue--text">{{ item.date }}</p>
            <h2>{{ item.title }}</h2>
            <h3>{{ item.anniversary }} year anniversary</h3>
            <br />

            <p>{{ item.subtitle }}</p>

            <img
              v-if="item.image"
              :src="item.image"
              height="250rem"
              style="object-position: center"
              alt=""
            />

            <p v-html="item.content"></p>
            <br />
            <strong
              ><p class="ellipsis">Author/Source : {{ item.author }}</p></strong
            >
          </div>
        </div>
      </v-col>
    </v-row>

    <v-row
      class="ma-0 pa-0"
      v-if="loading"
      v-for="index in 10"
      :key="index + `b`"
    >
      <v-col class="mb-0 pb-0 col-md-10 col-lg-10 offset-md-2 offset-lg-2">
        <v-skeleton-loader
          elevation="2"
          outlined
          shaped
          tile
          class="pa-2 ma-2"
          type="card"
        ></v-skeleton-loader>
      </v-col>
    </v-row>
    <v-row class="ma-0 pa-0" v-if="!(length == 10)">
      <v-col class="mb-0 pb-0 col-md-10 col-lg-10 offset-md-2 offset-lg-2">
        <div elevation="2" outlined shaped tile class="pa-2 ma-0">
          <label for="" class="grey--text">Nothing Follows</label>
        </div>
      </v-col>
    </v-row>
    <v-row class="ma-0 pa-0">
      <v-col class="mb-0 pb-0 col-md-10 col-lg-10 offset-md-2 offset-lg-2">
        <div>
          <v-btn
            class="white--text"
            @click="getnextarticle"
            :disabled="length == 10 ? false : true"
            :class="length == 10 ? 'green' : 'grey'"
          >
            Next Article
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-sheet>
</template>
<script>
export default {
  props: ['content', 'length', 'loading'],
  data: () => ({
    months: [
      { name: 'January' },
      { name: 'February' },
      { name: 'March' },
      { name: 'April' },
      { name: 'May' },
      { name: 'June' },
      { name: 'July' },
      { name: 'August' },
      { name: 'September' },
      { name: 'October' },
      { name: 'November' },
      { name: 'December' }
    ],
    page: 2
  }),
  async asyncData() {},
  async created() {},
  mounted() {
    // this.getposts()
  },
  computed: {
    link(id) {
      return '/world-reminders/' + id
    }
  },
  methods: {
    getnextarticle() {
      this.$emit('next-article')
    }
  }
}
</script>
<style scoped>
.transparent {
  background-color: blue !important;
  opacity: 0.25;
  border-color: transparent !important;
}
.nuxtlink {
  text-decoration: none;
}
</style>
