const router = require('express').Router();
const authController = require('../controllers/auth/auth.controller')
const {rules: registerRules} = require('../validations/auth/register');
const {rules: loginRules} = require('../validations/auth/login');
const {validate} = require('../validations');

router.post('/login', loginRules, validate, authController.login);
router.post('/register', registerRules, validate, authController.register);

module.exports = router;
