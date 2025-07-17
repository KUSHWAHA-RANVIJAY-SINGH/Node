//create write a file fs.promises.writeFile 
//creates or overwrites a file with specified constent 
//The writefile() method writes data to a file asynchronously.
// if the file does not exist , it is created.
//if it exists, its content is replaced.

//syntax: fs.promises.writeFile(path,data,options).then().catch();

//path: the path to the file to be written
//data: the data to be written to the file
//options: an options object that specifies the encoding, mode, and flag for the file
//.then(): a callback function that is executed when the operation is successful
//.catch(): a callback function that is executed when the operation fails
//create read a file fs.promises.readFile


const fs =require('fs');
const path = require('path');

const fileName ='fspromise.txt';
const filePath = path.join(__dirname,fileName);

// fs.promises.writeFile(filePath,'This is initial data').then((data)=> console.log('Created..')).catch((err)=>console.log(err));

//Read file

// fs.promises.readFile(filePath,'utf-8').then((data)=>console.log(data)).catch((err)=>console.log(err));

//Update File

// fs.promises.appendFile(filePath,' Hello Mohan','utf-8').then(()=>console.log('Update Done.')).catch((err)=>console.log(err));


// //Delete File 
// fs.promises.unlink(fileName).then(()=>console.log('Delete Successfully')).catch((err)=>console.log(err));

// Rename Files
// To rename a file with the File System module,  use the fs.rename() method.

// The fs.rename() method renames the specified file:
 const fileName2 ='rename.txt';
const filepath2 = path.join(__dirname,fileName2)
fs.promises.rename(filepath2,filePath,'utf-8').then(()=>console.log('rename successfull')).catch((err)=>console.log(err));