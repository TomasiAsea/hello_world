const express = require("express");
const router = express.Router();

//import model
const Application = require("../models/userRegistration")

router.get('/adduser', (req, res) => { // new
    res.render('addUser');
  });
  
  router.post('/adduser', (req, res) => { // new
   const user = new Application(req.body)
   console.log(user)
   user.save(); 
   // res.redirect("/index");
    
  });

  module.exports = router;