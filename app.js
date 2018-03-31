const express = require('express');
const app = express();
const path = require('path');
const pg = require('pg');
const authRoutes = require('./routes/authRoutes');
const passportSetup = require('./config/passport-setup');
const keys = require('./config/keys');
const passport = require('passport');
const cookieSession = require('cookie-session');
const cookieParser = require('cookie-parser');
// const db = require('')

//set up public file for html/css
app.set('view engine', 'ejs');

//connect to postgres
// db.connect(keys.postgres.dbURI, () => {
//   console.log('connected to db');
// })

app.use(cookieSession({
  // name: 'session',
  keys: [keys.session.cookieKey],
  maxAge: 24 * 60 * 60 * 1000
}));
app.use(cookieParser());


app.use(passport.initialize());
app.use(passport.session());

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

app.get('/main', (req, res) => {
  console.log(res);
  res.render('main');
})

app.get('/logout', (req, res) => {
  req.logout();
  req.session = null;
  res.redirect('/');
})



app.listen(8080, ()=> {
  console.log('8080 now listening');
})