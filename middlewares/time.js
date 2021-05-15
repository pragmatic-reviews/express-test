
const timeLog = (req, res, next) => {
  console.log('Middleware - Time: ', Date.now());
  next();
}

module.exports = timeLog;
