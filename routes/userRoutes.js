const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const middlewares = require('../middlewares')

router.post('/users', userController.create);
router.post('/users/login', userController.login);

router.use(middlewares.validateToken);
router.get('/users', userController.getUsers);
router.get('/users/:id', userController.getUser);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

module.exports = router