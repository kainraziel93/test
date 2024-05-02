const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    firstname: { type: String },
    lastname: { type: String },
    email: { type: String },
    phoneNumber: {type:String},
})
module.exports = mongoose.model("users", userSchema)
