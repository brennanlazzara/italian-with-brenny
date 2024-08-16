import express, { Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db';
import verbRoutes from './routes/verbRoutes';
import pronounRoutes from './routes/pronounRoutes';

dotenv.config();

const app: Application = express();

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/verbs', verbRoutes);
app.use('/api/pronouns', pronounRoutes);

const PORT: string | number = process.env.PORT || 5002;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));