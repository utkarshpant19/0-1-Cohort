import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function insertUser(
  username: string,
  email: string,
  firstName: string,
  lastName: string,
  password: string
) {
  const response = await prisma.users.create({
    data: {
      username,
      email,
      firstName,
      lastName,
      password,
    },
  });

  console.log("Response ", response);
}

async function addTodo(title: string, description: string, userId: number) {
  const todoAdded = await prisma.todos.create({
    data: {
      title,
      description,
      user_id: userId,
    },
  });

  console.log(todoAdded);
}

async function getTodos(userId: number) {
  const todos = await prisma.todos.findMany({
    where: {
      user_id: userId,
    },
  });

  console.log(todos);
}

async function getTodosAndUserDetails(userId: number) {
  const response = await prisma.todos.findMany({
    where: {
      user_id: userId,
    },
    select: {
      title: true,
      description: true,
      isDone: true,
      user: true,
    },
  });

  console.log(response);
}

addTodo("Wake up at 6 AM", "Wake up and go for Run", 10);
// getTodos(10);
// getTodosAndUserDetails(10);

// insertUser(
//   "utkarsh_pant",
//   "utkarsh@gmail.com",
//   "utkarsh",
//   "pant",
//   "Utkarhs@123"
// );
