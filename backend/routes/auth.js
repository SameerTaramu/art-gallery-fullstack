const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const router = express.Router();
const { forgotPassword, resetPassword } = require('../controllers/authController');



router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
      
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

       
        const hashedPassword = await bcrypt.hash(password, 10);

       
        const newUser = new User({ name, email, password: hashedPassword });

       
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});





router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        if (!email || !password) {
            return res.status(400).json({ message: "Please provide both email and password" });
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        const token = jwt.sign(
            { id: user._id, 
                role: user.role },
            process.env.JWT_SECRET || 'your_jwt_secret', 
            { expiresIn: '1h' }
        );

        res.status(200).json({ token,email:email ,userId:user._id});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error logging in', error: error.message });
    }
});
router.post('/forgot-password', forgotPassword);
module.exports = router;