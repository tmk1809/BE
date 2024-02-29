// var express = require("express");
// const { MongoClient } = require("mongodb");
// const AccountModel = require("../models/AccountModel");
// var router = express.Router();

// router.post('/login', (req, res) =>{
//     const users = [
//         { username: 'user1', password: 'password1' },
//         { username: 'user2', password: 'password2' }
//     ];
    
//     const { username, password } = req.body;
//     const user = users.find(user => user.username === username && user.password === password);
//       if (user) {
//         res.json({ message: 'Login successful', user });
//       } else {
//         res.status(401).json({ message: 'Invalid username or password' });
//       }
//   });

// router.get('/logout', (req, res) => {
//     req.session.destroy((err) => {
//         if (err) {
//             console.log(err);
//         } else {
//             res.redirect('/');
//         }
//     });
//   });

//   module.exports = router;
const express = require('express');
const router = express.Router();
const loginController = require('../controllers/LoginController');

// Login route
router.post('/login', loginController.login);

module.exports = router;    