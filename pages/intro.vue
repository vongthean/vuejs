<template>
  <div class="row">
    <div class='form-login'>
      <input
        name='username'
        type="text"
        v-model='form.username'
      >
      <input
        name='password'
        type="password"
        v-model='form.password'
      >
      <button @click="loggin()">Đăng nhập</button>

    </div>
  </div>

</template>

<script>
import { mapState } from 'vuex'
import util from '~/helpers/util'

export default {
  components: {
  },
  data () {
    return {
      form: {
        username: 'tueyesolution@gmail.com',
        password: '123'
      }
    }
  },
  computed: {

  },


  created () {

  },
  //middleware: 'loggin',
  methods: {
    loggin () {
      this.$store.dispatch('user/login', this.form).then((n) => {
        this.$cookies.set("token", this.$store.state.user.token.token)
        this.$router.push('/')
      }).catch((e) => {
        alert('sai mật khẩu')
      })
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
