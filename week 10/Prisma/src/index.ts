import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
// use `prisma` in your application to read and write data in your DB

// This is similar to
/* import mongoose from "mongoose";
 mongoose.connect();

 */

// Add a user in Users Table
async function insertUser(
  username: string,
  password: string,
  firstName: string,
  lastName: string
) {
  const user = await prisma.user.create({
    data: {
      username,
      password,
      firstName,
      lastName,
    },
    select: {
      id: true,
      username: true,
    },
  });

  console.log(user);
}

// insertUser("utkarsh_pant1", "utkarsh@123", "Utkarsh", "Pant");

// 2. Update a User in User table

interface UpdateName {
  firstName: string;
  lastName: string;
}
// Comment by Branch 2

async function updateUser(username: string, updateParams: UpdateName) {
  const user = await prisma.user.update({
    where: {
      username,
    },
    data: {
      firstName: updateParams.firstName,
      lastName: updateParams.lastName,
    },
  });

  console.log("Updated user ", user);
}

updateUser("utkarsh_pant", { firstName: "Roger", lastName: "Federer" });

// 3. Get user details

async function getUser(username: string) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        username,
      },
    });

    if (user) console.log("Found user ", user);
    else console.log("No user found");
  } catch (err) {
    console.log("Error in finding user ", err);
  }
}

getUser("utkarsh_pant35235");
