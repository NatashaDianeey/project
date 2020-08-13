const User = require('../models/User');
const bcrypt = require('bcrypt');

module.exports = {
    create: (body) => {
        const newUser = new User(body);
        return newUser.save();
    },
    getUsers: () => User.find({ is_active: true }),
    getUser: (id) => User.findById(id),
    updateUser: (user, body) => {
        Object.assign(user, body);
        return user.save();
    },
    findUserByEmail: (userEmail) => User.findOne({email: userEmail}),
    comparePasswords: (candidatePassword, userPassword) => {
        return bcrypt.compareSync(candidatePassword, userPassword);
    }
}
