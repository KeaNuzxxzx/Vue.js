const fs = require('fs')
const path = require('path')



function getFileByPath(fpath, succCb, errCb){
    fs.readFile(fpath, 'utf-8', (err, dataStr)=>{
        if(err) return errCb(err)

        succCb(dataStr)
    })
}

getFileByPath(path.join(__dirname, './files/1.txt'), (dataStr)=>{
    console.log(dataStr)
}, (err)=>{
    console.log('failed, '+ err.message);
})