"use server";

import { CreateUserParams } from "@/types";
import { connectToDatabase } from "../database";
import { handleError } from "../utils";

export const createUser = async (user: CreateUserParams) => {
  try {
    await connectToDatabase();
    const newUser = await User.create(user);

    return JSON.parse(newUser);
  } catch (error) {
    handleError(error);
  }
};
