require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT;

const mongoDBURL = process.env.mongoDBURL;

mongoose.connect(mongoDBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
