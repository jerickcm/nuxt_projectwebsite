<template>
  <div class="container">
    <Search />
  </div>
</template>

<script>
export default {
  head: () => ({
    title: 'Search ',
    meta: [{ hid: 'Search', name: 'Search', content: 'Search' }]
  }),
  mounted() {
    // console.log(this.$route.query.s)
  },
  methods: {}
}
</script>
