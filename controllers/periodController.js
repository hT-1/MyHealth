/*
* Filename: symptomController.js
* Author: LUIS RAMIREZ
* Description: periodController.js holds all the controller actions for periods
* Date: April 4, 2018
*/

const db = require('../models/db');
const periodController = {};

periodController.createPeriod = (req, res, next) => {
    const { start, end, notes } = req.body;
    const addnewPeriod = (`INSERT INTO new_period (start, "end", notes) VALUES ('${start}','${end}','${notes}');`);
    db.query(addnewPeriod, (err) => {
        if (err) {
            throw new Error('DB QUERY FAILED TO ADD NEW period TO DATABASE', err);
        }
        res.send('success creating new_period');
    });
}

periodController.readPeriod = (req, res, next) => {
    const { start, end} = req.body;
    // const readSympTxt = (`SELECT * FROM period WHERE period_id='${period_id}';`);
    const readSympTxt = (`SELECT notes FROM new_period WHERE start >= '${start}' AND start <=  '${end}';`);

    db.query(readSympTxt, (err,result) => {
        if (err) {
            throw new Error('DB QUERY FAILED TO read PERIOD log from DATABASE', err);
        }
        let frequencyOfNotes = (arrOfObj) => {
            let newobj = {}
            let formattedData = []
            arrOfObj.map(obj => {
                if (!newobj[obj.notes]){
                    newobj[obj.notes] = 1;
                } else {
                    newobj[obj.notes]++;
                }
            })
           let keys = Object.keys(newobj);
           let values = Object.values(newobj);
           for (let i = 0; i < keys.length; i++){
               let tempKey = keys[i];
               formattedData.push({[tempKey]:values[i]});
           }
            return  formattedData;
        }

        res.send(frequencyOfNotes(result.rows));
    });
}
periodController.periodLength = (req, res, next) => {
    const { start, end} = req.body;
    // const readSympTxt = (`SELECT * FROM period WHERE period_id='${period_id}';`);
    const readSympTxt = (`SELECT start, "end" FROM new_period;`);

    db.query(readSympTxt, (err,result) => {
        if (err) {
            throw new Error('DB QUERY FAILED TO read PERIOD log from DATABASE', err);
        }
        let frequencyOfNotes = (arrOfObj) => {
            let newobj = {}
            let formattedData = []
            arrOfObj.map(obj => {
                if (!newobj[obj.start]){
                    newobj[obj.start] =  Number(obj.end.split('-')[2]) - Number(obj.start.split('-')[2])
                }
            })

           let keys = Object.keys(newobj);
           let values = Object.values(newobj);
           for (let i = 0; i < keys.length; i++){
               let tempKey = keys[i];
               formattedData.push({[tempKey]:values[i]});
           }
            return  formattedData;
        }
        
        res.send(frequencyOfNotes(result.rows));
    });
}

periodController.periodCycle = (req, res, next) => {
    const { start, end} = req.body;
    // const readSympTxt = (`SELECT * FROM period WHERE period_id='${period_id}';`);
    const readSympTxt = (`SELECT start, "end" FROM new_period;`);

    db.query(readSympTxt, (err,result) => {
        if (err) {
            throw new Error('DB QUERY FAILED TO read PERIOD log from DATABASE', err);
        }
        let frequencyOfNotes = (arrOfObj) => {
            let newobj = {}
            let formattedData = []
           arrOfObj.forEach((obj, index) => {
                if (!newobj[obj.start]){
                    newobj[obj.start] = obj.start
                }
                
            })

           let keys = Object.keys(newobj);
           keys.forEach((el, index) => {
               let oneDay = 24*60*60*1000;
               let firstDate = new Date(el);
               let secondDate = new Date ( keys[index +1]);
                newobj[el] = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
           });

           let values = Object.values(newobj);
           for (let i = 0; i < keys.length; i++){
               let tempKey = keys[i];
               formattedData.push({[tempKey]:values[i]});
           }
            return  newobj;
        }
        
        res.send(frequencyOfNotes(result.rows));
    });
}

/**
 * Function Name: updatePeriod
 * Function Protoperiod: function symptoms(req, res);
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
// periodController.updatePeriod = (req, res, next) => {
//     const { period_length, cycle_length, notes } = req.body;
//     console.log('hello')
//     const updateSympTxt = (`UPDATE "period" SET period_length='${period_length}', cycle_length='${cycle_length}' notes= '${notes}'`);
//     db.query(updateSympTxt, (err) => {
//         if (err) {
//             throw new Error('DB QUERY FAILED TO UPDATE PERIOD VALUES TO DATABASE', err);
//         }
//         res.send('Success updating period entry');
//     });
// }

/**
 * Function Name: deletePeriod
 * Function Protoperiod: function symptoms(req, res);
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
//periodController.deletePeriod = (req, res, next) => {
//     const {period_length, cycle_length, notes } = req.body;
//     console.log('look here')
//     const deleteSympTxt = (`DELETE FROM "period" WHERE period_length='${period_length}' AND cycle_length='${cycle_length}' AND notes= '${notes}'`);
//     db.query(deleteSympTxt, (err) => {
//         if (err) {
//             throw new Error('DB QUERY FAILED TO DELETE PERIOD FROM DATABASE', err);
//         }
//         res.send('Success deleting period entry');
//     });
// }

module.exports = periodController;
