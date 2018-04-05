/**
* Filename: exportController.js
* Author: Pauline Chang
* Description: exportController.js holds all the controller actions for 
* exporting
* Date: March 30, 2018
*/

const db = require('../models/db');
const stringify = require('csv-stringify');
const downloadsjs = require("downloadjs");
const fs = require('fs');
const exportController = {};

/**
 * Function Name: exportSymptoms
 * Function Prototype: function symptoms(req, res);
 * Description: exportSymptoms retrieves all the symptoms from the database and 
 * exports them out a csv file
 * Parameters:
 *   @param req - http.IncomingRequest - req.body.userId, req.body.symptom, 
 *                req.body.symptom, req.body.notes
 *   @param res - http.ServerResponse
 * Side Effects: None
 * Error Conditions:
 *   If there is no "username" and "password" properties in req.body, error sent
 *   and request is redirected
 *   If the database fails to insert new user, error is thrown
 * Return Value: 
 *   @return Response of success
 */
exportController.getSymptoms = (req, res, next) => {
    fs.unlink('MySymptom.csv', (err) => {
        if (err) throw err;
        console.log('path/file.txt was deleted');
      });

    let user_id = req.body.user_id;
    console.log(user_id);
    const getSympTxt = `SELECT * FROM "entry" WHERE "user_id" = '1'`;
    db.query(getSympTxt, (err, sympsData) => {
        if (err) throw new Error('DB QUERY FAILED TO RETREIVE USER SYMPTOMS', err);
        res.body = {};
        res.locals.data = sympsData.rows;
        // res.send(sympsData.rows)
        next();
    });
};

exportController.exportCSV = (req, res) => {
   
    console.log(res.locals.data);
    let data = [];
    let cols = {
        _id: 'User ID',
        symptom: 'Symptom',
        entry_date: 'Date',
        notes: 'Notes',
    };
    let entries = res.locals.data;
    for (let i = 0; i < Object.keys(entries).length; i++) {
        data.push([entries[i]._id, entries[i].symptom, entries[i].entry_date, entries[i].notes]);
    }
    stringify(data, { header: true, columns: cols }, (err, output) => {
        if (err) throw err;
        console.log('this is the output',output)
        fs.writeFile('MySymptom.csv', output, (err) => {
            if (err) throw err;
            console.log('my.csv saved.');
            
        });
    });
    
    // res.send(data);
}





module.exports = exportController;