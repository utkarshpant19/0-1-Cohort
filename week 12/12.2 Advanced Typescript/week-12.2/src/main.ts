interface User {
  name: string;
  age: number;
  email: string;
  password: string;
}

// From User ,pic the properties to display
type profileDisplay = Pick<User, "name" | "email">;

// Partial marks every single property as optional
type UpdatedProps = Partial<profileDisplay>;

const displayUserProfile = (user: profileDisplay) => {
  console.log(`Username: ${user.name} , Email: ${user.email}`);
};

const updateUser = (updatedProps: UpdatedProps) => {};

updateUser({ name: "Novak" });
