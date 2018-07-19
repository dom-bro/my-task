<template>
  <div id="index">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  created () {
    const vm = this
    vm.open('/')
  },
}
</script>
