// 引入上一级目录下的mysql连接池对象
const pool=require('../pool.js');
const express=require('express');
// 创建空路由器
var router=express.Router();
// 添加路由
//用户注册
app.post("/register",(req,res)=>{
  // 获取post请求的数据
  var obj=req.body;
  var $name=obj.name;
  if(!$name){
    res.send({code:401,msg:'uname required'});
	//阻止继续往后执行
    return;
  }
  //验证密码、邮箱、手机是否为空
  var $pwd=obj.pwd;
  if(!$pwd){
    res.send({code:402,msg:'upwd required'});
	  return;
  }
  var $ID=obj.ID;
  if(!$ID){
    res.send({code:403,msg:'ID required'});
	  return;
  }
  var $phone=obj.phone;
  if(!$phone){
    res.send({code:404,msg:'phone required'});
    return;
  }
  var reg=/^[a-z0-9_]{6-12}$/;
  if(!reg.test(name)){
    res.send({code:-1,msg:"用户名个数不正确"});
    return;
  }
  // 执行SQL语句，将注册的数据插入到air_login数据表中
  var sql="INSERT INTO xz_login VALUES(null,?,?,?,?)";
  pool.query(sql,[name,pwd,ID,phone],(err,reuslt)=>{
      if(err) throw err;
      if(result.affectedRows>0){
          res.send({code:1,msg:"注册成功"});
      }else{
          res.send({code:-1,msg:"注册失败"})
      }
  })
});