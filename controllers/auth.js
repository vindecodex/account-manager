const jwt = require('jsonwebtoken');
const Account = require('../models/account');

const signToken = id => {
  return jwt.sign({ id }, process.env.JWT, { expiresIn: '1m' });
}

exports.createAccount = async (req, res) => {
  try {
	const account = await Account.create({
	  username: req.body.username,
	  password: req.body.password
	});

	const token = signToken(account._id);

	res.status(201).json({
	  status: 'success',
	  token,
	  account
	});
  }
  catch(err) {
	res.status(400).json({
	  status: 'fail',
	  message: err
	});
  }
}

exports.login = async (req, res, next) => {

  const { username, password } = req.body;

  // check input if not empty
  if (!username || !password) {
	// res.status(400).json({
	  // status: 'fail',
	  // message: 'email or password is empty'
	// })
	return next();
  }

  // check if account exist
  const account = await Account.findOne({ username }).select('+password');
  // since account now is equal to Account we can use account to use Account Schema
  const correct = await account.correctPassword(password, account.password);

  if (!account || !correct) {
	// res.status(401).json({
	  // status: 'fail',
	  // message: 'Unauthorized email or password incorrect'
	// });
	return next();
  }

  // signing of token
  const token = signToken(account._id);

  res.status(200).json({
	status: 'success',
	token
  });
}
