export const state = () => ({
  MessageOfTheDay: [],
  LoadingStatus:false
})

const getters = {
  MessageOfTheDay: state => state.MessageOfTheDay,
  LoadingStatus: state => state.LoadingStatus,
}
const actions = {
  async fetchQuote({ commit }) {
    commit('LoadingStatus', true)
    const response = await this.$axios.$get('/api/msgoftheday')
    commit('setQuote', response.data)
    commit('LoadingStatus', false)
  }

}
const mutations = {
  LoadingStatus:(state, newLoadingStatus)=> (state.LoadingStatus = newLoadingStatus),
  setQuote: (state, datafromfetch) => (state.MessageOfTheDay = datafromfetch),
}

export default {
  state,
  getters,
  actions,
  mutations
}
