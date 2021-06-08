export const state = () => ({
  RequestPosts: [],
  LoadingStatus: false,
  data: [],
  increment: 1
})

const getters = {
  GetPosts: state => state.RequestPosts,
  GetIncrement: state => state.increment
}
const actions = {
  async fetchPosts({ commit }, page) {
    // console.log(state.LoadingStatus)
    // console.log('test')
    // console.log(getters.GetIncrement)
    commit('LoadingStatus', true)

    const response = await this.$axios.$get(`api/post/list/${page}`)

    commit('LoadingStatus', false)

    let data = [],
      increment = 0
    for (const [key, value] of Object.entries(response.data)) {
      increment = increment + 1

      data.push({
        name: value.name,
        id: value.id,
        slug: value.slug,
        title: value.title,
        content: value.content,
        created_at: value.created_at,
        human_date: value.human_date,
        image: value.image,
        increment: increment
      })
    }
    console.log(data)
    commit('setRequestPosts', data)
  }
}
const mutations = {
  LoadingStatus: (state, newLoadingStatus) =>
    (state.LoadingStatus = newLoadingStatus),
  setRequestPosts: (state, data) => (state.RequestPosts = data)
  // console.log(data)

  // console.log(state.RequestPosts)
  // console.log(state.RequestPosts)
}

export default {
  getters,
  actions,
  mutations
}
