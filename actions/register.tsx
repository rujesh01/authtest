"use server";

import { z } from "zod";
import { RegisterSchema } from "@/schemas/items";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validateFields = await RegisterSchema.safeParse(values);
  if (!validateFields.success) {
    return { error: "Invalid fields" };
  }

  const { email, name, password } = validateFields.data;

  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    return { error: "user already exist" };
  }
  const hashPassword = await bcrypt.hash(password, 10);

  await db.user.create({
    data: {
      email,
      password: hashPassword,
      name,
    },
  });

  const verificationToken = await generateVerificationToken(email);

  await sendVerificationEmail(verificationToken.email, verificationToken.token);

  return { success: "verification token" };
};
