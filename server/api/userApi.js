var express = require('express');
var router = express.Router();
const mongoose = require("./../utils/mongooseConnection.js")
var ObjectID = require('mongodb').ObjectID;

//定义user表的Schema
var userSchema = mongoose.Schema({
  	username:String,
  	password:String
},{
	versionKey:false,//去除表中自动添加的版本号"__v"
	collection:"user"//直接指明数据库Collection名字避免自动加s
})

//定义student表的Schema
var stuSchema = mongoose.Schema({
  	studentName:String,
  	studentPwd:String,
  	Content:String
},{
	versionKey:false,//去除表中自动添加的版本号"__v"
	collection:"student"//直接指明数据库Collection名字避免自动加s
})

//定义userSchema
var userModel = mongoose.model('user',userSchema)

//定义stuSchema
var stuModel = mongoose.model('student',stuSchema)


//登录的接口，需要传递参数(username,password)
router.post('/login',(req,res)=>{
	let params = req.method == 'POST'?req.body:req.query||req.params;
	let _username = params.userName
	let _password = params.passWord
	userModel.find({username:_username,password:_password},(err,result)=>{
		if(err){
			console.log(err)
			return
		}
		if(res.length == 0) {
			res.json({code: '-200',msg: '操作失败！'});
		} else {
			res.json({msg: '登陆成功',status: '200',result: result});
		}
		console.log(result)
	})
})

//注册接口
router.post('/addUser',function(req,res){
	let params = req.method == 'POST'?req.body:req.query||req.params;
	let _username = params.userName
	let _password = params.passWord
	var doc = {
		_id:ObjectID(),
		username:_username,
		password:_password
	}
	userModel.create(doc,(err,result)=>{
		if(err){
			console.log(err)
			return
		}
		if(res.length == 0) {
			res.json({code: '-200',msg: '操作失败！'});
		} else {
			res.json({msg: '注册成功',status: '200',result: result});
		}
		console.log(result)
	})
})

//查询用户
router.post('/select',(req,res)=>{
	let params = req.method == 'POST'?req.body:req.query||req.params;
	let _username = params.userName
	let _password = params.passWord
	userModel.find({username:_username,password:_password},(err,result)=>{
		if(err){
			console.log(err)
			return
		}
		if(res.length == 0) {
			res.json({code: '-200',msg: '操作失败！'});
		} else {
			res.json({msg: '查询成功',status: '200',result: result});
		}
		console.log(result)
	})
})


//查询所有数据,针对student表的接口
router.post('/query',(req,res)=>{
	stuModel.find({},(err,result)=>{
		if(err){
			console.log(err)
			return
		}
		if(res.length == 0) {
			res.json({code: '-200',msg: '操作失败！'});
		} else {
			res.json({msg: '查询全部',status: '200',result: result});
		}
		console.log(result)
	})
})

//给student表增加一条数据
router.post('/addStudent',(req,res)=>{
	let params = req.method == 'POST'?req.body:req.query||req.params;
	
	//定义一个对象接收参数
	var doc = {
		_id:ObjectID(),
		studentName:params.studentName,
		studentPwd:params.studentPwd,
		Content:params.Content
	}
	//通过create方法向student表新增一条数据
	stuModel.create(doc,(err,result)=>{
		if(err){
			console.log(err)
			return
		}
		if(res.length == 0) {
			res.json({code: '-200',msg: '操作失败！'});
		} else {
			res.json({msg: '新增成功',status: '200',result: result});
		}
		console.log(result)
	})
})

//修改方法
router.post('/update',(req,res)=>{
	let params = req.method == 'POST'?req.body:req.query||req.params;
	console.log(params)
    let stuId = params._id;
    let stuName = params.studentName;
    let stuPwd = params.studentPwd;
    let stuCon = params.Content;
    stuModel.update({_id:stuId},{studentName:stuName,studentPwd:stuPwd,Content:stuCon},(err,result)=>{
    	if(err){
            console.log(err)
            return
        }
        if(res.length == 0) {
            res.json({code: '-200',msg: '修改失败！'});
        } else {
            res.json({msg: '修改成功',status: '200',result: result});
        }
        console.log(result)
    })
})


//删除方法
router.post('/delete',(req,res)=>{
	let params = req.method == 'POST'?req.body:req.query||req.params;
	console.log(params)
	let id = params.id
	stuModel.findByIdAndRemove({_id:id},(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        if(res.length == 0) {
            res.json({code: '-200',msg: '删除失败！'});
        } else {
            res.json({msg: '删除成功',status: '200',result: result});
        }
        console.log(result)
    })
})

module.exports = router;