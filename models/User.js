const mongoose = require('../db/connection.js');

const UserSchema = new mongoose.Schema({
	email: String,
	password: String
});

mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');
