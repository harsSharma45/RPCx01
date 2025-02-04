const { Router } = require("express");
const { userMiddleware } = require("../Middlewares/user");
const { courseModel, purchaseModel } = require("../db");
const courseRouter = Router();

courseRouter.post("/purchase", userMiddleware, async (req, res) => {
	const { courseId } = req.body.courseID;
    const { userID} = req.userID; 
	try {
		const course = await courseModel.findById(courseId);
		if (!course) return res.status(404).json({
             message: "Course not found" 
            });
		const existingPurchase = await purchaseModel.findOne({ 
            userID: req.userID,
             courseID: courseId
            });
		if (existingPurchase) return res.status(400).json({
             message: "Course already purchased"
            });
		await purchaseModel.create({ userID: req.userID,
             courseID: courseId
            });
		res.json({
             message: "Course purchased successfully"
            });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

courseRouter.get("/preview", async (req, res) => {
	try {
		const courses = await courseModel.find({}, {
            title: 1,
            description: 1,
            price: 1,
            imageURL: 1
        });
		res.json({
             courses
            });
	} catch (error) {
		res.status(500).json({
            error: error.message
        });
	}
});

module.exports = { courseRouter };