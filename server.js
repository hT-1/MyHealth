const express = require('express');
const bodyParser = require('body-parser');

const userController = require('./controllers/userController');
const symptomController = require('./controllers/symptomController');
const exportController = require('./controllers/exportController');

const app = express();
const db = require('./models/db');
const PORT = 3000;

// Automatically parse urlencoded body content from incoming requests and 
// place it in req.body
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

///////////////////////////////////////////////////////////////////////////////
app.get('/', (req, res) => {
    res.send('GET request to the homepage');
});

app.post('/', (req, res) => {
    res.send('POST request to the homepage');
});

app.post('/signup', userController.createUser);
app.post('/period/create', symptomController.createSymptom);
app.post('/period/readAll', symptomController.readSymptoms);
app.post('/period/update/:id', symptomController.updateSymptom);
app.post('/period/delete/:id', symptomController.deleteSymptom);
app.post('/symptom/create', symptomController.createSymptom);
app.post('/symptom/readAll', symptomController.readSymptoms);
app.post('/symptom/update/:id', symptomController.updateSymptom);
app.post('/symptom/delete/:id', symptomController.deleteSymptom);


// app.post('/deleteTran', (req, res) => {
//     let transaction = req.body;
//     let { tran_id } = transaction;

//     const delTranTxt = (`DELETE FROM "transaction" 
//                          WHERE "tran_id" = ${tran_id};`);
//     db.query(delTranTxt, (err) => {
//         if (err) {
//             throw new Error('FAILED TO DELETE TRANSACTION', err)
//         }
//     });
//     res.send(`Successfully deleted transation ID: ${tran_id} in database, ${req.body}`);
// });

// app.get('/userInfo/:username', (req, res) => {
//     // res.send(req.query.username);
//     const username = req.params.username;
//     const getIDTxt = `SELECT user_id from "user" WHERE username = '${username}';`;
//     const userVals = [username];
//     db.query(getIDTxt, (err, idData) => {
//         if (err) throw new Error('FAILED TO GET USERID', err);
//         res.send(String(idData.rows[0].user_id));
//     })
// });

// app.get('/transactions/:id', (req, res) => {
//     const user_id = req.params.id;
//     console.log(user_id);
//     const getTransTxt = `SELECT * FROM transaction WHERE user_id = ${user_id};`;
//     db.query(getTransTxt, (err, transData) => {
//         if (err) throw new Error('FAILED TO GET USER TRANSACTIONS', err);
//         res.send(transData.rows);
//     });
// });


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));