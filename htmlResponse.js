const { Console } = require('node:console')
const http = require('node:http')
const fs = require('node:fs')


const server = http.createServer((req, res)=> {
    res.writeHead(200, {"content-type":"text/html"})
    fs.createReadStream('./index.html').pipe(res)
    //const read = fs.readFileSync('./index.html', 'utf-8')
    // res.end(read)
})

server.listen(3000, () => {
    console.log('Listening on port 3000')
})

