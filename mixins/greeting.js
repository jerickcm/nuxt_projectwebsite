export const greetMixins = {
  async created() {

    console.log('[ -------------------------------- ]')
    console.log('[ -------------------------------- ]')
    console.log('[ -------------------------------- ]')
    console.log(
      '%c[ -- Hello from Project Website -- ]',
      'background: #FFF; color: #0000FF'
    )
    console.log('[ -------------------------------- ]')
    console.log('[ -------------------------------- ]')
    console.log('[ -------------------------------- ]')
    await this.$axios.$get('/sanctum/csrf-cookie')
  }
}
