/*
* Filename: symptomController.js
* Author: Luis Ramirez
* Description: periodController.js holds all the controller actions for periods
* Date: March 30, 2018
*/

const db = require('../models/db');

const periodController = {};

periodController.createPeriod = (req, res, next) => {
    const { period_id, user_id, period_length, cycle_length, notes } = req.body;
    const addSympTxt = (`INSERT INTO "period" (user_id, period_length, cycle_length, notes) 
                        VALUES ('${user_id}', '${period_length}', '${cycle_length}', '${notes}' );`);
    db.query(addSympTxt, (err) => {
        if (err) {
            throw new Error('DB QUERY FAILED TO ADD NEW SYMPTOM TO DATABASE', err);
        }
        res.send(`Success logging period`);
    });
}

periodController.readPeriod = (req, res, next) => {
    const { period_id } = req.body;
    const readSympTxt = (`SELECT '${period_id}', FROM period FETCH FIRST 1 ROW ONLY;`);
    db.query(readSympTxt, (err) => {
        if (err) {
            throw new Error('DB QUERY FAILED TO ADD NEW SYMPTOM TO DATABASE', err);
        }
        res.send(`Success retrieving period log`);
    });
}

periodController.updatePeriod = (req, res, next) => {
    const { period_length, cycle_length, notes } = req.body;
    const updateSympTxt = (`UPDATE "period" SET period_length='${period_length}', cycle_length='${cycle_length}' notes= '${notes}'`);
    db.query(updateSympTxt, (err) => {
        if (err) {
            throw new Error('DB QUERY FAILED TO UPDATE NEW SYMPTOM TO DATABASE', err);
        }
        res.send('Success updating period entry');
    });
}

periodController.deletePeriod = (req, res, next) => {
    const { type, notes } = req.body;
    const deleteSympTxt = (`DELETE FROM "period" WHERE period _length='${period_length}' AND cycle_length='${cycle_length}' AND notes= '${notes}'`);
    db.query(deleteSympTxt, (err) => {
        if (err) {
            throw new Error('DB QUERY FAILED TO DELETE FROM DATABASE', err);
        }
        res.send('Success deleting period entry');
    });
}

module.exports = periodController;
