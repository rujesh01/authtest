import z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({ message: "enter your email" }),
  password: z.string().min(2, { message: "Enter your password" }),
});



export const RegisterSchema = z.object({
  email: z.string().email({ message: "enter your email" }),
  password: z.string().min(2, { message: "Enter your password" }),
  name: z.string().min(2, {message: "Enter your user name"})
});