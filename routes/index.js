const express = require('express');
const router = express.Router();
const userRoutes = require('./userRoutes');

router.get('/', (req, res) => res.status(200).send({message: 'Server on'}));
router.use(userRoutes)

module.exports = router
