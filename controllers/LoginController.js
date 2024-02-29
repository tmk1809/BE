// routes/authRoutes.js

const express = require('express');
const router = express.Router();
// const authController = require('../controllers/authController');

// Login route
// router.post('/login', authController.login);
const users = [
    { id: 1, username: 'user1', password: 'password1' },
    { id: 2, username: 'user2', password: 'password2' }
];

// Login controller function
exports.login = (req, res) => {
    const { username, password } = req.body;
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        // Authentication successful
        res.json({ message: 'Login successful', user });
    } else {
        // Authentication failed
        res.status(401).json({ message: 'Invalid username or password' });
    }
};

// module.exports = new LoginController;
