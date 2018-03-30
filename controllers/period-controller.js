const db = require('../models/database');
const periodController = {};


periodController.createPeriod = (req, res, next) => {
    console.log('req.body ===>',req.body)
    const { periodId, userId, periodLength, cycleLength, notes } = req.body;
    let createdAt = new Date(Date.now()).toISOString();
    const addSympTxt = (`INSERT INTO "Symptoms" (userId, createdAt, periodLength, cycleLength, notes) VALUES ('${userId}', '${createdAt}', '${periodLength}', '${cycleLength}', '${notes}' );`); 
    db.query(addSympTxt, (err) => {
        if (err) {
            throw new Error('DB QUERY FAILED TO ADD NEW SYMPTOM TO DATABASE', err);
        }
        res.send(`ok`);
    });
}

periodController.readPeriods = (req, res, next) => {
    const {periodId} = req.body;
    const readSympTxt = (`SELECT '${periodId}', FROM Symptoms FETCH FIRST 1 ROW ONLY;`); 
    db.query(readSympTxt, (err) => {
        if (err) {
            throw new Error('DB QUERY FAILED TO ADD NEW SYMPTOM TO DATABASE', err);
        }
        res.send(`ok`);
    });
}


periodController.updatePeriod = (req, res, next) => {
    const {periodLength, cycleLength, notes } = req.body;
    const updateSympTxt = (`UPDATE "Symptoms" SET periodLength='${periodLength}', cycleLength='${cycleLength}' notes= '${notes}'`); 
    db.query(updateSympTxt, (err)=> {
        if (err) {
            throw new Error('DB QUERY FAILED TO UPDATE NEW SYMPTOM TO DATABASE', err);
        }
        res.send('ok');
    });
}
periodController.deletePeriod = (req, res, next) => {
    const {type, notes } = req.body;
    const deleteSympTxt = (`DELETE FROM "Symptoms" WHERE periodLength='${periodLength}' AND cycleLength='${cycleLength}' AND notes= '${notes}'`); 
    db.query(deleteSympTxt, (err)=> {
        if (err) {
            throw new Error('DB QUERY FAILED TO DELETE FROM DATABASE', err);
        }
        res.send('ok');
    });
}



module.exports = periodController;
