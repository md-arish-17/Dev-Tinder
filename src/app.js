const express = require("express")
const app = express()

app.use("/user",
    (req,res,next)=>{
        console.log("Route 1 Called")
        next()
        // res.send("Response 1")
},
    (req,res,next)=>{
        console.log("Response 2 called")
        // res.send("Response 2")
        next()
    },
    (req,res,next)=>{
        console.log("Response 3 Called")
        next()
    },
    (req,res)=>{
        console.log("Response 4 called")
        res.send("Response 4")
    }
)

app.listen(8081,()=>{
    console.log("Port running at 8081") 
})