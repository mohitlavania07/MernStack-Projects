const Users = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userCtrl = {
    register: async (req, res) => {
        try {
            const { name, email, password } = req.body;
            
            const user = await Users.findOne({ email });
            if (user) {
                return res.status(400).json({ msg: 'Email already exists' });
            }
            if (password.length < 6) {
                return res.status(400).json({ msg: "Password must be at least 6 characters" });
            }

            // Hash the password
            const passwordHash = await bcrypt.hash(password, 10);
            const newUser = new Users({
                name,
                email,
                password: passwordHash
            });

            // Save to MongoDB
            await newUser.save();

            // Create a token
            const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

            res.json({
                msg: "User created successfully",
                token
            });

        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    }
};

module.exports = userCtrl;
