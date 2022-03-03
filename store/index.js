import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'
import actions from './actions'

import product from './product'
import user from './user'


Vue.use(Vuex)

const store = () =>
    new Vuex.Store({
        mutations,
        state,
        actions,
        modules: {
            product,
            user
        }
    })

export default store;