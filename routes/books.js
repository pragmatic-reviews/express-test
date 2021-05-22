const express = require('express');
const router = express.Router();

// Time Middleware
const time = require("../middlewares/time.js");
router.use(time);

// Assign user Middleware
const assignUser = require("../middlewares/assignUser.js");
router.use(assignUser);

// Check User Authentication Middleware
const isAuthenticated = require("../middlewares/isAuthenticated.js");

// GET /books
router.get('/books', isAuthenticated, function (req, res) {
  res.send('Get a list of books - User => ' + req.user.username);
});

// GET /books/:id
router.get('/books/:id', isAuthenticated, function (req, res) {
  res.send('Get a list of books - User => ' + req.user.username + ' ID => ' + req.params.id );
});

// POST /books
router.post('/books', isAuthenticated, function (req, res) {
  res.send('Add a new book - User => ' + req.user.username);
});

module.exports = router
