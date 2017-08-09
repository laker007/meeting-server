var express = require('express');
var router = express.Router();
var Meeing = require('../models/meeting');


// /api/meeting
router.route('/')
  .get(function (req, res) {

    Meeing.find(function (err, meetings) {
      if (err) {
        res.send(err);
      }

      console.log(res.json(meetings))
    })
  })
  .post(function (req, res) {
    console.log(req);
    console.log(res);
    var meeting = new Meeing();

    meeting.save(function (err) {
      if (err) {
        res.send(err);
      } else {
        res.json({
          message: 'Meeting created!'
        })
      }
    })
  })

// /api/meeting/:name
router.route('/:name')
  .post(function (req, res) {

    var meeting = new Meeing(); // create a new instance of the Bear model
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
    Meeing.remove({
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