const express = require("express")
const app = express()
const { auth, userAuth } = require("./middlewares/auth")

// app.use("/admin",(req,res,next)=>{
//     const token = "xyz"
//     const isAuthorized = token === "xyz"
//     if(isAuthorized){
//         next()
//     }
//     else{
//         res.status(401).send("you are Not an Admin")
//     }
// })

app.use("/admin", auth)

app.get("/user", userAuth, (req,res)=>{
    res.send("User details fetched successfully")
})

app.get("/admin/getAllData",(req,res)=>{
    res.send("All Data Successfully Retreive")
})

app.delete("/admin/deleteUser",(req,res)=>{
    res.send("User Deleted Successfully")
})

app.listen(8081,()=>{
    console.log("Port running at 8081") 
})