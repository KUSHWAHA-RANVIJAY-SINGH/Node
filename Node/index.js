const express =require('express');
const dpconn=require('./dbconn');
const app =express();
app.get('/',async(req,resp)=>{
    let data=await dpconn();
    let result =await data.find().toArray();
    resp.send(result);
}).listen(3000);

