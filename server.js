require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");

const {courseRouter} = require("./Routes/courseRoutes");
const {userRouter} = require("./Routes/userRoutes");
const {adminRouter} = require("./Routes/adminRoutes");
const app = express();
app.use(express.json()); // else req will be undefine 

app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/course", courseRouter);

async function main() {
    
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    app.listen(3000);
    console.log("listening on port 3000");
}

main();