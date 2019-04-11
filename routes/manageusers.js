const express = require('express');
const router = express.Router();
const UserService = require('../services/UserService');

/**
 * GET : Get all users
 */
router.get('/', async (req, res) => {
    const users = await UserService.getUsers();
    res.render('manageusers', { title: 'Manage Users', users: users });
});

module.exports = router;
