const express=require("express");
var app=express();
app.use(express.static("public"));
app.listen(3000);
const  pool=require("./pool");
//用户注册
app.get("/register",(req,res)=>{
    var name=req.query.name;
    var pwd=req.query.pwd;
    var ID=req.query.ID;
    var phone=req.query.phone;
    var reg=/^[a-z0-9_]{6-12}$/;
    if(!reg.test(name)){
        res.send({code:-1,msg:"用户名个数不正确"});
        return;
    }
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
