const fs =require('fs/promises')
const path = require('path')
const os =require('os');
console.log(os.cpus().length)
const filename ='fsAsync.txt';

const filePath =path.join(__dirname,filename);

// const readFolder = async ()=>{
//     try {
//         const res = await fs.promises.writeFile(filePath);
//         console.log(res);
//     } catch (error) {
//         console.log(error);
//     }
// }


// readFolder();

// //write file
// const writefile =async ()=>{
//     try {
//        await fs.promises.writeFile(filePath,'THis is a file created using fs promises','utf-8');
//         console.log('file created');
//     } catch (error) {
//         console.log(error)
//     }
// }
// writefile();

// //read file 
// const readfile =async ()=>{
//     try {
//        const res= await fs.promises.readFile(filePath,'utf-8');
//         console.log(res);
//     } catch (error) {
//         console.log(error);
//     }
// }
// readfile();


// //update the file 
// const updateFile = async () => {
//     try {
//        await fs.appendFile(filePath,' Hello Mohan','utf-8');
//        console.log("update successfully")
//     } catch (error) {
//         console.log(error);
//     }
// }
// updateFile();

// //Delete File 
// const deleteFile = async () => {
//     try {
//       await  fs.unlink(filePath);
//         console.log("file deleted");
//     } catch (error) {
//         console.log(error);
//     }
// }
// deleteFile();