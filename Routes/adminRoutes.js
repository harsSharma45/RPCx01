const {Router} = require("express");
const adminRouter = Router();
const {adminModel} = require("../db");
const jwt = require("jsonwebtoken");
const JWT_ADMIN_PASSWORD = "12121212"

adminRouter.post("/signup", async function(req,res){
    const { email, password, firstName, lastName } = req.body;
    try {
        await adminModel.create({
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName
        });
        res.json({
            message: "signup succeeded"
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

adminRouter.post("/signin", async function(req,res){
    const { email, password} = req.body;
    try {
        const admin = await adminModel.findOne({
            email: email,
            password: password
        });
        if (admin) {
            const token = jwt.sign({
                id: admin._id
            }, JWT_ADMIN_PASSWORD);

                // session based 

            res.json({
                token : token
            })

        } else {
            res.status(401).json({
                 message: "Invalid credentials"
                });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
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