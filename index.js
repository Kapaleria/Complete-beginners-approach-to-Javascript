const express = require('express')

//express app
const app=express();

const port = 3000;

//app.listen(portNumber,function)

app.listen(port, () => {
                            console.log('listening to port 3000')
                        })