import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';

const app: Application = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(helmet());

// Basic Route for testing
app.get('/', (req, res) => {
    res.send('Server is running properly!');
});

export default app;