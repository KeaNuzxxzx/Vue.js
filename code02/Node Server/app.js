const http = require('http')

const server = http.createServer()
const urlModule = require('url') // pathname query

server.on('request', function(req, res){
    // const url = req.url
    const { pathname: url, query } = urlModule.parse(req.url, true)
    if (url === '/getscript') {
        var data = {
            name: 'xjj',
            age: 18,
            gender: 'girl'
        }
        
        var scriptStr = `${query.callback}(${JSON.stringify(data)})`
        res.end(scriptStr)
    } else {
        res.end('404')
    }

})

server.listen(3000, function() {
    console.log('server listen at http://127.0.0.1:3000')
})