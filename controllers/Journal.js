const getJournals=(req,res)=>{
    res.send('I am getting journals')
}

//create Journal
const createJournal =(req,res)=>{
            const journal = new journal({
                date:req.body.date,
                title: req.body.title,
                content:req.body.content
            });

            journal.save((err,journal)=>{
                if(err){
                    res.send (err)
                }

                res.json(journal)
            })
            
}

module.exports={getJournals, createJournal} 
//export the function returned results