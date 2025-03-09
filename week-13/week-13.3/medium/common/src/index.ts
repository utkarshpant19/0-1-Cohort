import { z } from "zod";

export const signUpSchema = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
});

export const signInSchema = z.object({
  username: z.string().optional(),
  email: z.string().email(),
  password: z.string().min(6),
});

export const createBlogSchema = z.object({
  title: z.string().min(1),
  content: z.string(),
  authorId: z.string(),
});

export const updateBlogSchema = z.object({
  id: z.string(),
  title: z.string().min(1).optional(),
  content: z.string().optional(),
});

export type SignupSchema = z.infer<typeof signUpSchema>;
export type SignInSchema = z.infer<typeof signInSchema>;
export type CreateBlogSchema = z.infer<typeof createBlogSchema>;
export type UpdateBlogSchema = z.infer<typeof updateBlogSchema>;
