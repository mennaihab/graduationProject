var mongoose = require("mongoose");
const User = require('./user'); 
class Tourguide extends User{

    }

const tourguideScema = User.discriminator('Tourguide', new mongoose.Schema({
    location: {type: String , required: true},
    phone: {type: Number},  }),
);
module.exports = Tourguide
module.exports = mongoose.model('Tourguide');