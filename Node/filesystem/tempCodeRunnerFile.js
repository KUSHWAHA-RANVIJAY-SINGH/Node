
fs.promises.writeFile(filePath,'This is initial data').then((data)=> console.log('Created..')).catch((err)=>console.log(err));