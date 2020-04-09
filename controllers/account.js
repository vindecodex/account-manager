const Account = require('../models/account');

exports.deleteAll = async (req, res) => {
  try {
	const accounts = await Account.deleteMany({})
	res.status(204).json({
	  status: 'success'
	})
  }
  catch(err) {
	res.status(400).json({
	  status: 'fail',
	  message: err
	})
  }
}

exports.getAccounts = async (req, res) => {
  try {
	const accounts = await Account.find();
	res.status(200).json({
	  status: 'success',
	  results: accounts.length,
	  accounts
	});
  }
  catch(err) {
	res.status(400).json({
	  status: 'fail',
	  message: err
	});
  }
}

exports.getAccount = async (req, res) => {
  try {
	const account = await Account.findById(req.params.id);
	// other way arround Account.findOne({_id: req.params.id});
	res.status(200).json({
	  status: 'success',
	  account
	});
  }
  catch(err) {
	res.status(404).json({
	  status: 'fail',
	  message: err
	});
  }
}

exports.updateAccount = async (req, res) => {
  try {
	// params new will return the new data's while runValidators will check schema validation if it is fill in or has a correct data type
	const account = await Account.findByIdAndUpdate(req.params.id, req.body, {
	  new: true,
	  runValidators: true
	});
	res.status(201).json({
	  status: 'success',
	  account
	});
  }
  catch(err) {
	res.status(404).json({
	  status: 'fail',
	  message: err
	});
  }
}

exports.deleteAccount = async (req, res) => {
  try {
	// Never send data to the client when deleting
	const account = await Account.findByIdAndDelete(req.params.id);
	res.status(204).json({
	  status: 'success'
	});
  }
  catch(err) {
	res.status(404).json({
	  status: 'fail',
	  message: err
	});
  }
}
