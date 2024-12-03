const express =require('express');

const users = require('./MOCK_DATA.json');
const app = express();
const port = 3000;
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
  return res.json({status:'pending'});
});

app.patch('/api/users',(req,res)=>{
  //TOOD: Update new user 
  return res.json({status:'pending'});
})

app.delete('/api/users',(req,res)=>{
  //TOOD: Delete new user 
  return res.json({status:'pending'});
});