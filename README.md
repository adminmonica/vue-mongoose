登录注册
<div class="demo-input-suffix">
  <el-form>
    <el-form-item>
      <el-input
        placeholder="请输入用户名"
        suffix-icon="el-icon-user-solid"
        name="username"
        v-model="userName">
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-input 
        placeholder="请输入密码"
        v-model="passWord"
        show-password
        name="password">
      </el-input>
    </el-form-item>
  </el-form>
  <div>
    <el-button type="primary" @click="login">登录</el-button>
    <el-button @click="select">注册</el-button>
  </div>
</div>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
form input{
  margin-top: 10px;
}

.el-input{
  width: 300px;
}

首页
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

新增
<el-row :gutter="20">
  <el-col :span="12" :offset="6">
    <div class="grid-content bg-purple">
      <el-form ref="form" :model="form" label-width="80px">
        <!-- <el-form-item label="编号">
          <el-input v-model="form.id"></el-input>
        </el-form-item> -->
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
      <el-button @click="confirm">确定</el-button>
      <el-button @click="goBack">返回</el-button>
    </div>
  </el-col>
</el-row>

修改
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