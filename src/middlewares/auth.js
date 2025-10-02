const auth = (req,res,next)=>{
    const token = "abc"
    const isAuthorized = token === "abc"
    if(isAuthorized){
        next()
    }
    else{
        res.status(401).send("Unable to access because you are not an admin")
    }
}

const userAuth = (req,res,next)=>{
    const token = "pqrs"
    const isAuthorized = token === "pqrs"
    if(isAuthorized){
        next()
    }
    else{
        res.status(401).send("User is not verified")
    }
}

module.exports = { auth , userAuth }