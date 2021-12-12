require('dotenv').config()
const express = require("express");
const cors = require("cors");
const Router = require('./routes/routes')
require('./config/database')
const app = express()

// middlewares
app.use(cors())
app.use(express.json());
app.use('/api', Router)

app.listen(4000 ,()=> console.log('Server listening on port 4000'))

// 36260654393-jruugt14707a8pcdlf33skgor98eth8c.apps.googleusercontent.com

// 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