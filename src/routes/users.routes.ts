import { Router } from "express";
import multer from "multer";
import upload from "../config/upload";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";
import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";
import { UpdateUserAvatarController } from "../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController";


const userRouter = Router();

const uploadAvatar = multer(upload.upload("./tmp/avatar"))

const createusercontroller = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

userRouter.post("/", createusercontroller.handle)

userRouter.patch("/avatar", ensureAuthenticated,uploadAvatar.single("avatar"), updateUserAvatarController.handle)

export { userRouter }