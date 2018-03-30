const { Client } = require('pg');

const URI = '	postgres://funtudqc:nzQxdbY5ZV6u8ceLvX-fwtoeSh8WNXP1@stampy.db.elephantsql.com:5432/funtudqc';

const db = new Client({
    connectionString: URI,
})
db.connect()

const newTableUserTxt = `CREATE TABLE IF NOT EXISTS "user" (
                        "userId"      SERIAL PRIMARY KEY,
                        "username"    VARCHAR, 
                        "password"    VARCHAR);`;

db.query(newTableUserTxt, (err) => {
    if (err) {
        throw new Error('DB QUERY FAILED TO CREATE NEW USER TABLE', err);
    }
});

const newTablePerTxt = `CREATE TABLE IF NOT EXISTS "symptoms" (
    "symptomId"   SERIAL PRIMARY KEY,
    "userId"      INT,
    "createdAt"   TIMESTAMP,
    "type"        VARCHAR,
    "notes"       VARCHAR);`;

db.query(newTablePerTxt, (err) => {
    if (err) {
        throw new Error('DB QUERY FAILED TO CREATE NEW SYMPTOM TABLE', err);
    }
});

const newTableSympTxt = `CREATE TABLE IF NOT EXISTS "symptoms" (
                        "symptomId"   SERIAL PRIMARY KEY,
                        "userId"      INT,
                        "createdAt"   TIMESTAMP,
                        "type"        VARCHAR,
                        "notes"       VARCHAR);`;

db.query(newTableSympTxt, (err) => {
    if (err) {
        throw new Error('DB QUERY FAILED TO CREATE NEW SYMPTOM TABLE', err);
    }
});

module.exports = db;