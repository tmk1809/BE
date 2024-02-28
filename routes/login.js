var express = require("express");
// const { MongoClient } = require("mongodb");
// const AccountModel = require("../models/AccountModel");
var router = express.Router();

router.post('/login', (req, res) =>{
    const { username, password } = req.body;
      // Add your authentication logic here
      if (username === 'admin' && password === 'password') {
          req.session.username = username;
          res.redirect('/');
      } else {
          res.send('Invalid username or password');
      }
  });
  
router.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/');
        }
    });
  });

  module.exports = router;