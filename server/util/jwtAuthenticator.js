const jwt = require("jsonwebtoken");

const jwtAuthenticator = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const isOk = jwt.verify(token, process.env.salt);
    const urlPathRole = req.baseUrl.replace("/", "");
    if (!isOk) {
      return res.status(401).json({
        ok: false,
      });
    }
    if (isOk.role !== urlPathRole) {
      return res.status(401).json({
        ok: false,
      });
    }
    req.user = isOk;
    next();
  } catch (error) {
    res.status(400).json({
      ok: false,
    });
  }
};


module.exports = {
  jwtAuthenticator,
};
