var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now());
  next();
})
// define the home page route
router.get('/book', function (req, res) {
  res.send('Get a book');
})
// define the about route
router.post('/book', function (req, res) {
  res.send('Add a book');
})

module.exports = router
