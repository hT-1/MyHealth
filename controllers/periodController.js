/*
* Filename: symptomController.js
* Author: LUIS RAMIREZ
* Description: periodController.js holds all the controller actions for periods
* Date: March 30, 2018
*/

const db = require('../models/db');

const periodController = {};
/** 
 * Function Name: createPeriod
 * Function Prototype: function symptoms(req, res);
 * Description: addes an new instance of period with   
 * Parameters:
 *   @param req - http.IncomingRequest - req.body.period_id,req.body.user_id, req.body.period_length, req.body.cycle_length
 * {user_id: INT, period_length:INT , cycle_length : INT, notes: VARCHAR  }
 *   @param res - http.ServerResponse 
 * Side Effects: None
 * Error Conditions:
 *   If the database fails to insert new user, error is thrown
 * Return Value: 
 *   @return Response of success
 *///TESTED FROM POSTMAN updated cloud database
periodController.createPeriod = (req, res, next) => {
    const { user_id, period_length, cycle_length, notes } = req.body;
    const addSympTxt = (`INSERT INTO "period" (user_id, period_length, cycle_length, notes) 
                        VALUES ('${user_id}', '${period_length}', '${cycle_length}', '${notes}' );`);
    db.query(addSympTxt, (err) => {
        if (err) {
            throw new Error('DB QUERY FAILED TO ADD NEW period TO DATABASE', err);
        }
        res.send(`Success logging period`);
    });
}

/** 
 * Function Name: readPeriod
 * Function Prototype: function symptoms(req, res);
 * Description: finds all data associated with period_id
 * Parameters:
 *   @param req - http.IncomingRequest - req.body.period_id
 * { period_id: INT }
 *   @param res - http.ServerResponse 
 * Side Effects: None
 * Error Conditions:
 *   If the database fails to select from period_id, error is thrown
 * Return Value: 
 *   @return Response of success
 *///TESTED FROM POSTMAN updated cloud database
periodController.readPeriod = (req, res, next) => {
    const { period_id } = req.body;
    console.log('the period id ======>',period_id)
    const readSympTxt = (`SELECT * FROM period WHERE period_id='${period_id}';`);
    db.query(readSympTxt, (err) => {
        if (err) {
            throw new Error('DB QUERY FAILED TO read PERIOD log from DATABASE', err);
        }
        res.send(`Success retrieving period log`);
    });
}

/** 
 * Function Name: updatePeriod
 * Function Prototype: function symptoms(req, res);
 * Description: updated period length and cycle length and notes
 * Parameters:
 *   @param req - http.IncomingRequest - req.body.notes,  req.body.period_length, req.body.cycle_length
 * { period_length: INT, cycle_length: INT, notes: VARCHAR }
 * Side Effects: None
 * Error Conditions:
 *   If the database fails to update notes, period_length, cycle_length
 * Return Value: 
 *   @return Response of success
 */
periodController.updatePeriod = (req, res, next) => {
    const { period_length, cycle_length, notes } = req.body;
    console.log('hello')
    const updateSympTxt = (`UPDATE "period" SET period_length='${period_length}', cycle_length='${cycle_length}' notes= '${notes}'`);
    db.query(updateSympTxt, (err) => {
        if (err) {
            throw new Error('DB QUERY FAILED TO UPDATE PERIOD VALUES TO DATABASE', err);
        }
        res.send('Success updating period entry');
    });
}

/** 
 * Function Name: deletePeriod
 * Function Prototype: function symptoms(req, res);
 * Description: period by matching length cycle and notes
 * Parameters:
 *   @param req - http.IncomingRequest -   req.body.period_length, req.body.cycle_length , req.body.notes
 * { period_length: INT, cycle_length:INT, notes: VARCHAR }
 * Side Effects: None
 * Error Conditions:
 *   If the database fails to delete return error
 * Return Value: 
 *   @return Response of success
 */
periodController.deletePeriod = (req, res, next) => {
    const {period_length, cycle_length, notes } = req.body;
    console.log('look here')
    const deleteSympTxt = (`DELETE FROM "period" WHERE period_length='${period_length}' AND cycle_length='${cycle_length}' AND notes= '${notes}'`);
    db.query(deleteSympTxt, (err) => {
        if (err) {
            throw new Error('DB QUERY FAILED TO DELETE PERIOD FROM DATABASE', err);
        }
        res.send('Success deleting period entry');
    });
}

module.exports = periodController;
