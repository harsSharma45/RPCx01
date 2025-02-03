const {Router} = require("express");
const adminRouter = Router();
const {adminModel, courseModel} = require("../db");
const jwt = require("jsonwebtoken");
const {JWT_ADMIN_PASSWORD} = require("../config");
const { adminMiddleware } = require("../Middlewares/admin"); // Import middleware

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

adminRouter.post("/course", adminMiddleware, async function(req, res) {
    const adminID = req.userId;
    const { title, description, imageUrl, price } = req.body;
    const course = await courseModel.create({
        title: title,
        description: description,
        imageURL: imageUrl,
        price: price,
        creatorID: adminID
    });
    res.json({
        message: "Course created",
        courseId: course._id
    });
});

adminRouter.put("/course", adminMiddleware, async function(req,res){
    const adminID = req.userId;

    const { title, description, imageUrl, price, courseId} = req.body;

    const course = await courseModel.updateOne({
        _id : courseId,
        creatorID: adminID
    }, {

        title : title,
        description : description,
        imageURL : imageUrl,
        price : price, 
        creatorID : adminID
    })

    res.json({
        message:"Course updated",
        courseId : courseId
    }) 
})

adminRouter.get("/bulk", adminMiddleware, async function(req,res){
    const adminID = req.userId;

    const courses = await courseModel.find({
        creatorID:adminID
    });

    res.json({
        message:"Courses retrieved",
        courses
    }) 
})


module.exports = {
    adminRouter:adminRouter
}