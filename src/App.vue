<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>In App.vue test</h1>
    <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link>
    <router-link to="/user/a">Go to /user/a</router-link>
    <router-link to="/user/b">Go to /user/b</router-link>
    <router-link to="/category/1">Go to /category/1</router-link>
    <router-link to="/category/1/book1">Go to /category/1/book1</router-link>
    <router-link to="/category/1/book2">Go to /category/1/book2</router-link>
    <router-link to="/category/2">Go to /category/2</router-link>
    <a href="javascript:" @click=open("/bar")>编程式导航</a>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    open (url) {
      const vm = this
      vm.$router.push(url)
    },
  }
}
</script>

<style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  a {
    display: block;
  }
</style>
