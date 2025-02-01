const {Router} = require("express");
const adminRouter = Router();
const {adminModel} = require("../db");

adminRouter.post("/signup",function(req,res){
    res.json({
        message:"signup"
    })
})

adminRouter.post("/signin",function(req,res){
    res.json({
        message:"signup"
    }) 
})

adminRouter.post("/",function(req,res){
    res.json({
        message:"signup"
    }) 
})

adminRouter.put("/",function(req,res){
    res.json({
        message:"signup"
    }) 
})

adminRouter.get("/bulk",function(req,res){
    res.json({
        message:"signup"
    }) 
})


module.exports = {
    adminRouter:adminRouter
}