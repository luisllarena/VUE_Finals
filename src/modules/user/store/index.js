export default {
  namespaced: true,
  state: () => ({
    user: { name: 'tofiq', id: 1, role: 'user' },
    isLoggedIn: true
  }),
  getters: {
    name: (state, getters, rootState, rootGetters) => {
      return state.user.name
    }
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user
    },
    SET_LOGIN_STATUS(state, status) {
      state.isLoggedIn = status
    }
  },
  actions: {
    login({ commit }, { user, role }) {
      // Perform login logic
      commit('SET_USER', user)
      commit('SET_LOGIN_STATUS', true)
    },
    logout({ commit }) {
      // Perform logout logic
      commit('SET_USER', null)
      commit('SET_LOGIN_STATUS', false)
    }
  }
}
