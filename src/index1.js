require("./models/User")
const express = require("express")
const Mongoose = require("mongoose")
const authRoutes = require("./routes/authRoutes")
const bodyParser = require("body-parser")
const app = express()
const password = "4DUJ6qEaQvmBbj4"
const mongoURI ="mongodb+srv://admin:4DUJ6qEaQvmBbj4@cluster0.wwxiu.mongodb.net/Cluster0?retryWrites=true&w=majority"

Mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true
})
Mongoose.connection.on("connected", () => {
    console.log("connected mongoose");
})
Mongoose.connection.on("error", (err) => {
    console.log("Error connecting to mongoose", err);
})

app.use(bodyParser.json())

app.use(authRoutes)
app.get("/", (req,res) => {
    res.send("hi there")
})

app.listen(3000, () => {
    console.log("running at 3000");
})