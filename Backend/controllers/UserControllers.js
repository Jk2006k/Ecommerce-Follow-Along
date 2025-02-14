const User = require('../models/UseModels');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const signUp = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await User.findOne({ email });

        if (user) {
            return res.status(400).send('User Already Exists');
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            img: req.file ? req.file.filename : null
        });

        await newUser.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.log("Error in signup:", error);
        res.status(500).send(error.message);
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).send("User doesn't exist"); 
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).send("Invalid credentials");
        }

        const token = jwt.sign({ _id: user._id, email: user.email }, "secret", { expiresIn: "1h" });
        return res.status(200).json({ message: "Successfully logged in", token });
    } catch (error) {
        console.log("Error in login:", error);
        return res.status(500).send("Server error");
    }
};

module.exports = { login, signUp };
