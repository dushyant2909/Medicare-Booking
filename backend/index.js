const cookieParser = require('cookie-parser');
const express = require('express');
require('cookie-parser');
require('dotenv').config();

const app = express();

const port = process.env.PORT || 8000;

const corsOptions = {
    origin: true,
};

app.get('/', (req, res) => {
    res.send("API is working");
})

//Middleware
app.use(express.json());
app.use(cookieParser());
app.use(corsOptions(corsOptions));

app.listen(port, () => {
    console.log("Server is running on port " + port);
})