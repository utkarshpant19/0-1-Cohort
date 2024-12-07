export interface User {
  name: string;
  age: number;
}

type Users = {
  [key: string]: User;
};

const users: Users = {
  p1: {
    name: "Roger",
    age: 43,
  },
  p2: {
    name: "Rafa",
    age: 38,
  },
};
