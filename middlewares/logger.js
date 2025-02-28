const log = (req, rest, next) => {
  console.log(new Date().toLocaleDateString(), "=>", req.method, req.originalUrl);
  next();
};

module.exports = log;
