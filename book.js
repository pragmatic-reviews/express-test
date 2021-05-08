var express = require('express');
var router = express.Router();

// Sample middleware
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now());
  next();
})
// GET /book
router.get('/book', function (req, res) {
  res.send('Get a book');
})
// POST /book
router.post('/book', function (req, res) {
  res.send('Add a book');
})

module.exports = router
