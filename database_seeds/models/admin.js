var mongoose = require("mongoose");
const User = require('./user'); 
class Admin extends User{

    }
    const adminScema = User.discriminator('Admin', new mongoose.Schema({
    admin_name: {type: String , required: true},
    
}),
);
    module.exports = Admin
    module.exports = mongoose.model('Admin');