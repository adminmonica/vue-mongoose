<template>
  <div id="login">
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
  </div>
</template>

<script>
export default {
  name: 'login',
  data(){
  	return{
  		userName:"",
  		passWord:""
  	}
  },
  methods:{
  	login(){
  		let name = this.userName
  		let pwd = this.passWord
  		this.$axios.post('/api/login',{
  			userName:name,
  			passWord:pwd
  		}).then((response)=>{
  			console.log(response)
  			let len = response.data.result.length
  			if(len == 1){
  				this.$notify({
		          title: 'info',
		          message: '登陆成功!',
		          type: 'success'
		        });
  				this.$router.push({
  					name:"Index",
  					parmas:{
  						username:name,
                		password:pwd
  					}
  				})
  			}else{
  				this.$message.error('账号或密码错误!');
  			}
  		})
  	},
  	select(){
  		let name = this.userName
  		let pwd = this.passWord
  		this.$axios.post('/api/select',{
  			userName:name,
  			passWord:pwd
  		}).then((response)=>{
  			console.log(response)
  			let len = response.data.result.length
  			if(name==""||pwd==""){
  				this.$message({
			        message: '请输入用户名和密码',
			        type: 'warning'
			    });
  			}else{
  				if(len == 1){
	  				this.$message({
			          message: '该用户已存在',
			          type: 'warning'
			        });
	  			}else{
	  				this.$message({
				        message: '恭喜你，注册成功!',
				        type: 'success'
				    });
	  				this.addUser()
	  			}
  			}
  		})
  	},
  	addUser(){
  		let name = this.userName
  		let pwd = this.passWord
  		this.$axios.post('/api/addUser',{
  			userName:name,
  			passWord:pwd
  		}).then((response)=>{
  			console.log(response)
  		})
  	}
  }
}
</script>

<style scoped>
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
</style>
