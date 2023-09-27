const express = require('express')
const mongoose = require ('mongoose')

//express app
const app=express();

const port = 3000;

const link = 'mongodb+srv://Irene:IreneConnecting@codequeen9.cqfeh3s.mongodb.net/'

//app.listen(portNumber,function)

app.listen(port, () => {
                            console.log('listening to port 3000')
                        })