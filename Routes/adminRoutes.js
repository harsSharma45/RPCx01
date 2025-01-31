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

adminRouter.post("/course",function(req,res){
    res.json({
        message:"signup"
    }) 
})

adminRouter.get("/course/bulk",function(req,res){
    res.json({
        message:"signup"
    }) 
})


module.exports = {
    adminRouter:adminRouter
}