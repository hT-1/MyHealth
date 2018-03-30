/*
* Filename: userController.js
* Author: Pauline Chang
* Description: userController.js holds all the controller actions for user
* Date: March 30, 2018
*/

const userController = {};

/** 
 * Function Name: createUser
 * Function Prototype: function createUser(req, res, next);
 * Description: createUser uses data from req.body to create a new user in the database
 * Parameters:
 *   @param req - http.IncomingRequest - req.body.username, req.body.passworf
 *   @param res - http.ServerResponse
 * Side Effects: None
 * Error Conditions:
 *   If there is no "username" and "password" properties in req.body, error sent and request is redirected
 *   If the database fails to insert new user, error is thrown
 * Return Value: 
 *   @return Response of success
 */
userController.createUser = (req, res, next) => {
    /**
     * FIXME: ESTHER
     */
    // if (req.body.username && req.body.password) {
    //     const { username, password } = req.body;
    //     const user = { username, password };
        // const insUserTxt = (`INSERT INTO "user" ("username", "password") VALUES ($1, $2);`);
    //     const userVals = [username, password];
    //     db.query(insUserTxt, userVals, (err) => {
    //         if (err) {
    //             throw new Error('DB QUERY FAILED TO INSERT NEW USER', err);
    //         }
    //     });
    //     res.send(`Successfully created new user [${username}] in database`);
    // } else {
    //     return res.send(`Request body does not contain username and password`).redirect('/'); // render before you redirect
    // }
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
     * TODO: ESTHER
     */
    // write code here
    //   const { username, password } = req.body;
    //   // const user = { username, password };
    //   User.find({ username }, (err, check) => {
    //     if (err) throw err;
    //     if (!check[0]) return res.redirect('/signup');
    //     if (check[0].password !== password) return res.redirect('/signup');
    //     res.locals.ssid = check[0]._id;
    //     next();
    //   });
    res.send(`verifyUser: SUCCESS`);
}



module.exports = userController;
