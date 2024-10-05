import { ErrorCodes, HttpException } from "./root.js";

export class BadRequestsException extends HttpException {
  constructor(message: string, errorCode: ErrorCodes) {
    super(message, 400, errorCode, null);
  }
}
