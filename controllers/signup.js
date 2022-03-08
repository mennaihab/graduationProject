const mongoose = require('mongoose');
const url = require('../env_variables/env_vars.json').mongoosePort;
const Tourguide = require('../database_seeds/models/tour-guide');
const Tourist = require('../database_seeds/models/tourist');
const Admin = require('../database_seeds/models/admin');


mongoose.connect(url)

module.exports.signup = (req, res) => {
    
    var email =req.body.email;
    var password = req.body.password;
    var username = req.body.username;
    var type = req.body.type;
    var location = req.body.location;
    var nationality = req.body.nationality;
    var phone =req.body.phone; 
    var admin_name =req.body.admin_name; 
    if(type == "Tourguide"){
    Tourguide.create({
        "email":email,
        "password": password,
        "username": username,
        "location":location,
        "phone":phone ,
    })
    res.json("done Tourguide")}
    else if (type=="Tourist"){
        Tourist.create({
            "email":email,
            "password": password,
            "username": username,
            "nationality":nationality,
            "phone":phone ,
        })
        res.json("done Tourist")
    }
    else {
        Admin.create({
            "email":email,
            "password": password,
            "username": username,
            "admin_name":admin_name ,
        })
        res.json("done Admin")
    }
}