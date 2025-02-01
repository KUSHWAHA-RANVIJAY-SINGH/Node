const express =require('express');
const fs =require('fs')
const users = require('./MOCK_DATA.json');
const app = express();
const port = 3000;

app.use(express.urlencoded({extended:false}));

app.listen(port,()=>{
    console.log('server is running on port 3000')
})
app.get('/api/users', (req, res) => {
    res.json(users);
})

app.get('/first_name',(req,res)=>{
  const html =`
  <ul>
  ${users.map(user => `<li>${user.first_name}</li>`).join('')}
  </ul>`;
  res.send(html);
});


app.get('/gender',(req,res)=>{
    const html =`
    <ul>
    ${users.map(user => `<li>${user.gender}</li>`).join('')}
    </ul>`;
    res.send(html);
  });

app.get('/api/users/:id',(req,res)=>{
  const id =Number(req.params.id);
  const user = users.find(user => user.id === id);
  return res.json(user);
});

app.post('/api/users',(req,res)=>{
//TOOD: Create new user 
  const body = req.body;
  users.push({...body,id:users.length+1});
  fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{
    return res.json({status:'success',id:users.length});
  });
  
});

app.patch('/api/users',(req,res)=>{
  //TOOD: Update new user 
  const body = req.body;
  const id = Number(req.params.id);
  const user = users.find(user => user.id === id);
  user.first_name = body.first_name;
  user.gender = body.gender;
  user.email = body.email;
  fs.app
  return res.json({status:'pending'});
})

app.delete('/api/users',(req,res)=>{
  //TOOD: Delete new user 
  return res.json({status:'pending'});
});