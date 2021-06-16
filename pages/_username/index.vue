<template>
  <div>
    <h1>Event # {{id}}</h1>
  </div>
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
      return this.$route.params.username
    }
  },
  mounted() {},
  components: {},
  watch: {},
  methods: {},
}
</script>
