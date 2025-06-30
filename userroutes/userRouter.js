const express = require('express');
const router = express.Router();
const usercontroller = require('../usercontroller/userController');
// const authenticate = require('../middleware/Auth');

router.post('/createuser', usercontroller.createuser);
// router.post('/loginuser', usercontroller.loginuser);
// router.get('/getuser', usercontroller.getuser);

module.exports = router;