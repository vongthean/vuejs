import api from '../api'

const state = {
  token: ''
}

const mutations = {
    'FETCH_LOGGIN'(state, data) {
        state.token = data
        console.log('data', state.token)
      },
    
}

const actions = {
    login({commit}, form) {
        return new Promise((resolve, reject) => {
          api
          .post(
            'user/login', form
            )
            .then((res) => {
              commit('FETCH_LOGGIN', res)
              resolve()
            })
            .catch((e) => {
              reject(e)
            })
        })
      },
    
    
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
