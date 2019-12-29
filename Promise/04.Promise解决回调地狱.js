const fs = require('fs')

function getFileByPath(fpth){
    return new Promise((resolve, reject) => {
        fs.readFile(fpth, 'utf-8', (err, dataStr)=>{
            if (err) return reject(err)
            resolve(dataStr)
        })
    })
}


getFileByPath('./files/1.txt')
.then((data)=>{
    console.log(data)

    return getFileByPath('./files/2.txt')
})
.then((data)=>{
    console.log(data);

    return getFileByPath('./files/3.txt')
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err.message);
})


console.log('ok')