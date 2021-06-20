<template>
  <div class="container">
    <p>About Page</p>
    <p>It should take 5 seconds for the loader to disappear</p>
    <p>
      It should take 5 seconds for the route to change after you
      <span class="link" @click="goToFinal">
        click here
      </span>
    </p>
  </div>
</template>

<script>
export default {
  // loading: false,
  asyncData() {
    return new Promise(resolve => {
      setTimeout(function() {
        resolve({})
        // this.$nuxt.$loading.finish()
      }, 3000)
    })
  },
  transition: {
    beforeEnter(el) {
      this.$nextTick(() => {
        this.$nuxt.$loading.start()
      })
    }
  },
  loading: {
    color: 'red',
    height: '10px'
  },
  created() {
    this.$nuxt.$loading.finish()
  },
  mounted() {
    // setTimeout(() => {
    //   this.$nuxt.$loading.start()
    //   // Extend loader for an additional 5s
    //   // this.$nuxt.$loading.finish()
    // }, 3000)
  },
  methods: {
    // goToFinal() {
    //   // Start loader immediately
    //   this.$nuxt.$loading.start()
    //   // Actually change route 5s later
    //   setTimeout(() => {
    //     this.$router.push('/final')
    //   }, 5000)
    // }
  }
}
</script>

<style scoped>
.link {
  cursor: pointer;
  text-decoration: underline;
}
.container {
  font-size: 20px;
  text-align: center;
  padding-top: 100px;
}
</style>
