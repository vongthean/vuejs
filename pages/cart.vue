<template>
  <div class='cart-item'>
    <client-only>
      <table style="width:100%">
        <tr>
          <th>Hình ảnh</th>
          <th>Tên sản phẩm</th>
          <th>Số lượng</th>
          <th>Giá</th>
          <th></th>
        </tr>
        <tr
          v-for='(item,index) in cart'
          :key='index'
        >
          <td>
            <img
              :src="item.product.images[0].src"
              :alt="item.product.name"
            >
          </td>
          <td>
            <div class='product-name'>
              <b>{{item.product.name}}</b>
            </div>
          </td>
          <td>
            <div class='product-quantity'>
              {{item.quantity}}
            </div>
          </td>
          <td>
            <div class='product-price'>
              {{item.product.variants[0].price * item.quantity}} VND
            </div>
          </td>
          <td>
            <div class='product-deleted'>
              <button @click="deleted(index)">Xóa</button>
            </div>
          </td>
        </tr>
      </table>

      <div style='margin-top: 15px;'>
        <router-link to="/">Quay về trang chủ</router-link>
      </div>
    </client-only>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      total: 0
    }
  },
  created () {
    if (process.browser) {
      if (this.$store.state.product.cart) {
        this.$store.state.product.cart = JSON.parse(localStorage.getItem('cartItem'))
      }
    }
  },
  computed: {
    ...mapState('product', {
        cart: state => state.cart
    })


  },
  methods: {
    deleted (n) {
      this.cart.splice(n, 1)
      localStorage.setItem('cartItem', JSON.stringify(this.cart))
    }
  }
}
</script>
<style scoped>
table,
th,
td {
  border: 1px solid black;
}
table {
  vertical-align: middle;
  text-align: center;
}
.cart-item table img {
  width: 200px;
  height: auto;
}
</style>