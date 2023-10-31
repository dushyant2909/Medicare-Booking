const mongoose = require('mongoose');
require('dotenv').config()

exports.connect = () => {
    mongoose.connect(process.env.MONGODB_URL, {
        ueNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => console.log("DB Connected Successfully"))
        .catch((error) => {
            console.log("Error connecting Database")
            console.error(error.message);
            process.exit(1);
        })
}
