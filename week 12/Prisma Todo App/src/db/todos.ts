import prisma from "./db";
import { Todos } from "@prisma/client";

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

export const getAllTodos = async (userId: number) => {
  // Get all todos of a user

  await prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: { todos: true },
  });
};

export const updateTodo = async (id: number, data: Partial<Todos>) => {
  return prisma.todos.update({
    where: {
      id,
    },
    data,
  });
};

export const deleteTodo = async (id: number) => {};
