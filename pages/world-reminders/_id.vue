<template>
   <v-container fluid class="white">
    <v-row class="">
      <v-col ms="10" lg="10" >
        <WorldRemindersCard />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {

  auth: false,
  head () {
      return{
          title: 'World Reminders '+this.id,
          meta: [{ hid: 'World Reminders', name: 'World Reminders', content: 'World Reminders' }],
      }
  },
  data: () => ({
    loading: false,
  }),
  async created() {
  },
  computed:{
    id() {
      return this.$route.params.id
    }
  },
  mounted() {},
  components: {},
  watch: {},
  methods: {},
}
</script>
