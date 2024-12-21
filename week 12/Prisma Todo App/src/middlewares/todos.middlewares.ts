import { Request, Response, NextFunction } from "express";
import { statusCodes } from "../constants/statusCodes.constant";
import prisma from "../db/db";
export async function checkTodo(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const userId = req.params.id;

  const user = await prisma.user.findFirst({
    where: {
      id: +userId,
    },
  });

  if (!user) {
    res.status(statusCodes.CONFLICT).json({
      msg: "User doesn't exist",
    });
    return;
  } else {
    next();
  }
}
