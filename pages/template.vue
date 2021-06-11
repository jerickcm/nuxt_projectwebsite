<template>
  <v-container fluid class="ma-0 pa-0">
      <h1>Template page</h1>
  </v-container>
</template>


<script>

export default {
  head: () => ({
    title: 'Template ',
    meta:[
      { hid: 'Template', name: 'Template', content: 'Template' }
    ]
  }),
  data: () => ({
    title: ''
  }),
  layout: 'default',
  methods: {

  },
  computed: {
    // call (){
    //   //creates this.call with value = 1
    //   return 1;
    // }
  },
  created() {
    console.log('created');
  },
  mounted() {
    console.log('mounted');
  }
}
</script>
<style scoped></style>
