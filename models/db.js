const { Client } = require('pg');
const URI_L = 'postgres://ewvvucie:HyKg2tr2CuLUdJ7f3k4TR5zKDPphQSmr@stampy.db.elephantsql.com:5432/ewvvucie';
<<<<<<< HEAD
// URI_P is test Elephant setup
// const URI_P = 'postgres://funtudqc:nzQxdbY5ZV6u8ceLvX-fwtoeSh8WNXP1@stampy.db.elephantsql.com:5432/funtudqc';

=======
const URI_P = 'postgres://funtudqc:nzQxdbY5ZV6u8ceLvX-fwtoeSh8WNXP1@stampy.db.elephantsql.com:5432/funtudqc';

// Change connectionString to desired URI to test code
>>>>>>> 1a152fcc929fcd27fa01e4236715931caf3e32eb
const db = new Client({
    connectionString: URI_P,
});

db.connect();

//below make health log with pre-populated fields
const newTableSymptomTxt = `CREATE TABLE IF NOT EXISTS "symptoms" (
    "symptom_id"   SERIAL PRIMARY KEY,
    "user_id"      INT,
    "created_at"   TIMESTAMP DEFAULT NOW(),
    "type"        VARCHAR,
    "notes"       VARCHAR
);`;

//new table for users
"user_id"   SERIAL PRIMARY KEY,
"created_at"   TIMESTAMP DEFAULT NOW(),
"type"        VARCHAR,
"notes"       VARCHAR



db.query(newTableSymptomTxt, (err, sucess) => {
    if (err) {
        throw new Error('DB QUERY FAILED TO CREATE NEW SYMPTOM TABLE', err);
    }
});

const newTablePeriodTxt = `CREATE TABLE IF NOT EXISTS "period" (
    "period_id"      SERIAL PRIMARY KEY,
    "user_id"        INT,
    "created_at"     TIMESTAMP DEFAULT NOW(),
    "period_length"  INT,
    "cycle_length"   INT,
    "notes"          VARCHAR

);`;

db.query(newTablePeriodTxt, (err, sucess) => {
    if (err) {
        throw new Error('DB QUERY FAILED TO CREATE NEW Period TABLE', err);
    }
});
const newTableMonthsTxt = `CREATE TABLE IF NOT EXISTS "months" (
    "january"    JSONB,
    "february"   JSONB,
    "march"      JSONB,
    "april"      JSONB,
    "may"        JSONB,
    "june"       JSONB,
    "july"       JSONB,
    "august"     JSONB,
    "september"  JSONB,
    "october"    JSONB,
    "november"   JSONB,
    "december"   JSONB
);`;

db.query(newTableMonthsTxt, (err, sucess) => {
    if (err) {
        throw new Error('DB QUERY FAILED TO CREATE NEW Period TABLE', err);
    }
});

module.exports = db;
