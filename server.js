require("dotenv").config();
const express = require('express');
const mongoose = require("mongoose");
const {courseRouter} = require("./Routes/courseRoutes");
const {userRouter} = require("./Routes/userRoutes");
const {adminRouter} = require("./Routes/adminRoutes");
const app = express();

app.use("/user",userRouter);
app.use("/admin", adminRouter);
app.use("/course",courseRouter);



async function main() {
    await mongoose.connect(process.env.MONGO_URI);
    
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
}

main()
