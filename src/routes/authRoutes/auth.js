const express = require('express');
const router = express.Router();
const { signup } = require('../../controllers/auth/signup');
const { signIn } = require('../../controllers/auth/signIn');

router.post('/signup', signup);
router.post('/signn', signIn);

module.exports = router;
