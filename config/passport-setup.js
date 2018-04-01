const keys = require('./keys');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
//Google strat requires a verify cb which accepts credentials(a token/tokenSecret/Google prof)
//and invokes the cb with a user obj
//downloaded passport-google-oauth@1.0.0

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});


// passport.serializeUser(function(user, done) {
//   done(null, user._id);
// });

// passport.deserializeUser(function(id, done) {
//   User.findById(id, (err, user) => {
//     done(err, user);
//   });
// });

passport.use(
  new GoogleStrategy({
    //options for the google
    clientID:keys.google.clientID,
    clientSecret:keys.google.clientSecret,
    callbackURL:'/auth/google/redirect',
  }, (accessToken, refreshToken, profile, done) => {
    // console.log(profile);
    done(null, profile);
    //first arg is an error otherwise null
    //otherwise the actual user data
  })
)