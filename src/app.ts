import express from 'express';
import { usersRoutes } from './routes/routes';
import dotenv from 'dotenv';

dotenv.config();
const app  = express();
app.use(express.json());


usersRoutes(app);


export default app;

// app.get('/', (req, res) => {
//     res.send('Server is running properly!');

// });
// app.post('/test', (req, res) => {
//     const { name, email, age } = req.body;
//     res.json({ message: `Hello, ${name}! You are ${age} years old. and your email is ${email}` });
// });


