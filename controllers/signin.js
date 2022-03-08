const mongoose = require('mongoose');
const userModel = require('../database_seeds/models/user');
const mongoosePort = require('../env_variables/env_vars.json').mongoosePort;

mongoose.connect(mongoosePort)

module.exports.signin = (req, res) => {
    var enteredData = req.body;
    userModel.find({email: enteredData.email, password: enteredData.password})
    .then((docs) => {
        if (docs.length == 0){
                //res.sendStatus(404);
                res.json("notFound!")
        } else {
            //var user = docs[0];
            res.json("found!")
            // jwt.sign({user}, KEY, {expiresIn: '2h'}, (err, token) => {
            //     res.json(token)
            // })
        }
    })}