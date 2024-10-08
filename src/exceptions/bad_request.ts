import { ErrorCodes, HttpException } from "./root.js";

export class BadRequestsException extends HttpException {
  constructor(message: string, statusCode: number, errorCode: ErrorCodes) {
    super(message, statusCode, errorCode, null);
  }
}
