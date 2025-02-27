const mongoose = require('mongoose');
const crypto = require('crypto')
const jwt = require('jsonwebtoken');

const userModel = require('../database_seeds/models/user');
const mongoosePort = require('../env_variables/env_vars.json').mongoosePort;
const KEY = require('../env_variables/env_vars.json').KEY;

mongoose.connect(mongoosePort)

class Signin{
signin = (req, res) => {
    var enteredData = req.body;
    var pass_shasum = crypto.createHash('sha1').update(req.body.password).digest('hex');
    userModel.find({email: enteredData.email, password: pass_shasum})
    .then((docs) => {
        if (docs.length == 0){
                res.json("notFound!")
        } else {
            var user = docs[0];
            jwt.sign({user}, KEY, {expiresIn: '2h'}, (err, token) => {
                res.json(token)
             })
        }
    })}
}
module.exports= new Signin;