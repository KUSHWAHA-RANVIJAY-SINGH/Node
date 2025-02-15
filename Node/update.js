const express =require('express');
const dbconn=require('./dbconn');
const app =express();
app.use(express.json());
app.put('/:name',async(req,resp)=>{
    let data =await dbconn();
    let result = await data.updateOne({"title"},{$set:req.body});
    resp.send(result);
}).listen(3000);