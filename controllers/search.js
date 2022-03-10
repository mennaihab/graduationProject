const mongoose = require('mongoose');
const hotels = require('../database_seeds/models/hotels');
const hotelsModel = require("../database_seeds/models/hotels");
const mongoosePort = require("../env_variables/env_vars.json").mongoosePort;
const axios = require('axios').default;
let baseUrl = "mongodb+srv://Narimane:Narimane@cluster0.sdsst.mongodb.net/Project"

///import fetch from 'node-fetch',
mongoose.connect(mongoosePort)

module.exports.search = (req, res) => {
  async function getData() {
    axios.get(baseUrl+"/Hotels")
  .then(function (response) {
    // handle success
    console.log(response);
    res.send(response.data)
  })
  .catch(function (error) {
    // handle error
    if(error.response)
    {
        let {status ,statusText}=error.response;
        console.log(status,statusText);
        res.status(status).send(statusText);
    }
    else {
        console.log(error);
    }
  
  })
  .then(function () {
    // always executed
    console.log("data fetched successfully")
  });
  }
   getData();

 
}