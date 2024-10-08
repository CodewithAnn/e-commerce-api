// import { response } from "express"

import { NextFunction, Request, Response } from "express";
import { ErrorCodes, HttpException } from "./exceptions/root.js";
import { InternalExceptionError } from "./exceptions/internal_exception_error.js";

export const errorHandler = (method: Function) => {
  return async (request: Request, response: Response, next: NextFunction) => {
    try {
      await method(request, response, next);
    } catch (error: any) {
      let exceptions: HttpException;
      if (error instanceof HttpException) {
        exceptions = error;
      } else {
        exceptions = new InternalExceptionError(
          "Server Error!",
          error,
          ErrorCodes.INTERNAL_ERROR
        );
      }
      next(exceptions);
    }
  };
};
