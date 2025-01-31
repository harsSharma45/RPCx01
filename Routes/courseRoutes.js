const {Router} = require("express");
const courseRouter = Router();

    courseRouter.post("/purchase",function(req,res){
        res.json({
            messgae:"signup"
        })
    })
    
    courseRouter.get("/preview",function(req,res){
        res.json({
            messgae:"signup"
        })
    })

module.exports = {
    courseRouter: courseRouter
}