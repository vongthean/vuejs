import api from '../api'

const state = {
  products: [],
  productDetail: {},
  cart: []
}

const mutations = {
    'FETCH_PRODUCTS'(state, data) {
        state.products = data
        //console.log('data', state.products)
      },
      'FETCH_PRODUCT_DETAIL'(state, data) {
        state.productDetail = data
      },
      'ADD_TO_CART'(state, data) {
          //console.log(state.cart)
        if (!state.cart.find((c) => c.product.id === data.product.id)) {
          state.cart.push(data)
          localStorage.setItem('cartItem', JSON.stringify(state.cart))
          return
        }
        state.cart.forEach((cartItem) => {
          if (cartItem.product.id === data.product.id) {
            cartItem.quantity = data.quantity
          }
        })
      }
    
    
}

const actions = {
    fetchProducts({commit}, payload) {
        return new Promise((resolve, reject) => {
          api
          .get(
            `product`
            )
            .then((res) => {
              commit('FETCH_PRODUCTS', res)
              resolve();
            })
            .catch()
        })
      },
    

      fetchProductDetail({commit}, payload) {
        return new Promise((resolve, reject) => {
          // commit('FETCH_PRODUCT_DETAIL', product.find((p) => p.id === parseInt(payload)))
          api
          .get(
            `product/${payload}`
            )
            .then((res) => {
              commit('FETCH_PRODUCT_DETAIL', res)
              resolve();
            })
            .catch((e) => {
              reject(e)
            })
        })
      },
      addToCart({commit}, payload) {
        return new Promise((resolve, reject) => {
          commit('ADD_TO_CART', payload)
          resolve()
        })
      }
    
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
