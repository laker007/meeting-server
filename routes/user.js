var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET users listing. */
router
  .get(function (req, res, next) {
    var user = new User();
    user.name = req.body.name;  // set the bears name (comes from the request)

		user.save(function(err) {
			if (err)
				res.send(err);

			res.json({ message: 'User created!' });
		});
    // res.send('respond with a resource');
  });

module.exports = router;