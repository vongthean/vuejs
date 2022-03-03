<template>
  <div class="full-product-detail">
    <client-only>
      <cart>
        <router-link to="/cart">Giỏ hàng</router-link>
      </cart>

      <div class="product-detail">
        <carousel :responsive="{
                0: {
                  items: 1
                },
                480: {
                  items: 1
                },
                768: {
                  items: 1
                },
                992: {
                  items: 1
                },
                1200: {
                  items: 1
                }
                }">
          <img src="https://placeimg.com/200/200/any?1">

          <img src="https://placeimg.com/200/200/any?2">

          <img src="https://placeimg.com/200/200/any?3">

          <img src="https://placeimg.com/200/200/any?4">

        </carousel>

        <div class="product-title">
          <div class="product-name">
            {{productDetail.name}}
          </div>
        </div>
        <div class="product-price-gr">
          <div class="product-price">
          </div>

        </div>
        <div
          class="product-des"
          v-html='productDetail.description'
        >
        </div>
        <div class='product-gr'>
          <div class='product-price'>
            {{productDetail.variants[0].price}} VND
          </div>
          <div class='product-quantity'>
            <button @click="increment()">+</button>
            <input
              name='quantity'
              type="text"
              :value="quantity"
            >
            <button @click="decrease()">-</button>
          </div>
        </div>
        <div class='product-order'>
          <button @click="addCart()">Đặt hàng</button>
        </div>
      </div>
    </client-only>

  </div>
</template>
<script>
import { mapState } from 'vuex'
import Cart from '~/components/Product/Cart'


export default {
  components: {
    Cart
  },
  data () {
    return {
      // productDetail: this.$store.state.product.productDetail
      quantity: 0
    }
  },
  computed: {
    ...mapState('product', {
      productDetail: state => state.productDetail
    }),
  },
  //middleware: 'loggin',
  watch: {

  },
  mounted () {
    console.log(this.productDetail)
  },
  async fetch ({ store, params }) {
    try {
      await store.dispatch('product/fetchProductDetail', params.id)
    } catch (e) {
      console.log(e)
    }
  },

  created () {
  },

  methods: {
    increment () {
      this.quantity += 1
    },
    decrease () {
      if (this.quantity > 0) {
        this.quantity -= 1
      }
    },
    addCart () {
      if (this.quantity > 0) {
           this.$store.dispatch('product/addToCart', {
          quantity: this.quantity,
          product: this.productDetail
        }).then(()=>{
            this.$router.push('/cart')
        }).catch(() => {

        })

      } else {
          alert('Số lượng phải lớn hơn 0');
      }
    }
  }
}
</script>
<style >
.product-detail {
  width: 800px;
  margin: auto;
}
.product-img img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  object-position: left;
}
.product-name {
  margin: 15px 0;
  font-weight: bold;
}
.product-gr {
  display: flex;
  margin: 15px 0;
  justify-content: space-between;
}
.product-order {
  margin: 15px 0;
}
.product-order button {
  padding: 10px;
  width: 100%;
  font-weight: bold;
}
.owl-carousel .owl-item img {
  height: 300px;
  object-fit: cover;
  object-position: left;
}
</style>
