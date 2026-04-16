import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { usersRoutes } from './routes/routes';

const app  = express();
app.use(express.json());


usersRoutes(app);




// app.get('/', (req, res) => {
//     res.send('Server is running properly!');

// });
// app.post('/test', (req, res) => {
//     const { name, email, age } = req.body;
//     res.json({ message: `Hello, ${name}! You are ${age} years old. and your email is ${email}` });
// });


export default app;