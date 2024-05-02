const express = require("express")
const mongoose = require("mongoose")
const app = express()
app.use(express.json())
const User = require('./User')



try{
    mongoose.connect('mongodb+srv://achaadam1993:Vfo4awNSxG78XRjd@peak-people.qkdeyuo.mongodb.net/test_database?retryWrites=true&w=majority&appName=peak-people')
    console.log("succefull login to db")
}
catch(e){
    console.log(`error login to db ${e}`)
}

app.listen(9001,()=>{
    console.log("server started on port 9001")
})
app.get('/',(req,res)=>{
    res.send("hello word")
})









