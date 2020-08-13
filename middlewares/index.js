const jwt = require('jsonwebtoken')

module.exports = {
    // Middleware para validar usuario antes de consultar
    validateToken: (req, res, next) => {
        try {
            if(!req.headers.authorization) res.status(403).send({error: 'Necesitas un token para continuar'});
            
            const { authorization } = req.headers;
            // const token = authorization.split(' ')[1];
            // const decoded = jwt.verify(token, process.env.JWT_SECRET);

            const splitted = authorization.split(' ');
            if(splitted[0] !== 'spotify') res.status(403).send({error: 'Tu bearer es incorrecto'});
            const decoded = jwt.verify(splitted[1], process.env.JWT_SECRET);

            req.decoded = decoded;
            next();
        } catch (error) {
            res.status(403).send({ error })
        }
      }
}