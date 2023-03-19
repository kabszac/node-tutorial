const { Console } = require('node:console')
const http = require('node:http')

const server = http.createServer((req, res)=> {
    const data = {
        name: "Isaac Kabucho",
        age: 23
    }
    res.writeHead(200, {"content-type":"application/json"})
    res.end(JSON.stringify(data))
    // console.log(req)
})

server.listen(3000, () => {
    console.log('Listening on port 3000')
})

