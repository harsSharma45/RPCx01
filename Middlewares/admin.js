const { json } = require("express");

const { JWT_ADMIN_PASSWORD} = require("../config");

function adminMiddleware(req,res,next){

    const token = req.headers.token;

    const decoded = jwt.verify(token,JWT_ADMIN_PASSWORD);

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