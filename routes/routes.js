const router = require('express').Router()
const {getJournals, createJournal} = require('../controllers/Journal') //import the output of the function

//CRUD methods
//Create, Read, Update, Delete
// POST,GET, PATCH, DELETE

//(file_path, function)

router.get("/response", (req,res)=>{
    res.send('I am a response');
})


router.get("/getJournals", getJournals)

//CREATE USING THE POST METHOD

router.post("/createJournal", createJournal)

module.exports =router; //exporting the router

