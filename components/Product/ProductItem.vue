<template>
    <div class='product-item'>
      <div class="product-img">
        <img  @click="onSelect" :src="product.images[0].src" :alt=product.name >
      </div>
      <div class="product-title">
        <div class="product-name"  @click="onSelect">
          {{product.name}} 
        </div>
        <div class='product-des' v-html='product.description'></div>
      </div>
      
    </div>
</template>

<script>

export default {
  name: 'ProductItem',
  props: {
    product: Object
  },
  methods: {
    onSelect() {
      this.$emit('onSelect')
    }
  },
}
</script>
<style >
.row {
  width: 800px;
  margin: auto;
}
.col-md-3{
    width: 45%;
    display: inline-block;
    height: 100%;
    margin: 15px;
}
.product-img img{
 width: 100%;
 height: 300px;
 object-fit: cover;
     object-position: left;
}
.product-name {
  font-weight: bold;
  height: 36px;
  margin: 10px 0;
}
.product-des{
  overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    height: 72px;
}
</style>
