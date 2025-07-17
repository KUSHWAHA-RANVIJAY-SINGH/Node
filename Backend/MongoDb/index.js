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
// User.insertMany([
//     { name: 'Alice', age: 30, email: 'alice@example.com' },
//     { name: 'Bob', age: 25, email: 'bob@example.com' }
// ]).then((res)=>{
//     console.log('Users saved:', res);
// }).catch(err => console.error('Error saving users:', err));


// //UpdateOne and UpdateMany 

// User.updateOne({name:'Alice'},{age:23}).then((res)=>{
//     console.log('User updated:', res);
// }).catch(err => console.error('Error updating user:', err));

// User.updateMany({name:'Bob'},{age:23}).then((res)=>{
//     console.log('Users updated:', res);
// }
// ).catch(err => console.error('Error updating users:', err));


//DeleteOne and DeleteMany
// User.deleteOne({name:'Alice'},{age:23}).then((res)=>{
//     console.log('User deleted:', res);
// }).catch(err => console.error('Error deleting user:', err));

// User.deleteMany({name:'Bob'},{age:23}).then((res)=>{
//     console.log('Users deleted:', res);
// }).catch(err => console.error('Error deleting users:', err));

// // FindOne and FindMany
// User.findOne({name:'Alice'}).then((res)=>{
//     console.log('User found:', res);
// }).catch(err => console.error('Error finding user:', err));

//findByIdAndUpdate and findByIdAndDelete
User.findByIdAndUpdate('67faa60b100aef9eb695d26d', { age: 35 }).then((res)=>{
    console.log('User updated:', res);
}).catch(err => console.error('Error updating user:', err));

User.findByIdAndDelete('67faa68fd8076866161621bb').then((res)=>{
    console.log('User deleted:', res);
}).catch(err => console.error('Error deleting user:', err));

//findOneAndDelete and findOneAndUpdate
// User.findOneAndDelete({name:'Alice'}).then((res)=>{
//     console.log('User deleted:', res);
// }).catch(err => console.error('Error deleting user:', err));

User.findOneAndUpdate({name:'Ranvijay'}, {age: 28}, {new: true}).then((res) => {
    console.log('User updated:', res);
}).catch(err => console.error('Error updating user:', err));

User.find({}).then((res) => {
    console.log('Users found:', res);
}).catch(err => console.error('Error finding users:', err));