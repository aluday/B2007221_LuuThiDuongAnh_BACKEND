const express = require('express');
const account  = require('../controller/accountController');

const router = express.Router();

router.post("/register", account.createAccout);
router.post("/login",account.loginAccount);

module.exports = router;