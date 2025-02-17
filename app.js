import express from 'express';
import userRoutes from './routes/users.js';

// ... existing code ...

// Add this before any routes
app.use(express.json());

// Add user routes
app.use('/users', userRoutes);

// ... existing code ...
