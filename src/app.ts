import express, { Application, NextFunction, Request, Response } from 'express';
import path from 'path';

const app: Application = express();

// Middlewares
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.urlencoded({ extended: false }));

// Routes
import ApiRouter from './router/api.router';
import globalErrorHandler from './middleware/globalErrorHandler';
import { ResponseMessage } from './constant/responseMessage';
import ApiError from './util/ApiError';
import { StatusCode } from './constant/statusCodes';
app.use('/api/v1', ApiRouter);

// 404 Error Handler
app.use((req: Request, _: Response, next: NextFunction) => {
  try {
    throw new Error(ResponseMessage.NOT_FOUND('Route'));
  } catch (error) {
    ApiError(next, error, req, StatusCode.NOT_FOUND);
  }
});

// Global Error Handler
app.use(globalErrorHandler);

export default app;
