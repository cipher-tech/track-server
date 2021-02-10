const express = require("express")
const Mongoose = require("mongoose")
const User = Mongoose.model("User")
const router = express.Router()

router.post('/signup', (req,res) => {
    console.log(req.body);
    res.send("made a post request ")
}) 

module.exports = router