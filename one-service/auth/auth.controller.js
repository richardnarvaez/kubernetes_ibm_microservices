
const userService = require('./user.service');

function authenticate(req, res, next) {
    if(!req.user){
        res.status(400).json({ message: 'Username or password is incorrect' })
    }
    next()
    // userService.authenticate(req.body)
    //     .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
    //     .catch(err => next(err));
}

function getAll(req, res, next) {
    userService.getAll()
        .then(users => res.json(users))
        .catch(err => next(err));
}

module.exports = { authenticate, getAll }