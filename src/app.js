const express = require("express")
const app = express()

app.get("/user",(req,res)=>{
    res.send({name:"Arish",age:21})
})

app.post("/user",(req,res)=>{
    res.send("Data Submitted")
    console.log("Data Submitted Successfully in the Database")
})

app.delete("/user",(req,res)=>{
    res.send("Data Deleted")
    console.log("Data Deleted Successfully")
})

app.use("/hello/2",(req,res)=>{
    res.send("usman hello bol rhe hai")
})

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