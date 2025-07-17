const express = require('express');

const path = require('path');
const app = express();
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));

app.get('/',(req,res)=>{
    res.render('home.ejs');
})

app.get('/rolldice',(req,res)=>{
    const num =Math.floor(Math.random()*6)+1;
    res.render('rolldice.ejs',{
        num});
})

app.get('/about',(req,res)=>{
    res.send('about page');
})

app.get('/instagram/:username',(req,res)=>{
    const Followers = ['mohan','raju','ramesh'];
    const username =req.params.username;
    res.render('instagram.ejs',{username,Followers});
})
app.listen(3000,()=>{
    console.log("server is running on port 3000");
})