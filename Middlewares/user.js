const { json } = require("express");
const jwt = require("jsonwebtoken");
const { JWT_USER_PASSWORD } = require("../config");

function userMiddleware(req, res, next) {
	const token = req.headers.token;
	try {
		const decoded = jwt.verify(token, JWT_USER_PASSWORD);
		req.userID = decoded.id;
		next();
	} catch {
		res.status(403).json({ message: "You aren't signed in" });
	}
}

module.exports = { userMiddleware };