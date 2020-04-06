const mongoose = require('mongoose');

// Schema
const AccountSchema = new mongoose.Schema({
  username: {
	type: String,
	unique: true,
	required: [ true, 'username is required' ]
  },
  password: {
	type: String,
	required: [true, 'password is required' ]
  }
});

// Create Model
// Model first letter must be capital
const Account = mongoose.model('Account', AccountSchema);

module.exports = Account;
