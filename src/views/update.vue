<template>
  <div id="add">
    <el-row :gutter="20">
      <el-col :span="12" :offset="6">
        <div class="grid-content bg-purple">
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="编号">
              <el-input v-model="form.id":disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="姓名">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input v-model="form.pwd"></el-input>
            </el-form-item>
            <el-form-item label="内容">
              <el-input v-model="form.content"></el-input>
            </el-form-item>
          </el-form>
          <el-button @click="update">确定</el-button>
          <el-button @click="goBack">返回</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'add',
  data(){
    return{
      form:{
        id:this.$route.params.id,
        name:this.$route.params.studentName,
        pwd:this.$route.params.studentPwd,
        content:this.$route.params.Content
      }
    }
  },
  methods:{
    goBack(){
      this.$router.back(-1)
    },
    update(){
      var id = this.form.id;
      var name = this.form.name;
      var pwd = this.form.pwd;
      var content = this.form.content;
      this.$axios.post('/api/update',{
        _id:id,
        studentName:name,
        studentPwd:pwd,
        Content:content
      }).then((response)=>{
        console.log(response)
        this.$message({
          message: '恭喜你，修改成功',
          type: 'success'
        });
        this.goBack();
      })
    }
  }
}
</script>

<style scoped>

</style>
