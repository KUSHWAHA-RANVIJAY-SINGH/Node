const {MongoClient}=require('mongodb');
const path ="mongodb://127.0.0.1:27017";
const conn =new MongoClient(path);
async function dbconn(){
    let x = await conn.connect();
    let y = x.db('Ec2student');
    return y.collection('products');

}
module.exports=dbconn;