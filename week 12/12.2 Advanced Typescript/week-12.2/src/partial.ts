export interface User {
  name: string;
  age: number;
  email: string;
  password: string;
}

// Pick properties which are allowed to be updated

export type UpdateProps = Pick<User, "name" | "age" | "password">;

// Partial update any user properties
export type UpdatePropsOptional = Partial<UpdateProps>;

function updateUser(updateProps: UpdatePropsOptional) {}

updateUser({ name: "Roger" });
