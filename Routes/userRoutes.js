const {Router} = require("express");

const userRouter = Router();


userRouter.post("/signup",function(req,res){
    res.json({
        messgae:"signup"
    })
})

userRouter.post("/signin",function(req,res){
    res.json({
        messgae:"signup"
    }) 
})

userRouter.get("/courses",function(req,res){
    res.json({
        messgae:"signup"
    })
})


module.exports = {
    userRouter:userRouter
}