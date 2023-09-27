const express = require('express');
const mongoose = require ('mongoose'); //connect to mongo db

//express app
const app=express();

const port = 3000;
const link = 'mongodb+srv://Irene:IreneConnecting@codequeen9.cqfeh3s.mongodb.net/'

//CONNECT TO MONGODB
mongoose.connect(link,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

//stores the inputs in documents
const Journal = mongoose.model('Journal',{
    date: String,
    title: String,
    content: String
})


//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//URL - link
//https://us02web.zoom.us/j/81268080645?pwd=TksvbmdES05vM2tTY1BoTU5yUDQ2QT09

//app.listen(portNumber,function)

//CRUD operations + methods
//create our first journal 

app.post('/journal', (req,res)=>{
 
})

app.listen(port, () => {
                            console.log('listening to port 3000')
                        })