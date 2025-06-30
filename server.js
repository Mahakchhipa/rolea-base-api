const mongoose = require("mongoose")
const express = require("express")
const usermodel = require("./schemas/userModel")
const app = express();
require('dotenv').config()
const port = process.env.port

const mongourl = process.env.MOONGO_URL

mongoose.connect.MOONGO_URL

app.use(express.json())

// const superadminroute = require('./router/SuperAdminRoute');
// const clientroute = require('./router/clientRoute');
// const userroute = require('./router/userRoute');
// app.use('/superadmins', superadminroute);
// app.use('/clients', clientroute);
// app.use('/users', userroute);


app.listen(port , ()=>{
    console.log( ` Server is ruuning on this port ${port}`)
})