<template>
  <v-container fluid class="ma-0 pa-0">
    <v-row min-height="100vh">
      <v-col sm="12" lg="8" class="grey lighten-4 pa-4 ma-0">
        <v-card min-height="200vh" class="grey lighten-5 pa-0 ma-1 ">
          <v-card>
            {{ MessageOfTheDay }}
            <v-card-text> {{ Message }} - {{ Author }} </v-card-text>
          </v-card>
        </v-card>
      </v-col>
      <v-col sm="12" lg="4" class="grey lighten-4 pa-4 ma-0">
        <v-card min-height="200vh" class="grey lighten-5 pa-0">
          <v-sheet class="pa-2 ma-2 text-center" color="white" elevation="2">
            <label>Using vuex in Counters</label>
            <p>{{ this.$store.state.test.counter }}</p>
            <v-btn color="primary" v-on:click="add_one">Add 1</v-btn>
            <v-btn color="primary" v-on:click="remove_one">Remove 1</v-btn>
          </v-sheet>

          <v-sheet class="pa-2 ma-2 text-center" color="white" elevation="2">
            <label>Using vuex in Nuxt</label>
            <ul>
              <li v-for="todo in todos" :key="todo.text">
                <input
                  :checked="todo.done"
                  @change="toggle(todo)"
                  type="checkbox"
                />
                <span :class="{ done: todo.done }">{{ todo.text }}</span>
              </li>
              <li>
                <input
                  @keyup.enter="addTodo"
                  placeholder="What needs to be done?"
                />
              </li>
            </ul>
          </v-sheet>

          <v-sheet class="pa-2 ma-2 text-center" color="white" elevation="2">
            <label>Using vuex mapGetters and mapActions</label>
            <div>
              <v-text-field
                v-model="title"
                placeholder="Add Todo..."
              ></v-text-field>
              <!-- <input type="text"   /> -->

              <v-btn color="green" @click.prevent="onSubmit">Submit</v-btn>
            </div>
            <div v-for="todo in allTodos" :key="todo.id">
              <v-sheet class="text-left pa-1 ma-1 orange lighten-2">
                {{ todo.title }}
                <v-spacer></v-spacer>
                <v-btn @click="deleteTodos(todo.id)" color="primary"
                  >Delete</v-btn
                ></v-sheet
              >
            </div>

            <!-- {{ allTodos }} -->
          </v-sheet>

          <v-sheet class="pa-2 ma-2 text-center" color="white" elevation="2">
            <div v-for="test in myDatas" :key="test.id">
              {{ test.id }} - {{ test.title }}
            </div>
          </v-sheet>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import Vue from 'vue'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import { greetMixins } from '~/mixins/greeting.js'
import { mapMutations, mapGetters, mapActions } from 'vuex'

export default {
  data: () => ({
    title: ''
  }),
  layout: 'default',
  mixins: [greetMixins],
  methods: {
    //test1
    add_one() {
      this.$store.commit('test/increment')
    },
    remove_one() {
      this.$store.commit('test/decrement')
    },
    //test2
    addTodo(e) {
      this.$store.commit('todos/add', e.target.value)
      e.target.value = ''
    },

    ...mapMutations({
      toggle: 'todos/toggle'
    }),
    //test 3
    ...mapActions('users', ['fetchTodos', 'addTodos', 'deleteTodos']),
    onSubmit(e) {
      e.preventDefault()
      this.addTodos(this.title)
    },
    ...mapActions('messageoftheday', ['fetchQuote'])
  },
  computed: {
    //test2
    todos() {
      return this.$store.state.todos.list
    },
    //test3
    // ...mapGetters('users', ['allTodos']),
    ...mapGetters('users', ['myDatas', 'allTodos']),
    ...mapGetters('messageoftheday', ['Author', 'Message', 'MessageOfTheDay'])
  },
  created() {
    this.$axios.$get('/sanctum/csrf-cookie')
    this.fetchTodos('test')
    this.fetchQuote()
  },
  mounted() {}
}
</script>
<style scoped></style>
