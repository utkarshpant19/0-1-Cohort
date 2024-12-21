import { NextFunction, Request, Response } from "express";
import prisma from "../db/db";
import { statusCodes } from "../constants/statusCodes.constant";
import UserNotFoundException from "../exceptions/UserNotFoundExpection";

async function userMiddleware(req: Request, res: Response, next: NextFunction) {
  const userId = +req.params.id;

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new UserNotFoundException(+userId);
  } else {
    next();
  }
}

export default userMiddleware;
