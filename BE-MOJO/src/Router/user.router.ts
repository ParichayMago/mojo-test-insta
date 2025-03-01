import express, { Express, Router } from "express";
import { handleAuth, testing, userInfo } from "../Controller/user.controller";


const userRouter:Router = express.Router();

userRouter.get('/', testing);

// Get Access Token
userRouter.post('/handleAuth', handleAuth);

// get user info
userRouter.get('/userInfo/:token', userInfo);

export default userRouter;
