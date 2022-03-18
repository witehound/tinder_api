const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    about: {
        type: String,
        default:"",
        max: 50
    },
    dob_day: {
        type: Number,
        max: 50
    },
    dob_month: {
        type: Number,
        max: 50
    },
    dob_year: {
        type: Number,
        max: 50
    },
    gender_identity: {
        type: String,
        max: 50
    },
    gender_intrest: {
        type: String,
        max: 50
    },
    firstname: {
        type: String,
        min: 5,
        max: 20,
        unique: true
    },
    username: {
        type: String,
        min: 5,
        max: 20,
        unique: true
    },
    email: {
        type: String,
        required: true,
        max: 50,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 8,
        max: 50,
    },
    profilePicture: {
        type: String,
        default: ""
    },
    mathches: {
        type: Array,
        default: []
    },
    show_gender: {
        type: Boolean,
        default: false
    }
},
{timestamps:true})

module.exports = mongoose.model("User", userSchema)