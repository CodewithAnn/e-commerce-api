import { NextFunction, Request, Response } from "express";
import { HttpException } from "../exceptions/root.js";

export const errorMiddleWear = async (
  error: HttpException,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  response.status(error.statusCode).json({
    message: error.message,
    errorCode: error.errorCode,
    error: error.errors,
  });
  // return next();
};
