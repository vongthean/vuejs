<template>
  <div class="row">
   
    <div
      v-for="product in products"
      :key="product.id"
      class="col-6 col-md-3 mb-3"
    >
      <ProductItem
        :product="product"
        @onSelect="addCart(product.id)"
      />
    </div>
  </div>

</template>

<script>
import { mapState } from 'vuex'
import ProductItem from '~/components/Product/ProductItem'
import Cart from '~/components/Product/Cart'

export default {
  components: {
    ProductItem
  },
  //     middleware({ route, redirect, store }) {

  //   if (!token) {
  //     return redirect('/')
  //   }else{
  //      return redirect('/login') 
  //   }
  // },
  data () {
    return {

    }
  },
  computed: {
    ...mapState('product', {
      products: state => state.products
    }),
  },
  //middleware: 'loggin',

  created () {
    this.$store.dispatch('product/fetchProducts')
  },

  methods: {
    addCart (productId) {
      this.$router.push('/products/' + productId)
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
