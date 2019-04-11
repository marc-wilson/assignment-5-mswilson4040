const mongoose = require('mongoose');
const User = require('../models/userschema');

class UserService {
    static async createUser(name, age, department, title) {
        const user = new User({
            name: name,
            age: +age,
            department: department,
            title: title
        });
        await user.save();
        return user;
    }

    static async getUsers() {
        return await User.find();
    }

    static async deleteUser(userId) {
        await User.findByIdAndDelete(userId);
    }

    static async getUserById(userId) {
        return await User.findById(userId);
    }

    static async updateUser(userId, user) {
        const userToUpdate = await User.findById(userId);
        userToUpdate.name = user.name;
        userToUpdate.age = +user.age;
        userToUpdate.department = user.department;
        userToUpdate.title = user.title;
        await userToUpdate.save();
        return userToUpdate;
    }
}

module.exports = UserService;
