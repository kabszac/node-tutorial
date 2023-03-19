// req.method put write ...

const http = require('node:http')

const server = http.createServer((req, res)=> {
    if (req.url === '/'){
        res.writeHead(200, {"content-type":"text/plain"})
        res.end('Welcome home')
    }else if(req.url === '/about'){
        res.writeHead(200, {"content-type":"text/plain"})
        res.end('About page')
    }else if(req.url === '/api'){
        res.writeHead(200, {"content-type":"application/json"})
        res.end(JSON.stringify({name:'ian'}))
    }else{
        res.writeHead(400, {"content-type":"text/plain"})
        res.end('Error no such page') 
    }
})

server.listen(3000, () => {
    console.log('Listening on port 3000')
})

