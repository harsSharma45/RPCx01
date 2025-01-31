const express = require('express');
const {courseRouter} = require("./Routes/courseRoutes");
const {userRouter} = require("./Routes/userRoutes");
const {adminRouter} = require("./Routes/adminRoutes");
const app = express();

app.use("/user",userRouter);
app.user("/admin", adminRouter);
app.use("/course",courseRouter);


app.listen(3000,()=>{
    console.log("Server is running");
});
