/*
* Filename: userController.js
* Author: Esther Kim
* Description: userController.js holds all the controller actions for user
* Date: March 30, 2018
*/

const db = require('../models/db');
const userController = {};

    //createUser tested on POSTMAN and Elephant. Only change needed is date format for front-end
userController.createUser = (req, res, next) => {
  console.log(req.body);
  const { username, google, created_at } = req.body;
  const newUser = `INSERT INTO "user" (username, google, created_at)
             VALUES ('username', 'google', '2018-04-04');`; //need to update created_at date format
             //tested syntax in Elephant and POSTMAN
  // const userEntry = (`INSERT INTO user (username, google, created_at)
  //            VALUES ('username', 'google', 'created_at');`)
            console.log('userController adding here', newUser);
             db.query(newUser, (err,rows) => {
                 if (err) {
                     throw new Error('DB QUERY FAILED TO ADD NEW USER IN DATABASE', err);
                 }
                  res.send(`ok`);
             });
};


module.exports = userController;
