const { json } = require("express");

const { JWT_USER_PASSWORD} = require("../config");

function userMiddleware(req,res,next){

    const token = req.headers.token;

    const decoded = jwt.verify(token,JWT_USER_PASSWORD);

    if(decoded){
        req.userID = decoded.id;
        next()
    }
    else{
        res.status(403).json({
            messgae : "You aren't signed in"
        })
    }
}

module.exports = {
    userMiddleware : userMiddleware
}