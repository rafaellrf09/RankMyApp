var x = 0;
const CountAccess = function(req, res, next) {
  console.log(x += 1);
  next();
}

module.exports = CountAccess;