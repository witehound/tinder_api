const express = require('express')
const dotenv = require("dotenv")
const cors = require('cors')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require("mongoose")
const authRoute = require('./routers/auth')

dotenv.config()

//middle wares
const app = express()

//connect my mongodb
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser : true,
    useUnifiedTopology: true
}, ()=> console.log("mongoDB is running!"))


app.use(express.json())
app.use(helmet())
app.use(morgan("tiny"))
app.use(cors())


app.listen(4000, ()=>{
    console.log("server is live on port 4000")
})

app.use('/auth', authRoute)