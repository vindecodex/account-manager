const express = require('express');
const accountController = require('../controllers/account');
const auth = require('../controllers/auth');

// Routes
// We use mounting Routes
const router = express.Router();

// router.route('/')
// .get(auth.protect, accountController.getAccounts)
// .post(auth.createAccount)
//
// router.route('/login')
// .post(auth.login)
//
// router.route('/:id')
// .get(auth.protect, accountController.getAccount)
// .patch(auth.protect, accountController.updateAccount)
// .delete(auth.protect, accountController.deleteAccount)
//
//
//
router.route('/')
.get(accountController.getAccounts)
.post(auth.createAccount)

router.route('/login')
.post(auth.login)

router.route('/:id')
.get(accountController.getAccount)
.patch(accountController.updateAccount)
.delete(accountController.deleteAccount)

module.exports = router;
