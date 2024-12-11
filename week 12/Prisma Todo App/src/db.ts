import { PrismaClient, User } from "@prisma/client";

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

export const createTodo = async (
  userId: number,
  title: string,
  description: string
) => {
  const res = await prisma.todos.create({
    data: {
      title,
      description,
      user: {
        connect: {
          id: userId,
        },
      },
    },
  });

  console.log("Created todo ", res);
};

export default prisma;
