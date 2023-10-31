const jwt = require('jsonwebtoken')
const user = require('../modals/User')
require('dotenv').config()

// authentication
// In this we verify json web token
//Three ways to extract token - cookie, body, bearer token(best)
exports.auth = async (req, res, next) => {
    try {
        // extract token
        const token = req.cookies.token || req.body.token
            || req.header('Authorisation').replace("Bearer ", "")

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Token is missing"
            })
        }

        // Verify the token
        try {
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            console.log("Decode:", decode);
            req.user = decode;
        }
        catch (error) {
            // Verification failed
            return res.status(401).json({
                success: false,
                message: "Token is invalid"
            })
        }

        next();//So that we move to next middleware
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong while verifying the token",
            error: error.message
        })
    }
}

//isDoctor
exports.isDoctor = async (req, res, next) => {
    try {
        if (req.user.role !== 'Doctor') {
            return res.status(401).json({
                success: false,
                message: "This is protected route for Doctor only"
            })
        }
        next();
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "User role can't be ",
            error: error.message
        })
    }
}

//isPatient
exports.isPatient = async (req, res, next) => {
    try {
        if (req.user.role !== 'Patient') {
            return res.status(401).json({
                success: false,
                message: "This is protected route for Patient only"
            })
        }
        next();
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "User role can't be ",
            error: error.message
        })
    }
}
