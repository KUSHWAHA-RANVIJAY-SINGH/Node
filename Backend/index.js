const express = require('express');
const app = express();
const path = require('path');

console.log(path.resolve(__dirname));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/profile/:username', (req, res) => {
    res.send('Welcome ' + req.params.username);
});
    
app.post('/login', (req, res) => {
    console.log(req.body);
    res.send('Login Successful');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});