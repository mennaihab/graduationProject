var mongoose = require("mongoose");
const User = require('./user'); 
class Tourist extends User{

    }

const touristScema = User.discriminator('Tourist', new mongoose.Schema({
    nationality: {type: String , required: true},
    phone: {type: Number},  }),
);
module.exports = Tourist
module.exports = mongoose.model('Tourist');