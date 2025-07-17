const express =require('express');
const dbconn=require('./dbconn');
const app =express();

app.use(express.json());
app.post('/',async(req,resp)=>{
    let data =await dbconn();
    let result =await data.insertOne(req.body);
    resp.send(result);
}).listen(3000);