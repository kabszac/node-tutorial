//work with data in chunks instead of waiting for the data to be available at once
// inherits from the emiiter class

const fs = require('node:fs')

const readableStream = fs.createReadStream('./file.txt', {
    encoding:'utf-8'
})

const writeableStream = fs.createWriteStream('./file2.txt')

readableStream.on('data', (chunk) => {
    console.log(chunk)
    writeableStream.write(chunk)
})
