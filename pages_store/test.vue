<template>
  <div class="pa-5 ma-5">
    <progress id="file" value="32" max="100"> 32% </progress>
    <div v-for="(object, index) in avengers" :key="index">
      <b>{{ object.name }} </b> and <b>{{ object.hero }}</b>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      avengers: [
        { name: 'Tony Stark', hero: 'Iron Man' },
        { name: 'Natasha Romanof', hero: 'Black Widow' },
        { name: 'Steve Rogers', hero: 'Captain America' },
        { name: 'Bruce Banner', hero: 'The Hulk' }
      ]
    }
  }
}
</script>
