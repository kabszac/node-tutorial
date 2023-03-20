
const crypto = require('node:crypto')


process.env.UV_THREAD_POOL_SIZE = 8
const max = 16
const start = Date.now()

for (let i=0; i<max; i++){
    crypto.pbkdf2("password", 'salt', 10000, 512, 'sha512', () =>{
        console.log(`Hash: ${i+1}`, Date.now()-start)
    })
}





