/*
* Filename: symptomController.js
* Author: Pauline Chang
* Description: symtomController.js holds all the controller actions for symptoms
* Date: March 30, 2018
*/

const db = require('../models/db');
const periodController = {};

/** 
 * Function Name: addSymptom
 * Function Prototype: function addSymptom(req, res, next);
 * Description: addSymptom parses the req.body to insert a new symptom in the database
 * Parameters:
 *   @param req - http.IncomingRequest - req.body.userId, req.body.symptom, req.body.symptom, req.body.notes
 *   @param res - http.ServerResponse
 * Side Effects: None
 * Error Conditions:
 *   If there is no "username" and "password" properties in req.body, error sent and request is redirected
 *   If the database fails to insert new user, error is thrown
 * Return Value: 
 *   @return Response of success
 */
symptomController.createPeriod = (req, res, next) => {
    /**
     * FIXME: LUIS THIS IS ALL WRONG INFORMATION
     */
    // if (req.body.username && req.body.password) {
    //     const { symptomId, userId, createdAt, type, notes } = req.body;
    //     const symptom = { symptomId, userId, createdAt, type, notes };
    //     /** 
    //      * TODO: LUIS - UPDATE addSympTxt AND sympVals
    //      */
    //     const addSympTxt = (`INSERT INTO "symptoms" ("username", "password") VALUES ($1, $2);`); 
    //     const sympVals = [username, password];
    //     db.query(addSympTxt, sympVals, (err) => {
    //         if (err) {
    //             throw new Error('DB QUERY FAILED TO ADD NEW SYMPTOM TO DATABASE', err);
    //         }
    //     });
    //     res.send(`Successfully created new symptom [${type} id: ${symptomId}] in database`);
    // } else {
    //     return res.send(`Request body does not contain required properties`).redirect('/'); // render before you redirect
    // }
    res.send(`createPeriod: SUCCESS`);
};

/**
* verifyUser - Obtain username and password from the request body, locate
* the appropriate user in the database, and then authenticate the submitted password
* against the password stored in the database.
*
* @param req - http.IncomingRequest
* @param res - http.ServerResponse
*/

symptomController.readPeriod = (req, res, next) => {
    /**
     * FIXME: LUIS
     */
    // const userId = req.params.id;
    // const readSympTxt = `SELECT * FROM transaction WHERE userId = ${userId};`;
    // db.query(readSympTxt, (err, sympsData) => {
    //     if (err) throw new Error('DB QUERY FAILED TO RETRIEVE USER SYMPTOMS', err);
    //     res.send(sympsData.rows);
    // });
    res.send(`readPeriod: SUCCESS`);

}

symptomController.updatePeriod = (req, res, next) => {
    /**
     * TODO: LUIS
     */
    res.send(`updatePeriod: SUCCESS`);
}

symptomController.deletePeriod = (req, res, next) => {
    /**
     * TODO: LUIS
     */
    res.send(`deletePeriod: SUCCESS`);
}



module.exports = symptomController;
