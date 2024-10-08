import { HttpException } from "./root.js";

export class UnprocessableEntity extends HttpException {
  constructor(message: string, error: any, errorCode: number) {
    super(message, 422, errorCode, error);
  }
}
