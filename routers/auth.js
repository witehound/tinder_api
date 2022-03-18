const router = require("express").Router();
const User = require('../models/userModels')
const bcrypt = require("bcrypt")

//register
router.post("/signup", async (req,res)=>{
    try {
        //hashing incoming password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword
        })
        const newUser = await user.save()
        res.json(newUser)
    } catch (error) {
        res.json({status: error, message:"cant register"})
    }
 
 })

module.exports = router