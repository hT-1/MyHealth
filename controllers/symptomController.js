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
    const { userId, type, notes } = req.body;
    let createdAt = new Date(Date.now()).toISOString();
    const addSympTxt = (`INSERT INTO "symptoms" (userId, createdAt, type, notes) 
                        VALUES ('${userId}', ${createdAt}, '${type}', '${notes}');`);
    console.log(addSympTxt);
    db.query(addSympTxt, (err) => {
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
    const { symptomId } = req.body;
    const readSympTxt = (`SELECT '${symptomId}' FROM Symptoms FETCH FIRST 1 ROW ONLY;`);
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
    const updateSympTxt = (`UPDATE "Symptoms" SET type='${type}', notes= '${notes}'`);
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
    const deleteSympTxt = (`DELETE FROM "Symptoms" WHERE type='${type}' AND notes='${notes}'`);
    db.query(deleteSympTxt, (err) => {
        if (err) {
            throw new Error('DB QUERY FAILED TO DELETE FROM DATABASE', err);
        }
        res.send('ok');
    });
}

module.exports = symptomController;
