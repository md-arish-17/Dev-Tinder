const express = require("express")
const app = express()

app.use("/hello",(req,res)=>{
    res.send("hello hello hello")
})

app.use("/xyz",(req,res)=>{
    res.send("heyy its xyz location")
})

app.use("/",(req,res)=>{
    res.send("Hello from arish bhai lalalalala")
})

app.listen(8081,()=>{
    console.log("Port running at 8081")
})