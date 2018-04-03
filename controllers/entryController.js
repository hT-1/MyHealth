const db = require('../models/db');
const entryController = {};

entryController.createEntry = (req, res, next) => {
    console.log(req.body);
    const { symptom, notes, entry_date } = req.body;
        //Should post info from req.body to db
    const userEntry = (`INSERT INTO entry (symptom, user_id, notes, entry_date)
    //                     VALUES ('req.body.symptom', req.body.id, 'req.body.notes', 'req.body.entry_date');`);
        //Tested v will add new entry to entry table
    // const addusertesttest = (`INSERT INTO entry (symptom, user_id, notes, entry_date)
    //                     VALUES ('restlessnes', 7777, 'testing test', '2017-09-06');`);
    // const addusertesttwo = (`INSERT INTO entry (symptom, user_id, notes, entry_date)
    //                     VALUES ('fatigue', 6666, 'so tired', '2017-10-07');`);
    console.log('entryController adding here', userEntry);
    //define what data to add from user above, and add as req in query below
    db.query(userEntry, (err,rows) => {
        if (err) {
            throw new Error('DB QUERY FAILED TO ADD NEW ENTRY IN DATABASE', err);
        }
        res.send(`ok`);
    });
};


entryController.readEntry = (req, res, next) => {
    const { symptom, user_id, notes, entry_date } = req.body;
    console.log('entCont, readEntry', req.body)
    const readEntryTxt = (`SELECT symptom FROM entry where user_id = 1234;`);

    console.log('entryController ln26', readEntryTxt)
    db.query(readEntryTxt, (err,result) => {
        if (err) {
            throw new Error('DB QUERY FAILED TO read entry table', err);
        }
    })
    let resArr = []
    let resObj = {}
    res.send('success')
  }

  entryController.updateEntry = (req, res, next) => {
    console.log("entryController update controller")
  }

  entryController.deleteEntry = (req, res, next) => {
    console.log("entryController delete controller")
    //check and updte below function for del entry
    const { type } = req.body;
    const deleteEntryTxt = (`DELETE FROM "entry" WHERE symptom='${symptom}' AND notes='${notes}'`);
    db.query(deleteEntryTxt, (err) => {
        if (err) {
            throw new Error('DB QUERY FAILED TO DELETE FROM DATABASE', err);
        }
        res.send('ok');
    });
  }

module.exports = entryController;
// ******res.send([{date},{symptom_id to type},{notes}])
