import prisma from "./db";

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
