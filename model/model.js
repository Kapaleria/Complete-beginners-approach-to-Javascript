const mongoose = require('mongoose') 

const JournalSchema  = new mongoose.Schema({
    //a schema is more-like a blueprint of our database
    date: String,
    title: String,
    content: String
})

module.exports= mongoose.model('Journal', JournalSchema)