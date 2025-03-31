import express, { Application } from 'express';
import path from 'path';

const app: Application = express();

// Middlewares
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.urlencoded({ extended: false }));

// Routes
import ApiRouter from './router/api.router';
app.use('/api/v1', ApiRouter);

export default app;
