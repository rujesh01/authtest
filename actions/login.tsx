"use server";

import { signIn } from "@/auth";
import { getUserByEmail } from "@/data/user";
import { sendVerificationEmail } from "@/lib/mail";
import { generateVerificationToken } from "@/lib/tokens";
import { Default_Redirect } from "@/routes";
import { LoginSchema } from "@/schemas/items";
import { error } from "console";
import { AuthError } from "next-auth";
import { z } from "zod";

export const Login = async (values: z.infer<typeof LoginSchema>) => {
  try {
    const { email, password } = LoginSchema.parse(values);

    const existingUser = await getUserByEmail(email);

if(!existingUser || !existingUser.email || !existingUser.password){
  return {error: "email does not exist!"}
}

if(!existingUser.emailVerified) {
  const verificationToken = await generateVerificationToken(existingUser.email);
  await sendVerificationEmail(
    verificationToken.email,
    verificationToken.token,
  )

  return {success: "confirmation email sent!"}
}

    await signIn("credentials", {
      email,
      password,
      redirectTo: Default_Redirect,
    });

  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials" };
        default:
          return { error: "Something went wrong" };
      }
    }
    throw error;
  }
};
