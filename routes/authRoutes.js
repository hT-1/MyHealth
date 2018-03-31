const express = require('express');
const router = express.Router();
const passport = require('passport');

//auth login
router.get('/login', (req, res) => {
  res.render('/login', { user: req.user });
})

//auth logout
router.get('/logout', (req, res) => {
  //handle with passport
  res.send('logging out');
})

//auth with google+
router.get('/google', passport.authenticate('google',  {
  scope : ['profile'] }
));

//we call the passport auth
//passport sends to verify
//google redirects to user redirect
//in that local strategy
router.get('/auth/google', passport.authenticate('google', {
  scope: ['https://www.googleapis.com/auth/userinfo.profile']
}));

//callback route for google to redirect to
router.get('/google/redirect',
  passport.authenticate('google', {
    successRedirect : '/',
    failureRedirect : '/login'
  })
);



module.exports = router;