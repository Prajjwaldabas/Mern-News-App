const jwt = require("jsonwebtoken");

module.exports.authenticateToken = (req, res, next) => {


  console.log("interets",req.body.interest)


  const token = req.headers.authorization;




  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  console.log("Token:", token);
console.log("Secret Key:", process.env.JWTKEY);

const cleanToken = token.replace("Bearer ", "").trim();
 
console.log(cleanToken)

jwt.verify(cleanToken, process.env.JWTKEY, (err, decodedToken) => {
    
  if (err) {
    console.error("JWT verification error:", err);
    return res.status(403).json({ message: "Forbidden" });
  }

  const user = decodedToken; // The payload is accessible directly as 'user'

  req.user = user;

  console.log("user", user);
  next(); // Proceed to the next middleware or route handler
});


};
