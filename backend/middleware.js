module.exports.isAuthenticated = function(req,res,next){
        const authorizationHeader = req.headers.authorization;
      
        if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
          // No "Bearer" token found in the header
          return res.status(401).redirect('http://localhost:3000');
        }
      
        // Extract the token from the header
        const token = authorizationHeader.split(' ')[1];
      
        // Attach the token to the request for further processing
        console.log(token);
        req.token = token;
        console.log("Users",req.token);
        // Continue to the next middleware
        next();
      };

module.exports.handleBadRequests = function (err,req,res,next){
    console.error(err.stack);
    res.status(500).send('Something broke!');
}

module.exports.exceptionHandler = function(f){
    return function(req,res,next){
        Promise.resolve(f(req,res,next)).catch(next);
    }
}