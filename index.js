const express = require('express');
const mongoose = require ('mongoose'); //connect to mongo db
const cors = require ('cors')

const router = require('./routes/routes') // we are importing the routers that we exported in routes.js

//express app
const app=express();

const port = 4001;
const link = 'mongodb+srv://Irene:IreneConnecting@codequeen9.cqfeh3s.mongodb.net/'


//CONNECT TO MONGODB
mongoose.connect(link,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('Connected to MongoDB')
}).catch((err)=>{
    console.log("Encountered an error")
})


//middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(router)

//URL - link
//https://us02web.zoom.us/j/81268080645?pwd=TksvbmdES05vM2tTY1BoTU5yUDQ2QT09

//app.listen(portNumber,function)

//CRUD operations + methods

app.listen(port, () => {
                            console.log('listening to port 4001')
                        })