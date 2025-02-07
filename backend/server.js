import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import otpRoutes from './routes/otpEmailRoutes.js';


// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB();

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Routes
app.use('/api/auth', authRoutes);

app.use('/api/otp', otpRoutes);


// Start the server
app.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});
