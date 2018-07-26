<template>
  <div>
    <el-button @click="open('/foo')">el-ui</el-button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  created () {
    axios
      .get('/api/tasks')
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.error(err)
      })
  },
}
</script>
