const express = require('express');
const accountController = require('../controllers/account');

// Routes
// We use mounting Routes
const router = express.Router();

router.route('/')
.get(accountController.getAccounts)
.post(accountController.newAccount)

router.route('/:id')
.get(accountController.getAccount)
.patch(accountController.updateAccount)
.delete(accountController.deleteAccount)

module.exports = router;
