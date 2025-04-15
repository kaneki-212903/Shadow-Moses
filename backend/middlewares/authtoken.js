const jwt = require('jsonwebtoken');
require('dotenv').config();
const authtoken = (req, res, next) => {
    // Get the token from the request header
    const token = req.header('x-auth-token');

    // Check if the token is missing
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized - No token provided' });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWTPRIVATEKEY);

        // Attach the decoded user information to the request
        req.user = decoded.user;

        // Continue to the next middleware or route handler
        next();
    } catch (error) {
        console.error(error);
        res.status(401).json({ message: 'Unauthorized - Invalid token' });
    }
};

module.exports = authtoken;