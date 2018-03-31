const express = require('express');
const bodyParser = require('body-parser');

const userController = require('./controllers/userController');
const periodController = require('./controllers/periodController');
const symptomController = require('./controllers/symptomController');
const exportController = require('./controllers/exportController');
const app = express();


//from app.js
const path = require('path');
const pg = require('pg');
const authRoutes = require('./routes/authRoutes');
// const passportSetup = require('./config/passport-setup');
// const keys = require('./config/keys');
app.set('view engine', 'ejs');

app.use('/auth', authRoutes);





const db = require ('./models/db');
const PORT = 3000;
    
// Automatically parse urlencoded body content from incoming requests and 
// place it in req.body
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

///////////////////////////////////////////////////////////////////////////////
app.get('/', (req, res) => {
 res.render('home');
});

//from app.js
app.get('/style.css', (req, res) => {
    res.sendFile(path.join(__dirname, './views/style.css'));
  })
  app.get('/login', (req, res) => {
    res.render('login');
  })
  
  app.get('/auth', authRoutes);


app.post('/', (req, res) => {
    res.send('POST request to the homepage');
});


app.post('/signup', userController.createUser);
app.post('/period/create', periodController.createPeriod);
app.post('/period/readAll', periodController.readPeriod);
app.post('/period/update/', periodController.updatePeriod);
app.post('/period/delete/', periodController.deletePeriod);
app.post('/symptom/create', symptomController.createSymptom);
app.post('/symptom/readAll', symptomController.readSymptom);
app.post('/symptom/update/', symptomController.updateSymptom);
app.post('/symptom/delete/', symptomController.deleteSymptom);
app.post('/export/csv', exportController.getSymptoms, 
                        exportController.exportCSV);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));