<template>
  <div id="intro" style="text-align:center;">
    <h1>Date and Time: {{ timestamp }}</h1>
  </div>
</template>

<script>
export default {
  data: () => ({
    timestamp: ''
  }),
  computed() {},
  created() {
    setInterval(this.getNow, 500)
  },
  methods: {
    getNow: function() {
      const today = new Date()
      const date =
        today.getFullYear() +
        '-' +
        ('0' + (today.getMonth() + 1)).slice(-2) +
        '-' +
        today.getDate()

      const time =
        today.getHours() +
        ':' +
        ('0' + (today.getMinutes() + 1)).slice(-2) +
        ':' +
        ('0' + (today.getSeconds() + 1)).slice(-2)
      const dateTime = date + ' ' + time
      this.timestamp = dateTime
    }
  }
}
</script>
