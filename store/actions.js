// import api from '../api/index'
// function buildQuery(params) {
//   if (!params) {
//     return ''
//   }
//   if (typeof params === 'string') {
//     return params
//   }
//   if (typeof params !== 'object') {
//     return ''
//   }

//   const arr = []
//   for (const key of Object.keys(params)) {
//     if (Array.isArray(params[key])) {
//       for (const value of params[key]) {
//         arr.push(encodeURIComponent(key) + '=' + encodeURIComponent(value))
//       }
//     } else {
//       arr.push(encodeURIComponent(key) + '=' + encodeURIComponent(params[key]))
//     }
//   }
//   return '?' + arr.join('&')
// }

// export const actions = {
//     fetchProducts({commit}, payload) {
//         return new Promise((resolve, reject) => {
//           api
//           .get(
//             `https://conmeodat.eyeteam.vn/api.product`
//             )
//             .then((res) => {
//                 console.log(res)
//               commit('FETCH_PRODUCTS', res)
//               resolve();
//             })
//             .catch()
//         })
//       },
//       fetchProductDetail({commit}, payload) {
//         return new Promise((resolve, reject) => {
//           api
//           .get(
//             `https://conmeodat.eyeteam.vn/api.product/${payload.id}`
//             )
//             .then((res) => {
//               commit('FETCH_PRODUCT_DETAIL', res)
//               resolve();
//             })
//             .catch((e) => {
//               reject(e)
//             })
//         })
//       }
// }
