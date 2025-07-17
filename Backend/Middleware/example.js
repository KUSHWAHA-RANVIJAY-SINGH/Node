const express = require('express');

const app = express();

// Middleware function to log request details

const mymiddleware1 = (req,res,next)=>{
    console.log(`Request Method: ${req.method}, Request URL: ${req.url}` );
    console.log(`Hello, this is my first middleware function`);
    next();
}

// Middleware function to check if user is authenticated

const mymiddleware2 = (req, res, next) => {
    console.log("middleware2: Checking if user is authenticated");
    res.send('User is authenticated');
    next();
}

app.use(mymiddleware1);
app.use(mymiddleware2);

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

const PORT  = 3000;

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})