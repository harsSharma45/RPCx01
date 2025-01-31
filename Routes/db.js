const mongoose = require("mongoose");
const Schema  =  mongoose.Schema;
const objectID = mongoose.type.objectID;

const userSchema = Schema({
    email : {type : String, unique : true},
    password : String,
    firstName : String,
    lastName : String,
});

const adminSchema = Schema({
    email : {type : String, unique : true},
    password : String,
    firstName : String,
    lastName : String,
});

const courseSchema = Schema({
    title : String,
    description : String,
    price : Number,
    imageURL : String,
    creatorID : objectID,
});

const purchaseSchema = Schema({
    userID : objectID,
    courseID : objectID,
});

const userModel = mongoose.Model("user", userSchema);
const adminModel = mongoose.Model("admin", adminSchema);
const courseModel = mongoose.Model("course", courseSchema);
const purchaseModel = mongoose.Model("purchase", purchaseSchema);