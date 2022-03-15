const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const schema = new Schema({
    city : {type: String, required: true, unique: true},
    name : {type: String, required: true, unique: true},
    address : {type: String, required: true, unique: true},
    reviewsnum : {type: String, required: true, unique: true},
    price : {type: String, required: true, unique: true},
    Numofrooms : {type: String, required: true, unique: true},
    description :{type: String, required: true, unique: true},
    rating :{type: String, required: true, unique: true},
    state :{type: String, required: true, unique: true},
    Propertyamenities:{type: String, required: true, unique: true},
    roomfeatures :{type: String, required: true, unique: true},
    roomtypes :{type: String, required: true, unique: true},
    hotelstyle :{type: String, required: true, unique: true},
    languagespoken :{type: String, required: true, unique: true},
    telephone:{type: String, required: true, unique: true},
    images:{type: String, required: true, unique: true},
    hotelreviews:{type: String, required: true, unique: true},

})
module.exports = mongoose.model('Hotels', schema,'Hotels');