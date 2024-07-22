/** @format */

import { Router, Request, Response, NextFunction } from "express";
import { createUser, getUsers } from "../services/user.service";

const userRouter = Router();

userRouter.get("/", getUsers);

userRouter.post("/", createUser);

export default userRouter;
