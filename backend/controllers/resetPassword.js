const user = require('../modals/User')
import mailSender from '../utils/mailSender'
const bcrypt = require('bcrypt')

// LInk to update password controller
exports.forgotPassword = async (req, res) => {
    try {
        const { email } = req.body();
        if (!email) {
            return res.status(401).json({
                success: false,
                message: "Enter details correctly"
            })
        }

        //Verify user
        const userVerify = await user.findOne({ email: email })
        if (!userVerify) {
            return res.status(401).json({
                success: false,
                message: "User not exist"
            })
        }

        // create token
        const token = crypto.randomUUID;

        //update user
        const updatedDetails = await user.findOneAndUpdate({ email: email },
            {
                token: token,
                resetPasswordExpires: Date.now() + 5 * 60 * 1000
            },
            { new: true })

        // the link through which we change password
        const url = `http://localhost:3000/update-password/${token}`

        // send mail containing link
        const mailResponse = await mailSender(email, "Password reset link",
            `Link: ${url}`);

        return res.status(200).json({
            success: true,
            message: "Email sent successfully for reset password"
        })
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in sending password reset link",
            error: error.message
        })
    }
}

// controller to reset password
exports.resetPassword = async (req, res) => {
    try {
        // token ko params se le skte the to body mein kaha se agya
        // frontend ne dala sabko
        const { newPassword, confirmPassword, token } = req.body;
        if (!password || !confirmPassword || !token) {
            return res.status(401).json({
                success: false,
                message: "Enter details correctly"
            })
        }

        if (newPassword != confirmPassword) {
            return res.status(401).json({
                success: false,
                message: "Password and confirm password do not match"
            })
        }

        // get user details from db using token
        // that's why we add a token field in user database to access user here
        const userDetails = await user.findOne({ token: token });
        // if no entry
        if (!userDetails) {
            return res.status(401).json({
                success: false,
                message: "Token is invalid"
            })
        }
        // if token time expires
        if (userDetails.resetPasswordExpires < Date.now()) {
            return res.status(401).json({
                success: false,
                message: "Token expires, please regenerate"
            })
        }

        // hash new password
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        //update user
        await user.findOneAndUpdate({
            token: token
        }, {
            password: hashedPassword
        }, { new: true });

        return res.status(200).json({
            success: true,
            message: "Password reset successfully"
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in reset password controller",
            error: error.message
        })
    }
}