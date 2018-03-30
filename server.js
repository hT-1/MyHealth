const express = require('express');
const bodyParser = require('body-parser');

const periodController = require('./controllers/period-controller');
const symptomController = require('./controllers/symptom-controller');
const exportController = require('./controllers/export-controller');

const app = express();
const db = require ('./models/database');
const PORT = 3000;


app.use(bodyParser.urlencoded({extended:false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('GET request to the homepage');
});

app.post('/symptom/create', symptomController.createSymptom);





app.listen(PORT, () => { console.log(`listenin on ${PORT}`)});

console.log('May Node be with you!')