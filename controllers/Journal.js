const Journal = require("../model/model")

const getJournals=(req,res)=>{
    res.send('I am getting journals')
}

//create Journal
const createJournal =(req,res)=>{
            const journal = new Journal({
                date:req.body.date,
                title: req.body.title,
                content:req.body.content
            });
                
            // journal.save((err,journal)=>{
            //     if(err){
            //         res.send (err)
            //     }
            //     res.json(journal)
            // })
            
            // Save the document using a promise
        journal.save()
        .then(savedDocument => {
         console.log('Document saved successfully:', savedDocument);
            })
            .catch(error => {
                        console.error('Error saving document:', error);
                            });
}

module.exports={getJournals, createJournal} 
//export the function returned results

// npm i
