const jwt = require('jsonwebtoken');
const Account = require('../models/account');

const signToken = id => {
  // 60sec * 30 = 30mins
  return jwt.sign({ id }, process.env.JWT, { expiresIn: 60 * 30 });
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
  try {

	const { username, password } = req.body;

	// check input if not empty
	if (!username || !password) {
	  return next(res.status(400).json({status: 'fail', message: 'Email or Password is empty'}));
	}

	// check if account exist
	const account = await Account.findOne({ username }).select('+password');
	// since account now is equal to Account we can use account to use Account Schema
	const correct = await account.correctPassword(password, account.password);

	if (!account || !correct) {
	  return next(res.status(401).json({status: 'fail', message: 'Unauthorized email or password is incorrect'}));
	}

	// signing of token
	const token = signToken(account._id);

	res.status(200).json({
	  status: 'success',
	  token
	});
  }
  catch(err) {
	res.status(401).json({
	  status: 'fail',
	  message: err
	});
  }
}

exports.protect = async (req, res, next) => {
  try {
	// Get the token and check if not empty
	const authorization = req.headers.authorization;
	let token;
	if (authorization && authorization.startsWith('Bearer')) {
	  token = authorization.split(' ')[1];
	}

	// if no token
	if (!token) {
	  return next(res.status(401).json({status: 'fail', message: 'You\'re not login please login.'}));
	}

	// verify the token if valid
	const decoded = await jwt.verify(token, process.env.JWT);

	// check if account exist
	const account = await Account.findById(decoded.id);

	if (!account) {
	  return next(res.status(401).json({status: 'fail', message: 'Account does not exist'}));
	}

	next();
  }
  catch(err) {
	res.status(401).json({
	  status: 'fail',
	  message: err
	});
  }
}
