const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

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

// Hashing the password
AccountSchema.pre('save', async function(next) {
  // check if password was modified if not then return next middleware
  // to avoid hashing password again and again even if it was not modified
  if (!this.isModified('password')) return next();

  // 12 is level of how strong password will be hashed
  this.password = await bcrypt.hash(this.password, 12)
  
  // always call next after each middleware function to proceed to the next middleware
  next();
})

// Create Model
// Model first letter must be capital
const Account = mongoose.model('Account', AccountSchema);

module.exports = Account;
