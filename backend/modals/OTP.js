const mongoose = require('mongoose')
import mailSender from '../utils/mailSender';

//Schema
const otpSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    otp: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        expired: 5 * 60,
    }
});

//Pre middleware ke liye ek function jo mail send karega
// Schema ke baad and model se pehle
async function sendVerificationEmail(email, otp) {
    try {
        const mailResponse = mailSender(email, "Verification email", otp)
        console.log("Mail response: ", mailResponse);
    }
    catch (error) {
        console.log("Error in sending mail:", error.message)
        throw error;
    }
}

//Pre middleware
otpSchema.pre("save", async function (next) {
    await sendVerificationEmail(this.email, this.otp);
    next();
})

module.exports = mongoose.model("OTP", otpSchema);