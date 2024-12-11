import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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

export default prisma;
