const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/register', (req, res) => {
    const { name, password } = req.query;
    res.send(`Welcome ${name}, your password is ${password}`);
});

app.post('/register', (req, res) => {
    const { name, password } = req.body;
    // Handle registration logic here
    res.send(`User registered: ${name}, Password: ${password}`);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
}); 
// This code sets up a simple Express server with two routes: GET and POST for the "/register" endpoint.
