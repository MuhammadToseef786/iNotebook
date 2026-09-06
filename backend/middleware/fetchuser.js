const jwt = require('jsonwebtoken');

const fetchuser = (req , res , next) => {

    // get the User from the jwt token and add id to req object
    const token = req.header("-auth-token");
    if (!token) {
        return res.status(401).send({error: "please authenticate using a valid token"})
    }

    try {
        const data = jwt.verify(token, 'Toseef');
        req.user = data.user
        next();
        
    } catch (error) {
        res.status(401).send({error: "please authenticate using a valid token"})
    }
    
}


module.exports = fetchuser