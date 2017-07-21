var express = require('express');
var router = express.Router();
var User = require('../models/user');


// /api/user
router.route('/')
  .get(function (req, res) {

    User.find(function (err, users) {
      if (err) {
        res.send(err);
      }

      console.log(res.json(users))
    })
  })
  .post(function (req, res) {
    var user = new User();
    res.json(req.body);
  })

// /api/user/:name
router.route('/:name')
  .post(function (req, res) {

    var user = new User(); // create a new instance of the Bear model
    user.name = req.params.name; // set the bears name (comes from the request)

    user.save(function (err) {
      if (err)
        res.send(err);

      res.json({
        message: 'User created!'
      });
    });


  })

  .delete(function (req, res) {
    User.remove({
      _id: req.params.name
    }, function (err, user) {
      if (err) {
        res.send(err);
      }
      res.json({
        message: 'Successfully deleted'
      });
    })
  })

module.exports = router;