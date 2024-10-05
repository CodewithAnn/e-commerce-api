import { Request, Response } from "express";
import { prismaClient } from "../index.js";
import { hashSync } from "bcrypt";
import { BadRequestsException } from "../exceptions/bad_request.js";
import { ErrorCodes } from "../exceptions/root.js";

export const register = async (request: Request, response: Response) => {
  // get the data from user
  const { name, email, password } = request.body;

  // check for user
  let user = await prismaClient.user.findFirst({ where: { email: email } });
  if (user) {
    throw new BadRequestsException(
      "user already exists",
      ErrorCodes.USER_ALREADY_EXISTS
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
};
