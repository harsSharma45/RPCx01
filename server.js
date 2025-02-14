require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");

const {courseRouter} = require("./Routes/courseRoutes");
const {userRouter} = require("./Routes/userRoutes");
const {adminRouter} = require("./Routes/adminRoutes");
const app = express();
app.use(express.json()); // else req will be undefine 

app.use((err, req, res, next) => {
    if (err instanceof SyntaxError) {
        return res.status(400).json({ error: "Invalid JSON format" });
    }
    next();
});

app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/course", courseRouter);

async function main() {
    await mongoose.connect(process.env.MONGO_URI);
    app.listen(3000);
    console.log("listening on port 3000");
}

main();