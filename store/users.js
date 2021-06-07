import axios from 'axios'
export const state = () => ({
  mydata: [
    { id: 1, title: 'Test 1' },
    { id: 2, title: 'Test 2' }
  ],
  todos: [
    // { id: 1, title: 'Title 1' },
    // { id: 2, title: 'Title 2' }
  ]
})

const getters = {
  allTodos: state => state.todos,
  myDatas: state => state.mydata
}
const actions = {
  async fetchTodos({ commit }, data) {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/todos'
    )
    commit('setTodos', response.data)
  },
  async addTodos({ commit }, title) {
    const response = await axios.post(
      'https://jsonplaceholder.typicode.com/todos',
      { title, completed: false }
    )

    // console.log('vuex')
    // console.log(title)
    // console.log(response.data)
    commit('newTodo', response.data)
  },
  async deleteTodos({ commit }, id) {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    // console.log(id)
    // console.log('removeTodo is called')
    // console.log(this.state.users.todos)
    // this.state.users.todos.splice(id, id)
    commit('removeTodo', id)
  }
}

const mutations = {
  setTodos: (state, datafromfetch) => (state.todos = datafromfetch),
  newTodo: (state, datafromfetch) => state.todos.unshift(datafromfetch),
  removeTodo: (state, id) =>
    (state.todos = state.todos.filter(todo => todo.id !== id))
}
export default {
  getters,
  actions,
  mutations
}
