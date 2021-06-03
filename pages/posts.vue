<template>
  <v-container fluid class="ma-0 pa-0">
    <v-row>
      <v-col lg="3" class="grey">

        </v-col>
      <v-col lg="6" class="">
        <PostCard />
      </v-col>
      <v-col lg="3" class="grey">
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import PostCard from "@/components/PostCard";
export default {
  data: () => ({
    loading: false
  }),
  mounted() {},
  inject: {
    theme: {
      default: { isDark: false }
    }
  },
  components: {},
  watch: {},

  methods: {}
};
</script>
<style scoped>
ul.clean {
  list-style: none !important;
  list-style-type: none !important;
}
</style>
