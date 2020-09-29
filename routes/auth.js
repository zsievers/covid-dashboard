// login user

// register a user
const express = require('express');
const router = express.Router();

// @route           GET api/auth
// @description     get logged in user
// @access        Private
router.get('/', (req, res) => {
  res.send('Get logged in user');
});

// @route           POST api/auth
// @description     Auth user and get token
// @access        public
router.post('/', (req, res) => {
  res.send('Log user in');
});

module.exports = router;
