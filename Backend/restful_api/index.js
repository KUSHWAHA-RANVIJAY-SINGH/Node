const { name } = require('ejs');
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware to log requests
app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/public', express.static('public'));

let user =[
    {
        name: 'John Doe',
        age: 30,
    },
    {
        name: 'Jane Smith',
        age: 25,
    },
    {
        name: 'Alice Johnson',
        age: 28,
    },
    {
        name: 'Bob Brown',
        age: 35,
    },
]

app.get('/posts', (req, res) => {
    res.render('view', { user });  
  });

app.post('/posts/new', (req, res) => {
    const newUser = req.body;
    user.push(newUser);
    res.status(201).json(newUser);
});
  
app.get('/newuser', (req, res) => {
    res.render('new');
});

  
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});