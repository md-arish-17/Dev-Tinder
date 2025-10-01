const express = require("express")
const app = express()

app.get("/user/:userId/:userName/:password",(req,res)=>{
    console.log(req.params)
    res.send({firstName:"Arish",age:21})
})

app.listen(8081,()=>{
    console.log("Port running at 8081") 
})