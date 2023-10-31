const mongoose = require('mongoose')

//Create a schema
const doctorSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
    },
    image: {
        type: String,
    },
    ticketPrice: {
        type: Number,
    },
    role: {
        type: String,
    },
    //Fields for doctor only
    specialization: {
        type: String,
    },
    qualifications: {
        type: Array,
    },
    experiences: {
        type: Array,
    },
    bio: {
        type: String,
        maxLength: 50
    },
    about: {
        type: String,
    },
    timeSlots: {
        type: Array,
    },
    reviews: [{
        type: mongoose.Types.Schema.ObjectId,
        ref: "Review"
    }],
    totalRating: {
        type: Number,
        default: 0
    },
    isApproved: {
        type: String,
        enum: ['pending', 'approved', 'cancelled'],
        default: 'pending'
    },
    appointments: {
        type: mongoose.Types.Schema.ObjectId,
        ref: 'Appointments'
    }
})

module.exports = mongoose.model("Doctor", doctorSchema);