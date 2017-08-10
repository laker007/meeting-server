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
    console.log(1);
    console.log(req.query);
    console.log(req.body);

    var meeting = new Meeing();
    meeting.topic = req.body.topic;
    meeting.start = req.body.start;

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

// /api/meeting/:topic
router.route('/:topic')
  .post(function (req, res) {

    var meeting = new Meeing(); // create a new instance of the Bear model
    meeting.topic = req.params.topic; // set the bears name (comes from the request)

    meeting.save(function (err) {
      if (err)
        res.send(err);

      res.json({
        message: 'Meeting created!'
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