const { Client } = require('pg')
const URI = 'postgres://ewvvucie:HyKg2tr2CuLUdJ7f3k4TR5zKDPphQSmr@stampy.db.elephantsql.com:5432/ewvvucie';


const db = new Client({
    connectionString: URI,
  })

db.connect();

const newTableSymptomTxt = `CREATE TABLE IF NOT EXISTS "Symptoms" (
    "symptomId"   SERIAL PRIMARY KEY,
    "userId"      INT,
    "createdAt"   TIMESTAMP,
    "type"        VARCHAR,
    "notes"       VARCHAR
);`;



db.query(newTableSymptomTxt, (err, sucess) => {
    if (err) {
        throw new Error('DB QUERY FAILED TO CREATE NEW SYMPTOM TABLE', err);
    }
});

const newTablePeriodTxt = `CREATE TABLE IF NOT EXISTS "Period" (
    "periodId"      SERIAL PRIMARY KEY,
    "userId"        INT,
    "createdAt"     TIMESTAMP,
    "periodLenght"  INT,
    "cycleLength"   INT,
    "notes"         VARCHAR
);`;

db.query(newTablePeriodTxt, (err, sucess) => {
    if (err) {
        throw new Error('DB QUERY FAILED TO CREATE NEW Period TABLE', err);
    }
});





module.exports = db;
