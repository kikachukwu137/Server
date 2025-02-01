import { Router } from "express";
import * as userController from '../controllers/uses.controllers.js';
import { isAdmin } from "../middlewares/admin.middleware.js";
const userRoute = Router()
// global



userRoute.get("/", userController.getAllUser);
userRoute.get("/:userId", userController.getOneUser);


userRoute.delete("/:userId",isAdmin, userController.deleteUser)

export default userRoute;