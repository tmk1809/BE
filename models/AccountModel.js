var mongoose = require('mongoose');
var AccountSchema = mongoose.Schema({
    id: String,
    name: String,
    username: String,
    password: String,
    email: String,
    role: String
});

const AccountModel = mongoose.model('account', AccountSchema, 'account');
module.exports = AccountModel;