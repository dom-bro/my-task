<template>
  <div>
    <el-button>el-ui</el-button>
    <img>

  </div>
</template>

<script>
export default {
  created () {
    const vm = this
    console.log(vm.$store.state.count)
  },
}
</script>
