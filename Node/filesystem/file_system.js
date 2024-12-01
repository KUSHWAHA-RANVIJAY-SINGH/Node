//Common use for the file system = read,create files,update files,delete files,rename files .


// //create a new file and adding data 
const fs =require('fs');
const path =require('path');

const filePath = path.join(__dirname, 'newfile.txt');
// const writefile = fs.writeFileSync(filePath,'This is the initial data updated');

// console.log(writefile)



// //read file 
// const readfile =fs.readFileSync(filePath,'utf-8')
// console.log(readfile.toString());
// console.log(readfile)


// //appendFile Updated Data.

// const appendFile =fs.appendFileSync(filePath,'\nThis is the initial Data.','utf-8');

// console.log(appendFile)

// //Delte File 

// const filedelete = fs.unlinkSync('test.txt');
// console.log(filedelete);

// //Rename file

// const newUpdateFileName ='updatetest.txt';
// const newFilePath = path.join(__dirname,newUpdateFileName);
// const renamefile = fs.renameSync(filePath, newFilePath);
// console.log(renamefile)
