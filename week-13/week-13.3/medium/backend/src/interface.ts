export interface User {
  username?: string;
  email: string;
  password: string;
}

export interface Blog {
  title: string;
  content: string;
  authorId?: string;
  author?: User;
  published?: boolean;
}
