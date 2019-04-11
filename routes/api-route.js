const express = require('express');
const router = express.Router();
const UserService = require('../services/UserService');

/**
 * GET : Get all users
 */
router.get('/', async (req, res) => {
    const users = await UserService.getUsers();
    res.status(200).json(users);
});

/**
 * DELETE : Deletes a user
 */

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    await UserService.deleteUser(id);
    return res.status(200).json();
});

/**
 * GET : Get User By Id
 */
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const user = await UserService.getUserById(id);
    res.status(200).json(user);
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
    res.status(200).json(user);
});

/**
 * POST: Create a new User
 */
router.post('/', async (req, res) => {
    const body = req.body;
    if (body) {
        const user = await UserService.createUser(body.name, body.age, body.department, body.title);
        res.status(201).json(user);
    }
});


module.exports = router;
