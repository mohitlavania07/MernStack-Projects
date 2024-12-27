const express = require('express')
const app = express();

const logger = (req,res,next)=>{
    console.log(`${new Date()}, Request [${req.method}], [${req.url}]`)
    next();
}
app.use(logger)
app.get('/',(req,res)=>{
    res.send('Hello World')
    })


app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})