const express =require('express');
// const dpconn=require('./dbconn');
// const app =express();
// app.get('/',async(req,resp)=>{
//     let data=await dpconn();
//     let result =await data.find().toArray();
//     resp.send(result);
// }).listen(3000);


const app = express();

app.get('/',(req,res)=>{
    res.send('hello');
});
app.get('/hello',(req,res)=>{
    res.send('<h1>hello World</h1>');
})

app.get('/profile/:username',(req,res)=>{
    res.send('Welcome '+req.params.username);
});
app.get('/search',(req,res)=>{
    const {p} = req.query;
    console.log(p);
    res.send('Search Page');
})

app.get('*',(req,res)=>{
    res.send('<h2>Page not found</h2>');
})


app.listen(3000,()=>{
    console.log('server is running on port 3000');
})

