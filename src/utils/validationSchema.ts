import { PassThrough } from "stream";
import { z } from "zod";

// Article Validation
export const createArticleSchema = z.object({
  title: z
    .string({
      required_error: "Title is required",
      invalid_type_error: "Title is invalid, should be a string",
    })
    .min(2)
    .max(25),
  body: z
    .string({
      required_error: "Body is required",
      invalid_type_error: "Body is invalid, should be a string",
    })
    .min(10, {
      message: "String must be at least 10 characters",
    })
    .max(25),
});

// Article Validation
export const registerSchema = z.object({
  username: z.string().min(3).max(20),
  email: z.string().min(4).max(30).email(),
  password: z.string().min(6),
});
