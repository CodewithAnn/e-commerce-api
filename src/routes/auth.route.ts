import { Router } from "express";
import { register } from "../controllers/auth.controller.js";

const authRouter: Router = Router();

authRouter.route("/signup").post(register);

export default authRouter;
