const { Console } = require('node:console')
const http = require('node:http')
const fs = require('node:fs')


const server = http.createServer((req, res)=> {
    const name = 'Isaac'
    res.writeHead(200, {"content-type":"text/html"})
    // fs.createReadStream('./index.html').pipe(res)
    let read = fs.readFileSync('./index.html', 'utf-8')
    read = read.replace('{{name}}', name)
    res.end(read)
})

server.listen(3000, () => {
    console.log('Listening on port 3000')
})

