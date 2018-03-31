const { Client } = require('pg');
const URI_L = 'postgres://ewvvucie:HyKg2tr2CuLUdJ7f3k4TR5zKDPphQSmr@stampy.db.elephantsql.com:5432/ewvvucie';
const URI_P = 'postgres://funtudqc:nzQxdbY5ZV6u8ceLvX-fwtoeSh8WNXP1@stampy.db.elephantsql.com:5432/funtudqc';


const db = new Client({
    connectionString: URI_P,
});

db.connect();

const newTableSymptomTxt = `CREATE TABLE IF NOT EXISTS "symptoms" (
    "symptom_id"   SERIAL PRIMARY KEY,
    "user_id"      INT,
    "created_at"   TIMESTAMP DEFAULT NOW(),
    "type"        VARCHAR,
    "notes"       VARCHAR
);`;

db.query(newTableSymptomTxt, (err, sucess) => {
    if (err) {
        throw new Error('DB QUERY FAILED TO CREATE NEW SYMPTOM TABLE', err);
    }
});

const newTablePeriodTxt = `CREATE TABLE IF NOT EXISTS "period" (
    "period_id"      SERIAL PRIMARY KEY,
    "user_id"        INT,
    "created_at"     TIMESTAMP,
    "period_length"  INT,
    "cycle_length"   INT,
    "notes"         VARCHAR
);`;

db.query(newTablePeriodTxt, (err, sucess) => {
    if (err) {
        throw new Error('DB QUERY FAILED TO CREATE NEW Period TABLE', err);
    }
});

module.exports = db;
