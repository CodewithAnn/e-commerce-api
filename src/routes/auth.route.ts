import { Router } from "express";
import { login } from "../controllers/auth.controller.js";

const authRouter: Router = Router();

authRouter.route("/login").get(login);

export default authRouter;
