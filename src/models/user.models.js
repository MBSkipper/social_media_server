const mongoose = require('mongoose')

const userSchema = mongoose.Schema ({
    username: String,
    email: String,
    fullName: String,
    bio: String,
    profilePic: String
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)


model.exports = User


/*
NOTES TO CODE
Line 1 - Imports mongoose
Line 3 - creates User Schema
Lines 4-8 key value pairs for the object
Lines 9-10 {timestamps:true} is added as a second argument to mongoose.Schema to provide a timestamp so that when any document is added inside the Schema automatically two new fields are created: created_at and updated_at
*/ 