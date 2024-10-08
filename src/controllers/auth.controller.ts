import { NextFunction, Request, Response } from "express";
import { prismaClient } from "../index.js";
import { hashSync } from "bcrypt";
import { BadRequestsException } from "../exceptions/bad_request.js";
import { ErrorCodes } from "../exceptions/root.js";
import { UnprocessableEntity } from "../exceptions/validation.js";
import { SignUpSchema } from "../schema/user.schema.js";

export const register = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    // validate request
    SignUpSchema.parse(request.body);
    // get the data from user
    const { name, email, password } = request.body;

    // check for user
    let user = await prismaClient.user.findFirst({ where: { email: email } });
    if (user) {
      return next(
        new BadRequestsException(
          "user already exists",
          409,
          ErrorCodes.USER_ALREADY_EXISTS
        )
      );
    }

    user = await prismaClient.user.create({
      data: {
        name,
        email,
        password: hashSync(password, 13),
      },
    });

    response.json(user);
    //  };
  } catch (error: any) {
    return next(
      new UnprocessableEntity(
        "UnprocessEntity",
        error?.issues,
        ErrorCodes.UNPROCESSED_ENTITY
      )
    );
  }
};
