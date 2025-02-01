const {Router} = require("express");
const { userModel } = require("../db");

const userRouter = Router();

userRouter.post("/signup", async function(req, res) {
    const { email, password, firstName, lastName } = req.body;
    // hash pwd

    // use zod 
    try {
        await userModel.create({
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
});

userRouter.post("/signin", async function(req, res) {
    const { email, password } = req.body;

    try {
        const user = await userModel.findOne({ email: email, password: password });
        if (user) {
            res.json({
                message: "signin successful"
            });
        } else {
            res.status(401).json({ message: "Invalid credentials" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

userRouter.get("/purchases", function(req, res) {
    res.json({
        message: "signup"
    });
});

module.exports = {
    userRouter: userRouter
};