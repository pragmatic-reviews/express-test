var express = require('express');
var router = express.Router();

// Time Middleware
const time = require("../middlewares/time.js");
router.use(time);

// Assign user Middleware
const assignUser = require("../middlewares/assignUser.js");
router.use(assignUser);

// Check User Authentication Middleware
const isAuthenticated = require("../middlewares/isAuthenticated.js");

// GET /book
router.get('/books', isAuthenticated, function (req, res) {
  res.send('Get a list of books - User => ' + req.user.username);
});

// POST /book
router.post('/books', isAuthenticated, function (req, res) {
  res.send('Add a new book - User => ' + req.user.username);
});

module.exports = router
