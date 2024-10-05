import { NextFunction, Request, Response } from "express";
import { HttpException } from "../exceptions/root.js";

export const errorMiddleWear = async (
  error: HttpException,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  response.send(error.statusCode).json({
    message: error.message,
    errorCode: error.errorCode,
    error: error.errors,
  });
};
