const { json } = require("express");
const jwt = require("jsonwebtoken");
const { JWT_ADMIN_PASSWORD } = require("../config");

function adminMiddleware(req, res, next) {
    const token = req.headers.token;
    if (!token) {
        return res.status(401).json({ message: "Authorization token required" });
    }
    try {
        const decoded = jwt.verify(token, JWT_ADMIN_PASSWORD);
        if (decoded) {
            req.userId = decoded.id; 
            next();
        } else {
            res.status(403).json({ message: "You aren't signed in" });
        }
    } catch (error) {
        res.status(403).json({ message: "Invalid token", error: error.message });
    }
}

module.exports = {
    adminMiddleware: adminMiddleware
};