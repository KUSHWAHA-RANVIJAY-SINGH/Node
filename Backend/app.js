const express = require('express');

const app = express();

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
app.listen(3000)
