<template>
    <div class='form-login'>
            <input name='username' type="text" :value='form.username'>
            <input name='password' type="password" :value='form.password'>
           <button @click="onLogin()">Đăng nhập</button>
      
    </div>
</template>

<script>

export default {
  name: 'FormLogin',
  props: {
    form: Object
  },
  methods: {
    onLogin() {
      this.$emit('onLogin')
    }
  },
}
</script>
<style >

</style>
