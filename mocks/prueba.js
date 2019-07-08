const user = require("../fixtures/user");

module.exports = [
  {
    path: "/user",
    method: "GET",
    collection: true,
    callback: (req, res, next) => {
      res.body = user;
      next();
    }
  }
];
