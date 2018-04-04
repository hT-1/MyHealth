const db = require('../models/db');
const entryController = {};

entryController.createEntry = (req, res, next) => {
    console.log(req.body);
    const { symptom, notes, entry_date } = req.body;
        //Should post info from req.body to db
        //Test functionality with Where condition
    const userEntry = (`INSERT INTO entry (symptom, user_id, notes, entry_date)
                         VALUES ('symptom', user_id, 'notes', 'entry_date');`)

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

entryController.readAllOnDate = (req, res, next) => {
    const { symptom } = req.body;
    console.log('entryCont, readReadAll', req.body)
    //GET request to retrieve all symptoms for a given date
    const readEntryTxt = (`SELECT * FROM entry WHERE entry_date = 'req.body.entry_date';`);
    console.log('entryController ln32', readEntryTxt)
    db.query(readEntryTxt, (err,result) => {
        if (err) {
            throw new Error('DB QUERY FAILED TO read entry table', err);
        }
        res.send('success')
    });
};

entryController.readFrequency = (req, res, next) => {
    const { symptom, entry_date } = req.body;
    console.log('entCont, readEntry', req.body)
    //Takes start and end date for frequency of symptoms for D3 chart
    const readEntryTxt = (`SELECT * FROM entry WHERE entry_date >= '2017-02-01' AND entry_date <  '2017-08-01';`);
    //Tested in ElephantSQL with success for date. No need for UNIX!!!!
    //const readEntryTxt = (`SELECT * FROM entry WHERE entry_date >= '2017-02-01' AND entry_date <  '2017-08-01';`);
    console.log('entryController ln26', readEntryTxt)
    db.query(readEntryTxt, (err,result) => {
        if (err) {
            throw new Error('DB QUERY FAILED TO read entry table', err);
        }
    })
    res.send('success')
}

  entryController.updateEntry = (req, res, next) => {
    console.log("entryController update controller")
  }

  entryController.deleteEntry = (req, res, next) => {
    console.log("entryController delete controller")
    //check and updte below function for del entry
    const { symptom, notes, entry_date } = req.body;
    const deleteEntryTxt = (`DELETE FROM "entry" WHERE symptom='${symptom}' AND notes='${notes}' AND entry_date='${entry_date}'`);
    console.log('to be deleted', deleteEntryTxt)
    db.query(deleteEntryTxt, (err) => {
        if (err) {
            throw new Error('DB QUERY FAILED TO DELETE FROM DATABASE', err);
        }
        res.send('ok');
    });
  }

module.exports = entryController;
// ******res.send([{date},{symptom_id to type},{notes}])
