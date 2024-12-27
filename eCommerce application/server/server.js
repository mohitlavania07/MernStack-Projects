const express = require('express');
const app = express();
const mongoose = require('mongoose')
require('dotenv').config()

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get('/',(req,res)=>{
    res.json({msg: "Data"})
}) 

// Routes 
app.use('/user',require('./routes/useRouter'))

// connect MongoDb

const URI = process.env.MONGODB_URL;

mongoose.connect(URI)
.then(()=>{ 
    console.log("MongoDB Connected")
}).catch(err => console.log("err"))


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})