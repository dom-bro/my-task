<template>
  <div>
    <el-tabs type="border-card" value="new">
      <el-tab-pane name="list">
        <span slot="label"><i class="el-icon-tickets"></i> Tasks</span>
        我的任务列表
      </el-tab-pane>
      <el-tab-pane name="new">
        <span slot="label"><i class="el-icon-edit-outline"></i> New</span>
        <el-form label-width="100px"
                 :model="nForm"
                 label-suffix="：">
          <el-form-item label="标题">
            <el-input v-model="nForm.title"></el-input>
          </el-form-item>

          <el-form-item label="状态">
            <el-select value="draft" v-model="nForm.status">
              <el-option label="未开始" value="draft"></el-option>
              <el-option label="开发中" value="dev"></el-option>
              <el-option label="已提测" value="qa"></el-option>
              <el-option label="可上线" value="stage"></el-option>
              <el-option label="已上线" value="done"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="需求文档">
            <el-input type="textarea"
                      v-model="nForm.doc.pm"
                      autosize></el-input>
          </el-form-item>
          <el-form-item label="设计文档">
            <el-input type="textarea"
                      v-model="nForm.doc.ui"
                      autosize></el-input>
          </el-form-item>
          <el-form-item label="接口文档">
            <el-input type="textarea"
                      v-model="nForm.doc.api"
                      autosize></el-input>
          </el-form-item>

          <el-form-item label="发布路径">
            <el-input type="textarea"
                      v-model="nForm.publish"
                      autosize></el-input>
          </el-form-item>

          <el-form-item label="分支">
            <el-input v-model="nForm.branch"></el-input>
          </el-form-item>
          <el-form-item label="排期">
            <el-input v-model="nForm.schedule"></el-input>
          </el-form-item>

          <el-form-item label="源码文件">
            <el-input type="textarea"
                      v-model="nForm.codes"
                      autosize></el-input>
          </el-form-item>

          <el-form-item label="产品人员">
            <el-input v-model="nForm.workmate.pm"></el-input>
          </el-form-item>

          <el-form-item label="后端人员">
            <el-input v-model="nForm.workmate.api"></el-input>
          </el-form-item>
          <el-form-item label="测试人员">
            <el-input v-model="nForm.workmate.qa"></el-input>
          </el-form-item>
          <el-form-item label="设计人员">
            <el-input v-model="nForm.workmate.ui"></el-input>
          </el-form-item>

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
  data () {
    return {
      nForm: {
        title: '', // 任务标题
        status: 'draft', // 任务状态，未开始|开发中|已提测|待上线|已上线，默认未开始
        doc: {
          pm: '', // 需求文档
          ui: '', // 设计文档
          api: '', // 接口文档
        },
        publish: '',
        branch: '',
        schedule: '',
        codes: '',
        workmate: {
          pm: '',
          ui: '',
          api: '',
          qa: '',
        },
      },
    }
  },
  methods: {
    submitNewForm () {
      const vm = this
      vm.axios({
        method: 'post',
        url: 'api/createTask',
        data: vm.nForm,
      }).then(res => {
        console.log(res)
      })
    },
  },
  created () {
    const vm = this
    vm.axios({
      url: '/api/tasks',
    }).then(res => {
      console.log(res)
    })
  },
}
</script>
