const express = require('express');
const app = express();
const path = require('path');
const pg = require('pg');
const authRoutes = require('./routes/authRoutes');
const passportSetup = require('./config/passport-setup');
const keys = require('./config/keys');
// const db = require('')

//set up public file for html/css
app.set('view engine', 'ejs');

//connect to postgres
// db.connect(keys.postgres.dbURI, () => {
//   console.log('connected to db');
// })

//set up routes
app.use('/auth', authRoutes);

//create home route
app.get('/', (req, res) => {
  res.render('home');
})

app.get('/style.css', (req, res) => {
  res.sendFile(path.join(__dirname, './views/style.css'));
})

app.get('/login', (req, res) => {
  res.render('login');
})

app.get('/auth', authRoutes);

app.listen(3000, ()=> {
  console.log('3000 now listening');
})