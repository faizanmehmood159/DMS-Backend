const express = require('express');
const router = express.Router();
const { signup } = require('../../controllers/auth/signup');
const { signIn } = require('../../controllers/auth/signIn');

router.post('/signup', signup);
router.post('/signin', signIn);

module.exports = router;
