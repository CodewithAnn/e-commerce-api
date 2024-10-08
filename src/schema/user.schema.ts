import { z } from "zod";

export const SignUpSchema = z.object({
  name: z.string().min(2, "Name should have at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(6),
});
