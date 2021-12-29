var JWT = require("jsonwebtoken");
const {ACCESS_TOKEN_SECRET_KEY} = require("../config");
const generateAccessToken = (user) => {
  return JWT.sign(
    { name: user.user_email, ...user },
    ACCESS_TOKEN_SECRET_KEY,
    { expiresIn: 60 * 60 }
  );
};

const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    JWT.verify(token, ACCESS_TOKEN_SECRET_KEY, function (err, user) {
      if (err) {
        reject(err);
      }
      resolve(user);
    });
  });
};

module.exports = {
  generateAccessToken,
  verifyToken,
};
