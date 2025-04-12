const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/test')
//   .then(() => console.log('Connected!'))
//   .catch(err => console.error('Connection error', err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}
main().then(()=>{
    console.log('Connected to MongoDB');
}).catch(err => console.error('Error during connection', err));

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String
})

const User = mongoose.model('User',userSchema);
// const Product = mongoose.model('Product',userSchema);

// const user2 = new User({
//     name:'Mohan',
//     age:20,
//     email:'mohan@example.com'
// });

// user2.save().then((res)=>{
//     console.log('User saved:', res);
// }).catch(err => console.error('Error saving user:', err));

// insertMany
User.insertMany([
    { name: 'Alice', age: 30, email: 'alice@example.com' },
    { name: 'Bob', age: 25, email: 'bob@example.com' }
]).then((res)=>{
    console.log('Users saved:', res);
}).catch(err => console.error('Error saving users:', err));
