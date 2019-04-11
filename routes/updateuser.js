const express = require('express');
const router = express.Router();
const UserService = require('../services/UserService');

/**
 * GET : Get User By Id
 */
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const user = await UserService.getUserById(id);
    res.render('updateuser', { title: 'Update Users', user: user });
});

/**
 * PUT : Update the User
 */
router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const user = await UserService.updateUser(id, {
        name: body.name,
        age: +body.age,
        department: body.department,
        title: body.title
    });
    const users = await UserService.getUsers();
    res.render('manageusers', { title: 'Manage Users', users: users });
});

module.exports = router;
