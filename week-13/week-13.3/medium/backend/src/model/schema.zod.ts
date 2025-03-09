import z from "zod";

export const userSchema = z.object({
  email: z.string().email(),
  username: z.string().min(6),
  password: z.string().min(6),
});

export const blogSchema = z.object({
  title: z.string().min(1),
  content: z.string(),
  authorId: z.string().optional(),
});
