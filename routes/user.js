var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET users listing. */
router.get('/',function (req, res) {
  console.log('user');
  var user = new User();
  user.name = req.params.name; // set the bears name (comes from the request)

  console.log(req.params.name);

  user.save(function (err) {
    if (err)
      res.send(err);

    res.json({
      message: 'User created!'
    });
  });
  res.send('respond with a resource');
});

module.exports = router;