const express = require('express')
const User = require('../models/User')
const router = express.Router()
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs')
const fetchuser = require('../middleware/fetchuser')
const jwt = require('jsonwebtoken');



// Route 1 ->    Create a User using POST: "/api/auth/createuser". No login required
router.post('/createuser', [
    body('name', 'Enter a valid name').notEmpty().isLength({ min: 3 }), 
    body('email', 'Enter a valid email').isEmail(), 
    body('password', 'Password must be between 6 and 10 characters').isLength({min: 6})
] , async (req , res) => {

    let success = false;
    // If there are errors, return bad request and the errors
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json({ errors: result.array() })
    }

    try { 
        // Check whether the user with this email exists already
        let user = await User.findOne({email: req.body.email})
        if (user) {
            return res.status(400).json({success , error: "Sorry a user with this email already exists"})
        }

        // Hashing the password before storing it in the database
        const salt = await bcrypt.genSalt(10);
        let secPassword = await bcrypt.hash(req.body.password , salt);
        
        // Create a new user
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPassword
        })

        // provide a token to the user
        const data = {
            user: { 
                id: user.id 
            }
        }
        const authToken = jwt.sign(data, 'Toseef');
        success = true;
        res.json({ success , authToken })

    } catch (error) {
        res.status(500).json({error: "Internal Server Error"})
    }
});



// Route 2 ->    Authenticate a User using POST: "/api/auth/login". No login required
router.post('/login', [ 
    body('email', 'Enter a valid email').isEmail(), 
    body('password', 'Password cannot be blanked').exists()
] , async (req , res) => {
    let success = false;

    // If there are errors, return bad request and the errors
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json({success , errors: result.array() })
    }

    const {email , password} = req.body;
    
    try {
        // Check whether the user with this email exists already
        let user = await User.findOne({email});
        if(!user) {
            return res.status(400).json({ success , error: "Please enter correct email"})
        }

        // Compare the password with the hashed password in the database
        const compPassword = await bcrypt.compare(password, user.password);
        if(!compPassword) {
            return res.status(400).json({success , error: "Please enter correct password"})
        }

        // provide a token to the user
        const data = {
            user: { 
                id: user.id 
            }
        }
        const authToken = jwt.sign(data, 'Toseef');
        success = true;
        res.json({ success , authToken })


    } catch(error) {
        res.status(500).send({error: "Internal Server Error"})
    }
});



// Route 3 ->  Get loggedin User detail using POST: "/api/auth/getuser". Login required
router.post('/getuser' , fetchuser , async (req , res) => {

    try {
        const userId = req.user.id;
        const user = await User.findById(userId).select("-password")  // we can select all fields accept password
        res.send(user)
        
    } catch (error) {
        res.status(500).json({error: "Internal Server Error"})
    }
})



module.exports = router