import express from 'express';
const app = express();
import { taskManagerRouter } from './routes/index';

// home route
app.get('/', (req, res) => {
    res.send('Welcome to the Task Manager API');
});

// middleware
app.use(express.json());

// task manager routes
app.use('/api/v1/tasks', taskManagerRouter)

export { app };