<template>
  <div>
    <h1>hello</h1>
    <el-tabs type="border-card" value="new">
      <el-tab-pane name="list">
        <span slot="label"><i class="el-icon-tickets"></i> Tasks</span>
        我的任务列表
      </el-tab-pane>
      <el-tab-pane name="new">
        <span slot="label"><i class="el-icon-edit-outline"></i> New</span>
        <el-form label-width="100px" label-suffix="：">
          <el-form-item label="标题">
            <el-input></el-input>
          </el-form-item>

          <el-form-item label="状态">
            <el-select value="draft">
              <el-option label="未开始" value="draft"></el-option>
              <el-option label="开发中" value="dev"></el-option>
              <el-option label="已提测" value="qa"></el-option>
              <el-option label="可上线" value="stage"></el-option>
              <el-option label="已上线" value="done"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="需求文档">
            <el-input type="textarea" autosize></el-input>
          </el-form-item>
          <el-form-item label="设计文档">
            <el-input type="textarea" autosize></el-input>
          </el-form-item>
          <el-form-item label="接口文档">
            <el-input type="textarea" autosize></el-input>
          </el-form-item>

          <el-form-item label="发布路径">
            <el-input type="textarea" autosize></el-input>
          </el-form-item>

          <el-form-item label="分支">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="排期">
            <el-input></el-input>
          </el-form-item>

          <el-form-item label="源文件">
            <el-input type="textarea" autosize></el-input>
          </el-form-item>

          <div class="block">
            <el-form-item label="后端人员">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="测试人员">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="设计人员">
              <el-input></el-input>
            </el-form-item>
          </div>

          <el-form-item>
            <el-button type="primary" @click="submitNewForm">Save</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  methods: {
    data () {
      return {
        nForm: {
          title: '',
          status: 'draft',
          doc: {
            requirements: '',
            ui: '',
            api: '',
          },
          publish: '',
          branch: '',
          schedule: '',
          codes: '',
          workmate: {
            backend: '',
            qa: '',
            ui: '',
          },
        },
      }
    },
    submitNewForm () {},
  },
  created () {},
}
</script>

<style lang="scss">
.block {
  border: 1px solid red;
}
</style>
