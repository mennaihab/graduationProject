var mongoose = require("mongoose");
const User = require('./user'); 

const touristScema = User.discriminator('Tourist', new mongoose.Schema({
    nationality: {type: String , required: true},
    phone: {type: Number},  }),
);
module.exports = mongoose.model('Tourist');