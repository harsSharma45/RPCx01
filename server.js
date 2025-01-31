const express = require('express');
const {courseRouter} = require("./Routes/courseRoutes");
const {userRouter} = require("./Routes/userRoutes");
const app = express();

app.use("/user",userRouter);
app.use("/course",courseRouter);


createUserRoutes(app);
createCourseRoutes(app);

app.listen(3000,()=>{
    console.log("Server is running");
});
