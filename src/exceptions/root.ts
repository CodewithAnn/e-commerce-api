export class HttpException extends Error {
  message: string;
  statusCode: number;
  errorCode: ErrorCodes;
  errors: any;

  constructor(message: string, statusCode: number, errorCode: ErrorCodes, error: any) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;
    this.errorCode = errorCode;
    this.errors = error;
  }
}

export enum ErrorCodes{
    USER_NOT_FOUND = 1001,
    USER_ALREADY_EXISTS= 1002,
    INCORRECT_PASSWORD = 1003,
    EMAIL_ALREADY_EXISTS = 1004,
    INVALID_TOKEN = 1005

}
