const { isUtf8 } = require('buffer');
const fs = require('fs');
const path = require('path');


const fileName ='fsAsycn.txt';

const filepath =path.join(__dirname,fileName);

//Write file syntax: fs.writeFile(path,options,callback);
//path: file path to write to
//data: content to write 
//Options : optional specifies encoding ('utf-8'),mode,or flag
//callback: A function with an err parameter.

// fs.writeFile(filepath,'Hello World',function(err){
//     if(err){
//         console.error(err);
//     }
//     else{
//         console.log('File created successfully');
//     }
// });


//read file syntax: fs.readFile(path,options,callback);
//path: file path to read from
//options: optional specifies encoding ('utf-8')
//callback: A function with two parameters: err and data.

fs.readFile(filepath,'utf-8',(err,data)=>{
    if(err){
        console.error(err);
    }
    else{
        console.log(data);
    }
})

//Update fs.appendFile(): Appends data to a file. if the file doesn't exits,it is created.
//syntax: fs.appendFile(path,data,options,callback);

// fs.appendFile(filepath,'Hello Mohan how are you',isUtf8,(err)=>{
//     if (err) {
//         console.error(err);
//     }else{
//         console.log('Data appended successfully');
//     }
// })


//fs.unlink() : Deletes a file asynchronously.
//syntax: fs.unlink(path,callback);

fs.unlink(filepath,(err)=>{
    if(err){
        console.error(err);
    }else{
        console.log('File deleted successfully');
    }
})