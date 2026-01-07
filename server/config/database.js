require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()

const mongoDBURL = process.env.MONGODB_URI;
const PORT = process.env.PORT;

mongoose.connect(mongoDBURL)
    .then(() => console.log("Connection Established"))
    .catch((err) => console.log("Error connecting mongodb", err));
