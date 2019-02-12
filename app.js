const express=require("express");
const bodyParser=require('body-parser');
const userRouter=require('./routes/user');
var app=express();
app.use(express.static("public"));
app.listen(3000);


// 托管静态资源到public目录下
app.use(express.static('public'));
app.use(bodyParser.json());
app.use('/user',userRouter);

