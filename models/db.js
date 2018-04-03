const { Client } = require('pg');
const URI_L = 'postgres://ewvvucie:HyKg2tr2CuLUdJ7f3k4TR5zKDPphQSmr@stampy.db.elephantsql.com:5432/ewvvucie';
// URI_P is test Elephant setup
// const URI_P = 'postgres://funtudqc:nzQxdbY5ZV6u8ceLvX-fwtoeSh8WNXP1@stampy.db.elephantsql.com:5432/funtudqc';

// Change connectionString to desired URI to test code

const db = new Client({
    connectionString: URI_L,
});

db.connect();

//below make health log with pre-populated fields
const symptom = `CREATE TABLE IF NOT EXISTS "symptom" (
    "_id"      SERIAL PRIMARY KEY,
    "type"     VARCHAR
);`;

db.query(symptom, (err, success) => {
    if (err) {
        throw new Error('DB QUERY FAILED TO CREATE NEW SYMPTOM TABLE', err);
    }
});

//new table for users
const user = `CREATE TABLE IF NOT EXISTS "user" (
  "_id"         SERIAL NOT NULL,
  "username"    VARCHAR NOT NULL,
  "Google"      VARCHAR NOT NULL,
  "created_at"  DATE NOT NULL
);`;

db.query(user, (err, success) => {
    if (err) {
        throw new Error('DB QUERY FAILED TO CREATE NEW user TABLE', err);
    }
});

const newPeriod = `CREATE TABLE IF NOT EXISTS "newPeriod" (
    "user_id"        SERIAL PRIMARY KEY,
    "start"          DATE NOT NULL,
    "end"            DATE NOT NULL,
    "notes"          VARCHAR
);`;

db.query(newPeriod, (err, success) => {
    if (err) {
        throw new Error('DB QUERY FAILED TO CREATE newPeriod TABLE', err);
    }
});

const entry = `CREATE TABLE IF NOT EXISTS "entry" (
  "_id"         SERIAL NOT NULL,
  "symptom"     VARCHAR NOT NULL,
  "user_id"     INT NOT NULL,
  "notes"       VARCHAR NOT NULL,
  "entry_date"  DATE NOT NULL
);`;

db.query(entry, (err, success) => {
    if (err) {
        throw new Error('DB QUERY FAILED TO CREATE NEW entry TABLE', err);
    }
});

//passback data i.e. joindb=# select * from clients t1, orders t2 where t1.id=t2.id;

//      FK relations below
// ALTER TABLE "newTableUsers" ADD CONTRAINT "newTableUsers_fk0" FOREIGN KEY ("username") REFERENCES "newTableSymptomTxt"
//
// ALTER TABLE "userAndSymptom" ADD CONTRAINT "userAndSymptom_fk0" FOREIGN KEY ("symptom_id") REFERENCES "newTableSymptomTxt" ("_id");
//ALTER TABLE "userAndSymptom" ADD CONTRAINT "userAndSymptom_fk1" FOREIGN KEY ("user_id") REFERENCES "newTableUsers" ("_id")

db.query(newPeriod, (err, sucess) => {
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
