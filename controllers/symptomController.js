/*
* Filename: symptomController.js
* Author: Luis Ramirez
* Description: symtomController.js holds all the controller actions for symptoms
* Date: March 30, 2018
*/

const db = require('../models/db');

const symptomController = {};

/** 
 * Function Name: createSymptom
 * Description: createSymptom yaddeeyaddee
 * Parameters:
 *   @param req - http.IncomingRequest
 *   { "userId": "30", "type": "migraine", "notes": "migraines hurt" }
 *   @param res - http.ServerResponse
 * Return Value: 
 *   @return None
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
 * Function Name: createSymptom
 * Description: createSymptom yaddeeyaddee
 * Parameters:
 *   @param req - http.IncomingRequest
 *   { "userId": "30", "type": "migraine", "notes": "migraines hurt" }
 *   @param res - http.ServerResponse
 * Return Value: 
 *   @return None
 */
symptomController.readSymptom = (req, res, next) => {
    const { symptom_id } = req.body;
    const readSympTxt = (`SELECT '${symptom_id}' FROM symptoms FETCH FIRST 1 ROW ONLY;`);
    db.query(readSympTxt, (err) => {
        if (err) {
            throw new Error('DB QUERY FAILED TO ADD NEW SYMPTOM TO DATABASE', err);
        }
        res.send(`ok`);
    });
}

/** 
 * Function Name: createSymptom
 * Description: createSymptom yaddeeyaddee
 * Parameters:
 *   @param req - http.IncomingRequest
 *   { "userId": "30", "type": "migraine", "notes": "migraines hurt" }
 *   @param res - http.ServerResponse
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
 * Function Name: createSymptom
 * Description: createSymptom yaddeeyaddee
 * Parameters:
 *   @param req - http.IncomingRequest
 *   { "userId": "30", "type": "migraine", "notes": "migraines hurt" }
 *   @param res - http.ServerResponse
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
