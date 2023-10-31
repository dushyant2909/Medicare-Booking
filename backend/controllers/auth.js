const user = require('../modals/User');
const otpModel = require('../modals/OTP');
const { customAlphabet } = require('nanoid');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
required('dotenv').config()
import mailSender from '../utils/mailSender';

// Create a generator with a custom alphabet containing only digits (0-9)
const numericAlphabet = '0123456789';
const otpGenerator = customAlphabet(numericAlphabet, 6);

// Send OTP controller
exports.sendOtp = async (req, res) => {
    try {
        const { email } = req.body;

        // Check for the user
        const userExist = await user.findOne({ email });
        if (userExist) {
            return res.status(401).json({
                success: false,
                message: "User already exists"
            });
        }

        // Generate a 6-digit numeric OTP
        const otp = otpGenerator();

        console.log("OTP: ", otp);

        // Now save OTP in the database
        const otpPayload = { email, otp };
        const otpBody = await otpModel.create(otpPayload);
        console.log("OTP Body:", otpBody);

        return res.status(200).json({
            success: true,
            message: "OTP sent successfully",
            otp: otp,
        });
    } catch (error) {
        console.log("Error in sending OTP:", error.message);
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

//Signup Controller
exports.signupController = async (req, res) => {
    try {
        // Fetch data
        const { firstname, lastname, email, password, role, gender, otp } = req.body;

        if (!fullname || !email || !password || !otp) {
            return res.status(400).json({
                success: false,
                message: "All details are necessary"
            })
        }

        //Check for user
        const userExist = await user.findOne({ email: email });

        if (userExist) {
            return res.status(401).json({
                success: false,
                message: "User already registered",
            })
        }

        // Find most recent otp
        const recentOtp = await otpModel.find({ email: email }).sort({ createdAt: -1 }).limit(1);
        console.log("Recent opt:", recentOtp);
        if (recentOtp.length === 0) {
            return res.status(400).json({
                success: false,
                message: "Recent OTP not found",
            })
        }
        else if (otp !== recentOtp) {
            return res.status(400).json({
                success: false,
                message: "Invalid OTP",
            })
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        //Create entry of user in database
        const userEntry = await user.create({
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: hashedPassword,
            role: role,
            gender: gender,
            image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstname} ${lastname}`
        })

        // Return Response
        return res.status(200).json({
            success: true,
            message: "User registered successfully",
            userEntry
        })

    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in signup controller",
            error: error.message

        })
    }
}

// Login Controller
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(401).json({
                success: false,
                message: "Data not received"
            })
        }

        //Check user
        const checkUser = await user.findOne({
            email: email
        })

        if (!checkUser) {
            return res.status(400).json({
                success: false,
                message: "User not registered, kindly login"
            })
        }

        // Compare password then create token
        if (await bcrypt.compare(password, user.password)) {
            const payload = {
                email: user.email,
                id: user._id,
                role: user.role,
            }
            // create token
            const token = jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn: '2h',
            })
            user.token = token
            user.password = undefined

            // Create cookie and send response
            const options = {
                expire: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly: true
            }
            res.cookie("token", token, options).status(200).json({
                success: true,
                message: "Logged in successfully",
                token,
                user
            })
        }

        else {
            return res.status(401).json({
                success: false,
                message: "Incorrect Password"
            })
        }

    }
    catch (err) {
        return res.status(500).json({
            success: false,
            message: "Error in login controller",
            error: err.message
        })
    }
}

//Change password controller
exports.changePassword = async (req, res) => {
    try {
        //Fetch data
        const { password, confirmPassword, resetPasswordToken } = req.body;

        //validation
        if (!password || !confirmPassword || !resetPasswordToken) {
            return res.status(404).json({
                success: false,
                message: "Please fill all details correctly"
            })
        }

        if (password !== confirmPassword) {
            return res.json({
                success: false,
                message: "Password not match"
            })
        }

        //get user details from db using token
        const userDetails = await User.findOne({ resetPasswordToken })

        //if no entry - invalid token
        if (!userDetails) {
            return res.json({
                success: false,
                message: "Token is invalid"
            });
        }

        //token time check
        if (userDetails.resetPasswordExpiration < Date.now()) {
            return res.status(403).json({
                success: false,
                message: "Token expired, please regenerate token"
            });
        }

        //Hash new password
        const hashedPwd = await bcrypt.hash(password, 10);

        //Password update in db
        const result = await user.findOneAndUpdate(
            { resetPasswordToken: resetPasswordToken },
            { password: hashedPwd },
            { new: true }
        )

        //Send notification to mail
        const emailSent = await mailSender(userDetails.email, "Password Updated Successfully", passwordUpdate(userDetails.email, userDetails.firstName + " " + userDetails.lastName));

        if (!emailSent) {
            return res.status(200).json({
                success: false,
                message: "password changed but mail not sent as notification"
            })
        }

        return res.status(200).json(
            {
                success: true,
                message: "Password Reset successfully",
                user: result
            }
        )
    }
    catch (error) {
        console.error("Error in resetting password", error.message);
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}
