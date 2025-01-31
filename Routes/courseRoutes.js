const {Router} = require("express");
const courseRouter = Router();

    courseRouter.post("/purchase",function(req,res){
        res.json({
            message:"signup"
        })
    })
    
    courseRouter.get("/preview",function(req,res){
        res.json({
            message:"signup"
        })
    })

module.exports = {
    courseRouter: courseRouter
}