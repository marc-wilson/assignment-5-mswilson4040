const express = require('express');
const router = express.Router();
const UserService = require('../services/UserService');

router.get('/', (req, res, next) => {
    res.render('newuser', {title: 'New User'});
});

/**
 * POST: Create a new User
 */
router.post('/', async (req, res) => {
    const body = req.body;
    if (body) {
        await UserService.createUser(body.name, body.age, body.department, body.title);
        const users = await UserService.getUsers();
        res.render('manageusers', { title: 'Manage Users', users: users });
    }
});

module.exports = router;
