// returns a destination stream which enables chaining
// however it has to be readable duplex or transform(destination)

const fs = require('node:fs')
const zlib = require('node:zlib')

const gzip = zlib.createGzip()

const readableStream = fs.createReadStream('./file.txt', {
    encoding:'utf-8'
})

const writeableStream = fs.createWriteStream('./file2.txt')

readableStream.pipe(gzip).pipe(fs.WriteStream('./file2.txt.gz'))

readableStream.pipe(writeableStream)