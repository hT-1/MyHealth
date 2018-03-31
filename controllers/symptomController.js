/*
* Filename: symptomController.js
* Author: LUIS RAMIREZ
* Description: symtomController.js holds all the controller actions for symptoms
* Date: March 30, 2018
*/

const db = require('../models/db');

const symptomController = {};

/** 
 * Function Name: createSymptom
 * Function Prototype: function symptoms(req, res);
 * Description: addes an new instance of symptom with   
 * Parameters:
 *   @param req - http.IncomingRequest - req.body.user_id, req.body.type, req.body.notes
 * { user_id: INT, type: VARCHAR, notes: VARCHAR }
 *   @param res - http.ServerResponse 
 * Side Effects: None
 * Error Conditions:
 *   If the database fails to insert new user, error is thrown
 * Return Value: 
 *   @return Response of success
 */
symptomController.createSymptom = (req, res, next) => {
    console.log(req.body);
    const { user_id, type, notes } = req.body;
    const addSympTxt = (`INSERT INTO "symptoms" (user_id, type, notes) 
                        VALUES ('${user_id}', '${type}', '${notes}');`);
    console.log(addSympTxt);
    db.query(addSympTxt, (err,rows) => {
        if (err) {
            throw new Error('DB QUERY FAILED TO ADD NEW SYMPTOM TO DATABASE', err);
        }
        res.send(`ok`);
    });
};

/** 
 * Function Name: readSymptom
 * Function Prototype: function symptoms(req, res);
 * Description: read all data associated with symptom type
 * Parameters:
 *   @param req - http.IncomingRequest - req.body.type,
 * searched for {  "type": "migraine" }
 * finds { "userId": "30", "type": "migraine", "notes": "migraines hurt" }

 *   @param res - http.ServerResponse 
 * Side Effects: None
 * Error Conditions:
 *   If the database fails to find return error
 * Return Value: 
 *   @return Response of success
 */
symptomController.readSymptom = (req, res, next) => {
    const { type } = req.body;
    const readSympTxt = (`SELECT * FROM symptoms WHERE type='${type}';`);
    db.query(readSympTxt, (err) => {
        if (err) {
            throw new Error('DB QUERY FAILED TO ADD NEW SYMPTOM TO DATABASE', err);
        }
        res.send(`ok`);
    });
}

/** 
 * Function Name: updateSymptom
 * Description: updateSymptoms by changing symptom type value and new notes for all table (query needs to be refomated to only change on type)
 * Parameters:
 *   @param req - http.IncomingRequest  req.body.type, req.body.notes
 *   { type: VARCHAR, notes:VARCHAR }
 *   @param res - http.ServerResponse
 * * Error Conditions:
 *   If the database fails to find return error
 * Return Value: 
 *   @return None
 */
symptomController.updateSymptom = (req, res, next) => {
    const { type, notes } = req.body;
    const updateSympTxt = (`UPDATE "symptoms" SET type='${type}', notes= '${notes}'`);
    db.query(updateSympTxt, (err) => {
        if (err) {
            throw new Error('DB QUERY FAILED TO UPDATE NEW SYMPTOM TO DATABASE', err);
        }
        res.send('ok');
    });
}

/** 
 * Function Name: deletesymptom
 * Description: delteSymptom by selecting type and notes
 * Parameters:
 *   @param req - http.IncomingRequest  req.body.type, req.body.notes
 *   {  "type": "migraine", "notes": "migraines hurt" }
 *   @param res - http.ServerResponse
 *  * Error Conditions:
 *   If the database fails to find return error
 * Return Value: 
 *   @return None
 */
symptomController.deleteSymptom = (req, res, next) => {
    const { type, notes } = req.body;
    const deleteSympTxt = (`DELETE FROM "symptoms" WHERE type='${type}' AND notes='${notes}'`);
    db.query(deleteSympTxt, (err) => {
        if (err) {
            throw new Error('DB QUERY FAILED TO DELETE FROM DATABASE', err);
        }
        res.send('ok');
    });
}

module.exports = symptomController;
