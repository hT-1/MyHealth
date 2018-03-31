/*
* Filename: symptomController.js
* Author: Luis Ramirez
* Description: periodController.js holds all the controller actions for periods
* Date: March 30, 2018
*/

const db = require('../models/db');

const periodController = {};

periodController.createPeriod = (req, res, next) => {
    const { periodId, userId, periodLength, cycleLength, notes } = req.body;
    let createdAt = new Date(Date.now()).toISOString();
    const addSympTxt = (`INSERT INTO "symptoms" (userId, createdAt, periodLength, cycleLength, notes) VALUES ('${userId}', '${createdAt}', '${periodLength}', '${cycleLength}', '${notes}' );`);
    db.query(addSympTxt, (err) => {
        if (err) {
            throw new Error('DB QUERY FAILED TO ADD NEW SYMPTOM TO DATABASE', err);
        }
        res.send(`Success logging period`);
    });
}

periodController.readPeriod = (req, res, next) => {
    const { periodId } = req.body;
    const readSympTxt = (`SELECT '${periodId}', FROM symptoms FETCH FIRST 1 ROW ONLY;`);
    db.query(readSympTxt, (err) => {
        if (err) {
            throw new Error('DB QUERY FAILED TO ADD NEW SYMPTOM TO DATABASE', err);
        }
        res.send(`Success retrieving period log`);
    });
}

periodController.updatePeriod = (req, res, next) => {
    const { periodLength, cycleLength, notes } = req.body;
    const updateSympTxt = (`UPDATE "symptoms" SET periodLength='${periodLength}', cycleLength='${cycleLength}' notes= '${notes}'`);
    db.query(updateSympTxt, (err) => {
        if (err) {
            throw new Error('DB QUERY FAILED TO UPDATE NEW SYMPTOM TO DATABASE', err);
        }
        res.send('Success updating period entry');
    });
}

periodController.deletePeriod = (req, res, next) => {
    const { type, notes } = req.body;
    const deleteSympTxt = (`DELETE FROM "symptoms" WHERE periodLength='${periodLength}' AND cycleLength='${cycleLength}' AND notes= '${notes}'`);
    db.query(deleteSympTxt, (err) => {
        if (err) {
            throw new Error('DB QUERY FAILED TO DELETE FROM DATABASE', err);
        }
        res.send('Success deleting period entry');
    });
}

module.exports = periodController;
