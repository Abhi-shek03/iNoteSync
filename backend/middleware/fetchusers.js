const jwt = require('jsonwebtoken');

const fetchuser = (req, res, next) => {
    const token = req.header('token');
    if(!token) {
        res.status(401).send({error : 'Please authenticate using valid token'})
    }
    try {
        const data = jwt.verify(token, 'shhhhh')
        req.user = data.user
        next()
    } catch (error) {
        res.status(401).send({error : 'Please authenticate using valid token'}) 
    }
}

module.exports = fetchuser;