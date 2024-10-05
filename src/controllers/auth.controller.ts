import { Request, Response } from "express";
import { prismaClient } from "../index.js";
import { hashSync } from "bcrypt";

export const register = async (request: Request, response: Response) => {
  // get the data from user
  const { name, email, password } = request.body;

  // check for user
  let user = await prismaClient.user.findFirst({ where: { email: email } });
  if (user) {
     response.status(400).json({ message: "User already exists" });
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
