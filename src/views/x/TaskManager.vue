<template>
  <div>
    <el-tabs type="border-card" value="new">
      <el-tab-pane name="list">
        <span slot="label"><i class="el-icon-tickets"></i> Tasks</span>
        我的任务列表
      </el-tab-pane>
      <el-tab-pane name="new">
        <span slot="label"><i class="el-icon-edit-outline"></i> New</span>
        <NewTask></NewTask>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import NewTask from './NewTask.vue'
export default {
  comments: {
    NewTask,
  },
}
</script>
