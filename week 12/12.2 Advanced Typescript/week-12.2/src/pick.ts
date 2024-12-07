export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  age: number;
}

// The problem with this approach we can have so many paramters in a function call
// function updateUser(name: string, age: number, password: string){

// }

// Approach 2: The problem with this approach is , we have many repeated properties from interface User,
// Instead of creating new interface, pick properties from exisitng interface
// export interface UpdateProps {
//     name: string,
//     password: string,
//     age: number
// }

type UpdateProps = Pick<User, "name" | "password" | "age">;

function updateUser(updatedUser: UpdateProps) {}

updateUser({ name: "Roger", password: "123456", age: 45 });
