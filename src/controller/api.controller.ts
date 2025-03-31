import { NextFunction, Request, Response } from 'express';
import ApiResponse from '../util/ApiResponse';
import { StatusCode } from '../constant/statusCodes';
import { ResponseMessage } from '../constant/responseMessage';
import ApiError from '../util/ApiError';

export default {
  self: (req: Request, res: Response, next: NextFunction) => {
    try {
      ApiResponse(req, res, StatusCode.OK, ResponseMessage.SUCCESS, {});
    } catch (error) {
      ApiError(next, error, req, StatusCode.INTERNAL_SERVER_ERROR);
    }
  }
};
