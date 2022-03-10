var mongoose = require("mongoose");
const User = require('./user'); 
class Admin extends User{
    constructor(admin_name) {
        this.admin_name = admin_name;
      }
    }
    const adminScema = User.discriminator('Admin', new mongoose.Schema({
    admin_name: {type: String , required: true},
    
}),
);
    module.exports = Admin
    module.exports = mongoose.model('Admin');