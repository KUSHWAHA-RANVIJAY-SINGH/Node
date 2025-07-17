// const http =require('http');
// const fs =require('fs');
// const url =require('url');
const express = require('express');

// const myserver =http.createServer((req,res)=>{
//     // if (req.url ==) {  
// // }
//     const log =`${Date.now()}: ${req.url} New Req Received\n`;
//     const myurl =url.parse(req,url,true);
//     console.log(myurl);
//     fs.appendFile('log.txt',log,(err,data)=>{
//         switch (myurl.pathname) {
//             case '/':
//                 res.end('Home Page');
//                 break;
//             case "/about":
//                 const username =myurl.query.myname;
//                 res.end(`Hello ${username}`);
//              break;
        
//             default:
//                 break;
//         }
//     })
//     console.log('Hello from server');
//     res.end('hello from server')
// })

const app = express();

app.get('/',(req,res)=>{
   return res.send('Hello from Home Page');  
});

app.get('/login',(req,res)=>{
    return res.send(`Hello ${req.query.name}`);
});

app.get('/singup',(req,res)=>{
    return res.send("Signup page")
})

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})

// const myserver  =http.createServer(app);
// myserver.listen(3000,()=>{
//     console.log('server started.');
// })