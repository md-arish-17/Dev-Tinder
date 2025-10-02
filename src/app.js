const express = require("express")
const app = express()
const { auth, userAuth } = require("./middlewares/auth")

app.use("/user",(err,req,res,next)=>{
    if(err){
        console.log("usman")
        res.status(500).send("Something went wrong")
    }
})

app.get("/getUserData",(req,res)=>{
    throw new Error("jhabru virus")
    res.send("All User Data Sent")
})

app.get("/admin",(req,res)=>{
    try{
        throw new Error("Ant Virus")
        res.send("I got my Data")
    }
    catch{
        res.status(500).send("did'nt get the data")
    }
})


app.listen(8081,()=>{
    console.log("Port running at 8081") 
})