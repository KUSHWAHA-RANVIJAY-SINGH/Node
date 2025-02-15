const express = require('express');
require('dotenv').config()

const app = express();

const Port = 3000;
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('index');
})

app.get('/profile',(req,res)=>{
    res.send('profile page');
})

app.get('/about' ,(req,res)=>{
    res.send("This is about page.");
})

app.get('/mohan',(req,res)=>{
    res.send("Hello mohan");
})
app.listen(process.env.PORT ,()=>{
    console.log(`server is running...`)
})
