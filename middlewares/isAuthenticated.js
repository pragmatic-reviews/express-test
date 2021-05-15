
const isAuthenticated = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    // return unauthorized
    res.status(401).send("Unauthorized");
  }
};

module.exports = isAuthenticated;
