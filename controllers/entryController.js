const db = require('../models/db');
const entryController = {};

entryController.createEntry = (req, res, next) => {
    console.log(req.body);
    const { symptom, user_id, notes, entry_date } = req.body;
        //Should post info from req.body to db, PG test done
        //Test functionality with Where condition
    const userEntry = (`INSERT INTO entry (symptom, user_id, notes, entry_date)
                         VALUES ('${symptom}', ${user_id}, '${notes}', '${entry_date}');`)

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
    // const { entry_date, symptom, notes } = req.body;
    // const queryArr = [];
    console.log(req.params)
    //GET request to retrieve all symptoms/notes for date range. Tested in Elephant, not POSTMAN
    const readEntryTxt = (`SELECT entry_date, symptom, notes, _id
                          FROM "entry"
                          WHERE entry_date >= '${req.params.date}'
                          AND user_id = '${req.params.user_id}';`);
    db.query(readEntryTxt, (err,result) => {
        if (err) {
            throw new Error('DB QUERY FAILED TO read entry table', err);
        }
        function sendFormat(array) {
          console.log(array)
        var entries = {}
          for(var i = 0; i < array.length; i++) {
            //console.log(JSON.stringify(array[i]["entry_date"]))
            var date = JSON.stringify(array[i]["entry_date"]).slice(1,11);
            if (!entries[date]){
              entries[date]=[];
              entries[date].push({"id": array[i]._id, "type":array[i].symptom, "notes":array[i].notes})
            }
            else if (entries[date]) {
              entries[date].push({"id": array[i]._id, "type":array[i].symptom, "notes":array[i].notes})
            }
        }
        return entries;
    }
        res.json(sendFormat(result.rows))
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
    const { symptom, user_id, notes, entry_date } = req.body;
          //adding for test
    const updateEntryTxt = (`UPDATE entry SET symptom = '${symptom}', notes = '${notes}', entry_date = '${entry_date}'`)
  }

      //deleted in Elephant through Postman
  entryController.deleteEntry = (req, res, next) => {
    //check and updte below function for del entry
    const id = req.params.id;
    const deleteEntryTxt = (`DELETE FROM "entry" WHERE _id = ${id}`);
    db.query(deleteEntryTxt, (err) => {
        if (err) {
            throw new Error('DB QUERY FAILED TO DELETE FROM DATABASE', err);
        }
        res.json({success: 'ok'});
    });
  }

module.exports = entryController;
// ******res.send([{date},{symptom_id to type},{notes}])


//elephantSQL queryArr
// SELECT * FROM "entry" INNER JOIN "symptom" ON (user_id = user_id)
// WHERE entry_date >= '2017-02-01' AND entry_date <  '2017-08-01';
//results
// _id	symptom	   user_id	notes	        entry_date	 type
// 5	night sweats	5555	test testing test	2017-02-18	backache
// 2	chest pain	4321	pounding	        2017-03-15	dizziness
// 3	chest pain	4321	pounding	        2017-03-15	backpain
// 4	chest pain	4321	pounding	        2017-03-15	acne
