const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    username: {
        type: String,
    }
})

module.exports = mongoose.model("User", userSchema)