fs.promises.writeFile(filePath,'This is initial data','utf-8').then((data)=> console.log(data)).catch((err)=>console.log(err));
