const express = require('express');
const router = express.Router();
const User = require('../models/User')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchusers');

// Create New Users
router.post('/signup',[
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),
] , async (req, res)=>{ 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      
      
      let user = await User.findOne({email: req.body.email})
      if (user){
        return res.status(400).json({error: "Sorry a user with this email already exists"})
      }

      // Hashing password
      const salt = await bcrypt.genSalt(10)
      const secPassword = await bcrypt.hash(req.body.password,salt) 

      // Sending data to DB
      user = await User.create({
        name: req.body.name,
        password: secPassword,
        email: req.body.email,
      })

      const data = {
        user:{
          id: user.id
        }
      }
      const token = jwt.sign( data , 'shhhhh');
      res.json({token})

    } catch (error) {
      console.error(error.message);
      res.status(500).json({Error:"Some Error Occured!!!"})
    }
})


// User Login 

router.post('/login',[
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password cannot be blank').exists(),
] , async (req, res)=>{ 
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

const {email, password} = req.body;
try {
  let user = await User.findOne({email});
  if (!user){
    return res.status(400).json({error : "Please try to login with correct credientials"})
  }

  const passwordCompare = await bcrypt.compare(password, user.password)
  if (!passwordCompare){
    return res.status(400).json({error : "Please try to login with correct credientials"})
  }

  const data = {
    user:{
      id : user.id
    }
  }
  const token = jwt.sign( data , 'shhhhh');
  res.json({token})

} catch (error) {
      console.error(error.message);
      res.status(500).json({Error:"Some Error Occured!!!"})
}

})


// Get User Data

router.post('/getuser', fetchuser, async(req, res) => {
  try {
    userID = req.user.id;
    const user = await User.findById(userID).select('-password')
    res.send(user )
  } catch (error) {
    console.error(error.message);
    res.status(500).json({Error:"Some Error Occured!!!"})
}
})


module.exports = router;