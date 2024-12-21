import { PrismaClient } from "@prisma/client";
import prisma from "./db";

export const createUser = async (
  username: string,
  email: string,
  password: string
) => {
  const response = await prisma.user.create({
    data: {
      username,
      email,
      password,
    },
  });

  console.log("Created User ", response);
};

export const getUser = async (userId: number) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  return user;
};
