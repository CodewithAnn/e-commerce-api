import { ErrorCodes, HttpException } from "./root.js";

export class InternalExceptionError extends HttpException {
  constructor(
    message: string,

    error: any,
    errorCode: ErrorCodes
  ) {
    super(message, 500, error, errorCode);
  }
}
