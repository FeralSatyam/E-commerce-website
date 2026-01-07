require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()

require('./config/database')

const PORT = process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`Server started at ${PORT}`)
})
app.get('/', (req, res)=>{
    res.send("Connected to MongoDB");
})