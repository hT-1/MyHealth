/*
* Filename: userController.js
* Author: Esther Kim
* Description: userController.js holds all the controller actions for user
* Date: March 30, 2018
*/

const userController = {};

userController.createUser = (req, res, next) => {
    /**
     * TODO ESTHER
     */
    res.send(`createUser: SUCCESS`);
};

/**
* verifyUser - Obtain username and password from the request body, locate
* the appropriate user in the database, and then authenticate the submitted password
* against the password stored in the database.
*
* @param req - http.IncomingRequest
* @param res - http.ServerResponse
*/
userController.verifyUser = (req, res, next) => {
    /**
     * TODO ESTHER
     */
    res.send(`verifyUser: SUCCESS`);
}



module.exports = userController;
