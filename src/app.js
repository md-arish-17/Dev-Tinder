const express = require("express")
const app = express()

app.use("/",(req,res,next)=>{
    console.log("Response 1 is here")
    next()
})

app.use("/user",(req,res,next)=>{
    console.log("Response 2")
    next()
},(req,res,next)=>{
    console.log("Response 3")
    res.send("Response 3")
})

app.listen(8081,()=>{
    console.log("Port running at 8081") 
})