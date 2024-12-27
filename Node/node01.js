// const add = require("./node02")
// const sum = add(2,3);
// console.log(sum);
// console.log("Mohit Lavania")
const fs = require('fs')

// const path = require('path')
// console.log(path.basename(__filename))
// console.log(__filename)

// const fs = require('fs')
// fs.writeFile('text.txt','Mohit Lavania',(err)=>{
//     if(err) throw err;
//     console.log('File created');  
// })


// fs.mkdir('new_directory',(err)=>{
//     if(err){
//         throw err;
//     }
//     console.log('Directory created');
// })

// fs.rmdir('new_directory',(err)=>{
//     if(err){
//         throw err;
//     }
//     console.log('Directory created');
// })

// fs.unlinkSync('text.txt')
// console.log('file deleted')

const http = require('http');
const server = http.createServer((req,res)=>{
    console.log('started')
    res.end('I am response')
})

server.listen(3000,()=>{
    console.log('server started')
})