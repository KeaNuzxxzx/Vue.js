const fs = require('fs')


// var p1 = new Promise((resolve, reject) => {
//     fs.readFile('./files/2.txt', 'utf-8', (err, dataStr)=>{
//         if(err) throw err
//         console.log(dataStr);
//     })
// });


function getFileByPath(fpth){
    var p1 = new Promise((resolve, reject) => {
        fs.readFile(fpth, 'utf-8', (err, dataStr)=>{
            // if(err) throw err
            // console.log(dataStr);
            if(err) return reject(err)
            resolve(dataStr)
        })
    })
    console.log('函数执行完啦');
    return p1
}

var p = getFileByPath('./files/2.txt')
p.then((dataStr)=>{
    console.log(dataStr);
    console.log('succsess');
}, (err)=>{
    console.log(err.message)
})