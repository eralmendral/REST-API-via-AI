import user from '../models/User.js';

const userController = {
    signup: (req, res) => {
        const { email, password } = req.body;

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ error: 'Invalid email format' });
        }

        // Validate password
        if (!password || password.length < 8) {
            return res.status(400).json({ error: 'Password must be at least 8 characters long' });
        }

        // Here you would typically save the user to a database
        // For now, just return a success message
        res.status(201).json({ message: 'User registered successfully' });
    },

    login: (req, res) => {
        const { email, password } = req.body;

        // Here you would typically verify the user credentials against a database
        // For now, just return a success message
        if (email && password) {
            res.status(200).json({ message: 'Login successful' });
        } else {
            res.status(400).json({ error: 'Email and password are required' });
        }
    }
};

export default userController; 