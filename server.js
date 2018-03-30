const express = require('express');
const bodyParser = require('body-parser');

<<<<<<< HEAD
const periodController = require('./controllers/period-controller');
const symptomController = require('./controllers/symptom-controller');
const exportController = require('./controllers/export-controller');

const app = express();
const db = require ('./models/database');
const PORT = 3000;


app.use(bodyParser.urlencoded({extended:false }));
app.use(bodyParser.json());

=======
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
>>>>>>> 14575004671748ee82d76c2d786adb67d18e435d
app.get('/', (req, res) => {
    res.send('GET request to the homepage');
});

<<<<<<< HEAD
app.post('/symptom/create', symptomController.createSymptom);





app.listen(PORT, () => { console.log(`listenin on ${PORT}`)});

console.log('May Node be with you!')
=======
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
app.post('/export/symptoms', exportController.getSymptoms, 
                             exportController.exportCSV);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
>>>>>>> 14575004671748ee82d76c2d786adb67d18e435d
