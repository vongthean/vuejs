<template>
  <div class="cart" :class="{active: cartItemCount > 0}">
      <div class="cart-quantity">
        <div class="bg-quantity">
          <span>
            {{cartItemCount}}
          </span>
        </div>
      </div>
      <div class="cart-link">
        <slot></slot>
      </div>
  </div>
</template>

<script>
export default {
  computed: {
    cartItemCount() {
    if (!this.$store.state.product.cart.length) return  0
      return this.$store.state.product.cart.map((c) => c.quantity).reduce((a, b) => a + b)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>

</style>
