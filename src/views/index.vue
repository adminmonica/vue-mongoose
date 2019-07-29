<template>
  <div id="index">
    <span>{{this.$route.params.username}}</span>
    <span>{{this.$route.params.password}}</span>
    <el-row>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="12">
        <router-link tag="el-button" to="add">新增</router-link>
        <div class="grid-content bg-purple-zhong">
          <el-table
              :data="content"
              style="width: 100%">
              <el-table-column
                prop="_id"
                label="ID"
                width="145">
              </el-table-column>
              <el-table-column
                prop="studentName"
                label="姓名"
                width="145">
              </el-table-column>
              <el-table-column
                prop="studentPwd"
                label="密码"
                width="145">
              </el-table-column>
              <el-table-column
                prop="Content"
                label="内容"
                width="145">
              </el-table-column>
              <el-table-column
                align="right">
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                  <el-button
                    size="mini"
                    type="danger"
                    @click="readyDel(scope.$index, scope.row)">Delete</el-button>
                </template>
              </el-table-column>
            </el-table>
        </div>
      </el-col>
      <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'index',
  data(){
    return{
      content:[]
    }
  },
  methods:{
    handleEdit(index, row) {
        // row 能拿到你选择那一行的值
        console.log(index, row);
        this.$router.push({
          name:'Update',
          params:{
            id:row._id,
            studentName:row.studentName,
            studentPwd:row.studentPwd,
            Content:row.Content
        }
      })
    },
    readyDel(index,row){
      let id = row._id
      this.$axios.post('/api/delete',{
        id:id
      }).then((response)=>{
        console.log(response)
        this.$message({
          message: '恭喜你，删除成功',
          type: 'success'
        });
        this.query()
      })
    },
    query(){
      this.$axios.post('/api/query',{})
        .then((response)=>{
          console.log(response)
          this.content = response.data.result
        })
    }
  },
  mounted(){
    this.query()
  }
}
</script>

<style scoped>
ul li {
  list-style: none;
}

.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
 
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
